import React from "react";
import "./Card.css";
import CardLabel from "./CardLabel";
import CardMember from "./CardMember";
import Modal from "./Modal";

function Card({ card }) {
  const labels = card.labels;
  const members = card.members;



  return (
    <div className="d-flex justify-content-center align-items-center" >
      <div className="col-list">
        <div className="d-flex flex-row">
          {labels.map((label) => (
            <CardLabel key={label.id} label={label} />
          ))}
        </div>
           <div className="d-flex justify-content-between align-items-center">
          {card.title}
        </div>
        
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <button className="btn btn-sm ">
              <i className="fa fa-bars"></i>
            </button>
            <button className="btn btn-sm ">
              <i className="fa fa-paperclip"></i>
            </button>
          </div>
        <div className="d-flex">
          {members.length > 0
            ? members.map((member) => (
                <CardMember key={member.username} member={member} />
              ))
            : ""}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
