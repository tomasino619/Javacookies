import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { Link } from 'react-router-dom'
import { servicesApi } from '../../api/servicesApi'

const ListServices = () => {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(false)

    const alert = useAlert()

    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            setLoading(true)

            const { success, services } = await servicesApi.getAllData()
            if (success && isMounted) {
                setServices(services)
                setLoading(false)
            } else {
                setLoading(false)
            }
        }
        fetchData()
        return () => isMounted = false
    }, [])

    const deleteData = async (id) => {
        const data = await servicesApi.deleteData(id)
        if (data.success) {
            alert.success("Service Deleted")
            setServices(services.filter(service => service._id !== id))
        }
    }

    return (
        <>
            { loading ? <h1>Loading...</h1> : (
                <>
                    <h1>Services</h1>
                    <div className='card-container'>
                        <table>
                            <thead>
                                <th>ID</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </thead>
                            <tbody>
                                {services.length > 0 ? services.map(service => (
                                    <tr key={service._id}>
                                        <td>{service._id}</td>
                                        <td>
                                            <img src={service?.images[0].path ? service.images[0].path : ''} className="img-fluid" width="50px" />
                                        </td>
                                        <td>{service.name}</td>
                                        <td>{service.category}</td>
                                        <td>{service.price}</td>
                                        <td>
                                            <Link to={`/services/${service._id}`}>
                                                <button>View</button>
                                            </Link>
                                            <Link to={`/admin/service/${service._id}`}>
                                                <button>Edit</button>
                                            </Link>
                                            <button onClick={() => deleteData(service._id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                                    : <>No services</>
                                }
                            </tbody>

                        </table>
                    </div >
                </>
            )}
        </>
    )
}

export default ListServices
