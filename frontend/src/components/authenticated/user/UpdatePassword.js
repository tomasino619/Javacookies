import React, { Fragment, useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { userActions, clearErrors } from '../../../actions'
import { userConstants } from '../../../constants'
import { useNavigate } from "react-router-dom"
import Metadata from '../../layout/Metadata'
import { Container, Form, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const UpdatePassword = () => {
    const alert = useAlert()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { error, isUpdated, loading } = useSelector(state => state.user)
    const { user } = useSelector(state => state.auth)

    const [oldPassword, setOldPassword] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    useEffect(() => {
        if(!user) {
            navigate('/')
            alert.error('Unable to access this page. Please log in first')
        }

        if (isUpdated) {
            navigate('/profile')
            alert.success('Password updated successfully')
            dispatch({
                type: userConstants.UPDATE_PASSWORD_RESET
            })
        }

        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }

    }, [dispatch, alert, error, isUpdated, user, navigate])

    const submitHandler = e => {
        e.preventDefault()

        dispatch(userActions.updatePassword({ oldPassword, password, confirmPassword }))
    }

    return (
        <body>
            <Metadata title={'Update Password'} />
            <Container fluid style={{ paddingTop: '50px' }}>
                <Card style={{ width: '25rem', margin: 'auto' }}>
                    <Card.Body>
            <form onSubmit={submitHandler}>
                <fieldset >
                        <Form.Group className="mb-3">
                            <legend>Change Password</legend>
                                <Form.Label>Old Password</Form.Label>
                                <Form.Control type="password" name="oldPassword" value={oldPassword} onChange={e => setOldPassword(e.target.value)} placeholder="old password" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>New Password</Form.Label>
                                <Form.Control type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="password"/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Confirm New Password</Form.Label>
                                <Form.Control type="password" name="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="confirm password"/>
                            </Form.Group>
                            <Button type="submit" value="Submit" disabled={loading ? true : false} >
                                Submit
                            </Button>
                            
                </fieldset>
                <Link to='/forgot-password'>Forgot password?</Link>
            </form>
            </Card.Body>
                </Card>
            </Container>
        </body>
    )
}

export default UpdatePassword
