import React, { useState, useEffect } from 'react'
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Header.css';

import { useSelector } from 'react-redux'
import LogoutButton from "../layout/LogoutButton"
import { NavDropdown, Nav } from 'react-bootstrap'



function Header() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const { user } = useSelector(state => state.auth)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className='navbar-rcpd' onClick={closeMobileMenu}>
                        RCPD Trading &amp; Fabrication
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'} id="ul_header">
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Products
                            </Link>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                            <Link to='/contacts' className='nav-links' onClick={closeMobileMenu}>
                                Contacts
                            </Link>
                            {/* <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Login
                            </Link> */}
                        </li>
                    </ul>

                    {user ? <>  {/* checking if user is logged in */}
                        {/* if user is logged in, display the dropdown title as the username */}

                        {user.role === 'Admin' ?
                            <>  {/** if user is logged in and role is Admin, display these links */}
                                <NavDropdown title="Manage" id="basic-nav-dropdown" className="adminstaff-nav">
                                    <NavDropdown.Item href="/admin/new/user">Register user (Admin)</NavDropdown.Item>
                                    <NavDropdown.Item href="/admin/users">All users (Admin)</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/admin/product/new">Create Product</NavDropdown.Item>
                                    <NavDropdown.Item href="/admin/products">Get All Products</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/admin/service/new">Create Service</NavDropdown.Item>
                                    <NavDropdown.Item href="/admin/services">Get All Services</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/admin/category/new">Create Category</NavDropdown.Item>
                                    <NavDropdown.Item href="/admin/categories">Get All Categories</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/admin/audits">Get All Audits</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title={user.username} id="basic-nav-dropdown" className="adminstaff-nav">
                                    <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
                                    <NavDropdown.Item href="/password/update">Update Password</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item><LogoutButton /></NavDropdown.Item>
                                </NavDropdown>
                            </> :
                            <> {/** if user is logged in and role is Staff, display these links */}
                                <NavDropdown title="Manage" id="basic-nav-dropdown" className="adminstaff-nav">
                                    <NavDropdown.Item href="/admin/product/new">Create Product</NavDropdown.Item>
                                    <NavDropdown.Item href="/admin/products">Get All Products</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/admin/service/new">Create Service</NavDropdown.Item>
                                    <NavDropdown.Item href="/admin/services">Get All Services</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/admin/category/new">Create Category</NavDropdown.Item>
                                    <NavDropdown.Item href="/admin/categories">Get All Categories</NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title={user.username} id="basic-nav-dropdown" className="adminstaff-nav">
                                    <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
                                    <NavDropdown.Item href="/password/update">Update Password</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item><LogoutButton /></NavDropdown.Item>
                                </NavDropdown>
                            </>}
                    </> : <> {/** else, user is NOT logged in, display the login button */}
                        {button && <Button buttonStyle='btn--primary'>LOGIN</Button>}
                    </>}
                </div>
            </nav>
        </>
    )
}







// const Header = () => {
//     //get the user object from the store
//     const { user } = useSelector(state => state.auth)

//     return (
//         <>
//             <Navbar expand="lg">
//             {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
//                 <div className='navbar-container'>
//                     <Navbar.Collapse id="basic-navbar-nav">
//                         {/* <Nav.Link href="/" className='navbar-rcpd'>RCPD Trading &amp; Fabrication</Nav.Link> */}
//                         <Nav>
//                             {/* <li className='nav-item'>
//                                 <Nav.Link href="/" className='nav-links' >Home</Nav.Link>
//                             </li>
//                             <li className='nav-item'>
//                                 <Nav.Link href="/#about-us" className='nav-links'>About</Nav.Link>
//                             </li>
//                             <li className='nav-item'>
//                                 <Nav.Link href="/products" className='nav-links'>Products</Nav.Link>
//                             </li>
//                             <li className='nav-item'>
//                                 <Nav.Link href="/services" className='nav-links'>Services</Nav.Link>
//                             </li>
//                             <li className='nav-item'>
//                                 <Nav.Link href="/contacts" className='nav-links'>Contacts</Nav.Link>
//                             </li>
//                             <li className='nav-item'>
//                                 <Nav.Link href="/contacts/#faqs-part" className='nav-links'>FAQs</Nav.Link>
//                             </li> */}

