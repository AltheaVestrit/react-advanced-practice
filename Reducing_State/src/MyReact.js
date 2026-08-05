import { useState } from 'react';

export default function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);

  const dispatch = (action) => {
    setState(state => reducer(state, action))
  }

  return [state, dispatch];
}
