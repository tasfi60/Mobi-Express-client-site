import React, { useContext, useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import {useQuery} from '@tanstack/react-query';
import { FaUser,FaEdit,FaTrash,FaSadTear} from 'react-icons/fa';
import './Wishlist.css';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';



const Wishlist = () => { 
    const {user,logOut} = useContext(AuthContext);
    console.log(user);
    const [mybook, setMybooking] = useState([]);

    const url = `https://mobile-resale-server-site.vercel.app/wishlist/${user?.uid}`;

    const { data: wishlist = [] } = useQuery({
        queryKey: ['wishlist', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    console.log(wishlist);
   

   const handleDelete = r =>{
         
       const agree = window.confirm(`Are you sure you want to delete?`)
      
        
       if(agree){
           fetch(`https://food-app-server.vercel.app/review/${r}`,{
               method: 'DELETE'

           })
           .then(res => res.json())
           .then(data => 
               {
                   if(data.deletedCount > 0)
                   {
                       const remainingbook = mybook.filter(rev => rev._id !== r);
                       setMybooking(remainingbook);
                       alert('Deletation Successful!');
                   }
               }
               )

       }
   }
    return (
        <div>
             <div className='m-5 p-5 fs-2 Service-title-container Font-style'>
            {
                wishlist.length?<h4 className='fs-2 bg-dark w-50 mx-auto text-white rounded shadow p-2'>Wishlists </h4> : <div className='m-5 p-5'>No wishlist were made..<FaSadTear className='container'></FaSadTear></div>
            }
           </div>
           
            {
            wishlist.map(r => 
                 
                
            
                 
                <div className='list-container mx-auto  my-5 w-100 container'>
          <div className='row g-0'>
            <div className='col-md-4 rounded-circle shadow-1-strong d-flex align-items-center justify-content-center  mx-auto my-3'>
            {
                       
                        <Image data-toggle="tooltip" title={user?.displayName} className=' rounded-circle product-pic mb-5' 
                              src={r.img}>
                        </Image> 
            }

            </div>
            
            <div className='col-md-8 title '>
              <div className='card-body text'>
                <h5 className='card-title fw-bold fs-4 me-5 pe-5 mt-3 container'><small>{r.product}</small></h5>
                <small>
                <h6 className='fs-5 me-5 mt-3'>price: {r.saleprice}</h6>
                <p className='card-text me-5 pe-5 container'>description: {r.description}</p>
                <p className='card-text me-5 pe-5 container'>condition: {r.condition}</p>
                <p className='card-text me-5 pe-5 container'>sellercontact: {r.sellercontact}</p>
                </small>
                
              </div>
              <button className='pay-btn container w-25' >Payment</button>
            </div>
            
          </div>
        </div>
                
                
                
                
                
                
            )

        }

    
            
        </div>
    );
};

export default Wishlist;