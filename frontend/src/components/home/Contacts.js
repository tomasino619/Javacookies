import React, { Fragment } from 'react'
import Footer from '../layout/Footer'
import '../../../src/Contacts.css'

const Contacts = () => {
  return (
    <Fragment>
      <body>
        <div class="container-contact100">
          <div class="wrap-contact100">
            <form class="contact100-form validate-form">
             <span class="contact100-form-title"> Send Us A Message</span>
              <label class="label-input100" for="first-name"> Tell us your name</label>
                <div class="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Type your first name"> 
                  <input id="first-name" class="input100" type="text" name="first-name" placeholder="First name"></input>
                  <span class="focus-input100"></span>
                </div>
                <div class="wrap-input100 rs2-wrap-input100 validate-input" data-validate="Type your last name"> 
                  <input class="input100" type="text" name="last-name" placeholder='Last name'></input>
                  <span class ="focus-input100"></span>
                </div>

              <label class="label-input100" for="email">Enter your email</label>
                <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                  <input id="email" class="input100" type="text" name="email" placeholder="Ex. gandachla@true.com"></input>
                  <span class="focus-input100"></span>
                </div>

              <label class="label-input100" for="phone">Enter your phone number</label>
                <div class="wrap-input100">
                  <input id="phone" class="input100" type="text" name="phone" placeholder="0918076247"></input>
                  <span class="focus-input100"></span>
                </div>

              <label class="label-input100" for="message">Message</label>
                <div class="wrap-input100 validate-input" data-validate="Messageis required">
                  <textarea id="message" class="input100" name="message" placeholder='Write us a message'></textarea>
                  <span class="focus-input100"></span>
              </div>

              <div class="container-contact100-form-btn">
                <button class="contact100-form-btn">Send Message</button>
              </div>

            </form>

            <div class="contact100-more flex-col-x-m" >
              <div class ="flex-w size1 p-b-47">
                <div clas="txt1 p-r-25">
                  <span class="fas fa-map-marker-alt">
                  </span>
                </div>
                <div class="flex-col size2">
                  <span class="txt1 p-b-20">Address</span>
                  <span class="txt2">Nueve Ecija</span>
                </div>
              </div>

              <div class ="dis-flex size1 p-b-47">
                <div clas="txt1 p-r-25">
                  <span class="fas fa-phone-alt"></span>
                </div> 
                <div class="flex-col size2">
                  <span class="txt1 p-b-20"> Phone</span>
                  <span class="txt2">09560472527</span>
                </div>
              </div>

              <div class ="dis-flex size1 p-b-47">
                <div clas="txt1 p-r-25">
                  <span class="fas fa-envelope p-r-25"></span>
                </div> 
                <div class="flex-col size2">
                  <span class="txtemail p-b-20">E-mail</span>
                  <span class="txt2email">rgbaby@gmail.com</span>
                </div>
              </div>

             
              

            </div>
              
            
           

          </div>
        </div>

        
      </body>
      <Footer/>
    </Fragment>
  )
}

export default Contacts

{/* <div class="address details">
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
</div> */}