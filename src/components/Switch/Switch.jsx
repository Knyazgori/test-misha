import React, { useEffect, useRef, useState } from 'react';
import './Switch.css'

function Switch(props) {
  const [value, setValue] = useState(false)

  const checkbox = useRef()
  
  useEffect(() => {
    console.log(value);
  }, [value, checkbox])

  function handleClick(event) {
    event.preventDefault()
    setValue((prevValue) => prevValue ? false : true )
  }
  return (
    <label className="switch">
      <input ref={checkbox} onInput={handleClick} type="checkbox" />
      <span className="slider"></span>
    </label>
  );
}

export default Switch;
