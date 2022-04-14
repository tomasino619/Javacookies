import React, { useState, useEffect } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useAlert } from 'react-alert'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, categoryActions } from '../../../actions'
import { categoryConstants } from '../../../constants'
import { useNavigate } from "react-router-dom"
import Metadata from "../../layout/Metadata"

const CreateCategory = () => {
    const dispatch = useDispatch()
    const alert = useAlert()
    const navigate = useNavigate()

    const { loading, error, isCreated } = useSelector(state => state.category)

    const [name, setName] = useState('')
    const [type, setType] = useState('')

    useEffect(() => {
        if (error) {
            alert.error(error)
            navigate('/admin/categories')
            dispatch(clearErrors())
        }

        if (isCreated) {
            navigate('/admin/categories')
            alert.success('Category successfully created')
            dispatch({ type: categoryConstants.NEW_CATEGORY_RESET })
        }
    }, [dispatch, error, isCreated, alert, navigate])

    const submitHandler = e => {
        e.preventDefault()
        dispatch(categoryActions.createCategory({ name, type }))
    }

    return (
        <>
        <Metadata title={"Create Category"} />
            <Container style={{ width: '50%' }}>
                <h1>New Category</h1>
                <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3">
                        <Form.Label>Category Name</Form.Label>
                        <Form.Control type="text" name="name" value={name} onChange={e => setName(e.target.value)} placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Category Type</Form.Label>
                    <div class="form-check">
                        <input className="form-check-input" type="radio" name="type" id="type1" value="Product" onChange={(e) => setType(e.target.value)} />
                        <label className="form-check-label" for="type">
                            Product
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="type" id="type2" value="Service" onChange={(e) => setType(e.target.value)} />
                        <label className="form-check-label" for="type">
                            Service
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="type" id="type2" value="Both" onChange={(e) => setType(e.target.value)} />
                        <label className="form-check-label" for="type">
                            Both
                        </label>
                    </div>
                </Form.Group>

                    <Button variant="primary" type="submit" disabled={loading ? true : false}>
                        Create
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default CreateCategory
