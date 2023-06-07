import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Home = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h1>This is Home {user?.email}</h1>
        </div>
    );
};

export default Home;