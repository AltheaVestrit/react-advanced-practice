import reducer from "./reducer";
import { useReducer } from "react";
import Messenger from "./Messenger";

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function handleClick() {
    dispatch({ type: "incremented_count" });
  }
  return (
    <div>
      <button onClick={handleClick}>Click: {state.count}</button>
      <Messenger />
    </div>
  );
}

export default App;
