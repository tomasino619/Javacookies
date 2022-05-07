import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { categoryActions, clearErrors } from "../../../actions";
import { categoryConstants } from "../../../constants";
import Metadata from "../../layout/Metadata";
import { MDBDataTableV5 } from "mdbreact";

const ListCategories = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const { loading, categories, error } = useSelector(
    (state) => state.categories
  );
  const {
    loading: deleteLoading,
    isDeleted,
    error: deleteError,
  } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(categoryActions.getCategories());

    if (error) {
      alert.error(error);
      navigate("/");
      dispatch(clearErrors());
    }

    if (deleteError) {
      navigate("/admin/categories");
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success("Category has been deleted");

      dispatch({ type: categoryConstants.DELETE_CATEGORY_RESET });
    }
  }, [dispatch, deleteError, alert, isDeleted, error]);

  const deleteHandler = (id) => {
    dispatch(categoryActions.deleteCategory(id));
  };

  const setData = () => {
    const data = {
      columns: [
        {
            label: "Name",
            field: "name",
          },
        {
          label: "Type",
          field: "type",
        },
        {
          label: "Created By",
          field: "created_by",
        },
      ],
      rows: [],
    };

    categories &&
      categories.forEach((category, index) => {
        const { type, name, created_by } = category;
        data.rows.push({
          name: name,
          type: type,
          created_by: created_by,
        });
      });

    return data;
  };

  return (
    <>
      <Metadata title={"View Categories"} />
      {loading ? (
        <h1>Loading...</h1>
      ) : categories ? (
        <center>
          <h1>Category List</h1>
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
      ) : (
        // <div className="tableArea">
        //   <h1>Category List</h1>
        //   <table className="table">
        //     <thead id="tableHeader">
        //       <th>Name</th>
        //       <th>Type</th>
        //       <th>Created By</th>
        //       <th>Actions</th>
        //     </thead>
        //     <tbody align="center">
        //       {categories &&
        //         categories.map((category) => (
        //           <>
        //             <tr>
        //               <td>{category.name}</td>
        //               <td>{category.type}</td>
        //               <td>{category.created_by}</td>
        //               <td>
        //                 <button
        //                   onClick={() => {
        //                     deleteHandler(category._id);
        //                   }}
        //                   disabled={deleteLoading ? true : false}
        //                 >
        //                   Delete
        //                 </button>
        //               </td>
        //             </tr>
        //           </>
        //         ))}
        //     </tbody>
        //   </table>
        // </div>
        <h1>No categories found</h1>
      )}
    </>
  );
};

export default ListCategories;
