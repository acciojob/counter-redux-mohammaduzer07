
import React from "react";
import './../styles/App.css';
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../slice/slice";

const Home = () => {

  const {count} = useSelector((state) => state.counter.value)
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

        <h1>{count}</h1>
          <button onClick={handleIncrement}>increment</button>
          <button onClick={handleDecrement}>decrement</button>
    </div>
  )
}

export default Home
