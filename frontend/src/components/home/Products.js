import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";
import { productsApi } from "../api/productsApi";
import { categoryActions } from "../../actions";
import Footer from "../layout/Footer";
import Metadata from "../layout/Metadata";
import sortList from "./sort";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, categories, error } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(categoryActions.getCategories());

    let isMounted = true;
    const fetchData = async (category) => {
      const { success, products } = await productsApi.getAllData(category);
      if (success && isMounted) {
        setProducts(products);
      }
    };
    fetchData(category);
    return () => (isMounted = false);
  }, [category]);

  const [sortId, setSortId] = useState("");

  sortList(sortId, products);

  return (
    <>
      <Metadata title={"Products"} />
      <div className="product-col-container">
        {loading ? (
          <h1>Loading ... </h1>
        ) : (
          <>
            <div class="row" id="aboutheader">
              Products
            </div>

            <select
              name="category"
              id="category"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All Products</option>
              {categories &&
                categories.map(
                  (cat) =>
                    cat.type !== "Service" && (
                      <option
                        value={cat.name}
                        selected={category === cat.name ? true : false}
                      >
                        {cat.name}
                      </option>
                    )
                )}
            </select>
            <select
              name="sort"
              id="category"
              onChange={(e) => setSortId(e.target.value)}
            >
              <option selected disabled>
                Sort by
              </option>
              <option value="latest">Date (Latest)</option>
              <option value="oldest">Date (Oldest)</option>
              <option value="a-z">Name (A-Z)</option>
              <option value="z-a">Name (Z-A)</option>
              <option value="highest">Highest Price</option>
              <option value="lowest">Lowest Price</option>
            </select>

            <div id="product-area">
              <div className="card-container">
                {products.length > 0 ? (
                  products.map((product) => (
                    <>
                      <div class="row" id="product-card">
                        <div className="card" key={product._id}>
                          <div id="photo-container">
                            {product.images && (
                              <img
                                src={
                                  product?.images[0].path
                                    ? product.images[0].path
                                    : ""
                                }
                                className="img-fluid-showcase"
                              />
                            )}
                          </div>
                          <p className="parag">{product.name}</p>
                          <div id="divider-content">
                            <hr class="solid"></hr>
                          </div>
                          <p>{product.category}</p>
                          <p id="desc-limiter">{product.description}</p>
                          <p id="desc-limiter">₱{product.price}</p>
                          <div id="card-button">
                            <Link to={`/products/${product._id}`}>
                              <button>View</button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </>
                  ))
                ) : (
                  <h1 className="aboutimg">No Products Available</h1>
                )}
              </div>
            </div>
          </>
        )}
        <Footer />
      </div>
    </>
  );
};

export default Products;
