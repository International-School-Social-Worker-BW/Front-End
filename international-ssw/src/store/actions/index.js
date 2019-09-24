import axios from "axios";

export const LOGIN_START ="LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = ({useremail, password}, {props}) => dispatch => {
  // console.log(props.history)
  dispatch({ type: LOGIN_START });
  axios
  .post(`https://jondscott21-internationschool.herokuapp.com/login`,
    `grant_type=password&username=${useremail}&password=${password}`,
    {
      headers: {
        Authorization: `Basic ${btoa("jondscott21-client:jondscott21-secret")}`,
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }
  )
  .then(res => localStorage.setItem("token", res.data.access_token))
  .then(props.history.push('/protected'))
  .catch(res => {
    dispatch({      
      type: LOGIN_FAILURE,
      payload: res.data
    });
  });
};

export const ADD_USER = "ADD_USER";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAILURE = "REGISTRATION_FAILURE";

export const addUser = (index, props) => dispatch => {
    dispatch({type: ADD_USER})
    axios
        .post(`https://jondscott21-internationschool.herokuapp.com/createnewuser`, index)
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