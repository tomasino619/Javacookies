import React from 'react'
import Footer from '../layout/Footer'
import { Button } from 'react-bootstrap';
import history from './About';

const About = () => {
  return (
    <div>
      <section className="sectionAbout">
        <div className="containerAbout">
          <div class="row">
            <div class="col-md-12 text-center"></div>
            <h3 className="main_heading"> COMPANY PROFILE</h3>
            <div className="underline mx-auto"></div>
            <p className="aboutParagraph1">
              RCPD Trading and Fabrications is a growing industrial engineering company.
              Expert on total machinery automation. <br></br> The company has been established to specialize in industrial automation.
              Parts are made with the combination of Japan and <br></br> local technology  assuring quality and support  after-sales parts and services.
              Its key products include <br></br> design and fabrication of custom made processing and packaging line equipment.
              Our machines are well <br></br> advanced that can automate your production line to minimize in less time, accurate and efficient.
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
                To be the market leader in total quality industrial machine automation services.<br></br>
                "For the glory of God."
                - Ephesians 3:20
              </p>
            </div>
            <div className="col-md-4">
              <h6 className="vision_header">Our Vision</h6>
              <p>
                To promote fast and efficient industrial operations through innovative quality machine designs,
                fabrications and end to-end business machine facility setup.
              </p>
            </div>
            <div className="col-md-4">
              <h6 className="core_header">Our Core Values</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br>
                </br>
                Lorem Ipsum has been the industry's standard dummy text ever <br>
                </br>since the 1500s, when an unknown
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
                  <h5 class="card-title">Questions</h5>
                  <p class="card-text">let leni lead angat buhay rosa ang kulay n bukas at bukas at next years
                    let leni lead angat buhay rosa ang kulay n bukas at bukas at next years</p>
                </div>
              </div>

              <div class="faqcard">
                <div class="card-body">
                  <h5 class="card-title">Questions</h5>
                  <p class="card-text">let leni lead angat buhay rosa ang kulay n bukas at bukas at next years
                    let leni lead angat buhay rosa ang kulay n bukas at bukas at next years</p>
                </div>
              </div>

              <div class="faqcard">
                <div class="card-body">
                  <h5 class="card-title">Questions</h5>
                  <p class="card-text">let leni lead angat buhay rosa ang kulay n bukas at bukas at next years
                    let leni lead angat buhay rosa ang kulay n bukas at bukas at next years</p>
                </div>
              </div>
            </div>

            <div class="col-sm">

              <div class="faqcard">
                <div class="card-body">
                  <h5 class="card-title">Questions</h5>
                  <p class="card-text">let leni lead angat buhay rosa ang kulay n bukas at bukas at next years
                    let leni lead angat buhay rosa ang kulay n bukas at bukas at next years</p>
                </div>
              </div>

              <div class="faqcard">
                <div class="card-body">
                  <h5 class="card-title">Questions</h5>
                  <p class="card-text">let leni lead angat buhay rosa ang kulay n bukas at bukas at next years
                    let leni lead angat buhay rosa ang kulay n bukas at bukas at next years</p>
                </div>
              </div>

              <div class="faqcard">
                <div class="card-body">
                  <h5 class="card-title">Questions</h5>
                  <p class="card-text">let leni lead angat buhay rosa ang kulay n bukas at bukas at next years
                    let leni lead angat buhay rosa ang kulay n bukas at bukas at next years</p>
                </div>
              </div>
            </div>

            <div class="col-sm">

              <div class="faqcard">
                <div class="card-body">
                  <h5 class="card-title">Questions</h5>
                  <p class="card-text">let leni lead angat buhay rosa ang kulay n bukas at bukas at next years
                    let leni lead angat buhay rosa ang kulay n bukas at bukas at next years</p>
                </div>
              </div>

              <div class="faqcard">
                <div class="card-body">
                  <h5 class="card-title">Questions</h5>
                  <p class="card-text">let leni lead angat buhay rosa ang kulay n bukas at bukas at next years
                    let leni lead angat buhay rosa ang kulay n bukas at bukas at next years</p>
                </div>
              </div>

              <div class="faqcard">
                <div class="card-body">
                  <h5 class="card-title">Questions</h5>
                  <p class="card-text">let leni lead angat buhay rosa ang kulay n bukas at bukas at next years
                    let leni lead angat buhay rosa ang kulay n bukas at bukas at next years</p>
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