import { Outlet } from "react-router-dom";
import Navigation from "../components/Home/Navigation/Navigation";

const Main = () => {
    return (
        <div>
            <Navigation />
            <Outlet />
        </div>
    );
};

export default Main;