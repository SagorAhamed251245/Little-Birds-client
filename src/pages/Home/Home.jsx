// import { useContext } from "react";
// import { AuthContext } from "../../provider/AuthProvider";
import { Banner } from "./Banner/Banner";

const Home = () => {
    // const {user} = useContext(AuthContext)
    return (
        <div>
            <div className="flex justify-center">
            <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;