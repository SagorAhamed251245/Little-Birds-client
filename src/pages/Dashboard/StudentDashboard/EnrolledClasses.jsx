import usePaymentCart from "../../../api/usePaymentCart";

import DataNotFound from "../../../component/DataNotFound/DataNotFound";
import NumericDate from "../../../component/NumericDate/NumericDate";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";


const EnrolledClasses = () => {
  const [paymentCart] = usePaymentCart();
  console.log(paymentCart);
  const { formatDate } = NumericDate();
  return (
    <>
    <div className="overflow-x-auto w-full">
            <SectionTitle heading={`${'Enrolled Class'}`}></SectionTitle>
           {paymentCart.length> 0 ? <>
            <table className="table w-[90%] mx-auto text-center font-bold">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Seats</th>
                        <th>Date</th>
                        <th>Price</th>
                       
                        
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}

                    
                    {
                        paymentCart.map((item, index) => <>
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
                                    {item.user_email}
                                </td>
                                <td>
                                    {item.available_seats}
                                </td>
                                
                                <td>{formatDate(item?.date)}</td>
                                <td>${item.price}</td>
                               
                                
                                
                            </tr>
                        </>)
                    }



                </tbody>


            </table>
           </> : <>
           <DataNotFound title={ " You Haven't Enrolled any Class"}></DataNotFound>
          
           </>}
        </div>
</>
  )

};

export default EnrolledClasses;