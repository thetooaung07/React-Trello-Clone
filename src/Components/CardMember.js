import React from 'react'
import "./CardMember.css"
import { getInitials} from "../utils.js";

function CardMember({member}) {


  // console.log(typeof member.name);
  const name = getInitials(member.name);

  return (
    <span className="CardMember btn-sm mb-1 rounded-circle">
      {name}
    </span>
  )
}

export default CardMember
