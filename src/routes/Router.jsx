import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Registration from "../components/Contact/Registration/Registration";
import Login from "../components/Contact/Login/Login";
import Search from "../components/Home/Search/Search";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Search />
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