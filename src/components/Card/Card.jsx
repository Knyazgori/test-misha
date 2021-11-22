import React from 'react';
import Switch from '../Switch/Switch';
import './Card.css'

function Card({ firstName, lastName, patronymic, status }) {
  return (
    <div className='card'>
      <img src="./client_photo.jpg" alt=":)" />
      <h2>{`${lastName} ${firstName} ${patronymic}`}</h2>
      <span>статус: { status }</span>
      <Switch />
    </div>
  );
}

export default Card;
