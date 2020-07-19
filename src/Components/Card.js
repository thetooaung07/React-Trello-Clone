import React, { useState } from "react";
import "./Card.css";
import CardLabel from "./CardLabel";
import CardMember from "./CardMember";
import MyModal from "./Modal/MyModal";
import Axios from "axios";
import CardPopUp from "./CardPopUp";

function Card({ card, list, fetchLists }) {
  const labels = card.labels;
  const members = card.members;

  const [show, setShow] = useState(false);
  const [cardEditPopUp, setCardEditPopUp] = useState(false);
  const [rect, setRect] = useState();

  const showHandler = (e) => {
    e.stopPropagation();
    setShow(false);
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log('Click from PopUP handler to delete card' + card.id);
    await Axios.delete(`http://localhost:8080/card/${card.id}`);
    fetchLists();
  };
  const handleCardEdit = (event) => {
    event.stopPropagation();
    setCardEditPopUp(true);
    const currNode = event.target;
    setRect(currNode.getBoundingClientRect());
    document.body.style.backgroundColor="black";
    
  }

  return (
    <div
      className=" Card d-flex justify-content-center align-items-center"
      onClick={() => setShow(true)}
    >
      <MyModal
        show={show}
        showHandler={showHandler}
        card={card}
        list={list}
      ></MyModal>
      <div className="col-list hovereffect">
        <button className=" btn btn-sm editCard px-1 py-0" onClick={handleCardEdit}>
          <i className="fa fa-edit"></i>
        </button>
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
          <div className="d-flex justify-content-around align-items-center">
            {members && members.length > 0
              && members.map((member) => (
                  <CardMember key={member.username} member={member} />
                ))
              }
          </div>
        </div>
      </div>
      { cardEditPopUp && <CardPopUp rect={rect} setCardEditPopUp={setCardEditPopUp} handleDelete={handleDelete} cardEditPopUp={cardEditPopUp} />}
    </div>
  );
}

export default Card;
