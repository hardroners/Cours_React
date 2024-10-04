import { useState } from "react"
import "./Container.css"

export default function Container() {
  const [darkMode,setDarkMode] = useState(false)
  return (
    <div className={`full-container ${darkMode && "dark-mode"}`}>
      <h1>Toggle une classe</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam est quidem repellendus enim consequatur, aliquid dolorum in vitae, consectetur esse quisquam dolores! Eos beatae fugiat, natus voluptas nemo laboriosam obcaecati.</p>
      <button
      onClick={() => setDarkMode(!darkMode)}>Activer le {darkMode ? "Light mode" : "Dark mode"}</button>
    </div>
  )
}
