import * as actionTypes from "./actions";

const initialState = {
  counter: 0,
  result: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === actionTypes.INCREMENT) {
    const newState = Object.assign({}, state);
    newState.counter = state.counter + action.val;
    return newState;
  }
  if (action.type === actionTypes.DECREMENT) {
    return {
      ...state,
      counter: state.counter - action.val,
    };
  }
  if (action.type === actionTypes.ADD) {
    return {
      ...state,
      counter: state.counter + action.val,
    };
  }
  if (action.type === actionTypes.SUBTRACT) {
    return {
      ...state,
      counter: state.counter - action.val,
    };
  }
  if (action.type === actionTypes.STORE_RESULT) {
    return {
      ...state,
      result: state.result.concat({
        id: new Date(),
        value: state.counter,
      }),
    };
  }
  if (action.type === actionTypes.DELETE_RESULT) {
    // const id = 2;
    // const newArray = [...state.result];
    // newArray.splice(id, 1)
    const updatedArr = state.result.filter(
      (result) => result.id !== action.resId
    );
    return {
      ...state,
      result: updatedArr,
    };
  }
  return state;
};

export default reducer;
