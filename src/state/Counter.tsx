import { useReducer } from "react";

const initialState = {
  count: 0,
};

// typing reducer state
type CounterState = {
  count: number;
};

const enum REDUCER_ACTION_TYPE {}

// type for updating action
type UpdateAction = {
  type: "INCREMENT" | "DECREMENT";
  payload: number;
};

// type for resetting action
type ResetAction = {
  type: "RESET";
};
// using union types to satisfy both action.types
type CounterAction = UpdateAction | ResetAction;

// no error in state or action params
function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.payload };
    case "DECREMENT":
      return { count: state.count - action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>Count: {state.count} </p>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 10 })}>
        Increment by 10
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 10 })}>
        Decrement by 10
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset Counter</button>
    </div>
  );
};

export default Counter;
