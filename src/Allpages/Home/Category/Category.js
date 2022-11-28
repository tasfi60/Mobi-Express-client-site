import {React,useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {useQuery} from '@tanstack/react-query';
import './Category.css';


const Category = () => {

    // const[category,setCategory] = useState([]);

    const navigate = useNavigate();

    const{data:category, isLoading} = useQuery({
       queryKey: ['category'],
       queryFn: () => fetch('https://mobile-resale-server-site.vercel.app/category')
       .then(res => res.json())
    })

    if (isLoading) {
      return <span>Loading...</span>
    }
    

    // useEffect(()=>{
    //     fetch('https://mobile-resale-server-site.vercel.app/category')
    //     .then(res => res.json())
    //     .then(data => setCategory(data));
    // },[])
    
  

    function handleNavigate(id) {
        navigate(`/category/${id}`);
    }

    
    
    return (
        <div className='Font-style mt-5'> <h3>Explore All Categories</h3>
        <div className='mt-5 category-section-container container'>
        {
               category.map(c => 
                  
                <div onClick={() => handleNavigate(c._id)} class="card-deck category-section-container mb-5 ">
                <div class="card-group">
                  <div class="card mx-2 category-container">
                    <img class="card-img-top" src={c.logo} alt=''/>
                    <div class="card-body">
                      <h5 class="card-title">{c.name}</h5>
                      <p class="card-text">{c.title}</p>
                     
                    </div>
                  </div>
                  
                  </div>
                </div>
                
                )

        }
                       
        
          
        </div>
    </div>
        
       
    );
};

export default Category;