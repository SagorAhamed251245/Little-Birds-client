import { useLoaderData } from "react-router-dom";


const ClassDetails = () => {
    const classItem = useLoaderData();
    const { _id, className, available_seats, classImage,  number_of_students, price } = classItem;

    
    return (
        <div className="hero min-h-[600px]" style={{backgroundImage: `url(${classImage})`}} >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default ClassDetails;