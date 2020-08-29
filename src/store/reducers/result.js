import * as actionTypes from "../actions";

const initialState = {
  result: [],
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_RESULT:
      return {
        ...state,
        result: state.result.concat({ id: new Date(), value: action.result }),
      };
    case actionTypes.DELETE_RESULT:
      const updatedArray = state.result.filter(
        (item) => item.id !== action.resultId
      );
      return {
        ...state,
        result: updatedArray,
      };
    default:
      return state;
  }
};

export default resultReducer;
