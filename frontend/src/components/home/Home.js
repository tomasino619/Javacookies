import React from 'react'
import Metadata from "../layout/Metadata"
import { Link } from 'react-router-dom'
import "./sample.css"
const Home = () => {
    return (
        <div className='col-container'>
            <Metadata title={"Home"} />
            {/* <h1>Home</h1> */}
            {/* <Link to="/admin/new/user">Register user (Admin)</Link>
            <Link to="/admin/users">All users (Admin)</Link>
            <Link to="/admin/product/new">Create Product</Link>
            <Link to="/products">Get All Products</Link>
            <Link to="/admin/service/new">Create Service</Link>
            <Link to="/services">Get All Services</Link> */}

            <div class="row" id="sec1">
                <div class="col-sm" id='tagline'>
                RCPD Tagline Here
                <div class="row">
                        <div class="col"><button type="button" class="btn btn-light">View Products</button></div>
                        <div class="col"><button type="button" class="btn btn-light">View Services</button></div>
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
                <h1>SPECIALIZES IN STEELWORKS</h1>
            </div>

            <div class="row" id="sec1">
                <div class="col-sm" id="sec2">
                    <img
                        src="/images/placeholder1.jpeg"
                        width="350"
                        class="aboutimg"
                        alt="placeholder"
                    />
                    <p id="aboutdesc">Lorem ipsum tatay mo si lawrence. Lorem ipsum tatay mo si lawrence.
                    Lorem ipsum tatay mo si lawrence.
                    </p>
                </div>
                <div class="col-sm" id="sec2">
                    <img
                        src="/images/placeholder1.jpeg"
                        width="350"
                        class="aboutimg"
                        alt="placeholder"
                    />
                </div>
                <div class="col-sm" id="sec2">
                    <img
                        src="/images/placeholder1.jpeg"
                        width="350"
                        class="aboutimg"
                        alt="placeholder"
                    />
                </div>
            </div>

        </div>
    )
}

export default Home
