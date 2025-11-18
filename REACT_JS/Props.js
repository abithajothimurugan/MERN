import React from 'react'

function Props(props) {
  return (
    <>
    <div className='card'>

      <div class="img">
        <img src={props.img} />
      </div>

      <h1>{props.title}</h1>
      <p>{props.descr}</p>

    </div>
    </>
  )
}

export default Props

