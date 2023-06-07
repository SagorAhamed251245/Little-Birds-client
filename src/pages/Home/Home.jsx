// import { useContext } from "react";
// import { AuthContext } from "../../provider/AuthProvider";
import useClass from "../../api/useClass";
import { Banner } from "./Banner/Banner";

const Home = () => {
    // const {user} = useContext(AuthContext)
    const [classes] = useClass()
    return (
        <div>
            <div className="flex justify-center">
            <Banner></Banner>
            </div>
            <div>
                {classes.length}
            </div>

        </div>
    );
};

export default Home;