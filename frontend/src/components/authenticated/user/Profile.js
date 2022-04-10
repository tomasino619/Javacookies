import React, { Fragment, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors } from '../../../actions'
// import { INSIDE_DASHBOARD_TRUE } from '../../../constants/dashboardConstants'
import Metadata from '../../layout/Metadata'
// import Loader from '../../layout/Loader'

const Profile = () => {
    const dispatch = useDispatch()
    const alert = useAlert()
    const navigate = useNavigate()

    const { user, loadError, loading } = useSelector(state => state.auth)

    useEffect(() => {
        if (loadError) {
            navigate('/')
            alert.error(loadError)
            dispatch(clearErrors())
        }

    }, [dispatch, alert, loadError, user, navigate])

    return (
        <>
            <Metadata title={'My Profile'} />
            {loading ? <h1>Loading</h1>
                :<div className='userbg'>
                        <div className='ucol'>
                            <div>
                                <img src="avatar2.png" alt="Avatar" class="avatar"/>
                            </div>
                            <div className='profile-info'>
                                <p className='profile-userp'>{user.username}</p>
                                <div class='profile-div'></div>
                                <p className='profile-emailp'>{user.email}</p>
                                <p className='profile-rolep'>{user.role}</p>
                            </div>
                                <Link className='alter-pass' to='/password/update'>Change password</Link>
                        </div>
                </div>}
        </>
    )
}

export default Profile
