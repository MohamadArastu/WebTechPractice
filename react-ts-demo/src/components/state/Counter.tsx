import { useReducer } from "react";

const initState = { count: 0 };

type CounterState = {
  count: number;
};

type CounterAction = {
  type: string;
  payload: number;
};

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "+":
      return { count: state.count + action.payload };
    case "-":
      return { count: state.count - action.payload };
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
    </>
  );
};
