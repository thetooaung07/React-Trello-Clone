import React, { useState, useEffect } from "react";
import "./List.css";
import Card from "./Card";
import AnotherCard from "./AnotherCard";

function List({ list }) {
  // console.log(list);
  const cards = list.cards;

  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState(list.title);

  const editTitle = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    console.log(input);
  };

  // useEffect(() => {
  //   editTitle()
  // },[])

  const toggleAnotherCard = () => {};

  return (
    <div className="rounded m-1 py-1 pb-2 trello-list text-secondary hoverEffect">
      <div className="d-flex justify-content-between align-items-center mx-2 mt-2">
        {isOpen ? (
          <input
            autoFocus
            className="d-flex justify-content-between align-items-center mx-0 mb-2 form-control-sm titleInput text-secondary"
            onChange={(e) => editTitle(e)}
            onBlur={() => setIsOpen(!isOpen)}
            value={input}
          />
        ) : (
          <h6 className=" pl-2 title" onClick={() => setIsOpen(!isOpen)}>
            {list.title}
          </h6>
        )}
        <button className="btn btn-sm stretch-x text-secondary">
          <i className="fa fa-ellipsis-h"></i>
        </button>
      </div>

      {cards.map((card) => (
        <Card key={card.id} card={card}></Card>
      ))}
      <div className="">
        <AnotherCard></AnotherCard>
      </div>
    </div>
  );
}

export default List;
