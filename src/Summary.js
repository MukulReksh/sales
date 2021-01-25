import React, { useState } from "react";
import { connect } from "react-redux";

const Summary = ({ saleItem, purchaseItem }) => {
  const [newSaleItems, setnewSaleItems] = useState("");
  const [shipped, setShipped] = useState("");

  const handlePayment = (e) => {
    setnewSaleItems(e.target.value);
  };

  const renderItems = () => {
    alert(`Your payment status is being marked as: ${newSaleItems}`);
  };
  const handleShipping = (e) => {
    setShipped(e.target.value);
  };

  const handleSaleShipping = () => {
    alert(`Your product has been marked as ${shipped}`);
  };
  return (
    <>
      <h2>I am a summary page</h2>
      <h2>Sale Order Details</h2>
      <table className="ui single line table">
        <thead>
          <tr>
            <th>Order No </th>
            <th>Customer Name</th>
            <th>Product</th>
            <th>Full Address</th>
            <th>phone</th>
            <th>Status</th>
            <th>Get Details</th>
          </tr>
        </thead>
        <tbody>
          {saleItem
            ? saleItem.map((item, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{item.fullname}</td>
                  <td>{item.product}</td>
                  <td>{item.address}</td>
                  <td>{item.phone}</td>
                  <td>
                    <select onChange={handleShipping}>
                      <option>Selected Status</option>
                      <option>Shipped</option>
                      <option>Pending</option>
                    </select>
                  </td>
                  <td>
                    <button
                      onClick={handleSaleShipping}
                      className="ui primary button"
                    >
                      Get Details
                    </button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
      <hr />
      <h2>Purchase Order Details</h2>
      <table className="ui single line table">
        <thead>
          <tr>
            <th>S No </th>
            <th>Vendor Name</th>
            <th>Product</th>
            <th>Email Id </th>
            <th>Qty </th>
            <th>phone</th>
            <th>Status</th>
            <th>Get Details</th>
          </tr>
        </thead>
        <tbody>
          {purchaseItem
            ? purchaseItem.map((item, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{item.vendorname}</td>
                  <td>{item.product}</td>
                  <td>{item.email}</td>
                  <td>{item.qty}</td>
                  <td>{item.phone}</td>
                  <td>
                    <select onChange={handlePayment}>
                      <option>Choose Details</option>
                      <option>Payment sent</option>
                      <option>Payment Pending</option>
                    </select>
                  </td>
                  <td>
                    <button onClick={renderItems} className="ui primary button">
                      Get Details
                    </button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    saleItem: state.getData.saleData,
    purchaseItem: state.getData.purchaseData,
  };
};

export default connect(mapStateToProps)(Summary);
