import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Courses from "../../components/Courses/Courses";
import Home from "../../components/Home/Home";
import Main from "../../components/Main/Main";

export const routes = createBrowserRouter([
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
            element: <Courses></Courses>,
            loader: () => fetch("http://localhost:5000/courses")
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        }
    ]
   }
])