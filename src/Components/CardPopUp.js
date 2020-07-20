import React,{useRef, useEffect} from "react";
import "./CardPopUp.css";

function CardPopUp({ rect, setCardEditPopUp, cardEditPopUp, handleDelete }) {
  console.log(rect);
  const top = (rect.top - 13) + "px";
  const left = rect.left + 35 + "px";


  const node = useRef();

  const onCloseOutsideClick = (event) => {
    if (node.current.contains(event.target)) {
      //insideClick
      return;
    } else {
      setCardEditPopUp(false);
    }
  };
  useEffect(() => {
    cardEditPopUp
      ? document.addEventListener("mousedown", onCloseOutsideClick)
      : document.removeEventListener("mousedown", onCloseOutsideClick);
    return () => {
      document.removeEventListener("mousedown", onCloseOutsideClick);
    };
  });

  return (
    <div className="clickaway-wrapper">
    <div className="CardPopUp rounded p-2" ref={node} style={{ top: top, left: left }}>
      {/* <div className="my-2">
        Card Options
        <button
          type="button"
          className="close px-1 pb-1 flex-shrink-1 rounded"
          aria-label="Close"
          onClick={(event) => {
            event.stopPropagation();
            setCardEditPopUp(false);
          }}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div> */}
      <div className="d-flex flex-column pt-2">
        <button className="buttonEdit px-0 py-0 mb-1">
        <i className="fa fa-tags"></i> &nbsp; Edit Labels
        </button>
        <button className="buttonEdit px-0 py-0 mb-1">
        <i className="fa fa-user"></i> &nbsp; Change Members
        </button>
        <button className="buttonEdit px-0 py-0 mb-1">
        <i className="fa fa-arrow-right"></i> &nbsp; Move
        </button>
        <button className="buttonEdit px-0 py-0 mb-1">
        <i className="fa fa-copy"></i> &nbsp; Copy
        </button>
        <button className="buttonEdit px-0 py-0 mb-1">
        <i className="fa fa-calendar"></i> &nbsp; Change Due Date
        </button>
        <button className="buttonEdit px-0 py-0 mb-1" onClick={ handleDelete}>
        <i className="fa fa-trash"></i> &nbsp; Delete
        </button>
      </div>
    </div>
    </div>
  );
}

export default CardPopUp;
