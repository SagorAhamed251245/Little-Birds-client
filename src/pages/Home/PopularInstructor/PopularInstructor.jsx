import AllPopularInstructor from "../../../api/AllPopularInstructor";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import PopularInstructorCard from "./PopularInstructorCard";


const PopularInstructor = () => {
    const [allPopularInstructor]= AllPopularInstructor()
    return (
        <>
        <SectionTitle heading={'Popular Instructor'}></SectionTitle>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 md:grid-cols-2 ">
                        {
                            allPopularInstructor.map(item => <PopularInstructorCard
                            key={item?._id}
                            item={item}
                            ></PopularInstructorCard>)
                        }
        </div>
        </>
    );
};

export default PopularInstructor;