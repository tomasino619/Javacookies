import { product } from "prelude-ls"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { servicesApi } from "../api/servicesApi"
import { Carousel } from 'react-bootstrap'
import Metadata from "../layout/Metadata"

const ServiceDetails = () => {

    const [service, setService] = useState({})
    var {id} = useParams()

    useEffect(()=>{
        let isMounted = true
        const fetchData = async () => {
            const {success, service} = await servicesApi.getSingleData(id)
            if(success && isMounted){
                setService(service)
            }
        }
        fetchData()
        return () => isMounted = false
    }, [])

    return (
        <div class='row' id='product-info'>
             <Metadata title={"Service Details"} />
                <div id="photo-col">
                    <div class="header-title">
                        {service.name}
                    </div>
                    <Carousel>
                        {service?.images && service?.images.map(({path}) => (
                                    <Carousel.Item>
                                            <img src={path ? path :''} alt="First slide" id="photo-limit" className="img-fluid" />
                                    </Carousel.Item>
                        ))}
                    </Carousel>
                </div>

                <div class="col-sm">
                    <div id="text-detail">
                        <div id="fixed-text-cont">
                            <div class="category-detail">
                                {service.category}
                            </div>
                            <div class="name-detail">
                                {service.name}
                            </div>
                            <div class="price-detail">
                                <p>₱{service.price}</p>
                            </div>
                            <div className="underline-detail"></div>
                            <div class="description-detail">
                                {service.description}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ServiceDetails