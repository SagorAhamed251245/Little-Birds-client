import AllUser from "../../../api/AllUser";
import DataNotFound from "../../../component/DataNotFound/DataNotFound";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import ManageUsersTable from "./ManageUsersTable";

const ManageUsers = () => {
    const [allUsers, refetch] = AllUser()
    return (
        <div className="overflow-x-auto w-full">
            <SectionTitle heading={'Manage User'}></SectionTitle>
            {
                allUsers.length > 0 ? <> <table className="table w-[90%] mx-auto text-center font-bold">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            allUsers.map((item, index) =>
                                <ManageUsersTable
                                    key={item._id}
                                    item={item}
                                    index={index}
                                    refetch={refetch}
                                ></ManageUsersTable>
                            )
                        }



                    </tbody>


                </table></> : <>
                <DataNotFound title={"No User Found"}></DataNotFound>
                </>
            }

        </div>
    );
};

export default ManageUsers;