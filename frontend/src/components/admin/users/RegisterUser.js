import React, { useState, useEffect } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useAlert, } from 'react-alert'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, userActions } from '../../../actions'
import { userConstants } from '../../../constants'
import Metadata from '../../layout/Metadata'

const RegisterUser = () => {
    const dispatch = useDispatch()
    const alert = useAlert()
    const navigate = useNavigate()

    const { loading, error, isCreated } = useSelector(state => state.user)

    const [staff, setStaff] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const { first_name, last_name, username, email, password, confirmPassword } = staff

    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }

        if (isCreated) {
            navigate('/')
            alert.success('User successfully created')
            dispatch({ type: userConstants.REGISTER_USER_RESET })
        }
    }, [dispatch, error, isCreated, alert, navigate])
    const submitHandler = e => {
        e.preventDefault()

        dispatch(userActions.register(staff, 'staff'))
    }

    const onChange = e => {
        e.preventDefault()

        setStaff({
            ...staff,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <Metadata title={'Register Account'} />
            <Container style={{ width: '50%' }}>
                <h1>Register Staff</h1>
                <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3">
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text" name="first_name" value={first_name} onChange={onChange} placeholder="Enter first name" required/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control type="text" name="last_name" value={last_name} onChange={onChange} placeholder="Enter last name" required/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" value={email} onChange={onChange} placeholder="Enter email" required/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" name="username" value={username} onChange={onChange} placeholder="Enter username" required/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" value={password} onChange={onChange} placeholder="Password" required/>
                        <Form.Control type="password" name="confirmPassword" value={confirmPassword} onChange={onChange} placeholder="Confirm Password" required/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Register
                </Button>
                </Form>
            </Container>
        </>
    )
}

export default RegisterUser
