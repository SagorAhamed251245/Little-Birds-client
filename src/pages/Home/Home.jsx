// import { useContext } from "react";
// import { AuthContext } from "../../provider/AuthProvider";

import { Banner } from "./Banner/Banner";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructor from "./PopularInstructor/PopularInstructor";

const Home = () => {
    // const {user} = useContext(AuthContext)
    
    return (
        <div>
            <div className="flex justify-center">
            <Banner></Banner>
            </div>
            <div>
                <PopularInstructor></PopularInstructor>
            </div>
            <div>
                <PopularClasses></PopularClasses>
            </div>

        </div>
    );
};

export default Home;