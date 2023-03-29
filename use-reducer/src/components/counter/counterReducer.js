import { increment } from "./counterActions";

function Reducer(state, action) {
  switch (action.type) {
    case "INCREMENT_COUNT":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREMENT_COUNT":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "RESET_COUNT":
      return {
        ...state,
        counter: 0,
      };
    case "INCREMENT_COUNT_BY_VALUE":
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    default:
      return state;
  }
}

export default Reducer;
