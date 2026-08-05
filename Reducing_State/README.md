# Reducing State
*From [the Odin Project](https://www.theodinproject.com/lessons/node-path-react-new-reducing-state).*

Reducers are pure functions that take a previous state and an action to return a new state.
- *pure function*: does not mutate any of arguments it takes in, and its result only depends on the arguments it take in, nothing else. Added advantage: can be tested in isolation.

## When to use reducers?
*From the [React Website](https://react.dev/learn/extracting-state-logic-into-a-reducer#challenges).*

Use reducers when a component has become too big, hard to read or debug because of its state logic. By using reducers, we can separate the state logic and even store it in a different file or directory, leading to smaller components that are easier to read.

`useState` and `useReducer` are equivalent in their use cases, you can use them interchangeably (although the setup is a little different for each hook).

Big advantage of useReducer over useState: you can test the reducer function in isolation, it doesn't depend on your component.

## To convert from `useState` to `useReducer`
*From the [React Website](https://react.dev/learn/extracting-state-logic-into-a-reducer#challenges).*
1. Dispatch **actions** from event handlers.
2. Write a reducer function that returns the next state for a given state and action.
3. Replace `useState` with `useReducer`.

## `useState` vs. `useReducer`
### useState
```js
const [tasks, setTasks] = useState(initialTasks);
```
### useReducer
```js
const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
```
Then dispatch an action with the dispatch function, e.g. `dispatch({type: 'added', text: 'Do laundry'})`. This will send it to the reducer function `tasksReducer`. The return value of the reducer function becomes the new (updated) state.