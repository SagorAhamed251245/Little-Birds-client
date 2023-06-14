import PopularClass from "../../../api/PopularClass";

import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import PopularClassCard from "./PopularClassCard";

const PopularClasses = () => {
    
    const[allPopularClasses] = PopularClass()
    return (
        <>
        <SectionTitle heading={'Popular Classes'}></SectionTitle>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 md:grid-cols-2 ">
                        {
                            allPopularClasses.map(item => <PopularClassCard
                            key={item?._id}
                            item={item}
                            ></PopularClassCard>)
                        }
        </div>
        </>
    );
};

export default PopularClasses;