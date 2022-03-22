import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { Link } from 'react-router-dom'
import { servicesApi } from '../api/servicesApi'
import { categoryActions } from '../../actions'
import Footer from '../layout/Footer'
import { product } from 'prelude-ls'

const Services = () => {
    const [services, setServices] = useState([])
    const [category, setCategory] = useState('')
    
    const dispatch = useDispatch()
    const alert = useAlert()

    const { loading, categories, error } = useSelector(state => state.categories)

    useEffect(() => {
        dispatch(categoryActions.getCategories())
        
        let isMounted = true;
        const fetchData = async (category) => {
            const {success, services} = await servicesApi.getAllData(category)
            if (success && isMounted) {
                setServices(services)
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
                            <h1>Services</h1>
                        </div>

                        <select name="category" id='category' onChange={e => setCategory(e.target.value)}>
                            <option value="">All Services</option>
                            {categories && categories.map(cat => ( 
                                cat.type !== 'Product' && <option value={cat.name} selected={category === cat.name ? true : false }>{cat.name}</option>
                            ))}
                        </select>

                        <div id="product-area">       
                            <div className='card-container'>
                                {
                                    services.length > 0 ? services.map(service => (
                                        <>
                                            <div class='row' id='product-card'>
                                                <div className='card' key={service._id}>
                                                    <div id='photo-container'>
                                                        {service.images && <img src={service?.images[0].path ? service.images[0].path : ''} className="img-fluid-showcase" />}
                                                    </div>
                                                    <p>{service.name}</p>
                                                    <div id="divider-content">
                                                        <hr class="solid"></hr>
                                                    </div>
                                                    <p>{service.category}</p>
                                                    <p>{service.price}</p>
                                                    <Link to={`/services/${service._id}`}>
                                                        <button>View</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </>
                                    ))
                                        : <>No Services</>
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

export default Services
