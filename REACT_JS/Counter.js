import React, { useState } from 'react'
import './App.css'

function Counter() {

  const [counter, setCounter] = useState(0)

  const handelIncrease = () => setCounter(counter + 1)
  const handelDecrease = () => setCounter(counter - 1)

  return (
    <>
      <div className='counter'>
        <h1>Counter App</h1>
        <h2>{counter}</h2>
        <div className='btn'>
          <button onClick={handelIncrease} className='green'>+</button>
          <button onClick={handelDecrease} className='red'>-</button>
        </div>
      </div>
    </>
  )
}

export default Counter