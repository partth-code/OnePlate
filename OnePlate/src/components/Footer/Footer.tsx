import React from 'react';
import "./Footer.css";
import { assets } from '../../assets/assets';

const Footer  = ()=>{
    return(
        <footer className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum earum amet ipsam tempora consequatur vel eveniet facere nulla, eligendi architecto voluptates officia asperiores delectus! Ab tempore vel vero quae aliquam?</p>
                    <div className='footer-social-icon'>
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>
                        GET IN TOUCH
                    </h2>
                    <ul>
                        <li>+1-111-222-3333</li>
                        <li>contact@oneplate.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">&copy; OnePlate.com- All Rights Reserved</p>
        </footer>
    );
}

export default Footer;