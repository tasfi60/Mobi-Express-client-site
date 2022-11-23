import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Allpages/Home/Home/Home";
import Blog from "../../Allpages/Blog/Blog";
import Login from "../../Allpages/Login/Login";
import Register from "../../Allpages/Register/Register";

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children :[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/Blog',
                element: <Blog></Blog>
            },
            {
                path:'/Login',
                element: <Login></Login>
            },
            {
                path:'/Register',
                element: <Register></Register>
            },
        ]       
    },

    { path: '*',
    element: <div><h2 className='mt-5'>404 ! This route is not found</h2></div> 
   }
]);