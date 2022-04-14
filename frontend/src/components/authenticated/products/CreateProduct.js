import Metadata from "../../layout/Metadata"
import { Fragment, useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { categoryActions } from '../../../actions';
import { useNavigate } from 'react-router-dom';
import { productsApi } from '../../api/productsApi';

const CreateProduct = () => {


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

    const alert = useAlert()
    const navigate = useNavigate()


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
                const data = await productsApi.createData(formData)
                if (data.success) {
                    alert.success('Product created!')
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
        categoryList ?
        <Fragment>
            <Metadata title={"Create Product"} />
            <Form id='mrgn' onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail"> 
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Category</Form.Label>
                    <Form.Select value={product.category} onChange={(e) => setProduct({ ...product, category: e.target.value })} required>
                        <option selected>-</option>
                        {categoryList && categoryList.map(category => (
                            category?.type !== 'Service' && <option value={category.name}>{category.name}</option>
                        ))}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" placeholder="Price" value={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value })} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Description" value={product.description} onChange={(e) => setProduct({ ...product, description: e.target.value })} required />
                </Form.Group>                

                <Form.Group controlId="formFileMultiple" className="mb-3">
                    <Form.Label>Multiple files input example</Form.Label>
                    <Form.Control type="file" multiple onChange={(e) => setImages(Array.from(e.target.files))} required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Fragment >
        :<>Loading</>
    )
}

export default CreateProduct
