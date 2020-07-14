import React from "react";
import "./AnotherList.css"

function AnotherList() {
  return (
    <div
      className="d-flex justify-content-start align-items-center rounded m-1 px-2 py-1 trello-list text-secondary"
      id="add-another-list"
    >
      <div className="addAnotherList">
        <i className="fa fa-plus"></i>&nbsp; Add another List
      </div>
    </div>
  );
}

export default AnotherList;


  /* <div>
        <div>
          <input
            type="text"
            placeholder="Enter List Title..."
            id="list-title"
          ></input>
          <div>
            <button>Add List</button>

            <i className="fa fa-times"></i>
          </div>
        </div>
      </div> */

