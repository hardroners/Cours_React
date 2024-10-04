import {useRef, useState} from "react"

export default function Container() {

  const [state,setState] = useState(0)
  const countRef = useRef(0)

  function handleCountRef(){
    countRef.current++
    console.log(countRef.current)
  }

  const txtRef = useRef()
  return (
    <div>
      <h1>Comprendre les refs</h1>
      <p>Valeur du state {state}</p>
      <p>Valeur de la ref {countRef.current}</p>
      <button onClick={handleCountRef}>Incrémenter la ref</button>
      <button onClick={() => setState(state + 1)}>Incrément le State</button>

      <p ref={txtRef}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima doloremque recusandae, maxime similique quaerat quas asperiores ratione sed. Laborum itaque libero delectus eum a saepe nemo debitis sapiente corrupti at.</p>
    </div>
  )
}
