import { product } from "prelude-ls"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { servicesApi } from "../api/servicesApi"

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
                <div id="photo-col">
                    {service.images && service.images.map(image => <img src={image.path ? image.path : ''} className="img-fluid" id="photo-limit" /> )}
                </div>

                <div class="col-sm" id="text-col">
                    <div id="fixed-text">
                        <div id="fixed-text-cont">
                            <div>
                                {service.name}
                            </div>

                            <div>
                                {service.category}
                            </div>

                            <div>
                            <p>₱{service.price}</p>
                            </div>

                            <div>
                                {service.description}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ServiceDetails