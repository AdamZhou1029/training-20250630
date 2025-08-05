import { createContext, useReducer, useState } from "react";

export const CounterContext = createContext("default value");

function reducer(state, action) {
  switch (action.type) {
    // increment
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + action.payload,
        opsCount: state.opsCount + 1,
      };
    // decrement
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - action.payload,
        opsCount: state.opsCount + 1,
      };
    // reset
    case "RESET":
      return { counter: 0, opsCount: 0 };
    default:
      return state;
  }
}

/**
 * state lifting
 * props drilling
 *          A
 *     B         C
 *     E         D
 *               F
 *
 * 1. create context
 * 2. provide context
 */

function CounterProvider({ children }) {
  // const [counter, setCounter] = useState(0);
  const [todos, setTodos] = useState([]);

  const [state, dispatch] = useReducer(reducer, { counter: 0, opsCount: 0 });

  return (
    <CounterContext value={{ state, dispatch, todos, setTodos }}>
      {children}
    </CounterContext>
  );
}

export default CounterProvider;
