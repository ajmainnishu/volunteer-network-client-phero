import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import Registration from "../components/Contact/Registration/Registration";
import Login from "../components/Contact/Login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    },
    {
        path: 'registration',
        element: <Registration />
    },
    {
        path: 'login',
        element:  <Login />
    }
])

export default router;