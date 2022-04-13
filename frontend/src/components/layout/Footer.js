import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>

        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-title'>
                    <p className='footer-subscription-heading'>
                        RCPD Trading &amp; Fabrication
                    </p>
                    <p className='footer-subscription-text'>
                        Mufacturer of Quality Filling Machines, all kinds of tanks, and other metalworks.
                    </p>
                    <p className='website-rights'>
                        &copy; 2022 RCPD Trading & Fabrication. All Rights Reserved.
                    </p>
                </div>
                <div className='footer-link-items'>
                    <h2>Visit Us</h2>
                    <p>Warehouse</p>
                    <p>1388 Sitio Maagay Brgy. Inarawan</p>
                    <p>Antipolo City</p>
                </div>
                <div className='footer-link-items'>
                    <h2>Contact Us</h2>
                    <p>rcpdfabtrading@gmail.com</p>
                    <p>Tel: +63 995 849 4580</p>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Navigate</h2>
                    <Link to='/'>About Us</Link>
                    <Link to='/products'>Products</Link>
                    <Link to='/services'>Services</Link>
                    <Link to='/about'>Frequently Asked Questions</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Social Media</h2>
                    <a
                        href='https://www.facebook.com/rcpdfab'
                        target='_blank'
                        rel='noreferrer'
                        aria-label='Facebook'>
                            <i className='fab fa-facebook-f'></i> Facebook
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer


// import React, { Fragment } from 'react'


// const Footer = () => {
//   return (
//     <>
//         <footer>
//                 {/* <div id="divider-foot">
//                     <hr class="solid"></hr>
//                 </div>

//                 <div class="row" id="footrow1">

//                     <div class="col-sm" id="footerRow1Col1">
//                     </div>

//                     <div class="col-sm">
//                         <div class="col-sm" id="footerRow1Col2-1">
                            // <img
                            //     src="https://res.cloudinary.com/javacookies/image/upload/v1647930821/rcdp_logo_bzfwhy.png"
                            //     width="80"
                            //     height="80"
                            //     alt="placeholder"
                            // />
//                         </div>
                        
//                         <div class="col-sm" id="footerRow1Col2-2">
//                             <h9>Copyright ©2022 All rights Reserved. 
//                                 No parts of this publication may be reproduced, copied, or transmitted save with written permission or in accordance with the provisions...
//                                 Any person who does any unauthorized act in relation to this publication may be liable to criminal prosecution and civil claims for damages
//                             </h9>
//                         </div>

//                     </div>

//                     <div class="col-sm" id="footerRow1Col3">
//                     </div>

//                 </div>

//                 <div class="row" id="footrow2">

//                     <div class="col-sm" id="footerRow2Col1" >
//                         <a href='https://www.facebook.com/rcpdfab' target="_blank">
//                             <img src="https://res.cloudinary.com/javacookies/image/upload/v1647930749/facebook_pqeufi.png"  alt='facebook' id='facebook'></img>
//                         </a>
//                     </div>

//                     <div class="col-sm" id="footerRow2Col2">
//                         <a href='https://gmail.com/' target="_blank">
//                             <img src="https://res.cloudinary.com/javacookies/image/upload/v1647930749/email_jfyqep.png"  alt='email' id='email'></img>
//                         </a>
//                     </div>

//                     <div class="col-sm" id="footerRow2Col3">
//                         <a href='https://www.facebook.com/rcpdfab' target="_blank">
//                             <img src="https://res.cloudinary.com/javacookies/image/upload/v1647930749/phone_gnr3lm.png"  alt='phone' id='phone'></img>
//                         </a>
//                     </div>
//                 </div> */}
//         </footer>
//     </>
//   )
// }

// export default Footer