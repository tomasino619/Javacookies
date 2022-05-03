import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { userActions, clearErrors } from '../../../actions'
import { userConstants } from '../../../constants'
import Metadata from '../../layout/Metadata'
import { Button, Form } from 'react-bootstrap';


const UpdateUser = () => {
    const dispatch = useDispatch()
    const alert = useAlert()
    const navigate = useNavigate()
    const { id } = useParams()

    const { user, error, loading } = useSelector(state => state.userDetails)
    const { error: updateError, loading: updateLoading, isUpdated } = useSelector(state => state.user)

    const [userDetails, setUserDetails] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        role: ""
    })
    const { first_name, last_name, username, email, role } = userDetails

    useEffect(() => {
        if (user && user._id !== id) {
            dispatch(userActions.getUser(id))
        } else if (user) {
            setUserDetails({
                first_name: user.first_name ? user.first_name : '',
                last_name: user.last_name ? user.last_name : '',
                username: user.username,
                email: user.email,
                role: user.role
            })
        } else {
            dispatch(userActions.getUser(id))
        }

        if (isUpdated) {
            alert.success('User has beed updated')
            navigate('/admin/users')
            dispatch({ type: userConstants.UPDATE_USER_RESET })
        }

        if (error) {
            navigate('/')
            alert.error(error)
            dispatch(clearErrors())
        }

        if (updateError) {
            navigate('/admin/users')
            alert.error(updateError)
            dispatch(clearErrors())
        }

    }, [dispatch, alert, error, updateError, navigate, user, isUpdated])

    const updateHandler = e => {
        e.preventDefault()

        dispatch(userActions.updateUser(id, userDetails))
    }

    const onChange = e => {
        e.preventDefault()

        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <Metadata title={'Update Account'} />
            {loading ? <h1>Loading</h1>
                : <>
                    <form onSubmit={updateHandler}>
                        <Form id='mrgn'>
                            <h1>Update User Info</h1>
                            <br></br>
                            <Form.Group className="mb-3">
                                <Form.Label>First name</Form.Label>
                                <Form.Control type="text" name="first_name" value={first_name} onChange={onChange} placeholder="Enter first name" required/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control type="text" name="last_name" value={last_name} onChange={onChange} placeholder="Enter last name" required/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" value={email} name="email" onChange={onChange} required/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" value={username} name="username" onChange={onChange} required/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Category</Form.Label>
                                <Form.Select name="role" value={role} onChange={onChange} required>
                                    <option disabled>-</option>
                                    <option value={"Staff"}>Staff</option>
                                    <option value={"Admin"}>Admin</option>
                                </Form.Select>
                            </Form.Group>
                            {/* <input type="text" value={role} onChange={e => setRole(e.target.value)} name="role" required/> */}
                            <input class='updbtn' variant="primary" type="submit" value="Submit" disabled={updateLoading ? true : false} />
                        </Form>
                    </form>
                </>}
        </>
    )
}

export default UpdateUser
