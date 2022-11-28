import React,{useContext,useState} from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { FaUser,FaLock,FaEnvelope,FaImage } from "react-icons/fa";
import { Link, useNavigate,useLocation } from 'react-router-dom';
import './Register.css';
// import { Spinner } from 'reactstrap';
// import useTitle from '../hooks/useTitle';

const Register = () => {
    // useTitle('Register')
    
    
    const [error, setError] = useState('');
    const { createUser, updateUserProfile, verifyEmail,loading,setUser } = useContext(AuthContext);
 
    // if(loading){
    //     return <Spinner animation='border' variant='primary'/>
    // }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const usertype = form.usertype.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                
                // toast.success('Please verify your email address.')
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });
    

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { saveUser(name, email, photoURL, usertype)})
            .catch(error => console.error(error));
    }

}

    const handleEmailVerification = () => {
       
           
    }

    const saveUser = (name, email, photoURL, usertype) => {
        const user = { 
            displayName: name, 
            email:email, 
            photoURL:photoURL, 
            usertype:usertype 
        };

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // if(data.acknowledged){
                //     form.reset();
                //     setShow(false);
                //    toast('argvergaerg')

                // }
            })
            .catch(error => console.error(error));

    }



  

    return (
        <div className='container form-container-reg mb-1 p-5 Font-style '>
        <form onSubmit={handleSubmit} className='form-bg p-5 form-bg w-50 container'>
            <h3>Register Here</h3>
            
            <label for="username" className='d-flex align-items-center justify-content-center'><FaUser className='me-1 mb-1'></FaUser>Username</label>
            <input type="text"  name='name' className="form-control" placeholder="Name"  required/>

            <label for="email" className='d-flex align-items-center justify-content-center'><FaEnvelope className='me-1 mb-1'></FaEnvelope>Email</label>
            <input type="email" name='email' className="form-control" placeholder="Email"  required/>
     
            <label for="password" className='d-flex align-items-center justify-content-center'><FaLock className='me-1 mb-1'></FaLock>Password</label>
            <input type="password"  name='password' className="form-control" placeholder="Password" required/>

            <label for="photo" className='d-flex align-items-center justify-content-center'><FaImage className='me-1 mb-1'></FaImage>Photo URL</label>
            <input type="text"  name='photoURL' className="form-control" placeholder="Photo URL" required/><br/>

            <div class="form-check container bg-light w-25 rounded">
            <div class="form-check">
                             <input class="form-check-input" type="radio" name="usertype" id="exampleRadios1" value="Buyer" checked/>
                             <label class="form-check-label" for="exampleRadios1">
                             Buyer
                             </label>
                           </div>
                           <div class="form-check">
                             <input class="form-check-input" type="radio" name="usertype" id="exampleRadios2" value="seller"/>
                             <label class="form-check-label" for="exampleRadios2">
                               seller
                             </label>
                           </div>
             </div>
     
            <button className='btn fs-6 mt-2' type="submit">Sign Up</button>
            <p className='text-danger'>{error}</p>
    
            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                  <p className="mb-0 me-3 mt-3">Already have an account?</p>
                   <Link to='/Login'><button variant="info" className=' mt-3 btn'>Log in</button></Link>
                </div>
        </form>
        </div>
    );
};

export default Register;