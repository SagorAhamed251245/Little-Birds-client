import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../api/useAxiosSecure";
import { toast } from "react-hot-toast";
import Button from "../../../component/Button/Button";
import { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./Payment/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_GateWay_Pk);
const PaymentPage = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const { disabled, setDisabled } = useState(false)

    const item = location?.state?.propsData

    const [axiosSecure] = useAxiosSecure()
    const { Product_id, _id, classImage, available_seats, number_of_students, className, price, user_email, } = item;

    const paymentInfo = {
        Product_id, paymentId: _id, classImage, className, price, user_email, date: new Date()

    }

    console.log(item);


    const handelPaymentItem = (id) => {


        axiosSecure.post('/payments', paymentInfo)
            .then(res => {
                console.log(res);

                axiosSecure.delete(`/deleteBookings/${id}`)
                    .then(deleteRes => {
                        console.log(deleteRes);
                        const updatedSeats = parseInt(available_seats) - 1;
                        const updatedStudents = parseInt(number_of_students) + 1;

                        axiosSecure.patch('/updateSomeInfo', {
                            Product_id,
                            available_seats: updatedSeats,
                            number_of_students: updatedStudents
                        })
                            .then(updateRes => {
                                console.log(updateRes);

                                navigate('/dashboard/payment-history')
                                toast.success('Class Successfully paid');

                            })
                            .catch(updateErr => {
                                console.log(updateErr);
                                toast.error('Failed to update class information');
                            });
                    })
                    .catch(deleteErr => {
                        console.log(deleteErr);
                        toast.error('Failed to delete booking');
                    });
            })
            .catch(err => console.log(err));

    }
    return (<>
        <div className="w-[95%] m-auto flex h-screen items-center">
            <div className="w-[50%] flex flex-col items-center justify-center h-[300px] border border-black bg-pink-200 text-black rounded-md shadow-lg">
                <h4 className="text-xl font-bold">Name: {className}</h4>
                <h4>Seats: {available_seats}</h4>
                <h4>Students: {number_of_students}</h4>
                <h4>Your Email: {user_email}</h4>
                <h4>Price: {price}</h4>
                <div style={{ marginTop: '5px', padding: '16px', border: '1px solid black', borderRadius: '4px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', width: '50%' }}>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm price={item.price}></CheckoutForm>
                    </Elements>
                </div>
                <div className="border border-black w-[50%] mt-16 rounded-lg" onClick={() => handelPaymentItem(_id)}>
                    <Button disabled={disabled} title={'Pay'}></Button>
                </div>
                <div></div>
            </div>
            <div className="w-[50%] flex justify-end rounded-md">
                <img
                    src={classImage}
                    className="object-cover h-[300px] rounded-md shadow-lg"
                    alt=""
                />
            </div>
        </div>


    </>

    );
};

export default PaymentPage;