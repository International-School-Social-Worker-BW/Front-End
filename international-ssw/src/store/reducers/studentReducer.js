import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    ADD_STUDENT,
    STUDENT_SUCCESS,
    STUDENT_FAILURE
} from '../actions';

export const initialState = {
    data: [],
    error:'',
    fetchingData:false    
}

export const studentReducer =(state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return{
                ...state, 
                fetching:true
            };
        case FETCH_SUCCESS:
                console.log("studentreducer", action.payload);
            return{
                ...state, 
                data:action.payload, 
                fetching:false
            };
        case FETCH_FAILURE:
            return{
                ...state, 
                error:action.payload, 
                fetching:false
            };
            case ADD_STUDENT:
                return {
                  ...state,
                  error: '',
                  fetchingData: true
                  
                };
              case STUDENT_SUCCESS:
                return {
                  ...state,
                  addUser: action.payload,
                  error: '',
                  fetchingData: false,
                  username: action.payload
                  
                };
              case STUDENT_FAILURE:
                  return {
                      ...state,
                      error: action.payload,
                      fetchingData: false
                  }
                  
        default:
            return state;
    }
}