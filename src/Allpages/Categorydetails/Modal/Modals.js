import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Modal.css';

const Modals = ({item,item1,img}) => {
  
  const [show, setShow] = useState(false);
  const {user} = useContext(AuthContext);
  const handleClose = () =>
  {
    setShow(false)
   
  } 
  const handleShow = () => setShow(true);

  console.log(img);

  
  
  const handleBooking = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const price = form.price.value;
    const item = form.item.value;
    const phone = form.phone.value;
    const photo = img;
    const location = form.location.value;

    const booking = {
      ProductName: item,
      photo:photo,
      ProductPrice: price,
      Location:location,
      Buyer: name,
      email,
      phone,

    }

    fetch('https://mobile-resale-server-site.vercel.app/bookings',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(booking)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.acknowledged){
                        form.reset();
                        
                          toast.success('Successfully Booked!');
                         
                      
                        setShow(false);
                       
                       

                        
                    }
                    
                })
                .catch(error => console.error(error));
                
    }

  

    

  
     
  return (
    <div className='Font-style'>
          <button className='btn mt-3' variant="primary" onClick={handleShow}>
        BOOK NOW
      </button>
      <ToastContainer />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>BOOK NOW!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleBooking}>

            <Form.Group  className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="name"
                defaultValue={user?.displayName}
                disabled
                placeholder="user name"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                defaultValue={user?.email}
                disabled
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Item</Form.Label>
              <Form.Control
                type="text"
                name="item"
                defaultValue={item}
                disabled
                placeholder="item name"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                name="price"
                defaultValue={item1}
                disabled
                placeholder="item price"
                autoFocus
              />
               </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                placeholder="Phone Number"
                autoFocus
              />
               </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Meeting Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                placeholder="location"
                autoFocus
              />
            </Form.Group>
           
            <button variant="primary" className="btn-xl fw-bold btn">Submit</button>
           
            

          </Form>
        </Modal.Body>
        <Modal.Footer>
         
          
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Modals;