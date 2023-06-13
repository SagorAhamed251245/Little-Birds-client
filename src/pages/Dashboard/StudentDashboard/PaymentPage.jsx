import { useLocation } from "react-router-dom";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./Payment/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_GateWay_Pk);
const PaymentPage = () => {
    const location = useLocation();
   
   

    const item = location?.state?.propsData

    
    const {  classImage, available_seats, number_of_students, className, price, user_email, } = item;

   

    console.log(item);


    
    return (<>
        <div className="w-[95%] m-auto flex h-screen items-center">
            <div className="w-[50%] flex flex-col items-center justify-center h-[300px] border border-black bg-pink-200 text-black rounded-md shadow-lg">
                <h4 className="text-xl font-bold">Name: {className}</h4>
                <h4>Seats: {available_seats}</h4>
                <h4>Students: {number_of_students}</h4>
                <h4>Your Email: {user_email}</h4>
                <h4>Price: {price}</h4>
                <div style={{ marginTop: '5px', padding: '16px', border: '1px solid black', borderRadius: '4px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', width: '90%' }}>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm  item={item}></CheckoutForm>
                    </Elements>
                </div>
                
                
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