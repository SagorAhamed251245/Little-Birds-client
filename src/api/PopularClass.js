import { useEffect, useState } from "react";

const PopularClass = () => {
    const [allPopularClasses, setClasses] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_apiUrl}/popularClasses`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setClasses(data)

            })
    }, [])
    return [allPopularClasses]
}

export default PopularClass