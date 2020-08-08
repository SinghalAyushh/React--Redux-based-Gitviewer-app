import * as actionTypes from "../actions/actionTypes";

const initialState = {
    userData: {},
    isFetching: false,
    isError: false
  };
  
  const asyncReducer = (state = initialState, action) => {
    switch (action.type) {
        case  actionTypes.FETCH_USER:
          return Object.assign({}, state, {
            isFetching: true,
            userData: {},
            isError: false
          });
        case actionTypes.REC_USER:
          return Object.assign({}, state, {
            userData: action.data,
            isFetching: false,
            isError: false
          });
        case actionTypes.ERROR:
          return Object.assign({}, state, {
            isError: true,
            isFetching: false
          });
        default:
          return state;
      }
    };
    

  
  export default asyncReducer;