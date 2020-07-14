import React,{useState, useEffect} from 'react'
import "./CardLabel.css"

function CardLabel({label}) {

  const [color, setColor] = useState("")

  const getColor = () => {
    setColor(label.color)
    // console.log(label)
  }

  useEffect(() => {
    getColor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  

  return (
    
      <span className="color" style={{backgroundColor:color}}></span>
  )
}

export default CardLabel
