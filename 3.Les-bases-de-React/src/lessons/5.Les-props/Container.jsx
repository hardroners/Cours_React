import { useState } from "react"
import Card from "./Card"

export default function Container() {
  const [state, setState] = useState("Hello world")

  const id = 42
  return (
    <div>
      <p>State du container : {state}</p>
      <Card id={id} state={state} changeState={setState}/>
      {/* <Card/> */}
    </div>
  )
}
