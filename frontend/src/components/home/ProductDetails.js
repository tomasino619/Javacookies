import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { productsApi } from "../api/productsApi"
import { Carousel } from 'react-bootstrap'
import Footer from '../layout/Footer'

const ProductDetails = () => {

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
        <div class='row' id='product-info'>
                <div id="photo-col">
                    <div class="header-title">
                        {product.name}
                    </div>
                    <Carousel>
                        {product?.images && product?.images.map(({path}) => (
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
                                {product.category}
                            </div>
                            <div class="name-detail">
                                {product.name}
                            </div>
                            <div class="price-detail">
                                <p>₱{product.price}</p>
                            </div>
                            <div className="underline-detail"></div>
                            <div class="description-detail">
                                {product.description}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ProductDetails