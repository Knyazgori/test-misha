import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { changeSearchAC } from '../../redux/actionCreators/searchAC';

function Input(props) {
  const inputRef = useRef()
  const dispatch = useDispatch();

  function handleChange(event) {
    dispatch(changeSearchAC(event.target.value))
  }

  return (
    <>
      <input ref={inputRef} onChange={handleChange} style={{ display: 'block', width: '50%', height: '30px', margin: '0 auto' }} type="text" />
    </>
  );
}

export default Input;
