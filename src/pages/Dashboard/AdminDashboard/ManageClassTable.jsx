
import { toast } from "react-hot-toast";
import useAxiosSecure from "../../../api/useAxiosSecure";
import Button from "../../../component/Button/Button";
import NumericDate from "../../../component/NumericDate/NumericDate";
import ApprovedClass from "../../../api/ApprovedClass";




const ManageClassTable = ({ item, index }) => {

    const [, refetch] = ApprovedClass()

    const [axiosSecure] = useAxiosSecure()
    const { formatDate } = NumericDate();
    
   
    


    const handleApprovedClass = (id) => {
        delete item?._id;
        
        axiosSecure.post('/PostClasses', item)
            .then(res => {
                console.log(res);
                refetch()
                axiosSecure.delete(`/deleteClass/${id}`)
                    .then(deleteRes => {
                        console.log(deleteRes);
                       
                        
                    })
                    .catch(deleteErr => {
                        console.log(deleteErr);
                    });
                    toast.success('Successfully Approved Class')
                    
            })
            .catch(err => console.log(err));
    };

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
            <td>{item.available_seats}</td>
            <td>{formatDate(item?.uploadDate)}</td>
            <td>${item.price}</td>
            <th>
                <div onClick={()=>handleDeleteClass(item?._id)}>
                    <Button title="Delete" />
                </div>
            </th>
            <th>
                <div onClick={()=>handleApprovedClass(item?._id)}>
                    <Button title="Approve" />
                </div>
            </th>
        </tr>
    );
};

export default ManageClassTable;
