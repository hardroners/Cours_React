import fuji from "./assets/fuji.jpg"
import triangle from "./assets/triangle.svg"
export default function Container() {

  return (
    <div>
      <h1>Utiliser des images</h1>
      <p>Image jpg/png/webp/ect</p>
      <img src={fuji} alt="Mont fuji" />


      <p>Utiliser des images du dossier public</p>
      <img src="/assets/forest-1.jpg" alt="" />

      <p>svg</p>
      <img src={triangle} alt="" />
    </div>
  )
}
