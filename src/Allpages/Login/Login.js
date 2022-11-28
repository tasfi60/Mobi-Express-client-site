import React, { useContext } from 'react';
import { Container,Row,Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate,useLocation } from 'react-router-dom';
import Logo from '../../images/login.jpg';
import {MDBIcon} from 'mdb-react-ui-kit';
import { FaGoogle, FaGithub, FaEnvelope, FaLock, FaUser, FaCameraRetro } from "react-icons/fa";
import './Login.css';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Spinner from 'react-bootstrap/Spinner';

const Login = () => {

    const {providerLogin,signIn,setLoading,setUser,loading} = useContext(AuthContext);
    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const [error , setError] = useState('') ;
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    

    if(loading){
        return <Spinner animation='border' variant='primary'/>
    }



    const handleGithubSignIn = () =>{

      providerLogin(githubProvider)
      .then(result =>{
          const user = result.user;
          console.log(user);
          setUser(user);
          navigate(from, {replace:true});

      })
      .catch(error => console.error(error))

  }


    

    const handleGoogleSignIn = () =>{

        const usertype = "Buyer";

        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
            saveUser(user,usertype)
            setUser(user);
            navigate(from, {replace:true});

        })
        .catch(error => console.error(error))

    }


   
    const handleSubmit = event => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

      signIn(email, password)
          .then(result => {
              const user = result.user;
              setUser(user);
              console.log(user);
              form.reset();
              setError('');

              // const currentUser = {
              //   email: user.email
              // }

              // console.log(currentUser);

              // fetch('https://food-app-server.vercel.app/jwt',{
              //   method: 'POST',
              //   headers:{
              //       'content-type': 'application/json'
              //   },
              //   body: JSON.stringify(currentUser)
              // })
              // .then(res => res.json())
              // .then(data =>{
              //   console.log(data);
              //   localStorage.setItem('cheffytoken',data.token);
                
              // });
              
              navigate(from, {replace: true}); 
         })
          .catch(error => {
              console.error(error)
              setError(error.message);
          })
          .finally(() => {
              setLoading(false);
              
          })
  }

  const saveUser = (user,usertype) =>{

  const{email,displayName,photoURL} = user;
  const userinfo = {email,displayName,photoURL,usertype}
  fetch('https://mobile-resale-server-site.vercel.app/users',{
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(userinfo)
      })
          .then(res => res.json())
          .then(data => {
              console.log(data)
              navigate('/');
              // if(data.acknowledged){
              //     form.reset();
              //     setShow(false);
              //    toast('argvergaerg')
                  
              // }
          })
          .catch(error => console.error(error));
        }


    return (
        <Container fluid className="p-2 my-5 font-family container">

            <Row>
  
              <Col col='10' md='6'>
                <img className='login-img'
                 alt="logo"
                 src={Logo}
                 />
              </Col>

             <Col col='4' md='6'>

      <div className='login-form'>
        <form onSubmit={handleSubmit} md='10' lg='6' className=' order-2 order-lg-1 d-flex flex-column align-items-center'>

          <div className="d-flex flex-row align-items-center mb-4 mt-5">
            <MDBIcon fas icon="envelope me-3" size='lg'/>
            <input type="email"className="form-control"  name='email'placeholder="Enter email" required/>
          </div>

          <div className="d-flex flex-row align-items-center mb-4">
            <MDBIcon fas icon="lock me-3" size='lg'/>
            <input type="password" className="form-control" name='password' placeholder="Enter password" required/>
          </div>

          <button className='mb-4 w-50 btn' size='lg'>Log in</button>
            <p className='text-danger'>{error}</p>

          <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0 me-3">Don't have an account?</p>
               <Link to='/Register'><Button variant="info">Create Now</Button></Link>
            </div>
  
            {/* <Button className="mb-4 w-50" size="lg">Sign in</Button> */}
           
        </form>



        <div className="divider d-flex align-items-center my-2">
              <p className="text-center fw-bold mx-5 px-5 mb-0">OR</p>
            </div>
  
            <Button className="mb-4 btncontainer" onClick={handleGoogleSignIn} size="lg" >
              <FaGoogle className='me-2 mb-1'></FaGoogle>
              Continue with Google
             </Button> 
        </div>
           
         </Col>
  
       </Row>
  
          

</Container>
        
        
    );
};

export default Login;





// const handleGoogleSignIn = () =>{

//   const usertype = "Buyer";

//     providerLogin(googleProvider)
//     .then(result =>{
//         const user = result.user;
//         console.log(user);
//         saveUser(user,usertype)
//         setUser(user);
//         navigate(from, {replace:true});

//     })
//     .catch(error => console.error(error))

// }


// const saveUser = (user,usertype) =>{

//   const{email,displayName,photoURL} = user;
//   const userinfo = {email,displayName,photoURL,usertype}
//   fetch('https://mobile-resale-server-site.vercel.app/users',{
//           method: 'POST',
//           headers: {
//               'content-type': 'application/json'
//           },
//           body: JSON.stringify(userinfo)
//       })
//           .then(res => res.json())
//           .then(data => {
//               console.log(data)
//               navigate('/');
//               // if(data.acknowledged){
//               //     form.reset();
//               //     setShow(false);
//               //    toast('argvergaerg')
                  
//               // }
//           })
//           .catch(error => console.error(error));
//         }