//                             {/* <Navbar.Brand href="/" className ="logo">
//                             <img
//                                 src="https://res.cloudinary.com/javacookies/image/upload/v1647703672/rcpdlogo4_i9yjix.png"
//                                 width="200"
//                                 alt="error"
//                             />
//                             </Navbar.Brand> */}


//                             {user ? <>  {/* checking if user is logged in */}
//                                 {/* if user is logged in, display the dropdown title as the username */}

//                                 {user.role === 'Admin' ?
//                                     <>  {/** if user is logged in and role is Admin, display these links */}
//                                         <NavDropdown title="Manage" id="basic-nav-dropdown" className="navlink">
//                                             <NavDropdown.Item href="/admin/new/user">Register user (Admin)</NavDropdown.Item>
//                                             <NavDropdown.Item href="/admin/users">All users (Admin)</NavDropdown.Item>
//                                             <NavDropdown.Divider />
//                                             <NavDropdown.Item href="/admin/product/new">Create Product</NavDropdown.Item>
//                                             <NavDropdown.Item href="/admin/products">Get All Products</NavDropdown.Item>
//                                             <NavDropdown.Divider />
//                                             <NavDropdown.Item href="/admin/service/new">Create Service</NavDropdown.Item>
//                                             <NavDropdown.Item href="/admin/services">Get All Services</NavDropdown.Item>
//                                             <NavDropdown.Divider />
//                                             <NavDropdown.Item href="/admin/category/new">Create Category</NavDropdown.Item>
//                                             <NavDropdown.Item href="/admin/categories">Get All Categories</NavDropdown.Item>
//                                             <NavDropdown.Divider />
//                                             <NavDropdown.Item href="/admin/audits">Get All Audits</NavDropdown.Item>
//                                         </NavDropdown>
//                                         <NavDropdown title={user.username} id="basic-nav-dropdown" className="navlink">
//                                             <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
//                                             <NavDropdown.Item href="/password/update">Update Password</NavDropdown.Item>
//                                             <NavDropdown.Divider />
//                                             <NavDropdown.Item><LogoutButton /></NavDropdown.Item>
//                                         </NavDropdown>
//                                     </> :
//                                     <> {/** if user is logged in and role is Staff, display these links */}
//                                         <NavDropdown title="Manage" id="basic-nav-dropdown" className="navlink">
//                                             <NavDropdown.Item href="/admin/product/new">Create Product</NavDropdown.Item>
//                                             <NavDropdown.Item href="/admin/products">Get All Products</NavDropdown.Item>
//                                             <NavDropdown.Divider />
//                                             <NavDropdown.Item href="/admin/service/new">Create Service</NavDropdown.Item>
//                                             <NavDropdown.Item href="/admin/services">Get All Services</NavDropdown.Item>
//                                             <NavDropdown.Divider />
//                                             <NavDropdown.Item href="/admin/category/new">Create Category</NavDropdown.Item>
//                                             <NavDropdown.Item href="/admin/categories">Get All Categories</NavDropdown.Item>
//                                         </NavDropdown>

//                                         <NavDropdown title={user.username} id="basic-nav-dropdown" className="navlink">
//                                             <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
//                                             <NavDropdown.Item href="/password/update">Update Password</NavDropdown.Item>
//                                             <NavDropdown.Divider />
//                                             <NavDropdown.Item><LogoutButton /></NavDropdown.Item>
//                                         </NavDropdown>
//                                     </>}
//                             </> : <> {/** else, user is NOT logged in, display the login button */}
//                                 {/* <li className='nav-item'>
//                                     <Nav.Link href='/login' className='nav-links'>Login</Nav.Link>
//                                 </li> */}
//                             </>}
//                         </Nav>
//                     </Navbar.Collapse>
//                 </div>
//             </Navbar>
//             <div id="divider">
//                 <hr class="solid"></hr>
//             </div>
//         </>
//     )
// }

export default Header;