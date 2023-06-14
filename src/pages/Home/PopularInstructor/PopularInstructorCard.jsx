import Container from "../../../component/Container/Container";

const PopularInstructorCard = ({item}) => {
    const { total_students, email, name, image}= item
    return (
        <Container>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <div className="flex h-[240px]"><img src={image}  className="object-cover rounded-xl" alt={name} /></div>
                <div className="card-body font-bold">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>email: {email}</p>
                    <p>Total Students: {total_students}</p>
                    
                </div>
            </div>
        </Container>
    );
};

export default PopularInstructorCard;