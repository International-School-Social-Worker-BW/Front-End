import axios from "axios";

export const ADD_USER = "ADD_USER";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAILURE = "REGISTRATION_FAILURE";

export const addUser = (index) => dispatch => {
    dispatch({type: ADD_USER})
    axios
        .post(`jondscott21-internationschool.herokuapp.com/users/user`, index)
        .then(res => {
            console.log(res.data)
            dispatch({ type: REGISTRATION_SUCCESS, payload: res.data });
            return true;
          })
          .catch(err => {
            console.log(err);
            dispatch({ type: REGISTRATION_FAILURE, payload: err.response });
          });
};