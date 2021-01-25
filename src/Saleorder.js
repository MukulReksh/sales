import React from "react";
import "./Saleorder.css";
import { connect } from "react-redux";

class Saleorder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      phone: "",
      address: "",
      product: "",
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(e) {
    this.setState({ product: e.target.value });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const orderState = {
      fullname: this.state.fullname,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      product: this.state.product,
    };
    this.props.newSale(orderState);
    this.setState({
      fullname: "",
      email: "",
      phone: "",
      address: "",
      product: "",
    });
  }

  render() {
    return (
      <>
        <h2>Sale-Page</h2>
        <div className="sale-order">
          <form onSubmit={this.handleSubmit} className="ui form">
            <h2 className="ui dividing header">Sale order</h2>
            <div className="two fields">
              <div className="field">
                <label>fullname</label>
                <input
                  onChange={this.onChange}
                  value={this.state.fullname}
                  name="fullname"
                  type="text"
                />
              </div>
              <div className="grouped fields right floated">
                <label>Payment Method</label>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="example2"
                      defaultChecked="checked"
                      onChange={this.onChange}
                    />
                    <label>Online</label>
                  </div>
                </div>
                <div className="field">
                  <div className="ui radio checkbox">
                    <input
                      type="radio"
                      name="example2"
                      onChange={this.onChange}
                    />
                    <label>Cash</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="two fields">
              <div className="field">
                <label>Email ID</label>
                <input
                  type="email"
                  name="email"
                  onChange={this.onChange}
                  value={this.state.email}
                />
              </div>

              <div className="field">
                <label>Address</label>
                <input
                  name="address"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.address}
                />
              </div>
            </div>
            <div className="two fields">
              <div className="field">
                <label>Phone</label>
                <input
                  name="phone"
                  type="number"
                  onChange={this.onChange}
                  value={this.state.phone}
                />
              </div>
              <div className="field">
                <label>Choose A product</label>
                <select onChange={this.onSelect}>
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
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { productList: state.getData.productData };
};

const mapDispatchToProps = (dispatch) => {
  return {
    newSale: (val) => dispatch({ type: "NEW_DATA", newSaleItem: val }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Saleorder);
