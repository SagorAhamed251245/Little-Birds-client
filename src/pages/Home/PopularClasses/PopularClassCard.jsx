import { Link } from "react-router-dom";
import Button from "../../../component/Button/Button";
import Container from "../../../component/Container/Container";

const PopularClassCard = ({ item }) => {
    const { _id, className, available_seats, classImage,  number_of_students, price } = item;
    return (
        <Container>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <div className="flex h-[240px]"><img src={classImage}  className="object-cover rounded-xl" alt={className} /></div>
                <div className="card-body font-bold">
                    <h2 className="card-title">{className}</h2>
                    <p>Enrolled: {number_of_students}</p>
                    <p>Price: ${price}</p>
                    <p>Available Seats: {available_seats}</p>
                    <div className="card-actions justify-end">
                        <Link to={`class/${_id}`} className="w-full"><Button title={"Enroll Now"}></Button></Link>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default PopularClassCard;