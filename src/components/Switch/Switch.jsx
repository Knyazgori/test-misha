import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeSwitchAC } from '../../redux/actionCreators/switchAC';
import './Switch.css'

function Switch(props) {
  const [value, setValue] = useState(true)
  const dispatch = useDispatch();

  const checkbox = useRef()
  

  // useEffect(() => {
  //   console.log(value);
  // }, [value, checkbox])

  function handleClick(event) {
    event.preventDefault()
    setValue((prevValue) => prevValue ? false : true )
    dispatch(changeSwitchAC(value))
  }
  return (
    <label className="switch">
      <input ref={checkbox} onInput={handleClick} type="checkbox" />
      <span className="slider"></span>
    </label>
  );
}

export default Switch;
