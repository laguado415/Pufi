import React from "react";
import "../css/style.css";
import logo from "../../public/assets/logo.svg";
import { cart, nap, puff, umbrella } from "../../public/assets";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div>
        <Link to={"/"}>
          <div className="nav_Logo">
            <img src={logo} alt="Logo" />
          </div>
        </Link>
        <div className="nav_Menu">
          <div className="nav_Item">
            <div className="nav_Icon">
              <img src={puff} alt="Cart" />
            </div>
            <label>PUFI PUFF</label>
          </div>
          <div className="nav_Item">
            <div className="nav_Icon">
              <img src={umbrella} alt="Cart" />
            </div>
            <label>PUFI RAIN</label>
          </div>
          <div className="nav_Item">
            <div className="nav_Icon">
              <img src={cart} alt="Cart" />
            </div>
            <label>PUFI CART</label>
          </div>
          <div className="nav_Item">
            <div className="nav_Icon">
              <img src={nap} alt="Cart" />
            </div>
            <label htmlFor="nap">PUFI NAP</label>
          </div>
        </div>
        <div className="nav_MyCount">
          <label>MI CUENTA</label>
          &nbsp;
          {"|"}
          &nbsp;
          <label>MI COMPRA</label>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
