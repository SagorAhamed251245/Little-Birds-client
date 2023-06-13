import { toast } from "react-hot-toast";
import useAxiosSecure from "../../../api/useAxiosSecure";
import Button from "../../../component/Button/Button";
import useCart from "../../../api/useCart";
import useClass from "../../../api/useClass";
import { Link } from "react-router-dom";

const SelectedClassesTable = ({ item, index }) => {
    const [, refetch] = useCart()
    
    

    const [axiosSecure] = useAxiosSecure()
    
    const { Product_id, _id, classImage, available_seats, number_of_students, className, price, user_email, } = item;

    const paymentInfo = {
        Product_id, paymentId: _id, classImage, className, price, user_email, date: new Date()

    }
   



    // delete function

    const handelDeleteItem = (id) => {
        axiosSecure.delete(`/deleteBookings/${id}`)
            .then(deleteRes => {
                console.log(deleteRes);
                toast.success('Class  Successfully deleted To Cart')
                refetch()

            })
            .catch(deleteErr => {
                console.log(deleteErr);

            });

    }
    // payment function
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
                                toast.success('Class Successfully paid');
                                refetch();
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
    return (
        <tr>
            <td>
                {index + 1}
            </td>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-24 h-24">
                        <img src={item.classImage} />
                    </div>
                </div>
            </td>
            <td>
                {item.className}
            </td>
            <td>
                {item.available_seats}

            </td>
            <td>{item?.date}</td>
            <td>${item.price}</td>
            <th>


                <div onClick={() => handelDeleteItem(_id)}>
                    <Button title={'delete'}></Button>
                </div>


            </th>
            <th>
                <Link to={`/dashboard/payment/${_id}`} state={{propsData: item}}>
                    <div>
                        
                        <Button title={'Pay'}></Button>
                    </div>
                </Link>
            </th>
        </tr>
    );
};

export default SelectedClassesTable;