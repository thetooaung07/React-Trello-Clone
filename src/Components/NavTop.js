import React from "react";
import "./NavTop.css";
import Logo from "./Logo";

function NavTop({ isLoading }) {
  return (
    <nav id="first-nav" className="d-flex justify-content-between text-light first-nav">
      <div className="d-flex">
        <button className="btn btn-sm text-light m-1"><i className="fa fa-th-large"></i></button>
        <button className="btn btn-sm text-light m-1"><i className="fa fa-home"></i></button>
        <button className="btn btn-sm text-light m-1 font-weight-bold"><i className="fa fa-list-ul"></i> &nbsp;Boards</button>
        <button className="btn btn-sm text-light m-1"><i className="fa fa-search"></i></button>
      </div>

      <div className="d-flex justify-content-center align-items-center text-light first-nav" id="centerhold">
        <Logo></Logo>
      </div>

      <div className="d-flex">
        <button className="btn btn-sm text-light m-1"><i className="fa fa-plus"></i></button>
        <button className="btn btn-sm text-light m-1"><i className="fa fa-exclamation-circle"></i></button>
        <button className="btn btn-sm text-light m-1"><i className="fa fa-bell"></i></button>
        <button className="btn btn-sm text-light m-1 avatar p-0"><i className="fa fa-user"></i></button>
      </div>
    </nav>
  );
}

export default NavTop;
