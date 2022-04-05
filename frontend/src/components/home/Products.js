import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { Link } from 'react-router-dom'
import { productsApi } from '../api/productsApi'
import { categoryActions  } from '../../actions'
import Footer from '../layout/Footer'

const Products = () => {
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState('')

    const dispatch = useDispatch()
    const alert = useAlert()

    const { loading, categories, error } = useSelector(state => state.categories)

    useEffect(() => {
        dispatch(categoryActions.getCategories())

        let isMounted = true;
        const fetchData = async (category) => {
            const { success, products } = await productsApi.getAllData(category)
            if (success && isMounted) {
                setProducts(products)
            }
        }
        fetchData(category)
        return () => isMounted = false
    }, [category])

    return (
        <>
            <div className='product-col-container'>
                {loading ? <h1>Loading ... </h1> : (
                    <>
                        <div class="row" id="aboutheader">
                            <h1>Products</h1>
                        </div>

                        <select name="category" id='category' onChange={e => setCategory(e.target.value)}>
                            <option value="">All Products</option>
                            {categories && categories.map(cat => ( 
                                cat.type !== 'Service' && <option value={cat.name} selected={category === cat.name ? true : false }>{cat.name}</option>
                            ))}
                        </select>
            
                        <div id="product-area">
                            <div className='card-container'>
                                {
                                    products.length > 0 ? products.map(product => (
                                        <>
                                            <div class='row' id='product-card'>   
                                                <div className='card' key={product._id}>
                                                    <div id='photo-container'>
                                                        {product.images && <img src={product?.images[0].path ? product.images[0].path : ''} className="img-fluid-showcase" />}
                                                    </div>
                                                    <p className='parag'>
                                                        {product.name}
                                                    </p>
                                                        <div id="divider-content">
                                                            <hr class="solid"></hr>
                                                        </div>
                                                    <p>
                                                        {product.category}
                                                    </p>
                                                        <p id='desc-limiter'>
                                                            {product.description}
                                                        </p>
                                                    <p>
                                                        ₱{product.price}
                                                    </p>
                                                        <div id='button-container'>
                                                            <Link to={`/products/${product._id}`}>
                                                                <button>View</button>
                                                            </Link>
                                                        </div>
                                                </div>
                                            </div> 
                                        </>
                                    ))
                                        : <h1 className='aboutimg'>No Products Available</h1>
                                }
                            </div >
                        </div>
                    </>
                )}
                <Footer/>
                    
            </div>
        </>
    )
}

export default Products
