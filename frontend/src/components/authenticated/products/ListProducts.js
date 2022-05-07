import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";
import { productsApi } from "../../api/productsApi";
import Metadata from "../../layout/Metadata";
import { MDBDataTableV5 } from "mdbreact";

const ListProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const alert = useAlert();

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      setLoading(true);
      const { success, products } = await productsApi.getAllData();
      if (success && isMounted) {
        setProducts(products);
        setLoading(false);
      } else {
        setLoading(false);
      }
    };
    fetchData();
    return () => (isMounted = false);
  }, []);

  const deleteData = async (id) => {
    const data = await productsApi.deleteData(id);
    if (data.success) {
      alert.success("Product Deleted");
      setProducts(products.filter((product) => product._id !== id));
    }
  };

  const setData = () => {
    const data = {
      columns: [
        {
          label: "ID",
          field: "id",
        },
        {
          label: "Image",
          field: "image",
        },
        {
          label: "Name",
          field: "name",
        },
        {
          label: "Category",
          field: "category",
        },
        {
          label: "Price",
          field: "price",
        },
        {
          label: "Description",
          field: "description",
        },
        {
          label: "Actions",
          field: "actions",
        },
      ],
      rows: [],
    };

    products &&
      products.forEach((product, index) => {
        const { price, name, description, category, _id } = product;
        data.rows.push({
          id: _id,
          image: (
            <img
              src={product?.images[0].path ? product.images[0].path : ""}
              className="img-fluid-main"
              width="50px"
            />
          ),
          name: name,
          category: category,
          price: price,
          description: description,
          actions: (
            <div>
              <Link to={`/products/${_id}`}>
                <button id="buttonsMain">View</button>
              </Link>
              <Link to={`/admin/product/${_id}`}>
                <button id="buttonsMain">Edit</button>
              </Link>
              <button onClick={() => deleteData(_id)} id="buttonsMain">
                Delete
              </button>
            </div>
          ),
        });
      });

    return data;
  };

  return (
    <>
      <Metadata title={"View Products"} />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <center>
          <h1>Products</h1>
          <MDBDataTableV5
            hover
            entriesOptions={[5, 20, 25]}
            entries={5}
            pagesAmount={4}
            data={setData()}
            fullPagination
            searchTop
            searchBottom={false}
          />
        </center>

        // <div className="tableAreaMain">
        //   <h1>Products</h1>
        //   <div className="card-container">
        //     <table className="tableMain">
        //       <thead id="tableHeader">
        //         <th>ID</th>
        //         <th>Image</th>
        //         <th>Name</th>
        //         <th>Category</th>
        //         <th>Price</th>
        //         <th>Description</th>
        //         <th>Actions</th>
        //       </thead>
        //       <tbody align="center">
        //         {products.length > 0 ? (
        //           products.map((product) => (
        //             <tr key={product._id} className="contentSpace">
        //               <td>{product._id}</td>
        //               <td>
        //                 <img
        //                   src={
        //                     product?.images[0].path
        //                       ? product.images[0].path
        //                       : ""
        //                   }
        //                   className="img-fluid-main"
        //                   width="50px"
        //                 />
        //               </td>
        //               <td>{product.name}</td>
        //               <td>{product.category}</td>
        //               <td>{product.price}</td>
        //               <td id="desc-limiter-main">{product.description}</td>
        //               <td>
        //                 <Link to={`/products/${product._id}`}>
        //                   <button id="buttonsMain">View</button>
        //                 </Link>
        //                 <Link to={`/admin/product/${product._id}`}>
        //                   <button id="buttonsMain">Edit</button>
        //                 </Link>
        //                 <button
        //                   onClick={() => deleteData(product._id)}
        //                   id="buttonsMain"
        //                 >
        //                   Delete
        //                 </button>
        //               </td>
        //             </tr>
        //           ))
        //         ) : (
        //           <>No Products</>
        //         )}
        //       </tbody>
        //     </table>
        //   </div>
        // </div>
      )}
    </>
  );
};

export default ListProducts;
