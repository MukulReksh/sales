import React from "react";
import "./purchaseorder.css";
import { connect } from "react-redux";

class Purchaseorder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vendorname: "",
      email: "",
      phone: "",
      qty: "",
      product: "",
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSelect(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const vendorOrder = {
      vendorname: this.state.vendorname,
      email: this.state.email,
      phone: this.state.phone,
      qty: this.state.qty,
      product: this.state.product,
    };
    this.props.newOrder(vendorOrder);
    this.setState({
      vendorname: "",
      email: "",
      phone: "",
      qty: "",
      product: "",
    });
    alert("You have ordered few products from the vendor list");
  }

  render() {
    return (
      <div className="purchase-order">
        <div className="purchase-details">
          <h2>Items Needed</h2>
          <form onSubmit={this.handleSubmit} className="ui form">
            <h2 className="ui dividing header">Sale order</h2>
            <div className="two fields">
              <div className="field">
                <label>Select Vendor</label>
                <select name="vendorname" onChange={this.onSelect}>
                  <option>Select A Vendor</option>
                  {this.props.vendorData.map((item, index) => (
                    <option key={index}>{item.name}</option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label>Payment Mode</label>
                <div className="grouped fields right floated">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="example2"
                      defaultChecked="checked"
                    />
                    <label>Online</label>
                  </div>
                </div>
                <div className="ui radio checkbox">
                  <input type="radio" name="example2" />
                  <label>Cash</label>
                </div>
              </div>
            </div>
            <div className="two fields">
              <div className="field">
                <label>Email ID</label>
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>

              <div className="field">
                <label>Qty</label>
                <select name="qty" onChange={this.onSelect}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
            <div className="two fields">
              <div className="field">
                <label>Phone</label>
                <input
                  name="phone"
                  type="number"
                  value={this.state.phone}
                  onChange={this.onChange}
                />
              </div>
              <div className="field">
                <label>Choose A product</label>
                <select name="product" onChange={this.onSelect}>
                  <option>Choose a Product</option>
                  {this.props.productList.map((item, index) => (
                    <option key={index}>{item.product}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="field">
              <button className="huge ui button" type="submit">
                Make a Order
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    vendorData: state.getData.vendorData,
    productList: state.getData.productData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    newOrder: (val) =>
      dispatch({ type: "VENDOR_PURCHASE", newPurchaseData: val }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Purchaseorder);
