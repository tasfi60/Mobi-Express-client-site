import React from 'react';
import { useQuery } from '@tanstack/react-query';
import './Advertisement.css';

const Advertisement = () => {

    const{data: product, isLoading} = useQuery({
        queryKey: ['product'],
        queryFn: () => fetch('https://mobile-resale-server-site.vercel.app/addCollection')
        .then(res => res.json())
     })

     console.log(product)

     if (isLoading) {
        return <span>Loading...</span>
      }

    return (
      <div>
         {
            product?.length?
           
            <div className='  advertise'>
            {
                 product?.length? <h3 className='Font-style mt-5 fs-2 pt-5' >Top Advertisement..</h3> : <h3 className='d-none'>none</h3>
            }
            <div className='m-5 p-5 fs-2 advertise-section-container Font-style'>
            
                
                
                {
                    product.map(c => 
     
                       
                     <div class="card-deck mb-5 ">
                     <div class="card-group">
                       <div class="card mx-2 add-section ">
                         <img class="card-img-top add-img rounded-circle" src={c.img} alt=''/>
                         <div class="card-body">
                           <h5 class="card-title">{c.product}</h5>
                           <p class="card-text"><small className='fs-5'>price: {c.saleprice}</small><br /><small className='fs-5'>condition: {c.condition}</small></p>
                           
                          
                         </div>
                       </div>
                       
                       </div>
                     </div>
                     
                     )
     
               
             }
          </div>
        </div>
             :
            <div className='d-none'></div>
            }
           </div>
             
        
    );
};

export default Advertisement;