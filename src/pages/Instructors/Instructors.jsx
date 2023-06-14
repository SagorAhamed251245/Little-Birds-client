import Teacher from "../../api/teacher";
import Container from "../../component/Container/Container";

const Instructors = () => {
    const [teachers] = Teacher()
    return (
        <Container>
            <div className="flex  justify-between mt-16">
                {teachers.map(teacher => <>
                    <div key={teacher._id}>

                        <div className="bg-pink-500 h-96 w-96 shadow-2xl rounded-xl text-white">
                            <div className="flex w-96  h-[200px] rounded">
                                <img src={teacher.user_image} className="w-full object-cover rounded-xl" alt="" />
                            </div>
                            <div className="text-center flex flex-col items-center mt-28">
                            <h2 className="card-title">{teacher.user_name}</h2>
                                <h2 className="card-title">Instructor: {teacher.email}</h2>
                            </div>
                        </div>


                    </div>
                </>
                )}
            </div>
        </Container>
    );
};

export default Instructors;