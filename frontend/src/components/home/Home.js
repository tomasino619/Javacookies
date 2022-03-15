import React from 'react'
import Metadata from "../layout/Metadata"
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='col-container'>
            <Metadata title={"Home"} />
            <h1>Home</h1>
            <Link to="/admin/new/user">Register user (Admin)</Link>
            <Link to="/admin/users">All users (Admin)</Link>
            <Link to="/admin/product/new">Create Product</Link>
            <Link to="/products">Get All Products</Link>
            <Link to="/admin/service/new">Create Service</Link>
            <Link to="/services">Get All Services</Link>
        </div>
    )
}

export default Home
