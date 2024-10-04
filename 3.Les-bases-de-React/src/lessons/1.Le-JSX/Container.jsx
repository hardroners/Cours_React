import React from 'react'

function Container() {
  return (
    <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, dignissimos suscipit iste ipsam molestias rerum nisi ut voluptates consectetur excepturi assumenda aliquid quasi veniam quaerat iure ex temporibus ea veritatis.</p>
    <button>Valider</button>
    <p>{10 + 10}</p>
    <p>{"ab" + "c"}</p>
    <p>{"Le chat saute".toUpperCase()}</p>

    <p className=''></p>

    <button aria-label='toggle button'></button>

    <button onClick={() => console.log("click")}>Click</button>
    </div>
  )
}

export default Container