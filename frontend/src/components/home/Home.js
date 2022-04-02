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
                                <button type="button" class="btn btn-warning" id='vb'>View Products</button>
                            </a>
                        </div>
                        <div class="col">
                            <a href='/services'>
                                <button type="button" class="btn btn-warning" id='vb2'>View Services</button>
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
            <section className="sectionAbout" id="aboutus">
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
                        <a href='/about'>
                            <button type="button" class="btn btn-warning" id='vb2'>Read More</button>
                        </a>
                    </div>
                </div>
            </section>
            <Footer />
        </div>

    )
}

export default Home




