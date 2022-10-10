import React from "react";
import "../css/style.css";
import logo from "../../public/assets/logo.svg";
import { footer_icon, social_icons } from "../../public/assets";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer_Item">
          <div className="footer_Logo">
            <img src={logo} alt="icon" />
          </div>
        </div>
        <div className="footer_Item">
          <span>PUFI RAIN</span>
          <br />
          <span>PUFI PUFF</span>
          <br />
          <span>PUFI CART</span>
          <br />
          <span>PUFI NAP</span>
        </div>
        <div className="footer_Item">
          <span>CONTACTO</span>
          <br />
          <span>AYUDA</span>
          <br />
          <span>CÓMO COMPRAR</span>
          <br />
          <span>TÉRMINOS & CONDICIONES</span>
        </div>
        <div className="footer_Item">
          <span>COMPRA 100% SEGURA</span>
          <br />
          <div className="footer_flexBox">
            <div className="footer_Icon">
              <img src={footer_icon} alt="shield" />
            </div>
            <label>COMPRÁ CON LA GARANTIA PUFI</label>
          </div>
        </div>
        <div className="footer_Item">
          <div className="footer_social">
            <label>SIGUENOS EN</label>&nbsp;
            <div className="footer_Icon">
              <img src={social_icons} alt="shield" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
