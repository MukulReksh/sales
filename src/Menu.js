import React from "react";
import "./menu.css";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div className="main-menu">
      <div className="main-menu-logo">
        <Link to="/" className="item">
          <h1>
            <i className="logo eject icon"></i>Order Management
          </h1>
        </Link>
      </div>

      <div className="ui secondary vertical menu">
        <div className="four wide column">
          <Link to="/" className="item">
            <i className=" pen square icon"></i> Sale Order
          </Link>
          <Link to="/purchaseorder" className="item">
            <i className="briefcase icon"></i> Purchase Order
          </Link>
          <Link to="/summary" className="item">
            <i className="lightbulb icon"></i>Summary
          </Link>
          <hr />
           <Link to="/signout" className="item">
            <i className="sign-out icon"></i> Sign Out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
