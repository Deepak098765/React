import React from 'react'
import Rolls from '../assets/RollsRoyce.webp'
import './UserCard.css'

const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style}>
      <p id='car-name'>{props.name}</p>
      <img id='car-image' src={props.img} alt="{props.name}" />
      <p id='car-desc'>{props.desc}</p>
    </div>
  )
}

export default UserCard
