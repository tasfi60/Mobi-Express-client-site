import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React,{useEffect,useState} from 'react';

const Checkform = ({booking}) => {

    const [cardError, setCardError] = useState();
    const [clientSecret, setClientSecret] = useState("");


    const stripe = useStripe();
    const elements = useElements();
    const {ProductPrice,email,Buyer} = booking;

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ProductPrice }),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, [ProductPrice]);


    const handleSubmit = async event =>{
        event.preventDefault();
        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
          }
          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            console.log(error);
            setCardError(error.message);
          } else {
            setCardError('');
          }
          const {paymentIntent, error: confirmError}= await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: Buyer,
                  email:email
                },
              },
            },
          );

          if(confirmError){
            setCardError(confirmError.message);
            return;
          }
          console.log(paymentIntent)

        }

        
    
    return (
        <div className='mx-auto'>
            <form onSubmit={handleSubmit} className='text-white fs-5 m-5 p-5'>
            {
        <p>Name:{Buyer}<br/>
        Price:{ProductPrice}
        </p>
       }
      <CardElement
        options={{
          style: {
            base: {
              
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      
      <button className='btn w-25 text-dark' type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
    </form>
        </div>
    );
};

export default Checkform;