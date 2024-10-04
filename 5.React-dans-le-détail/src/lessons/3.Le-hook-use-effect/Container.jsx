import "./Container.css"
import { useEffect, useState } from "react"
export default function Container() {

  const [count, setCount] = useState(0)
  console.log("Mise à jour")

  useEffect(() => {
    console.log("Après première création et après chaque mise à jour du DOM")
  }, [])

  return (
    <div>
      <h1>Le hook useEffect</h1>
      <button onClick={() => setCount(count +1)}>+1</button>
    </div>
  )
}
