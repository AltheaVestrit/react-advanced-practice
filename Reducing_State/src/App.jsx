import reducer from "./reducer";
import { useReducer } from "react";

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function handleClick() {
    dispatch({ type: "incremented_count" });
  }
  return <button onClick={handleClick}>Click: {state.count}</button>;
}

export default App;
