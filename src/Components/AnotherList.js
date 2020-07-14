import React, { useState } from "react";
import "./AnotherList.css";

function AnotherList() {
  const [isOpen, setIsOpen] = useState(false);

  // const toggleAddAnotherList = () => {

  // }
  return (
    
      isOpen ? (
        <div className="d-flex flex-column justify-content-center align-items-center rounded addNewCard px-2">
          <input
            autoFocus
            className=" rounded mt-2 px-2"
            placeholder="Enter a title for this card..."
            onBlur={() => setIsOpen(!isOpen)}
          />
        <div className="align-self-start my-2">
          <button className="btn btn-sm AddCard" >Add Card</button>
          <button className="btn btn-sm" > <i className="fa fa-times"></i></button>
        </div>

      </div>
      
      ) : (
        <div className="addAnotherList px-2 py-1 rounded" onClick={() => setIsOpen(!isOpen)}>
          <i className="fa fa-plus"></i>&nbsp; Add another List
        </div>
      )
  
  );
}

export default AnotherList;
