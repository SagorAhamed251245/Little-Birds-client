
import { toast } from "react-hot-toast";
import useAxiosSecure from "../../../api/useAxiosSecure";
import Button from "../../../component/Button/Button";
import NumericDate from "../../../component/NumericDate/NumericDate";

import { useEffect, useState } from "react";

import ApplyFeedback from "../../../shared/FeedBack/ApplyFeedback";
import { ApprovedClass } from "../../../api/ApprovedClass";




const ManageClassTable = ({ item, index }) => {

    const [disabled, setDisabled] = useState(false)
    const [, refetch] = ApprovedClass()

    const [axiosSecure] = useAxiosSecure()
    const { formatDate } = NumericDate();

    console.log(item);


    useEffect(() => {
        if (item.status === 'approved' || item.status === 'deny') {
            setDisabled(true)
        }
    }, [item.status])


    const handleApprovedClass = (id) => {
        delete item?._id;
        let { status } = item;
        status = 'approved';
        const updatedItem = { ...item, status: status };

        axiosSecure.post(`/PostClasses`, updatedItem)
            .then(res => {
                console.log(res);
                setDisabled(true)
                axiosSecure
                    .patch(`/UpdateStatus/${id}`, { status: status })
                    .then((response) => {
                        console.log(response);
                        // Handle success
                    })
                    .catch((error) => {
                        console.error("Error updating status:", error);
                        // Handle error
                    });
                refetch();
                // Update the status after posting the class
            })
            .catch(err => console.log(err));
    };


    const handleDenyClass = (id) => {
        axiosSecure.patch(`/UpdateStatus/${id}`, { status: 'deny' })
            .then((response) => {
                console.log(response);
                setDisabled(true)
                toast.success(`Class is  ${'Deny'} `)
                refetch();
            })
            .catch((error) => {
                console.error('Error updating user role:', error);
            });

    }

    const handleDeleteClass = (id) => {
        // Handle delete class logic
        axiosSecure.delete(`/deleteClass/${id}`)
            .then(deleteRes => {
                console.log(deleteRes);
                toast.success('Successfully Deleted')
                refetch()

            })
            .catch(deleteErr => {
                console.log(deleteErr);
            });
    };

    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-24 h-24">
                        <img src={item.classImage} alt="Class" />
                    </div>
                </div>
            </td>
            <td>{item.className}</td>
            <td>{item.instructor}</td>
            <td>{item.instructor_email}</td>
            <td>{item.available_seats}</td>
            <td>{formatDate(item?.uploadDate)}</td>
            <td>${item.price}</td>
            <td className={`uppercase ${item.status === 'pending' ? 'text-orange-500' : item.status === 'approved' ? 'text-green-500' : item.status === 'deny' ? 'text-red-500' : ''}`}>{item.status}</td>


            <td >


                <div className="my-2">
                    <div onClick={() => handleApprovedClass(item?._id)}>
                        <Button disabled={disabled} title=" Approved" />
                    </div>
                </div>

                <div>
                    <div onClick={() => handleDenyClass(item?._id)} >
                        <Button disabled={disabled} title=" Deny" />
                    </div>
                </div>
            </td>
            <td >
                <div className="my-2">
                    <div >

                        <ApplyFeedback item={item}></ApplyFeedback>
                    </div>
                </div>

                <div>
                    <div onClick={() => handleDeleteClass(item?._id)}>
                        <Button title="Delete" />
                    </div>
                </div></td>



        </tr>
    );
};

export default ManageClassTable;
