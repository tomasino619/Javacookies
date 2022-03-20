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
            {loading ? <h1>Loading ... </h1> : (
                <>
                    <select name="category" onChange={e => setCategory(e.target.value)}>
                        <option value="">-</option>
                        {categories && categories.map(cat => ( 
                            cat.type !== 'Service' && <option value={cat.name} selected={category === cat.name ? true : false }>{cat.name}</option>
                        ))}
                    </select>
                    <div className='card-container'>
                        {
                            products.length > 0 ? products.map(product => (
                                <>
                                    <div className='card' key={product._id}>
                                        <img src={product?.images[0].path ? product.images[0].path : ''} className="img-fluid" />
                                        <p>{product.name}</p>
                                        <p>{product.category}</p>
                                        <p>{product.price}</p>
                                        <Link to={`/products/${product._id}`}>
                                            <button>View</button>
                                        </Link>

                                    </div>
                                </>
                            ))
                                : <>No Products</>
                        }
                    </div >
                </>
            )}
            <Footer/>
        </>
    )
}

export default Products
