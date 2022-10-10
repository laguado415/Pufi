import React, { useEffect, useState } from "react";
import "../../css/style.css";
import Slider from "./slider";
import { AiOutlineArrowRight } from "react-icons/ai";
import {
  collage,
  puff_1,
  puff_2,
  puff_3,
  puff_4,
  puff_icon1,
  puff_icon2,
  puff_icon3,
  puff_icon4,
} from "../../../public/assets";
import { Link, useNavigate } from "react-router-dom";

const images = ["puff_One.jpeg", "puff_Two.jpeg", "puff_Three.jpg"];

export default function Home() {
  const [state, setState] = useState({
    email: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setState({ ...state, email: e.target.value });
  };

  const handleSubmit = () => {
    localStorage.setItem("email", `${state.email}`);
    setState({ email: "" });
    navigate("/contact");
  };

  useEffect(() => {
    scrollTop();
  }, []);

  const scrollTop = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <section>
      <div className="home">
        <Slider images={images} />
      </div>
      <div className="double">
        <div>
          <div className="overlay_image">
            <img src={puff_1} alt="puff_1" />
          </div>
          <div className="overlay_text">
            <button>Shop</button>
          </div>
        </div>
        <div className="view_More">
          <div className="icon">
            <img src={puff_icon2} alt="icon" />
          </div>
          <h2>pufi RAIN</h2>
          <p>Descripción del producto. Este es un texto simulado</p>
          <Link to={"/rain"}>
            <button> {">"} MÁS INFO </button>
          </Link>
        </div>
      </div>
      <div className="double">
        <div className="view_More">
          <div className="icon">
            <img src={puff_icon1} alt="icon" />
          </div>
          <h2>pufi PUFF</h2>
          <p>Descripción del producto. Este es un texto simulado</p>
          <Link to={"/puff"}>
            <button> {">"} MÁS INFO </button>
          </Link>
        </div>
        <div>
          <img src={puff_2} alt="puff_1" />
        </div>
      </div>
      <div className="double">
        <div>
          <img src={puff_3} alt="puff_1" />
        </div>
        <div className="view_More">
          <div className="icon">
            <img src={puff_icon3} alt="icon" />
          </div>
          <h2>pufi CART</h2>
          <p>Descripción del producto. Este es un texto simulado</p>
          <Link to={"/cart"}>
            <button> {">"} MÁS INFO </button>
          </Link>
        </div>
      </div>
      <div className="double">
        <div className="view_More">
          <div className="icon">
            <img src={puff_icon4} alt="icon" />
          </div>
          <h2>pufi NAP</h2>
          <p>Descripción del producto. Este es un texto simulado</p>
          <Link to={"/nap"}>
            <button> {">"} MÁS INFO </button>
          </Link>
        </div>
        <div>
          <img src={puff_4} alt="puff_1" />
        </div>
      </div>
      <div className="collage">
        <span>INSTAGRAM</span>
        <div>
          <label>#SPUFI</label>
        </div>
        <div>
          <img src={collage} alt="callage" />
        </div>
      </div>
      <div className="news_Letter">
        <span className="title">NEWSLETTER</span>
        <label>SUSCRIBETE</label>
        <span>Y enterate de todas las novedades</span>
        <div>
          <input
            type={"email"}
            onChange={handleChange}
            value={state.email}
            placeholder="Ingresa tu email"
          />
          <button type="submit" onClick={handleSubmit}>
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
