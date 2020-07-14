import React,{useState} from 'react'
import "./AnotherCard.css"

function AnotherCard() {

  const [isClicked, setIsClicked] = useState(false);


  return (


    isClicked ?  <div className="d-flex flex-column justify-content-center align-items-start mt-2 mx-2 mb-1">
      <textarea autoFocus className="textArea  rounded mb-2 py-2 px-2" placeholder="Enter a title for this card..." onBlur={() => setIsClicked(!isClicked)}/>
      <div className="">
        <button className="btn btn-sm AddCard" >Add Card</button>
        <button className="btn btn-sm" > <i class="fa fa-times"></i></button>
      </div>
    </div>
    
    :<div className="d-flex justify-content-between align-items-center text-secondary mx-2">
        <button className="btn btn-sm text-left text-secondary" id="add-another-card" onClick={() => setIsClicked(!isClicked)}>
          <i className="fa fa-plus"></i>&nbsp;&nbsp;Add another card
        </button>
        <button className="btn btn-sm text-secondary"><i className="fa fa-window-maximize"></i></button>
      </div>

    
  )
}

export default AnotherCard
