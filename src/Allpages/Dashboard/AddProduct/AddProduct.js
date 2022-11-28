import React, { useContext } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useToast } from 'native-base';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const AddProduct = () => {

    const navigate = useNavigate();
 

    const{user} = useContext(AuthContext);

    const handleProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const title = form.title.value;
        const CategoryId = form.categoryid.value;
        const pic = form.pic.value;
        const description = form.description.value;
        const resalePrice = form.resalePrice.value;
        const originalPrice = form.originalPrice.value;
        const PostTime = form.PostTime.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const SellerName = form.SellerName.value;
        const condition = form.condition.value;
        const YearofPurchase = form.YearofPurchase.value;
        const yearofuse = form.yearofuse.value;


        const product = {
            title: title,
            product: name,
            category_id: CategoryId,
            img: pic,
            description: description,
            saleprice: resalePrice,
            mainprice: originalPrice,
            location: location,
            date: PostTime,
            phone: phone,
            YearofPurchase: YearofPurchase,
            condition: condition,
            usage: yearofuse,
            displayName: SellerName

        }

        console.log(product);

        fetch('http://localhost:5000/category', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {

                    form.reset();
                      navigate('/dashboard/MyProduct');
                   
                }
               
               
                    
            })
            .catch(error => console.error(error));


                   


            
           
    }
    
    
    return (
        <div className='container'>

            <h2 className='Font-style'>Add Your Product here...</h2>

            <form onSubmit={handleProduct} className="d-flex flex-column justify-content-center align-items-center my-3 px-3 py-5  border shadow-lg rounded-3 mx-5 Font-style bg-secondary">

                <div className='row row-cols-1 row-cols-lg-2 gap-4'>
                <input name="SellerName" type="text" placeholder="Seller Name"  defaultValue={user?.displayName}
                disabled className="input border shadow mx-auto p-3 rounded text-white" aria-required />
                
                    <input name="phone" type="text" placeholder="Phone No" className="input border shadow mx-auto p-3 rounded" required/>

                    <input name="name" type="text" placeholder="Product Name" className="input border shadow mx-auto p-3 rounded" required/>

                    <input name="pic" type="text" placeholder="Photo URL" className="input border shadow mx-auto p-3 rounded" required/>

                    <textarea name="description" className="input border shadow mx-auto p-3 rounded w-50" placeholder="Description" required></textarea>
                    
                    <input name="YearofPurchase" type="text" placeholder="Year of Purchase" className="input border shadow mx-auto p-3 rounded" required />

                    <input name="yearofuse" type="text" placeholder="Year of Use" className="input border shadow mx-auto p-3 rounded" required />
                    
                    <label for="category" className='text-white fw-bold' >Category:</label>
                    <select id="category" name="categoryid" className="input border shadow mx-auto p-3 rounded w-50" size="3" required>
                        <option value="638074b3de4d815714295540">IPHONE</option>
                        <option value="638074b3de4d815714295541">SAMSUNG</option>
                        <option value="638074b3de4d815714295542">Xiaomi</option>
                        <option value="638074b3de4d815714295543">Pixel</option>
                    </select>

                    <label for="condition" className='text-white fw-bold'>Condition:</label>
                    <select id="condition" name="condition" className="input border shadow mx-auto p-3 rounded w-50" size="3" required>
                        <option value="Excellent">Excellent</option>
                        <option value="Good">Good</option>
                        <option value="Fair">Fair</option>
                    </select>
                    
                    <input name="resalePrice" type="text" placeholder="Resale Price" className="input border shadow mx-auto p-3 rounded" required />
                    <input name="originalPrice" type="text" placeholder="Original Price" className="input border shadow mx-auto p-3 rounded" required />
                    
                    <label for="start" className='text-white fw-bold'>Date:</label>
                    <input type="date" name="PostTime" min="2018-01-01" max="2024-12-31" placeholder="Post Time" className="input border shadow mx-auto p-3 rounded" />
                    <input name="location" type="text" placeholder="Location" className="input border shadow mx-auto p-3 rounded" required/>

                </div>
                <button className="btn px-5  mx-3 fw-bold text-dark my-3 border">Add Product</button>
                <ToastContainer />

            </form>

        </div>
    );
};

export default AddProduct;