import React from 'react'
import "./Label.css"

const Label = ({label}) =>  {
  const color = label.color
  return (
    <div className=" px-1 mx-1 rounded my-1 labelModal" style={{backgroundColor:color}}>
      {label.name}
    </div>
  )
}

export default Label
