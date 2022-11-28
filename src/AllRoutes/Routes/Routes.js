import { createBrowserRouter,Link } from "react-router-dom";
import errorlogo from "../../images/errbg.png";
import './Routes.css';
import Main from "../../Layout/Main";
import Home from "../../Allpages/Home/Home/Home";
import Blog from "../../Allpages/Blog/Blog";
import Login from "../../Allpages/Login/Login";
import Dashboard from "../../Allpages/Dashboard/Dashboard/Dashboard";
import MyProduct from "../../Allpages/Dashboard/MyProduct/MyProduct";
import Category from "../../Allpages/Home/Category/Category";
import Categorydetails from "../../Allpages/Categorydetails/Categorydetails";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import DashboardLayout from "../../Layout/DashboardLayout";
import MyOrders from "../../Allpages/Dashboard/MyOrders/MyOrders";
import Allseller from "../../Allpages/Dashboard/Allsellers/Allseller";
import AllBuyers from "../../Allpages/Dashboard/AllBuyers/AllBuyers";
import AddProduct from "../../Allpages/Dashboard/AddProduct/AddProduct";
import Wishlist from "../../Allpages/Dashboard/Whishlist/Wishlist";
import AdminRoute from "../AdminRoute/AdminRoute";
import SellerRoute from "../SellerRoute/SellerRoute";
import Payment from "../../Allpages/Dashboard/Payment/Payment";
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
                path:'/category/:category_id',
                loader: async ({params}) => {
                    return fetch(`https://mobile-resale-server-site.vercel.app/category/${params.category_id}`)
                     
                },
                element: <PrivateRoute><Categorydetails></Categorydetails></PrivateRoute> 
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
                element: <Register>s</Register>
            },
            

           
        ]       
    },
    {
        path:'/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            },
            {
                path:'/dashboard/Allseller',
                element:<AdminRoute><Allseller></Allseller></AdminRoute>
            },
            {
                path:'/dashboard/Allbuyer',
                element:<AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path:'/dashboard/MyOrders',
                element:<MyOrders></MyOrders>
            },
            {
                path:'/dashboard/AddProduct',
                element:<SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path:'/dashboard/MyProduct',
                element:<SellerRoute><MyProduct></MyProduct></SellerRoute>
            },
            {
                path:'/dashboard/Wishlist',
                element:<Wishlist></Wishlist>
            },
            {
                path:'/dashboard/Payment/:id',
                loader: async ({params}) => {
                    return fetch(`https://mobile-resale-server-site.vercel.app/bookings/${params.id}`)
                     
                },
                element:<Payment></Payment> 
            }
            

        ]
    },

    { path: '*',
    element: <div>

                   
<div className=" main-div mb-5">
	
	<div  className="error">
		<p className="p">4</p>
		<span className="dracula">			
			<div className="con">
				<div className="hair"></div>
				<div className="hair-r"></div>
				<div className="head"></div>
    		<div className="eye"></div>
    		<div className="eye eye-r"></div>
  			<div className="mouth"></div>
  			<div className="blod"></div>
  			<div className="blod blod2"></div>
			</div>
		</span>
		<p className="p">4</p>
		
		<div className="page-ms">
			<p className="page-msg"> <img className="errbg" src={errorlogo} alt=''/> Oops, You're lost! </p>
           
			<button className="go-back"><Link className='btn' to="/">Go Back</Link></button>
		</div>
</div>
	</div>


          
         

       
        
            </div> 
   }
]);