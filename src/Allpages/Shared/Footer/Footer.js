import React from 'react';
// import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logo from '../../../images/logo.png';
import { FaFacebook,FaInstagram,FaYoutube,FaCity,FaTwitter,FaPhone,FaEnvelope } from "react-icons/fa";
import './Footer.css'


const Footer = () => (

    <div className='mt-5 footer-container'>

        <footer className='text-center text-lg-start text-dark'>

            <div className='container p-4'>

                <div className='row my-4'>

                    <div className='col-lg-3 col-md-12 mb-4 mb-md-0'>

                        <div className='rounded-circle bg-light shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto foot-img'>
                            <img src={logo} height="120" alt=""
                                loading="lazy" />
                        </div>

                        <p className='text-center'>Get the best from here</p>

                        <ul className='list-unstyled d-flex flex-row justify-content-center'>
                            <li>
                                <a className='footer-icon' href='https://www.facebook.com'>
                                    <FaFacebook></FaFacebook>
                                </a>
                            </li>
                            <li>
                                <a className='footer-icon' href='https://www.instagram.com/cheffythings__'>
                                    {/* <i className='fab fa-instagram'></i> */}
                                    <FaInstagram></FaInstagram>
                                </a>
                            </li>
                            <li>
                                <a className='footer-icon' href='https://www.youtube.com'>
                                    <FaYoutube></FaYoutube>
                                </a>
                            </li>
                    
                            <li>
                                <a className='footer-icon' href='https://www.twitter.com'>
                                    <FaTwitter></FaTwitter>
                                </a>
                            </li>
                        </ul>

                    </div>

                    <div className='col-lg-3 col-md-12 mb-4 mb-md-0'>
                        <h5 className='mb-3 ms-3 mt-4'>Our Services</h5>

                        <ul className='list-unstyled'>
                            <li className='mb-2'>
                                <a href="#!" className='text-dark'><i className='fas fa-paw pe-3'></i>Ad Promotions</a>
                            </li>
                            <li className='mb-2'>
                                <a href="#!" className='text-dark'><i className='fas fa-paw pe-3'></i>Careers</a>
                            </li>
                            <li className='mb-2'>
                                <a href="#!" className='text-dark'><i className='fas fa-paw pe-3'></i>Banner Ads</a>
                            </li>
                            <li className='mb-2'>
                                <a href="#!" className='text-dark'><i className='fas fa-paw pe-3'></i>About Us</a>
                            </li>
                        </ul>
                    </div>



                    <div className='col-lg-3 col-md-12 mb-4 mb-md-0'>
                        <h5 className='text-uppercase mb-4 ms-2 mt-4'>Legal</h5>

                        <ul className='list-unstyled'>
                            <li className='mb-2'>
                                <a href="#!" className='text-dark fas fa-paw pe-3'>Terms of use</a>
                            </li>
                            <li className='mb-2'>
                                <a href="#!" className='text-dark fas fa-paw pe-3'>Privacy Policy</a>
                            </li>
                            <li className='mb-2'>
                                <a href="#!" className='text-dark fas fa-paw pe-3'>Cookie Policy</a>
                            </li>
                            
                        </ul>
                    </div>

                    <div className='col-lg-3 col-md-12 mb-4 mb-md-0'>
                        <h5 className='text-uppercase mb-4 mt-4'>Contact  us</h5>

                        <ul className='list-unstyled contact-box'>
                            <li>
                                <p className='d-flex'><FaCity className='mt-1 me-1' ></FaCity>Chawbazar, Chittagong</p>
                            </li>
                            <li>
                                <p className='d-flex'><FaPhone  className='mt-1 me-1'></FaPhone> +8801521227960</p>
                            </li>
                            <li>
                                <p className='d-flex'><FaEnvelope className='mt-1 me-1'></FaEnvelope>MobiExpress@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='text-center p-3'>
                © 2022 Copyright: MobiExpress.com
            </div>

        </footer>

    </div>

);

export default Footer;