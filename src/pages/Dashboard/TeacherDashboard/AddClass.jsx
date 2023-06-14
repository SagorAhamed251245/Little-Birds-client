
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../api/useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { toast } from 'react-hot-toast';


const AddClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors } , reset } = useForm();

    const onSubmit = (data) => {
        const { price, number_of_students,
            available_seats } = data


        const AddClassData = {
            ...data, 
            price: parseFloat(price),
            available_seats: parseInt(available_seats), 
            number_of_students: parseInt(number_of_students),
            uploadDate: new Date(),
            status: 'pending'

        };



        axiosSecure.post(`/paddingClass`, AddClassData)
            .then((response) => {
                console.log('Class added successfully!', response);
                
                toast.success('Class Add successfully Waiting for Admin Approval')
                reset()
                
                
            })
            .catch((error) => {
                console.error('Error adding class:', error);
            });
            
    };

    return (
        <>
            <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center overflow-hidden"  >
                <div className="container max-w-screen-lg mx-auto text-white">
                    <div>


                        <div className="bg-black bg-opacity-50 rounded shadow-lg p-4 px-4 md:p-8 mb-6 bg-blend-overlay    " style={{

                            backgroundImage:
                                "url('https://www.thesprucecrafts.com/thmb/rORk4zptd3qZlX28RAIR7rzW6wk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1147542801-ad3e219d734547049a72b970cc4c1bae.jpg')",
                        }}>
                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 " >


                                <div className="lg:col-span-2">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="md:col-span-5">
                                            <label htmlFor="class_image">Class Image</label>
                                            <input
                                                type="text"
                                                id="class_image"
                                                className={`h-10 bg-transparent border mt-1 rounded px-4 w-full bg-gray-50 ${errors.classImage ? 'border-red-500' : ''}`}
                                                {...register('classImage', { required: true })}
                                            />
                                            {errors.classImage && <span className="text-red-500">Class Image is required</span>}
                                        </div>

                                        <div className="md:col-span-5">
                                            <label htmlFor="class_name">Class Name</label>
                                            <input
                                                type="text"
                                                id="class_name"
                                                className={`bg-transparent h-10 border mt-1 rounded px-4 w-full bg-gray-50 ${errors.className ? 'border-red-500' : ''}`}
                                                {...register('className', { required: true })}
                                            />
                                            {errors.className && <span className="text-red-500">Class Name is required</span>}
                                        </div>

                                        <div className="md:col-span-5">
                                            <label htmlFor="instructor">Instructor</label>
                                            <input
                                                type="text"
                                                id="instructor"
                                                className={`bg-transparent h-10 border mt-1 rounded px-4 w-full bg-gray-50 ${errors.instructor ? 'border-red-500' : ''}`}
                                                value={user?.displayName}
                                                {...register('instructor', { required: true })}
                                            />
                                            {errors.instructor && <span className="text-red-500">Instructor is required</span>}
                                        </div>

                                        <div className="md:col-span-5">
                                            <label htmlFor="instructor_email">Instructor Email</label>
                                            <input
                                                type="text"
                                                id="instructor_email"
                                                className={`bg-transparent h-10 border mt-1 rounded px-4 w-full bg-gray-50 ${errors.instructorEmail ? 'border-red-500' : ''}`}
                                                value={user?.email}
                                                {...register('instructor_email', { required: true })}
                                            />
                                            {errors.instructorEmail && <span className="text-red-500">Instructor Email is required</span>}
                                        </div>

                                        <div className="md:col-span-5 hidden">
                                            <label htmlFor="instructor_image">Instructor Image</label>
                                            <input
                                                type="text"
                                                id="instructor_image"
                                                className={`bg-transparent h-10 border mt-1 rounded px-4 w-full bg-gray-50 ${errors.instructorImage ? 'border-red-500' : ''}`}
                                                value={user?.photoURL}
                                                {...register('instructor_image', { required: true })}
                                            />
                                            {errors.instructorImage && <span className="text-red-500">Instructor Image is required</span>}
                                        </div>

                                        <div className="md:col-span-5">
                                            <label htmlFor="available_seats">Available Seats</label>
                                            <input
                                                type="number"
                                                id="available_seats"
                                                className={`bg-transparent h-10 border mt-1 rounded px-4 w-full bg-gray-50 ${errors.availableSeats ? 'border-red-500' : ''}`}
                                                {...register('available_seats', { required: true })}
                                            />
                                            {errors.availableSeats && <span className="text-red-500">Available Seats is required</span>}
                                        </div>

                                        <div className="md:col-span-5">
                                            <label htmlFor="price">Price</label>
                                            <input
                                                type="text"
                                                id="price"
                                                className={`bg-transparent h-10 border mt-1 rounded px-4 w-full bg-gray-50 ${errors.price ? 'border-red-500' : ''}`}
                                                {...register('price', { required: true }, )}
                                            />
                                            {errors.price && <span className="text-red-500">Price is required</span>}
                                        </div>

                                        <div className="md:col-span-5 hidden">
                                            <label htmlFor="number_of_students">Number of Students</label>
                                            <input
                                                type="number"
                                                id="number_of_students"
                                                className={`bg-transparent h-10 border mt-1 rounded px-4 w-full bg-gray-50 ${errors.numberOfStudents ? 'border-red-500' : ''}`}
                                                value={0}
                                                {...register('number_of_students', { required: true })}
                                            />
                                            {errors.numberOfStudents && <span className="text-red-500">Number of Students is required</span>}
                                        </div>

                                        <div className="md:col-span-5">
                                            <label htmlFor="description">Description</label>
                                            <textarea
                                                id="description"
                                                className={`bg-transparent h-20 border mt-1 rounded px-4 w-full bg-gray-50 ${errors.description ? 'border-red-500' : ''}`}
                                                {...register('description', { required: true })}
                                            ></textarea>
                                            {errors.description && <span className="text-red-500">Description is required</span>}
                                        </div>

                                        <div className="md:col-span-5 text-right">
                                            <div className="inline-flex items-end">
                                                <button
                                                    type="submit"
                                                    className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
                                                >
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddClass;
