import {
    FETCH_USER,
    USER_SUCCESS,
    USER_FAILURE,
    ADD_ROLE,
    ROLE_SUCCESS,
    ROLE_FAILURE,
  } from '../actions';
  
  const initialState = {
    error: '',
    fetchingData: false,
    userrole: [],
    addRole: []
  };
  
export const roleReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_ROLE:
        return {
          ...state,
          error: '',
          fetchingData: true          
        };
      case ROLE_SUCCESS:
        return {
          ...state,
          addRole: action.payload,
          error: '',
          fetchingData: false,
          userrole: action.payload          
        };
      case ROLE_FAILURE:
          return {
              ...state,
              error: action.payload,
              fetchingData: false
          }
          case FETCH_USER:
            return{...state, fetchingData:true};
        case USER_SUCCESS:
            return{...state, data:action.payload, fetchingData:false};
        case USER_FAILURE:
            return{...state, error:action.payload, fetchingData:false};
      default:
          return state 
    }  
  }
