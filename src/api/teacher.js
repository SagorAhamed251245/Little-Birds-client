import { useEffect, useState } from "react";

const Teacher = () => {
    const [teachers, setTeacher] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_apiUrl}/teachers`)
            .then(res => res.json())
            .then(data => {
                
                setTeacher(data)

            })
    }, [])
    return [teachers]
};

export default Teacher;