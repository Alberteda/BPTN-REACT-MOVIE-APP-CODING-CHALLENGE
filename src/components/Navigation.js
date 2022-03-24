import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">
              {" "}
              <h1>BPTN Movies</h1>
            </Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/liked">Likes</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
