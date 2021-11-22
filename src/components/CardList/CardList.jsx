import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';



function CardList(props) {
  const searchWord = useSelector(state => state.searchReducer.searchWord)
  const lists = useSelector(state => state.listReducer.list)
  console.log(searchWord);

  const sumLetters = searchWord.length

  let arr = [];

  for (let key in lists) {
    arr.push(lists[key]);
  }
  console.log(arr);
  return (
    <>
      <div className='container' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {arr.map((list, index) => (searchWord === list.firstName.slice(0, sumLetters) || searchWord === list.lastName.slice(0, sumLetters) || searchWord === list.patronymic.slice(0, sumLetters)) ? <Card key={index} firstName={list.firstName} lastName={list.lastName} patronymic={list.patronymic} status={list.status} /> : '')}
      </div>
    </>
  );
}

export default CardList;
