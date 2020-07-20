import React,{ useEffect, useRef} from "react";
import './CardModal.css'

const CardModal = ({rect,show, setShow, handleDelete}) => {
  const left = rect.left;
  
  const node = useRef();

  const onCloseOutsideClick = (event) => {
    if (node.current.contains(event.target)) {
      //insideClick
      return;
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    show
      ? document.addEventListener("mousedown", onCloseOutsideClick)
      : document.removeEventListener("mousedown", onCloseOutsideClick);
    return () => {
      document.removeEventListener("mousedown", onCloseOutsideClick);
    };
  });


  return ( 
  <div className="CardModal p-3 rounded" ref={node} style={{left:left}}>
    
      <div className="d-flex justify-content-between align-items-center my-2">
        <div className="mx-auto">List Actions </div>
        <button type="button" className="close p-1 pb-2 px-2 flex-shrink-1 rounded" aria-label="Close" onClick={() => setShow(false)}>
           <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="mx-auto h-10 w-40 separator mb-0 "></div>
      <div className="listpopUp p-0">
          <ul className="text-left d-flex flex-column mb-0">
            <li className="p-1  text-secondary ">Add Card...</li>
            <li className="p-1  text-secondary">Copy List...</li>
            <li className="p-1  text-secondary">Move List...</li>
            <li className="p-1 pb-2  text-secondary">Watch</li>
            <div className="mx-auto h-10 w-40 separator mb-0 "></div>
            <li className="p-1  text-secondary">Move All Cards in This List...</li>
            <li className="p-1 pb-2  text-secondary">Archive All Cards in This List...</li>
            <div className="mx-auto h-10 w-40 separator mb-0"></div>
            <li className="p-1  text-secondary" onClick={handleDelete}>Delete This List...</li>
          </ul>  
      </div>
    
  </div>
  );
};

export default CardModal;


// function, useState, onOff , datapass -> props , context(optional), event.stopPropagation();, 