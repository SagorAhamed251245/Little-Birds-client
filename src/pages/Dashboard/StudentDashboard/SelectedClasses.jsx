
import useCart from "../../../api/useCart";
import Button from "../../../component/Button/Button";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";



const SelectedClasses = () => {

    const [cart] = useCart()
    console.log(cart);


    return (
        <div className="overflow-x-auto w-full">
            <SectionTitle heading={'My Selected Classes'}></SectionTitle>
            <table className="table w-[90%] mx-auto text-center font-bold">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th></th>
                        <th>Name</th>
                        <th>Seats</th>
                        <th>Price</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}

                    {
                        cart.map((item, index )=> <>
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
                                <td>${item.price}</td>
                                <th>

                                    <Button title={'delete'}></Button>

                                </th>
                                <th>
                                    <Button title={'Pay'}></Button>
                                </th>
                            </tr>
                        </>)
                    }



                </tbody>


            </table>
        </div>
    );
};

export default SelectedClasses;