
import React from "react";
import { Link as NavLink } from "react-router-dom";


export default function CallToAction(props) {
  let { page, rute } = props;
  console.log(rute);
  return (
    <NavLink to={rute}>
      <a href="#" className="btn btn-white btn-animated">{page}</a>
    </NavLink>
  );
}