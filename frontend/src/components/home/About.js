import React from 'react'
import Footer from '../layout/Footer'
import Metadata from "../layout/Metadata"
import { Button } from 'react-bootstrap';
import history from './About';

const About = () => {
  return (
    <div>
      <Metadata title={"About"} />
      <section className="sectionAbout">
        <div className="containerAbout">
          <div class="row">
            <div class="col-md-12 text-center"></div>
            <h3 className="main_heading"> COMPANY PROFILE</h3>
            <div className="underline mx-auto"></div>
            <p className="aboutParagraph1">
            <br></br>
              RCPD Trading and Fabrications is a growing industrial engineering company.
              Expert on total machinery automation. The company has been <br></br> established to specialize in industrial automation.
              Parts are made with the combination of Japan and local technology assuring quality and <br></br> support  after-sales parts and services.
              Its key products include design and fabrication of custom made processing and packaging line equipment.<br></br>
              Our machines are well advanced that can automate your production line to minimize in less time, accurate and efficient.<br></br> <br></br> 

              Founded in 2020, RCPD trading and fabrication is a local manufacturer of precision machinery components and machines for industrial set up<br></br>
              such as filling machines, soap extruders, stamping machines, pipe laying, RO. System, Water Waster Disposal, cosmetic machines, Electrical<br></br>
              Components and Programs. We also offer HHO, our new machine line up for industrial fuel saver for gasoline, diesel and LPG. 
              facilities such as <br></br>Lathe Machine, Milling machine, Machinery equipments, grinders, Surface grinders and welding machines.
              Our customers are mostly <br></br>domestic in the Philippines.<br></br><br></br>

              Our company specialzes in steelwork and machinery for industrial set ups, but we also offer services for different platforms<br></br> such as household 
              and businesses.
            </p>
          </div>
        </div>
      </section>
      <section className="sectionAbout bg-c-light border-top">
        <div className="containerMV">
          <div class="row">
            <div class="col-md-12 mb-5 text-center">
              <h3 className="main_heading"> Mission, Vision and Values</h3>
              <div className="underline mx-auto"></div>
            </div>
            <div className="col-md-4">
              <h6 className="mission_header">Our Mission</h6>
              <p>
                To collaborate with the local and international manufacturers and SME's<br></br> by using quality and precision machines.
                To be  able to offer low to medium cost <br></br> machines for startup business and provide quality products.
              </p>
            </div>
            <div className="col-md-4">
              <h6 className="vision_header">Our Vision</h6>
              <p>
                To provide quality and sustainable machines for industrial needs per client requirements. <br></br>To provide work for those who are 
                situated in sitio maagay barangay inarawan <br></br>as their livelihood source of income.
              </p>
            </div>
            <div className="col-md-4">
              <h6 className="core_header">Our Core Values</h6>
              <p>
                The company's core values are Trust, Ethics and Integrity.<br></br> These three are important and are always observed by the 
                <br></br>company as well as the staff both
                inside and outside of the <br></br>workplace. We uphold professionalism and honestly in order to<br></br> build trust among peers and customers.

              </p>
            </div>
          </div>
        </div>
      </section>

      <div class="container" id='faqs-part'>
        <div class="main_heading">Frequently Asked Questions</div>
        <div className="underline mx-auto"></div>
        <div className="card-deck">
          <div class='faq-space'></div>
          <div id='faq-deck'>
            <div class="col-sm">

              <div class="faqcard">
                <div class="card-body">
                  <h5 class="card-title">How do I avail the products and services offered by RCPD?</h5>
                  <p class="card-text">If you want to make an order for a specific product or avail our services, please get in touch with us by sending us an email or a message through our 
                  <a href="/contacts"> Facebook page</a> . You may also contact us through the number provided in our <a href="/contacts">Contacts page.</a></p>
                </div>
              </div>

              <div class="faqcard">
                <div class="card-body">
                  <h5 class="card-title">What are the usual prices for the products and services? </h5>
                  <p class="card-text">The price range for the products and services vary depending on the specifics and customizations needed by the client. For the price quotation, you may reach us through the given contacts details provided by the <a href="/contacts">Contacts page.</a> </p>
                </div>
              </div>

              <div class="faqcard">
                <div class="card-body">
                  <h5 class="card-title">Do you offer customized/ modified machines that will suit my company's/business' needs?</h5>
                  <p class="card-text">RCPD specializes in custom-made machines and services that are designed to fit the client's solutions for their different problems</p>
                </div>
              </div>
            </div>

             <div class="col-sm">

              <div class="faqcard">
                <div class="card-body">
                  <h5 class="card-title">How long do till I can get my order?</h5>
                  <p class="card-text">It depends on the complexity of your order/machine and the given requirements. As well as the availability of some parts</p>
                </div>
              </div>

              <div class="faqcard">
                <div class="card-body">
                  <h5 class="card-title">What are your mode of Payment?</h5>
                  <p class="card-text">We accept bank transfer, cash on hand and Cheque. We require downpayments depending on your order</p>
                </div>
              </div>

              <div class="faqcard">
                <div class="card-body">
                  <h5 class="card-title">Do you have a warranty?</h5>
                  <p class="card-text"> Yes. We do offer 1 year warranty and services</p>
                </div>
              </div>
            </div> 

            


          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About