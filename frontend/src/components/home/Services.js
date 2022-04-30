import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";
import { servicesApi } from "../api/servicesApi";
import { categoryActions } from "../../actions";
import Footer from "../layout/Footer";
import { product } from "prelude-ls";
import Metadata from "../layout/Metadata";
import sortList from "./sort";

const Services = () => {
  const [services, setServices] = useState([]);
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
      const { success, services } = await servicesApi.getAllData(category);
      if (success && isMounted) {
        setServices(services);
      }
    };
    fetchData(category);
    return () => (isMounted = false);
  }, [category]);

  const [sortId, setSortId] = useState("");

  sortList(sortId, services)

  return (
    <>
      <Metadata title={"Services"} />
      <div className="product-col-container">
        {loading ? (
          <h1>Loading ... </h1>
        ) : (
          <>
            <div class="row" id="aboutheader">
              Services
            </div>

            <select
              name="category"
              id="category"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All Services</option>
              {categories &&
                categories.map(
                  (cat) =>
                    cat.type !== "Product" && (
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
                {services.length > 0 ? (
                  services.map((service) => (
                    <>
                      <div class="row" id="product-card">
                        <div className="card" key={service._id}>
                          <div id="photo-container">
                            {service.images && (
                              <img
                                src={
                                  service?.images[0].path
                                    ? service.images[0].path
                                    : ""
                                }
                                className="img-fluid-showcase"
                              />
                            )}
                          </div>
                          <p>{service.name}</p>
                          <div id="divider-content">
                            <hr class="solid"></hr>
                          </div>
                          <p>{service.category}</p>
                          <p id="desc-limiter">{service.description}</p>
                          <p id="desc-limiter">₱{service.price}</p>
                          <div id="card-button">
                            <Link to={`/services/${service._id}`}>
                              <button>View</button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </>
                  ))
                ) : (
                  <>No Services</>
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

export default Services;
