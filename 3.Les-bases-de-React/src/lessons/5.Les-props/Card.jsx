function Card({id, state, changeState}) {
    console.log(id, state)
  return (
    <div>
        {/* <p>User {props.id}</p>
        <p>State : {props.state}</p> */}
        <button onClick={() => changeState('Bonjour')}>Changer le state</button>
    </div>
  )
}
export default Card