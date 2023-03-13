import { useAppContextHook } from "../context/StateContext";
import { useState } from "react";

const Counter = () => {
  const [inputData, setInputData] = useState("");
  const { state, dispatch } = useAppContextHook();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setInputData(value);
  }

  return (
    <div>
      <h2>
        Hello {state.name}! The current count is: {state.count}
      </h2>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 10 })}>
        Increase count
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 20 })}>
        Decrease count
      </button>
      <input
        type="text"
        name="name"
        value={inputData}
        onChange={handleChange}
      />
      <button onClick={() => dispatch({ type: "RENAME", payload: inputData })}>
        Update name
      </button>
    </div>
  );
};

export default Counter;
