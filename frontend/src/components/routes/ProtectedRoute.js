import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ProtectedRoute() {
    const { isAuthenticated, loading, user } = useSelector(state => state.auth)

    /**
     * The isAuthenticated variable is set in the reducers 
     * When user successfully logs in, the isAuthenticated is set to true
     * When user logs out, the isAuthenticated is set to false
     * 
     * the user object is saved in the store (redux store) when the user successfully logs in
     * we can access the role of the user (user.role) and determine if it is an admin account
     * 
     * user object is set to null when the person logs out
     */
    if(loading === false) {
        if (!isAuthenticated) return <Navigate to="/login" />
        if(user.role === 'Staff') return <Navigate to='/' />
    }

    return <Outlet />;
}


export default ProtectedRoute