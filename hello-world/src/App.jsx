import { useState } from 'react';
import './App.css';

function App() {
  // setInterval(function () {
  //   let date = new Date()
  //   console.log(date);
  //   let hours = date.getHours()
  //   let minute = date.getMinutes()
  //   let seconds = date.getSeconds()
  //   console.log(hours, minute, seconds);
  // }, 1000)
  let [count, setCount] = useState(0)
  // let count = 0

  function increment() {
    setCount(++count)
  }
  function decrement() {
    setCount(--count)
  }

  return (
    <div>
      <button onClick={decrement}>-</button>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      {/* <h1>{hours + ":" + minute + ":" + seconds}</h1> */}
    </div>
  );
}

export default App;
