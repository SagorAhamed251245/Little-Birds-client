import ApprovedClass from "../../../api/ApprovedClass";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import ManageClassTable from "./ManageClassTable";
import DataNotFound from "../../../component/DataNotFound/DataNotFound";

const ManageClasses = () => {
    const [approvedClass] = ApprovedClass()
    
    console.log(approvedClass);

    return (
        <div className="overflow-x-auto w-full">
            <SectionTitle heading={'Pandding  Classes'}></SectionTitle>
            {
                approvedClass.length > 0 ? <> <table className="table w-[90%] mx-auto text-center font-bold">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th></th>
                            <th>Name</th>
                            <th>Seats</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            approvedClass.map((item, index) =>
                                <ManageClassTable
                                    key={item._id}
                                    item={item}
                                    index={index}
                                ></ManageClassTable>
                            )
                        }



                    </tbody>


                </table></> : <>
                <DataNotFound title={"No One Haven't Request any Class"}></DataNotFound>
                </>
            }

        </div>
    );
};

export default ManageClasses;