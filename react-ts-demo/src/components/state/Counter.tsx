import { useReducer } from "react";
import { CounterAction, CounterState } from "../types/Counter.types";

const initState = { count: 0 };

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "+":
      return { count: state.count + action.payload };
    case "-":
      return { count: state.count - action.payload };
    case "reset":
      return initState;
    default:
      return state;
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <>
      Count: {state.count} <br />
      <button onClick={() => dispatch({ type: "+", payload: 10 })}>
        Add 10
      </button>
      <button onClick={() => dispatch({ type: "-", payload: 10 })}>
        Sub 10
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};
