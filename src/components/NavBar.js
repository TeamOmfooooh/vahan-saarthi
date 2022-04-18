import React from "react";
export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a to={"/"} className="navbar-brand" href="/">
          <img src={require("../images/32.png")} alt="logo" />
          Vahan Saarthi
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                href="/potholeregistration"
              >
                Report{" "}
                <i
                  className="bi bi-exclamation-triangle-fill"
                  style={{ color: "red" }}
                ></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Admin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
