import { Link } from "react-router-dom";
import useClass from "../../api/useClass";
import Container from "../../component/Container/Container";
import Button from "../../component/Button/Button";
import FindUser from "../../api/FindUers";

const Classes = () => {
    const [classes] = useClass()
    const [UserByEmail] = FindUser()
    return (
        <div className="grid grid-cols-3 mt-16 gap-5">
            {
                classes.map(item => <div key={item?._id}>
                    <Container>
                        <div className={`card card-compact w-96 bg-base-100 shadow-xl ${item?.available_seats  == 0 ? 'bg-red-500' : 'bg-base-100'} `}>
                            <div className="flex h-[240px]"><img src={item.classImage} className="object-cover rounded-xl" alt={item.className} /></div>
                            <div className="card-body font-bold">
                                <h2 className="card-title">{item.className}</h2>
                                <h2 className="card-title">Instructor: {item.instructor}</h2>
                                <p>Enrolled: {item.number_of_students}</p>
                                <p>Price: ${item.price}</p>
                                <p>Available Seats: {item.available_seats}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/class/${item._id}`} className="w-full">
                                    <Button disabled={item?.available_seats  == 0 || UserByEmail.role === 'admin' || UserByEmail.role === 'teacher' ? true : false} title={"Select"}></Button></Link>
                                </div>
                            </div>
                        </div>
                    </Container>

                </div>)
            }
        </div>
    );
};

export default Classes;