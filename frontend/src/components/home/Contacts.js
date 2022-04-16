import React, { Fragment } from 'react'
import Footer from '../layout/Footer'
import '../../../src/Contacts.css'
import Metadata from "../layout/Metadata"
import { Divider } from 'semantic-ui-react'

const Contacts = () => {
  return (
    <Fragment>
      <Metadata title={"Contacts"} />
      <body>
      <section id="contact">
       <div class="container">
           <h3 class="text-center text-uppercase">contact us</h3>
           <h5 class="text-center w-75 m-auto pdef">Feel free to reach us out your with concerns or questions.</h5>
           <div class="row">
             <div class="col-sm-12 col-md-6 col-lg-3 my-5">
               <div class="card border-0">
                  <div class="card-body text-center">
                    <i class="fa fa-phone fa-5x mb-3" aria-hidden="true"></i>
                    <h4 class="text-uppercase mb-5">phone</h4>
                    <p><a class="lstyle" href="tel:09958494580">+639958494580</a></p>
                  </div>
                </div>
             </div>
             <div class="col-sm-12 col-md-6 col-lg-3 my-5">
               <div class="card border-0">
                  <div class="card-body text-center">
                    <i class="fab fa-facebook-f fa-5x mb-3" aria-hidden="true"></i>
                    <h4 class="text-uppercase mb-5">Facebook</h4>
                   <address><a
                        class="lstyle"
                        href='https://www.facebook.com/rcpdfab'
                        target='_blank'
                        rel='noreferrer'
                        aria-label='Facebook'>
                            RCPD Trading and Fabrication
                    </a> </address>
                  </div>
                </div>
             </div>
             <div class="col-sm-12 col-md-6 col-lg-3 my-5">
               <div class="card border-0">
                  <div class="card-body text-center">
                    <i class="fa fa-map-marker fa-5x mb-3" aria-hidden="true"></i>
                    <h4 class="text-uppercase mb-5">Address</h4>
                    <address class="add2"><a
                        class="lstyle"
                        href='https://goo.gl/maps/x5JR7uoyZaKs5TkGA'
                        target='_blank'
                        rel='noreferrer'
                        aria-label='Facebook'>
                            1388 Sitio Maagay, Brgy. Inarawan, Antipolo City
                    </a>  </address>
                  </div>
                </div>
             </div>
             <div class="col-sm-12 col-md-6 col-lg-3 my-5">
               <div class="card border-0">
                  <div class="card-body text-center">
                    <i class="fa fa-globe fa-5x mb-3" aria-hidden="true"></i>
                    <h4 class="text-uppercase mb-5">email</h4>
                    <p>< a class="lstyle" href="mailto:rcpdfabtrading@gmail.com">rcpdfabtrading@gmail.com</a></p>
                  </div>
                </div>
             </div>
           </div>
       </div>
      </section>  
      </body>
      <Footer/>
    </Fragment>
  )
}

export default Contacts

/*{ <div class="container-contact100">
          <div class="wrap-contact100">
            <div class="contact100-form validate-form">
             <div id="map"> </div>
             <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.540907533794!2d121.18810621401391!3d14.625209180395995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397bf074ecac3ff%3A0xf7f86b3a19fb254d!2sRCPD%20FABRICATION%20ENTERPRISE%20CO.!5e0!3m2!1sen!2sph!4v1649416344098!5m2!1sen!2sph" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
             </div>

            </div>

            <div class="contact100-more flex-col-x-m" >
              <div class ="flex-w size1 p-b-47">
                <div clas="txt1 p-r-25">
                  <span class="fas fa-map-marker-alt">
                  </span>
                </div>
                <div class="flex-col size2">
                  <span class="txt1 p-b-20">Address</span>
                  <span class="txt2">Warehouse 1388 Sitio Maagay, Brgy. Inarawan, Antipolo City</span>
                </div>
              </div>

              <div class ="dis-flex size1 p-b-47">
                <div clas="txt1 p-r-25">
                  <span class="fas fa-phone-alt"></span>
                </div> 
                <div class="flex-col size2">
                  <span class="txt1 p-b-20"> Phone</span>
                  <span class="txt2"> +639958494580</span>
                </div>
              </div>

              <div class ="dis-flex size1 p-b-47">
                <div clas="txt1 p-r-25">
                  <span class="fas fa-envelope p-r-25"></span>
                </div> 
                <div class="flex-col size2">
                  <span class="txtemail p-b-20">E-mail</span>
                  <span class="txt2email">rcpdfabtrading@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div> }*/

/*{ <div class="address details">
<i class="fas fa-map-marker-alt"></i>
<div class="topic">Address</div>
<div class="text-one">Surkhet, NP12</div>
<div class="text-two">Birendranagar 06</div>
</div>
<div class="phone details">
<i class="fas fa-phone-alt"></i>
<div class="topic">Phone</div>
<div class="text-one">+0098 9893 5647</div>
<div class="text-two">+0096 3434 5678</div>
</div>
<div class="email details">
<i class="fas fa-envelope"></i>
<div class="topic">Email</div>
<div class="text-one">codinglab@gmail.com</div>
<div class="text-two">info.codinglab@gmail.com</div>
</div> }*/