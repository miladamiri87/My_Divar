import React from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";


export default function (props) {
  console.log(props);

  return (
    <div>
      <div className="card">
        <img
          src="https://placehold.co/400"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Category: {props.title}</h5>
          <p className="card-text">Brand Name : {props.product}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{props.price}</li>
        </ul>
        <div className="card-body">
          <NavLink to={`/id/${props.id}`} key={props.id}>
            Show Details
          </NavLink>
        </div>
      </div>
    </div>
  );
}
