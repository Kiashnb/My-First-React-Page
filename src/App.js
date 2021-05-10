import React, { useState } from 'react';
import Tweet from './Tweet'



function App() {

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const [users, setUsers] = useState([
    {name: 'Kiash', message:'Hello world', likes:1000},
    {name: 'Dakota', message:'Hello Woofs', likes:500},
    {name: 'Delta', message:'Hello peeps', likes:2000},
  ])


  const increment = () => {
    setCount(count + 1);
    setRed(true)
  }

  const reset = () => {
    setCount(0);
    setRed(false);
  }

  return (
    <div className="app">
      {/* <Tweet name="Kiash" message="I am awesome" likes="1000"/>
      <Tweet name="Dakota" message="I am cool" likes="10"/>
      <Tweet name="Delta" message="I am amazing" likes="123"/>
      <Tweet name="Echo" message="I am random" likes="456"/> */}

      {/* <h1 className={isRed ? 'red' : ''}>Change colour</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
      <button onClick={reset}>Reset</button> */}

      {users.map(user =>(
        <Tweet name={user.name} message={user.message} likes={user.likes}/>
      ))}
    </div>
  )

}

export default App;