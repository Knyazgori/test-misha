import React from 'react';
import { useSelector } from 'react-redux';
import Switch from '../Switch/Switch';
import './Card.css'

function Card({ firstName, lastName, patronymic, status }) {
  const sw = useSelector(state => state.switchReducer.switch)

  return (
    <div className='card'>
      <img src="./client_photo.jpg" alt=":)" />
      <h2>{`${lastName} ${firstName} ${patronymic}`}</h2>
      <span>статус: { sw ? 1 : 2 }</span>
      <Switch />
    </div>
  );
}

export default Card;
  