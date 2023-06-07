import { useEffect, useState } from "react";

const useClass =  ()=> {
    const [classes, setClasses] = useState([]);
    
    useEffect(() => {
        fetch(`${import.meta.env.VITE_apiUrl}/classes`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setClasses(data)
                
            })
    }, [])
    return [classes]
}

export default useClass