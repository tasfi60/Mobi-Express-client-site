import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import AddProduct from '../Dashboard/AddProduct/AddProduct';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import './Categorydetails.css';
import Modals from './Modal/Modals';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Categorydetails = () => {
    const cdetails = useLoaderData();
    console.log(cdetails);
    const { user} = useContext(AuthContext)

    const url = "http://localhost:5000/users";

    const [alluser, setAlluser] = React.useState([]);
  
    React.useEffect(() => {
      axios.get(url).then((response) => {
          setAlluser(response.data);
      });
    }, []);

    const handlewishlist =(c,uid) =>{
           console.log(c)
           console.log(uid)
      const data = {product: c.product,
        saleprice:c.saleprice,
        condition:c.condition,
        description:c.description,
        sellercontact: c.phone,
        img: c.img,
        uid:uid
      };

      fetch('http://localhost:5000/wishlist',{
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data) 
                    toast.success('Added to Wishlist!')

                })
                .catch(error => console.error(error));
                
    

  



    }

    
    return (
        <div className='mt-5 container'>
          <div className='Font-style mt-5  container'> <h3 className='Title'> Grab Your Phone within Budget!</h3>  </div>
  { 
           
    
               cdetails.map(c => 

                
                <div className="categorydetails-section-container">
                <div className=" d-block container">
                  <div className="card mx-2 categorydetails-container mb-3">
                    <img className='category-img' src={c.img} alt=''/>
                    <div className="card-body">
                      <h5 className="card-title"><b>{c.product}</b></h5>
                      <p className="card-text">
                        <b>Sale Price: </b>{c.saleprice} <br />
                        <b>Original Price: </b>{c.mainprice}<br />
                        <b>Description: </b>{c.description}<br />
                       
                        <b>Seller Name: </b>{c.displayName}
                        {
                            alluser.map((user, i) => 

                            <>
                            {
                              user?.role === 'seller' && c?.displayName === user?.displayName?
                                  
                                      <CheckCircleOutlineRoundedIcon className='bg-primary rounded-circle fs-6 ms-1'></CheckCircleOutlineRoundedIcon> 
                                
                                  :

                                  
                                  <CheckCircleOutlineRoundedIcon className='d-none'></CheckCircleOutlineRoundedIcon> 
                                
                            }
                          
                            </>
                            )
                        }
                        <br />
                        <b>Phone: </b>{c.phone}<br />
                        <b>Location: </b>{c.location}<br />
                        <b>Condition: </b>{c.condition}<br />
                        <b>Year of Purchase: </b>{c.YearofPurchase}<br />
                        <b>Usage: </b>{c.usage}<br />
                        <b>Date: </b>{c.date}<br />
                        <Modals key={c._id} item={c.product} item1={c.saleprice} img={c.img} ></Modals>
                        <button className='btn mt-3' onClick={() => handlewishlist(c,user.uid)} >Add to Wishlist</button>
                        <ToastContainer />
                      </p>
                     
                    </div>
                  </div>
                  
                  {/* <div className="card mx-2 categorydetails-container mb-3">
                    <img className="card-img-top" src={c.img1} alt=''/>
                    <div className="card-body">
                      <h5 className="card-title"><b>{c.products2}</b></h5>
                      <p className="card-text">
                      <b>Sale Price: </b>{c.saleprice1} <br />
                        <b>Original Price: </b>{c.mainprice1}<br />
                        <b>Seller Name: </b>{c.name1}<br />
                        <b>Location: </b>{c.location1}<br />
                        <b>Usage: </b>{c.usage1}<br />
                        <b>Date: </b>{c.date1}<br />
                        <Modals key={c._id} item={c.products2} item1={c.saleprice1} img={c.img1} ></Modals>


                      </p>
                     
                    </div>
                  </div> */}
                  
                  </div>
                </div>
                
               
                

                
                )
              }
    

        
                     
        
          
        </div>
    );
};

export default Categorydetails;



