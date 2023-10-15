import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Registration from "../components/Contact/Registration/Registration";
import Login from "../components/Contact/Login/Login";
import Events from "../components/Home/Events/Events";
import Search from "../components/Home/Search/Search";
import Donation from "../components/Home/Donation/Donation";
import Blog from "../components/Home/Blog/Blog";
import EmptyPage from "../components/EmptyPage/EmptyPage";
import Admin from "../layout/Admin";
import RegisterList from "../components/Admin/RegisterList";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Search />
            },
            {
                path: 'events',
                element: <Events />
            },
            {
                path: 'donation',
                element: <Donation />
            },
            {
                path:  'blog',
                element: <Blog />
            },
            {
                path: '*',
                element: <EmptyPage />
            }
        ]
    },
    {
        path: 'registration',
        element: <Registration />
    },
    {
        path: 'login',
        element: <Login />
    },
    {
        path: 'admin',
        element:  <Admin />,
        children: [
            {
                path: 'registerlist',
                element: <RegisterList />
            }
        ]
    }
])

export default router;