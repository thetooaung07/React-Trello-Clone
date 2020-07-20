import React, { useState, useRef, useEffect } from "react";
import "./AnotherList.css";
import Axios from "axios";

function AnotherList({ lastList, addNewListToState }) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  // console.log(lastList);

  const node = useRef();

  const onCloseOutsideClick = (event) => {
    if (node && node.current && node.current.contains(event.target)) {
      console.log("inside click");

      return;
    } else {
      setIsOpen(false);
      console.log("Outside the click");
    }
  };

  const addNewList = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (input !== "") {
      try {
        const res = await Axios.post("https://trello-clone-ppm.herokuapp.com/list", {
          title: input,
          position: lastList.position + 1,
          status: 1,
        });
        console.log(res);
        addNewListToState(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", onCloseOutsideClick);
  }, []);

  return isOpen ? (
    <div
      ref={node}
      className="d-flex flex-column justify-content-center align-items-center rounded addNewCard px-2"
    >
      <form
        className="w-100"
        onSubmit={(event) => {
          event.stopPropagation();
          addNewList(event);
        }}
      >
        <input
          autoFocus
          className=" rounded mt-2 px-2"
          placeholder="Enter a title for this card..."
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      <div className="align-self-start my-2">
        <button
          className="btn btn-sm AddCard"
          onClick={(event) => {
            event.stopPropagation();
            addNewList(event);
          }}
        >
          Add Card
        </button>
        <button className="btn btn-sm" onClick={() => setIsOpen(false)}>
          {" "}
          <i className="fa fa-times"></i>
        </button>
      </div>
    </div>
  ) : (
    <div
      className="addAnotherList px-2 py-1 rounded"
      onClick={() => setIsOpen(true)}
    >
      <i className="fa fa-plus"></i>&nbsp; Add another List
    </div>
  );
}

export default AnotherList;
