import React from 'react'
import "./CardLabel.css"

function CardLabel({label}) {

 
  const color = label.color;
 
  return (
    
      <span className="color" style={{backgroundColor:color}}></span>
  )
}

export default CardLabel
