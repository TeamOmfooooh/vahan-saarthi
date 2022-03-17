import React from "react";

export default function NavBar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          🚗
          {/* <img
            src="#"
            alt="vahan-saarthi logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          /> */}
          Vahan Saarthi
        </a>

        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
        </div>
      </div>
    </nav>
  );
}
