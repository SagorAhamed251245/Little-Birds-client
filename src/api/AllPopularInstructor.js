import { useEffect, useState } from "react";

const AllPopularInstructor = () => {
    const [allPopularInstructor, setClasses] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_apiUrl}/popular-instructors`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setClasses(data)

            })
    }, [])
    return [allPopularInstructor]
}

export default AllPopularInstructor