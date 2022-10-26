import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Courses from "../../Pages/Courses/Courses";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import EmailAndPassword from "../../Pages/Login/EmailAndPassword/EmailAndPassword";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Route404 from "../../Pages/Route404/Route404";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <PrivateRoutes><Courses></Courses></PrivateRoutes>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/emailpassword',
                element: <EmailAndPassword></EmailAndPassword>
            },
        ]
    },
    {
        path: '*',
        element: <Route404></Route404>
    }
])

export default routes;