
import MyAllClass from "../../../api/MyAllClass";
import DataNotFound from "../../../component/DataNotFound/DataNotFound";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import MyClassTable from "./MyClassTable";

const MyClass = () => {
    const [myAllClass, refetch]= MyAllClass()
    console.log(myAllClass);
    // const myAllClass = []

    return (
        <>
        <div className="overflow-x-auto w-full">
            <SectionTitle heading={'My  Classes'}></SectionTitle>
            {
                myAllClass.length > 0 ? <> <table className="table w-[90%] mx-auto text-center font-bold">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th></th>
                            <th>Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Seats</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th></th>
                            <th></th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            myAllClass.map((item, index) =>
                                <MyClassTable
                                    key={item._id}
                                    item={item}
                                    index={index}
                                ></MyClassTable>
                            )
                        }



                    </tbody>


                </table></> : <>
                <DataNotFound title={"No One Haven't Added any Class"}></DataNotFound>
                </>
            }

        </div>
        </>
    );
};

export default MyClass;