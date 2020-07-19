import React from 'react'
import './ModalCheckList.css'

function ModalCheckList({checklist}) {

  console.log(checklist)

  return (
    <div className="ModalCheckList d-flex flex-column w-100 text-left">
      <div className="d-flex justify-content-between align-items-center w-100 ">
      <i class="fa fa-edit"></i>
        <div className="flex-grow-1"> &nbsp;&thinsp; {checklist.title}</div>
        <button className="btn btn-sm mr-2">Hide Completed Items</button>
        <button className="btn btn-sm mr-4">Delete</button>
      </div>
      <span>
        <input type="checkbox" id= {checklist.item} className="mx-1" value= {checklist.item} />
        <label> {checklist.item} </label>
      </span>
    </div>
  )
}

export default ModalCheckList
