import {
    ADD_USER,
    REGISTRATION_SUCCESS,
    REGISTRATION_FAILURE,
  } from '../actions';
  
  const initialState = {
    error: '',
    fetchingData: false
  };
  
export const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_USER:
        return {
          ...state,
          fetchingData: true  
        };
      case REGISTRATION_SUCCESS:
        return {
          ...state,
          fetchingData: false                    
        };
      case REGISTRATION_FAILURE:
          return {
            ...state,
            error: action.payload,
            fetchingData: false
          };
      default:
          return state;
    }  
};