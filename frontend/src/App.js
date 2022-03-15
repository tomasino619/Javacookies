import './App.css';
import { useEffect, useLayoutEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { userActions } from './actions'
import store from './store'

import Header from './components/layout/Header'

import ProtectedRoute from './components/routes/ProtectedRoute'
import AuthenticatedRoute from './components/routes/AuthenticatedRoute'

import Home from './components/home/Home'
import Login from './components/home/Login'
import ForgotPassword from './components/home/ForgotPassword'
import ResetPassword from './components/home/ResetPassword'
import Products from './components/home/Products'
import Services from './components/home/Services'

import Profile from './components/authenticated/user/Profile'
import UpdatePassword from './components/authenticated/user/UpdatePassword'

import RegisterUser from './components/admin/users/RegisterUser'
import ListUsers from './components/admin/users/ListUsers'
import UpdateUser from './components/admin/users/UpdateUser'

import ListProducts from './components/authenticated/products/ListProducts'
import CreateProduct from './components/authenticated/products/CreateProduct'
import UpdateProduct from './components/authenticated/products/UpdateProduct'

import ListServices from './components/authenticated/services/ListServices'
import CreateService from './components/authenticated/services/CreateService'
import UpdateService from './components/authenticated/services/UpdateService'

import ListAudits from './components/admin/audits/ListAudits'

import ListCategories from './components/authenticated/categories/ListCategories'
import CreateCategory from './components/authenticated/categories/CreateCategory'
import ProductDetails from './components/home/ProductDetails';
import ServiceDetails from './components/home/ServiceDetails';

const ScrollToTop = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
}

function App() {
    const { loading } = useSelector(state => state.auth)

    useEffect(() => {
        store.dispatch(userActions.loadUser())
    }, [])
    return (
        <Router>
            <div className="App">
                <ScrollToTop>
                    <Header />
                    {loading ? <h1>Loading...</h1> : (
                        <Routes>
                            {/* 
                                these routes do not need authentication to be accessed
                                so just use the regular routing tags
                            */}
                            <Route path='/' element={<Home />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/forgot-password' element={<ForgotPassword />} />
                            <Route path='/reset/:token' element={<ResetPassword />} />
                            <Route path='/services' element={<Services />} />
                            <Route path='/services/:id' element={<ServiceDetails />} />
                            <Route path='/products' element={<Products />} />
                            <Route path='/products/:id' element={<ProductDetails />} />

                            {/* 
                                AuthenticatedRoute is a customized route that requires user to be logged in
                                Wrap routes that require user authentication inside this tag
                                Check the AuthenticatedRoute file in components/routes folder to edit the navigation route
                                if the user is not authenticated and tried to access this page
                            */}
                            <Route element={<AuthenticatedRoute />}>
                                <Route path='/profile' element={<Profile />} />
                                <Route path='/password/update' element={<UpdatePassword />} />

                                <Route path='/admin/products' element={<ListProducts />} />
                                <Route path='/admin/product/new' element={<CreateProduct />} />
                                <Route path='/admin/product/:id' element={<UpdateProduct />} />

                                <Route path='/admin/services' element={<ListServices />} />
                                <Route path='/admin/service/new' element={<CreateService />} />
                                <Route path='/admin/service/:id' element={<UpdateService />} />

                                <Route path='/admin/categories' element={<ListCategories />} />
                                <Route path='/admin/category/new' element={<CreateCategory />} />
                            </Route>

                            {/* 
                                ProtectedRoute is a customized route that requires user to be logged in AND has the role of 'admin'
                                Wrap routes that require only admins inside this tag
                                Check the ProtectedRoute file in components/routes folder to edit the navigation route
                                if the user is not an admin and tried to access this page
                            */}
                            <Route element={<ProtectedRoute />}>
                                <Route path='/admin/new/user' element={<RegisterUser />} />
                                <Route path='/admin/users' element={<ListUsers />} />
                                <Route path='/admin/user/update/:id' element={<UpdateUser />} />

                                <Route path='/admin/audits' element={<ListAudits />} />
                            </Route>
                        </Routes>
                    )}
                    {/* <Footer /> */}
                </ScrollToTop>
            </div>
        </Router>
    )
}

export default App