// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React, { useEffect, useState } from "react";
import "../../css/style.css";
import { useForm, ValidationError } from "@formspree/react";
import { beanbag } from "../../../public/assets";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xdojdkyg");
  const [submit, setSubmit] = useState(false);
  const [change, setChage] = useState({
    email: "",
    message: "",
  });

  useEffect(() => {
    if (localStorage.getItem("email")) {
      setChage({ ...change, email: localStorage.getItem("email") });
      localStorage.clear();
    }
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setChage({ ...change, [e.target.name]: e.target.value });
  };

  const handleMessage = () => {
    setSubmit(true);
    setChage({
      email: "",
      message: "",
    });
  };

  return (
    <div className="format">
      <div>
        <img src={beanbag} alt="baenbag" />
      </div>
      <form onSubmit={handleSubmit} className="form">
        {submit && (
          <div className={state.succeeded ? "sucess" : "error"}>
            <p>
              {state.succeeded
                ? "Suscrito correctamente"
                : "Error al suscribir"}
            </p>
          </div>
        )}
        <label htmlFor="email">Correo electronico</label>
        <input
          id="email"
          type="email"
          name="email"
          onChange={handleChange}
          value={change.email}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          onChange={handleChange}
          value={change.message}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        {change.email && (
          <button
            type="submit"
            disabled={state.submitting}
            onClick={handleMessage}
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
}
