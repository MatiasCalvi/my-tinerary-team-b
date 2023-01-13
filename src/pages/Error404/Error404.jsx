import React from "react";
import { NavLink } from "react-router-dom";
import GoTo from "../../components/GoTo/GoTo";
import "./error404.css";

export default function Error404() {
  return (
    <>
      <div className="mainError">
        <div className="divError">
          <h2>
            PAGE NOT FOUND<span className="blanco">.</span>
          </h2>
          <p className="parrafoError">
          Hello, we still do not have this section, we apologize from the MyItinerary team. If you have any questions, you can send us an email and we will reply to you as soon as possible.
          </p>
          <NavLink to={`/`} style={{ textDecoration: "none" }}>
            <GoTo texto="VOLVER"></GoTo>
          </NavLink>
        </div>
      </div>
    </>
  );
}