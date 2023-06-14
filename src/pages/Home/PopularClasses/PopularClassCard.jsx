
import { Fade} from "react-awesome-reveal";
import Container from "../../../component/Container/Container";

const PopularClassCard = ({ item }) => {
    const {  className, available_seats, classImage,  number_of_students, price } = item;
    return (
        <Container>
            <Fade delay={1e3} >
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <div className="flex h-[240px]"><img src={classImage}  className="object-cover rounded-xl" alt={className} /></div>
                <div className="card-body font-bold">
                    <h2 className="card-title">{className}</h2>
                    <p>Enrolled: {number_of_students}</p>
                    <p>Price: ${price}</p>
                    <p>Available Seats: {available_seats}</p>
                    
                </div>
            </div>
            </Fade>
        </Container>
    );
};

export default PopularClassCard;