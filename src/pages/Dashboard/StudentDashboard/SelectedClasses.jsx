
import useCart from "../../../api/useCart";
import DataNotFound from "../../../component/DataNotFound/DataNotFound";

import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import SelectedClassesTable from "./SelectedClassesTable";



const SelectedClasses = () => {

    const [cart] = useCart()
    console.log(cart);



    return (
        <div className="overflow-x-auto w-full">
            <SectionTitle heading={'My Selected Classes'}></SectionTitle>
            {
                cart.length > 0 ? <> <table className="table w-[90%] mx-auto text-center font-bold">
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
                            cart.map((item, index) =>
                                <SelectedClassesTable
                                    key={item._id}
                                    item={item}
                                    index={index}
                                ></SelectedClassesTable>
                            )
                        }



                    </tbody>


                </table></> : <>
                <DataNotFound title={"You Haven't Select any Class"}></DataNotFound>
                </>
            }

        </div>
    );
};

export default SelectedClasses;