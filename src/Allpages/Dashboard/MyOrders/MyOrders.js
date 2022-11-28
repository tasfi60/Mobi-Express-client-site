import React, { useContext, useEffect, useState } from 'react';
import {  useNavigate ,Link} from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import {useQuery} from '@tanstack/react-query';
import { FaUser,FaEdit,FaTrash,FaSadTear} from 'react-icons/fa';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import './MyOrders.css';


const MyOrders = () => { 
    const {user,logOut} = useContext(AuthContext);
    console.log(user);
    const [mybook, setMybooking] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    console.log(bookings);
   

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
                bookings.length?<h4 className='fs-2'>All Orders</h4> : <div className='m-5 p-5'>No Orders were made..<FaSadTear className='container'></FaSadTear></div>
            }
           </div>
           
            {
            bookings.map(r => 
                 
                
            
                 
                <div className='book-container mx-auto  my-5'>
          <div className='row g-0'>
            <div className='col-md-4 rounded-circle shadow-1-strong d-flex align-items-center justify-content-center  mx-auto my-3'>
            {
                        
                        <Image data-toggle="tooltip" title={user?.displayName} className=' rounded-circle product-pic' 
                              src={r.photo}>
                        </Image> 
                                              
              }

            </div>
            
            <div className='col-md-8'>
              <div className='card-body text'>
                <h5 className='card-title fw-bold fs-4 me-5 pe-5 mt-3 container'><small>{r.ProductName}</small></h5>
                <h6 className='fs-5 me-5 mt-3'>price: {r.ProductPrice}</h6>
                <p className='card-text me-5 pe-5 container'>location: {r.Location}</p>
                {
                    r.ProductPrice && !r.paid &&
                  <Link to={`/dashboard/Payment/${r._id}`}> <button className='btn' >Payment</button></Link> 

                }
                {
                    r.ProductPrice && r.paid &&
                    <span className='text-primary' >Paid</span>

                }
                
                
              </div>
            </div>
          </div>
        </div>
                
                
                
                
                
                
            )

        }

    
            
        </div>
    );
};

export default MyOrders;