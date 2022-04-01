import React from 'react'
import Metadata from "../layout/Metadata"
import Footer from '../layout/Footer'
import '../../../src/App.css'
const Home = () => {
    return (
        <div className='col-container'>
            <Metadata title={"Home"} />

                <div class="row" id="sec1">
                    <div class="col-sm" id='tagline'>
                        RCPD Tagline Here
                        <div class="row">
                            <div class="col">
                                <a href='/products'>
                                    <button type="button" class="btn btn-dark" id='vb'>View Products</button>
                                </a>
                            </div>
                            <div class="col">
                                <a href='/services'>
                                <button type="button" class="btn btn-dark" id='vb2'>View Services</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm" id="mainimg">
                        <img
                            src="/images/placeholder1.jpeg"
                            width="500"
                            className=""
                            alt="placeholder"
                        />
                    </div>
                </div>

                <div class="row" id="aboutheader">
                    <h1>SPECIALIZES IN MACHINE AUTOMATION AND STEELWORKS</h1>
                </div>

                <div class="row" id="sec1">
                    <div class="col-sm" id="p1">
                        <img
                            src="/images/placeholder1.jpeg"
                            width="350"
                            class="aboutimg"
                            alt="placeholder"
                        />

                    </div>
                    <div class="col-sm" id="p2">
                        <img
                            src="/images/placeholder1.jpeg"
                            width="350"
                            class="aboutimg"
                            alt="placeholder"
                        />
                    </div>
                    <div class="col-sm" id="p3">
                        <img
                            src="/images/placeholder1.jpeg"
                            width="350"
                            class="aboutimg"
                            alt="placeholder"
                        />
                    </div>
                </div>
                
                <div id="divider-about">
                    <hr class="solid"></hr>
                </div>

                <div class="col-sm" id='about-us'>
                    ABOUT US
                </div>

                <div class="flex-container">
                    <div class="flex-child">
                        <div class="containerAbout1" id='company'>
                            Company Profile
                            <div class="row">
                                <p id="about">RCPD Trading and Fabrications is a growing industrial engineering company. <br></br>
                                    Expert on total machinery automation. <br></br>The company has been established to specialize in industrial automation. 
                                    <br></br>Parts are made with the combination of Japan and local technology assuring quality and support after-sales parts and services.
                                </p>
                                <p id="about">
                                    Its key products include design and fabrication of custom made processing and packaging line equipment. 
                                    <br></br>Our machines are well advanced that can automate your production line to minimize in less time, accurate and efficient.
                                </p>
                            </div>
                        </div>
                        <div class="containerAbout2" id='company'>
                            Our Mission
                            <div class="row">
                                <p id="about">To be the market leader in total quality industrial machine automation services.
                                    For the glory of God.
                                    Ephesians 3:20
                                </p>
                            </div>
                        </div>
                        <div class="containerAbout3" id='company'>
                            Our Vision
                            <div class="row">
                                <p id="about">To promote fast and efficient industrial operations through innovative quality machine designs, 
                                    fabrications and end to-end business machine facility setup.
                                </p>
                            </div>
                        </div>  
                    </div>
                    <div class="flex-child">
                        <div class="contBox" id="sec2">
                            <img
                                src="/images/placeholder1.jpeg"
                                width="350"
                                class="aboutimg"
                                alt="placeholder"
                            />
                        </div>
                    </div>
                </div>
            <Footer/>
                
            </div>
        
    )
}

export default Home


