// Reducer example
// for updating the state of a counter

// The action type should always be formulated as:
// "what the user did" / "what happened"

function reducer(state, action) {
    switch (action.type) {
        case "incremented_count": {
            return { count: state.count + 1 }
        }
        case "decremented_count": {
            return { count: state.count - 1 };
          }
          case "set_count": {
            return { count: action.value };
          }
          default: {
            throw new Error("unknown action: " + action.type);
          }
    }
}

const state = {count: 4}
console.log(reducer(state, {type: "set_count", value: 2.5}));
console.log(reducer(state, {type: "decremented_count"}));

export default reducer;