import React, { useMemo, useState } from 'react';
import "./memo.css";

const UseMemo = () => {
  const [count, setCount] = useState(0);

  const bigCountNumber = number => {
    console.log("render");
    let i = 0;
    while(i < 1000000000) i++
    return number * 2
  }

  const addCount = () => {
    setCount(prevState => (prevState + 1));
  }

  const removeCount = () => {
    setCount(prevState => prevState - 1);
  }

  // const number = useMemo(() => bigCountNumber(count), [count]);
  const number = count;

  return (
    <div className='memo'>
      <h1>Counter</h1>
      <h2>{number}</h2>
      <div>
        <button onClick={addCount}>Add +</button>
        <button onClick={removeCount}>Remove -</button>
      </div>
    </div>
  )
}

export default UseMemo;