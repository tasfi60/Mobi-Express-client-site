import { createBrowserRouter,Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import './Routes.css';
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
			<p className="page-msg"> Oops, You're lost! </p>
			<button className="go-back"><Link className='btn' to="/">Go Back</Link></button>
		</div>
</div>
	</div>


          
         

       
        
            </div> 
   }
]);