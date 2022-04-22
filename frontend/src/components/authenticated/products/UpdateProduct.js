import Metadata from "../../layout/Metadata"
import { Fragment, useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { categoryActions } from '../../../actions';
import { productsApi } from '../../api/productsApi';

const UpdateProduct = () => {

    const [product, setProduct] = useState({
        name: '',
        price: '',
        category: ''
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
    let {id} = useParams()

    useEffect(() => {
        let isMounted = true
        const fetchData = async () => {
            const {success, product} = await productsApi.getSingleData(id)
            if (success && isMounted) {
                setProduct(product)
            }
        }
        fetchData()
        return () => isMounted = false
    }, [])


    const submitHandler = async (e) => {
        e.preventDefault();

        var formData = new FormData()

        Object.keys(product).forEach(key => {
            formData.set(key, product[key])
        });
    
        images.map(image => formData.append('images', image))
        
        const { name, price, category } = product

        if (name && price && category && images) {
            try {
                const data = await productsApi.updateData(id, formData)
                if (data.success) {
                    alert.success('Product updated!')
                    navigate('/products')
                }
            }
            catch (error) {
                alert.error('Enter product details')
            }
        }
        else {
            alert.error('Enter product details')
        }
    }

    return (
        categoryList && product ?
        <Fragment>
            <Metadata title={"Update Product"} />
            <Form id='mrgn' onSubmit={submitHandler}>
                <h1>Update Product Info</h1>
                <br></br>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Category</Form.Label>
                    <Form.Select value={product.category} onChange={(e) => setProduct({ ...product, category: e.target.value })} required >
                        {categoryList && categoryList.map(category => (
                            <option value={category.name}>{category.name}</option>
                        ))}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" placeholder="Price" value={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value })} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Description" value={product.description} onChange={(e) => setProduct({ ...product, description: e.target.value })} />
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

export default UpdateProduct
