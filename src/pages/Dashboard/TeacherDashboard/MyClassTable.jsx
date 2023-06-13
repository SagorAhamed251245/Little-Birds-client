import Button from "../../../component/Button/Button";
import NumericDate from "../../../component/NumericDate/NumericDate";
import SeeFeedback from "../../../shared/FeedBack/SeeFeedback";

const MyClassTable = ({item, index, refetch}) => {
    const { formatDate } = NumericDate()

    console.log(item);

  const   handleDeleteClass = ()=> {

  }
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
            <td>{item.number_of_students}</td>
            <td>{formatDate(item?.uploadDate)}</td>
            <td>${item.price}</td>
            <td className={`uppercase ${item.status === 'pending' ? 'text-orange-500' : item.status === 'approved' ? 'text-green-500' : item.status === 'deny' ? 'text-red-500' : ''}`}>{item.status}</td>


           
            <td >
                <div className="my-2">
                    <div >

                        <SeeFeedback item={item}></SeeFeedback>
                    </div>
                </div>

                <div>
                    <div onClick={() => handleDeleteClass(item?._id)}>
                        <Button title="Update" />
                    </div>
                </div></td>



        </tr>
    );
};

export default MyClassTable;