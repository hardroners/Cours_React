export default function Container() {
  function handleClick() {
    console.log("click");
  }

  function handleClickWithId(id){
    console.log(id)
  }

  function handleClickWithIdAndEventObject(e,id){
    console.log(e, id)
  }
  return (
    <div>
      <h1>Utiliser des évènements</h1>
      {/* On peut ajouter un évènement directement dans le JSX avec une fonction anonyme, mais ce n'est pas pratique s'il y a beaucoup de code */}
      <button onClick={() => console.log('clic')}>Click</button>
      {/* Mauvaise pratique, peu maintenable */}


      {/* On lui préfère en général ceci */}

      <button onClick={handleClick}>Click</button>
      {/* Attention, si on veut passer un argument, il faut obligatoirement utiliser une fonction anonyme */}
      <button onClick={() => handleClickWithId(34)}>Click</button>

      {/* Si on veut l'objet d'évènement ET passer un ou des arguments, on code ceci */}

      <button onClick={(e) => handleClickWithIdAndEventObject(e,34)}>Click</button>

    </div>
  )
}
