const initialState = [];

const reducer = (state = initialState, action) => {
  if (action.type === 'ADD') {
    return [ ...state, action.payload ];
  }
  if (action.type === 'REMOVE') {
    return [ ...state.splice(-1, 1)];
  }
  return state;
};

export default reducer;
