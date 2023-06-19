import Container from "../../../component/Container/Container";

const PopularInstructorCard = ({item}) => {
    const { total_students, email, name, image}= item
    return (
        <Container className="relative overflow-hidden">
        <div className="card card-compact w-96 bg-base-100 shadow-2xl group overflow-hidden">
          <div className="relative overflow-hidden">
            <div className="flex h-[240px]">
              <img
                src={image}
                className="absolute inset-0 w-full h-full object-cover rounded-xl transition-transform transform group-hover:scale-110 max-h-full"
                alt={name}
              />
              <div className="absolute z-10 inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 hover:opacity-100 transition-opacity">
                <p className="text-white text-2xl font-bold opacity-100">
                 {name}
                </p>
              </div>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-opacity"></div>
          </div>
          <div className="card-body font-bold">
            <h2 className="card-title">Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Total Enrolled Student: {total_students}</p>
            
          </div>
        </div>
      </Container>
    );
};

export default PopularInstructorCard;