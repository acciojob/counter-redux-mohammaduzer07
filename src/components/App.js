
import React from "react";
import './../styles/App.css';
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../slice/slice";

const App = () => {

  const count = useSelector((state) => state.count.value)
  const dispatch = useDispatch();

  const handleIncrement = () =>{
    dispatch(increment())
  }
  const handleDecrement = () =>{
    dispatch(decrement())
  }
  return (
    <div>
        {/* Do not remove the main div */}

        <h1>Count : {count}</h1>
        <div>
          <button onClick={handleIncrement}>+</button>
        </div>
        <div>
          <button onClick={handleDecrement}>-</button>
        </div>
    </div>
  )
}

export default App
