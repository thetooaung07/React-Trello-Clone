import React from "react";
import "./NavDown.css";

function NavDown() {
  return (
    <nav className="d-flex justify-content-between flex-wrap sec-nav text-white p-1" id="second-nav">
      <div className="d-flex">
        <button className="btn btn-sm m-1 text-white font-weight-bold trello">Trello</button>
        <button className="btn btn-sm m-1 text-white"><i className="fa fa-star"></i></button>
        <div className="stick d-flex justify-content-center align-items-center">|</div>
        <button className="btn btn-sm m-1 text-white">FE <span className="badge badge-pill badge-info" style={{opacity:"0.7"}}>&nbsp;Free&nbsp;</span></button>
        <div className="stick  d-flex justify-content-center align-items-center">|</div>
        <button className="btn btn-sm m-1 text-white font-weight-bold"><i className="fa fa-user"></i>&nbsp; Visible Team</button>
        <div className="stick  d-flex justify-content-center align-items-center">|</div>
        <button className="btn btn-sm text-white m-1 font-weight-bold">&nbsp;Invite&nbsp;</button>
      </div>

      <div className="d-flex justify-content-end flexGrow">
        <button className="btn btn-sm m-1 text-white"><i className="fa fa-bell"></i> &nbsp; Butler</button>
        <button className="btn btn-sm m-1 text-white"><i className="fa fa-ellipsis-h"></i> &nbsp; Show Menu</button>
      </div>
    </nav>
  );
}

export default NavDown;


