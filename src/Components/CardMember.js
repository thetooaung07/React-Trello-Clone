import React from 'react'
import "./CardMember.css"
import { getInitials} from "../utils.js";

function CardMember({member}) {

  const name = getInitials(member.name);

  return (
    <div className="cardMember mr-1 mb-1 rounded-circle">
      {name}
    </div>
  )
}

export default CardMember
