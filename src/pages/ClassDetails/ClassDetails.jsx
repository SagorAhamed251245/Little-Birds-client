import { Link, useLoaderData } from "react-router-dom";
import Container from "../../component/Container/Container";
import Button from "../../component/Button/Button";
import SectionTitle from "../../component/SectionTitle/SectionTitle";


const ClassDetails = () => {
  const classItem = useLoaderData();
  const {  className, available_seats, classImage,instructor_email,  instructor, instructor_image, number_of_students, price, description } = classItem;


  return (
    <>
      <div className="hero min-h-[600px]" style={{ backgroundImage: `url(${classImage})` }} >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">

        </div>
      </div>
      {/*  */}
      <SectionTitle heading={'Add To Cart'}></SectionTitle>
      <Container>
        <div className="flex my-24 h-[500px]  text-white ">
          <div className="w-1/2 flex  rounded-full">
            <img className="object-cover w-full rounded-lg " src={instructor_image} alt="" />
          </div>
          <div className="w-1/2 bg-pink-500 rounded-lg p-3 flex flex-col gap-2">
            <h1 className="mb-5 text-5xl font-bold ">{className}</h1>

            <h2 className="card-title">Instructor Name: {instructor}</h2>

            <p>Email: {instructor_email}</p>
            <p>Enrolled: {number_of_students}</p>
            <p>Price: ${price}</p>
            <p>Available Seats: {available_seats}</p>
            <p className="mb-5 w-full grow">Description: {description}</p>
            <div className="card-actions justify-end  rounded-lg border-black border ">
              <Link  className="w-full"><Button title={"Add to Cart"}></Button></Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ClassDetails;