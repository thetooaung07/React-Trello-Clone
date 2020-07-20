import React, { useState, useRef, useEffect } from "react";
import "./List.css";
import Card from "./Card";
import AnotherCard from "./AnotherCard";
import Axios from "axios";
import CardModal from "./CardModal";

function List({ list, updateListInState, removeDeletedListFromState }) {
  const cards = list.cards;
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState(list.title);
  const [show, setShow] = useState(false);
  const [rect, setRect] = useState();

  const node = useRef();

  const onCloseOutsideClick = (event) => {
    if (node.current.contains(event.target)) {
      //insideClick
      return;
    } else {
      setIsOpen(false);
      setInput(list.title);
    }
  };
  useEffect(() => {
    isOpen
      ? document.addEventListener("mousedown", onCloseOutsideClick)
      : document.removeEventListener("mousedown", onCloseOutsideClick);
    return () => {
      document.removeEventListener("mousedown", onCloseOutsideClick);
    };
  });

  const handleSubmmit = async (event) => {
    event.stopPropagation();
    if (input !== "") {
      try {
        const res = await Axios.put(`https://trello-clone-ppm.herokuapp.com/list/${list.id}`, {
          title: input,
          position: list.position,
          status: 1,
        });
        console.log(res);
        updateListInState(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getBtnPosition = (event) => {
    event.stopPropagation();
    setShow(true);
    const currNode =
      event.target.nodeName === "I" || event.target.nodeName === "i"
        ? event.target.parentNode
        : event.target;
    setRect(currNode.getBoundingClientRect());
  };

  const handleDelete = async (event) => {
    // console.log(list.id)
    try {
      await Axios.delete(`https://trello-clone-ppm.herokuapp.com/list/${list.id}`);
      removeDeletedListFromState(list.id);
    } catch (error) {
      console.log("delete unsuccessful");
    }
    
  };

  return (
    <div
      className=" rounded m-1 py-1 pb-2 trello-list text-secondary hoverEffect"
      ref={node}
    >
      <div className="d-flex justify-content-between align-items-center mx-2 my-1">
        {isOpen ? (
          <form onSubmit={handleSubmmit}>
            <input
              autoFocus
              className="mx-1 input-sm rounded titleInput text-secondary"
              onChange={(event) => setInput(event.target.value)}
              value={input}
            />
          </form>
        ) : (
          <h6
            className="pl-2 mb-0 title"
            onClick={(event) => {
              event.stopPropagation();
              setIsOpen(true);
            }}
          >
            {list.title}
          </h6>
        )}
        <button
          className="btn btn-sm stretch-x text-secondary"
          onClick={getBtnPosition}
        >
          <i className="fa fa-ellipsis-h"></i>
        </button>
      </div>

      {cards && cards.map((card) => (
        <Card key={card.id} list={list} card={card}></Card>
      ))}
      <div className="">
        <AnotherCard list={list} updateListInState={updateListInState} ></AnotherCard>
      </div>

      {show && (
        <CardModal
          rect={rect}
          setShow={setShow}
          handleDelete={handleDelete}
          show={show}
        ></CardModal>
      )}
    </div>
  );
}

export default List;
