import useClass from "../../../api/useClass";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import PopularClassCard from "./PopularClassCard";

const PopularClasses = () => {
    const [classes] = useClass()
    return (
        <>
        <SectionTitle heading={'Popular Classes'}></SectionTitle>
        <div className="grid grid-cols-3">
                        {
                            classes.map(item => <PopularClassCard
                            key={item?._id}
                            item={item}
                            ></PopularClassCard>)
                        }
        </div>
        </>
    );
};

export default PopularClasses;