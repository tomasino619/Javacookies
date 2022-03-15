import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { Link } from 'react-router-dom'
import { servicesApi } from '../api/servicesApi'
import { categoryActions } from '../../actions'

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
            {loading ? <h1>Loading ... </h1> : (
                <>
                    <select name="category" onChange={e => setCategory(e.target.value)}>
                        <option value="">-</option>
                        {categories && categories.map(cat => ( 
                            cat.type !== 'Product' && <option value={cat.name} selected={category === cat.name ? true : false }>{cat.name}</option>
                        ))}
                    </select>
                    <div className='card-container'>
                        {
                            services.length > 0 ? services.map(service => (
                                <div className='card' key={service._id}>
                                    <img src={service?.images[0].path ? service.images[0].path : ''} className="img-fluid" />
                                    <p>{service.name}</p>
                                    <p>{service.category}</p>
                                    <p>{service.price}</p>
                                    <Link to={`/services/${service._id}`}>
                                        <button>View</button>
                                    </Link>
                                </div>
                            ))
                            : <>No Services</>
                        }
                    </div >
                </>
            )}
        </>
    )
}

export default Services
