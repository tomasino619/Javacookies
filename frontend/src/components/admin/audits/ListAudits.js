import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auditActions, clearErrors } from "../../../actions";
import { MDBDataTableV5 } from "mdbreact";

const ListAudits = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const { loading, audits, error } = useSelector((state) => state.audits);

  useEffect(() => {
    dispatch(auditActions.getAudits());

    if (error) {
      alert.error(error);
      navigate("/");
      dispatch(clearErrors());
    }
  }, [dispatch, alert, error]);

  const setData = () => {
    const data = {
      columns: [
        {
          label: "Audit #",
          field: "audit_number",
        },
        {
          label: "ID",
          field: "id",
        },
        {
          label: "Date",
          field: "date",
        },
        {
          label: "Name",
          field: "name",
        },
        {
            label: "Description",
            field: "description",
          },
        {
          label: "Created By",
          field: "created_by",
        },
        {
            label: "Status",
            field: 'status'
        }
      ],
      rows: [],
    };

    audits &&
      audits.forEach((audit, index) => {
        const { date, name, description, created_by, _id, status } = audit;
        data.rows.push({
          audit_number: index + 1,
          id: _id,
          date,
          name,
          description,
          created_by,
          status: <p style={status === 'Active' ? { color: 'green' } : { color: 'red' }}>{status}</p>
        });
      });

    return data;
  };

  return (
    <center>
      <h1>Audit Log</h1>
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
    //   {loading ? (
    //     <h1>Loading...</h1>
    //   ) : audits ? (
    //     <>
    //       <h1>Audit Log</h1>
    //       <table className="tableMain">
    //         <thead id="tableHeader">
    //           <th>Date</th>
    //           <th>Name</th>
    //           <th>Description</th>
    //           <th>Created By</th>
    //         </thead>
    //         <tbody align="center">
    //           {audits &&
    //             audits.map((audit) => (
    //               <>
    //                 <tr className="contentSpace">
    //                   <td>{audit.date}</td>
    //                   <td>{audit.name}</td>
    //                   <td>{audit.description}</td>
    //                   <td>{audit.created_by}</td>
    //                 </tr>
    //               </>
    //             ))}
    //         </tbody>
    //       </table>
    //     </>
    //   ) : (
    //     <h1>No audits found</h1>
    //   )}
    // </div>
  );
};

export default ListAudits;
