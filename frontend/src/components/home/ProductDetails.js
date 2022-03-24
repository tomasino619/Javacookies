import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { productsApi } from "../api/productsApi"

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
                    {product.images && product.images.map(image => <img src={image.path ? image.path : ''} className="img-fluid" id="photo-limit"/> )}
                </div>

                <div class="col-sm" id="text-col">
                    <div id="fixed-text">
                        <div id="fixed-text-cont">
                            <div>
                                {product.name}
                            </div>

                            <div>
                                {product.category}
                            </div>

                            <div>
                                <p>₱{product.price}</p>
                            </div>

                            <div>
                                {product.description}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ProductDetails