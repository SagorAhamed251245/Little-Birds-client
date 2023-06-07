// import { useContext } from "react";
// import { AuthContext } from "../../provider/AuthProvider";

import { Banner } from "./Banner/Banner";
import PopularClasses from "./PopularClasses/PopularClasses";

const Home = () => {
    // const {user} = useContext(AuthContext)
    
    return (
        <div>
            <div className="flex justify-center">
            <Banner></Banner>
            </div>
            
            <div>
                <PopularClasses></PopularClasses>
            </div>

        </div>
    );
};

export default Home;