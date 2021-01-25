import React from "react";
import { connect } from "react-redux";
const AddOrder = ({ orderdata }) => {
  return (
    <>
      <table className="ui single line table">
        <thead>
          <tr>
            <th>S.N0</th>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* <td>{1}</td>
            <td>{orderdata.fullname}</td>
            <td>{orderdata.email}</td>
            <td>{orderdata.phone}</td>
            <td>{orderdata.Address}</td> */}
          </tr>
        </tbody>
      </table>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { orderdata: state.form };
};

export default connect(mapStateToProps)(AddOrder);
