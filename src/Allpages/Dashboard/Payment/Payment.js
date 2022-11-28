import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {useQuery} from '@tanstack/react-query';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Checkform from '../Dashboard/Checkform';
import './Payment.css';

const stripePromise = loadStripe('pk_test_51M95RRCGJ92yXcF7WCWtQ8CfOXlEMkX6HRrB8dDrHfOuyCREiW8JtoV9LmSY9cpZ6XRibpsKYQLCu1Jfuw6NoAPY00GWgVtMds');

const Payment = () => {

    const booking = useLoaderData();
    console.log(booking);
      
    
    return (
        <div className='container w-50 my-5 Font-style border bg-light '>

<div className='container mt-2 '>

   <h2>Payment of {booking.ProductName}</h2>



 </div>
        <div className='w-75 my-5 bg-secondary pay-container rounded'>
        <Elements stripe={stripePromise}>
      <Checkform booking={booking} />
    </Elements>

        </div>
        
        </div>
            
    
    );
};

export default Payment;