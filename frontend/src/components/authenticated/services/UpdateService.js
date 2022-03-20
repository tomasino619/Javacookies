import { Fragment, useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { categoryActions } from '../../../actions';
import { servicesApi } from '../../api/servicesApi';

const UpdateService = () => {

    const [service, setService] = useState({
        name: '',
        price: '',
        category: '',
    })
    const [images, setImages] = useState([])

    const { loading, categories, error } = useSelector(state => state.categories)
    const [categoryList, setCategoryList] = useState(categories)
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(categoryActions.getCategories())
    }, [])

    useEffect(() => {
        setCategoryList(categories)
    }, [loading])

    const alert = useAlert()
    const navigate = useNavigate()
    var {id} = useParams()

    useEffect(() => {
        let isMounted = true
        const fetchData = async () => {
            const {success, service} = await servicesApi.getSingleData(id)
            if (success && isMounted) {
                setService(service)
            }
        }
        fetchData()
        return () => isMounted = false
    }, [])

    const submitHandler = async (e) => {
        e.preventDefault(); 

        var formData = new FormData()

        Object.keys(service).forEach(key => {
            formData.set(key, service[key])
        });
    
        images.map(image => formData.append('images', image))
        const {name, price, category} = service

        if(name && price && category){
            try{
                const data = await servicesApi.updateData(id, formData)
                if(data.success){
                    alert.success('Service updated!')
                    navigate('/services')
                }
            }
            catch(error){
                alert.error('Enter service details')
            }
        }
        else{
            alert.error('Enter service details')
        }
    }

    return (
        categoryList && service ?
        <Fragment>
            <Form  onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" value={service.name} onChange={(e) => setService({...service, name: e.target.value})} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Category</Form.Label>
                    <Form.Select value={service.category} onChange={(e) => setService({ ...service, category: e.target.value })} required>
                        {categoryList && categoryList.map(category => (
                            <option value={category.name}>{category.name}</option>
                        ))}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" placeholder="Price" value={service.price} onChange={(e) => setService({...service, price: e.target.value})} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Category</Form.Label>
                    <Form.Control type="text" placeholder="Category" value={service.category} onChange={(e) => setService({...service, category: e.target.value})} required />
                </Form.Group>

                <Form.Group controlId="formFileMultiple" className="mb-3">
                    <Form.Label>Multiple files input</Form.Label>
                    <Form.Control type="file" multiple onChange={(e) => setImages(Array.from(e.target.files))} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Fragment >
                : <>Loading</>
    )
}

export default UpdateService
