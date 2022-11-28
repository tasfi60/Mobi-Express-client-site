import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import {FaUser,FaIdCard,FaSignOutAlt} from 'react-icons/fa';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import axios from "axios";
import {useQuery} from '@tanstack/react-query';
import './Header.css';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Header = () => {

  

  const {user,logOut} = useContext(AuthContext);
  console.log(user)

  const url = `https://mobile-resale-server-site.vercel.app/users?email=${user?.email}`;

  const [usertypes, setUsertype] = React.useState();

  React.useEffect(() => {
    axios.get(url).then((response) => {
      
      setUsertype(response.data);
    });
  }, []);

  console.log(usertypes);

  const handleLogOut = () =>{
    logOut()
     .then( () => {})
     .catch( error => console.error(error))
  }
    return (
        <>
        {['lg'].map((expand) => (
          <Navbar key={expand} expand={expand} className="mb-3 nav-container title">
            <Container fluid>
            <img className='logo-style ms-4' src={logo} alt='' />
              <Navbar.Brand className='fw-bold fs-1 ms-4'>Mobi Express</Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Mobi Express
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-5 me-5">
                    
                    <Nav.Link className='text-uppercase' as={Link} to="/">Home</Nav.Link>
                    <Nav.Link className='text-uppercase' as={Link} to="/Blog">Blog</Nav.Link>
                    <NavDropdown className='me-5 pe-5'
                      title="More"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="#action3">About Us</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Our Policy
                      </NavDropdown.Item>
                      {/* <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item> */}
                    </NavDropdown>
                    
                   
                    {
                      user?.uid?
                      <>
                     
                       <NavLink className='mb-2'as={Link} to="/dashboard"><small>Dashboard</small></NavLink>
                       <NavLink onClick={handleLogOut} className='mx-3 logout-btn d-flex'><small>Log Out</small><FaSignOutAlt className='mt-1 ms-1'></FaSignOutAlt></NavLink>
                       <span className='mt-2 me-2'>{user?.displayName}</span>
                       
                       
                       
                       </>
                      :

                      <>
                     
                      <NavLink  className='d-flex' as={Link} to="/Register">Register<FaIdCard className='ms-2 mt-1'></FaIdCard></NavLink>   
                      <NavLink  className='ms-3' as={Link} to="/Login" >Log in</NavLink>
                      </>
                     
                    }
                    
                    {
                        user?.photoURL?
                        <img data-toggle="tooltip" title={user?.displayName} className='rounded-circle ms-3 display-img' 
                               roundedCircle
                              src={user?.photoURL} alt=''/> 
                        : <FaUser className='user-icon'></FaUser>
                      
                  }
                   
                  
{/* 
                    <Nav.Link className='text-uppercase' as={Link} to="/Login">Login</Nav.Link>
                    <Nav.Link className='text-uppercase' as={Link} to="/Register">Register</Nav.Link> */}
                  
                  </Nav>
                  {/* <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form> */}
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    );
};

export default Header;