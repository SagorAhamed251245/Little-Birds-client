import { toast } from "react-hot-toast";
import useAxiosSecure from "../../../api/useAxiosSecure";
import Button from "../../../component/Button/Button";
import useCart from "../../../api/useCart";

const SelectedClassesTable = ({ item, index }) => {
    const [, refetch] = useCart()

    const [axiosSecure] = useAxiosSecure()
    console.log(item);
    const { Product_id, _id, classImage, className, price, user_email, } = item;

    const paymentInfo = {
        Product_id, paymentId: _id, classImage, className, price, user_email, date: new Date()

    }

    console.log(_id);
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
        console.log('hande clicked');

        axiosSecure.post('/payments', paymentInfo)
            .then(res => {
                console.log(res);
               
                axiosSecure.delete(`/deleteBookings/${id}`)
                .then(deleteRes => {
                    console.log(deleteRes);
                    refetch()
                    
                })
                .catch(deleteErr => {
                    console.log(deleteErr);
                   
                });

                toast.success('Class  Successfully Added To Cart')
            })
            .catch(err => console.log(err))

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
                <div onClick={() => handelPaymentItem(_id)}>

                    <Button title={'Pay'}></Button>
                </div>
            </th>
        </tr>
    );
};

export default SelectedClassesTable;