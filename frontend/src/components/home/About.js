import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { productsApi } from "../api/productsApi"

const About = () => {

    const [product, setProduct] = useState({})
    var { id } = useParams()

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

    return (
        <div>
            {product.images && product.images.map(image => <img src={image.path ? image.path : ''} className="img-fluid" /> )}
            {product.name}
            {product.category}
            {product.price}
        </div>
    )
}

export default About