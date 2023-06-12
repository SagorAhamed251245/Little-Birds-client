


import { toast } from "react-hot-toast";
import useAxiosSecure from "../../../api/useAxiosSecure";
import Button from "../../../component/Button/Button";


const ManageUsersTable = ({ item, index, refetch }) => {
    const [axiosSecure] = useAxiosSecure();

    const handleMakeAdmin = () => {

        
        axiosSecure.patch(`/UpdateUsers/${item.email}`, { role: 'admin' })
            .then((response) => {
                console.log(response);
                toast.success(`User is now ${'admin'} `)
                refetch();
            })
            .catch((error) => {
                console.error('Error updating user role:', error);
            });
    };

    const handleMakeInstructor = () => {
        axiosSecure.patch(`/UpdateUsers/${item.email}`, { role: 'teacher' })
            .then((response) => {
                console.log(response);
                toast.success(`User is now ${'admin'} `)
                refetch();
            })
            .catch((error) => {
                console.error('Error updating user role:', error);
            });
    };
    return (
        <tr>
            <td>{index + 1}</td>

            <td>{item.user_name}</td>
            <td>{item.email}</td>
            <td>{item.role ? item.role : 'Student'}</td>


            <td>
                <div  onClick={handleMakeAdmin}>
                    <Button disabled={item?.role === 'admin' ? true : false} title="Make Admin" />
                </div>
            </td>
            <td>
                <div onClick={handleMakeInstructor}>
                    <Button disabled={item?.role === 'teacher' ? true : false} title="Make  Instructor" />
                </div>
            </td>
        </tr>
    );
};

export default ManageUsersTable;