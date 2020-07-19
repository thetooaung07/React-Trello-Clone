import React,{useState, useRef, useEffect} from 'react'
import "./AnotherCard.css"
import Axios from 'axios';

function AnotherCard({list, fetchLists}) {

  const [input, setInput] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const node = useRef();

  const onCloseOutsideClick = (event) => {
    if (node.current.contains(event.target)) {
      //insideClick
      return;
    } else {
      setIsClicked(false);
     
    }
  };
  useEffect(() => {
    isClicked
      ? document.addEventListener("mousedown", onCloseOutsideClick)
      : document.removeEventListener("mousedown", onCloseOutsideClick);
    return () => {
      document.removeEventListener("mousedown", onCloseOutsideClick);
    };
  });


  const addNewCard = async (event) => {
    // console.log(list.id)
    event.preventDefault();
    if(input !== ""){
      try{
        const res = await Axios.post(`http://localhost:8080/card/add/${list.id}`, {
          title: input,
          position: 1,
          status: 1
        })
        console.log(res);
      }catch(error){
        console.log(error);
      }
    }
    setInput('');
    fetchLists();
    
  }

  return (


    isClicked ?  <div className="d-flex flex-column justify-content-center align-items-start mt-2 mx-2 mb-1" ref={node}>
      <textarea autoFocus className="textArea rounded mb-2 py-2 px-2" placeholder="Enter a title for this card..." onChange={(event) => setInput(event.target.value)} value={input}/>
      <div className="">
        <button className="btn btn-sm AddCard" onClick={addNewCard} >Add Card</button>
        <button className="btn btn-sm" onClick={() => setIsClicked(false)} > <i className="fa fa-times"></i></button>
      </div>
    </div>
    
    :<div className="d-flex justify-content-between align-items-center text-secondary mx-2">
        <button className="btn btn-sm text-left text-secondary" id="add-another-card" onClick={() => setIsClicked(true)}>
          <i className="fa fa-plus"></i>&nbsp;&nbsp;Add another card
        </button>
        <button className="btn btn-sm text-secondary"><i className="fa fa-window-maximize"></i></button>
      </div>

  
  )
}

export default AnotherCard
