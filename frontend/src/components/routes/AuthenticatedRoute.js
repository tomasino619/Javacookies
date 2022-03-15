import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

function AuthenticatedRoute() {
    const { isAuthenticated, loading } = useSelector(state => state.auth)

    /**
     * The isAuthenticated variable is set in the reducers 
     * When user successfully logs in, the isAuthenticated is set to true
     * When user logs out, the isAuthenticated is set to false
     */
    if(loading === false) {
        if (!isAuthenticated) return <Navigate to="/login" />
    }

    return <Outlet />;
}


export default AuthenticatedRoute