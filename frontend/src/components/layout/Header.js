import React from 'react'
import { useSelector } from 'react-redux'
import LogoutButton from "../layout/LogoutButton"
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

const Header = () => {
    //get the user object from the store
    const { user } = useSelector(state => state.auth)

    return (
        <>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="navigation">
                            <Nav.Link href="/" className="navlink">Home</Nav.Link>
                            <Nav.Link href="/#about-us" className="navlink">About</Nav.Link>
                            <Nav.Link href="/products" className="navlink">Products</Nav.Link>
                            <Navbar.Brand href="/" className ="logo">
                            <img
                                src="https://res.cloudinary.com/javacookies/image/upload/v1647703672/rcpdlogo4_i9yjix.png"
                                width="200"
                                alt="error"
                            />
                            </Navbar.Brand>
                            <Nav.Link href="/services" className="navlink">Services</Nav.Link>
                            <Nav.Link href="/contacts" className="navlink">Contacts</Nav.Link>
                            <Nav.Link href="/contacts/#faqs-part" className="navlink">FAQs</Nav.Link>
                    
                            {user ? <>  {/* checking if user is logged in */}
                                {/* if user is logged in, display the dropdown title as the username */}

                                {user.role === 'Admin' ? 
                                    <>  {/** if user is logged in and role is Admin, display these links */}
                                        <NavDropdown title="Manage" id="basic-nav-dropdown" className="navlink">
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
                                        <NavDropdown title={user.username} id="basic-nav-dropdown" className="navlink">
                                            <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
                                            <NavDropdown.Item href="/password/update">Update Password</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item><LogoutButton /></NavDropdown.Item>
                                        </NavDropdown>
                                    </> :
                                    <> {/** if user is logged in and role is Staff, display these links */}
                                        <NavDropdown title="Manage" id="basic-nav-dropdown" className="navlink">
                                            <NavDropdown.Item href="/admin/product/new">Create Product</NavDropdown.Item>
                                            <NavDropdown.Item href="/admin/products">Get All Products</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="/admin/service/new">Create Service</NavDropdown.Item>
                                            <NavDropdown.Item href="/admin/services">Get All Services</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="/admin/category/new">Create Category</NavDropdown.Item>
                                            <NavDropdown.Item href="/admin/categories">Get All Categories</NavDropdown.Item>
                                        </NavDropdown>

                                        <NavDropdown title={user.username} id="basic-nav-dropdown" className="navlink">
                                            <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
                                            <NavDropdown.Item href="/password/update">Update Password</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item><LogoutButton /></NavDropdown.Item>
                                        </NavDropdown>
                                    </>}
                            </> : <> {/** else, user is NOT logged in, display the login button */}
                                {/* <Nav.Link href='/login'>Login</Nav.Link> */}
                            </>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div id="divider">
                <hr class="solid"></hr>
            </div>
        </>
    )
}

export default Header