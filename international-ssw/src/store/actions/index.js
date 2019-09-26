import axios from "axios";
import { axiosWithAuth } from '../../utils/axiosWithAuth.js';
/*login Action */
export const LOGIN_START ="LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = ({useremail, password}, props) => dispatch => {
 console.log("login", useremail, password, props);
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
      .then(res => {
        console.log("logindata", res.data)
        localStorage.setItem("token", res.data.access_token)
      })
      .then(res => props.props.history.push('/protected'))
      .catch(res => {
          dispatch({      
            type: LOGIN_FAILURE,
            payload: res.data
          });
        });
};
/*Register new user Action */
export const ADD_USER = "ADD_USER";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAILURE = "REGISTRATION_FAILURE";

export const addUser = (index, props) => dispatch => {
    console.log("adduserIndex", index);
    dispatch({ type: ADD_USER });
    axios
      .post(`https://jondscott21-internationschool.herokuapp.com/createnewuser`, index)
      .then(res => {
          console.log("addUserPost", res.data)
          dispatch({ type: REGISTRATION_SUCCESS, payload: res.data })
      })
      .then(res => {
        this.props.props.history.push('/signin')
      })
      .catch(err => {
        console.log("addUser ERROR", err);
          dispatch({ type: REGISTRATION_FAILURE, payload: err});
      });
};
/*Role Action */
export const ADD_ROLE = "ADD_ROLE";
export const ROLE_SUCCESS = "ROLE_SUCCESS";
export const ROLE_FAILURE = "ROLE_FAILURE";

export const addRole = (index, props) => dispatch => {
  dispatch({type: ADD_ROLE})
  console.log("role", index)
  axiosWithAuth().post(`/users/user/${index.user.userid}/role/${index.roleid}`, index)
      .then(res => {
          console.log(res.data)
          dispatch({ type: ROLE_SUCCESS, payload: res.data });
          return true;
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: ROLE_FAILURE, payload: err.response });
        });
};
/*Student List Action */
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetchStudents = index => dispatch => {
  console.log("inaction");
  dispatch({ type: FETCH_START});
  axiosWithAuth()
    .get(`/students/students`)
    .then(res => {
      console.log('fetched items', res)
      dispatch({type:FETCH_SUCCESS, payload:res.data})
    })
    .catch(err => {
      console.log("fetchstudent", err.response);
      dispatch({type: FETCH_FAILURE, payload: err.response})
    });
};
/*Add student Action */
export const ADD_STUDENT = "ADD_STUDENT";
export const STUDENT_SUCCESS = "STUDENT_SUCCESS";
export const STUDENT_FAILURE = "STUDENT_FAILURE";

export const addStudent = (index, props) => dispatch => {
  console.log('Addstudent')
    dispatch({type: ADD_STUDENT})
    axiosWithAuth()
        .post(`/students/new`, index)
        .then(res => {
            console.log(res.data)
            dispatch({ type: STUDENT_SUCCESS, payload: res.data });
            return true;
          })
          .catch(err => {
            console.log(err);
            dispatch({ type: STUDENT_FAILURE, payload: err.response });
          });
};
/*get user Action */
export const FETCH_USER = "FETCH_USER";
export const USER_SUCCESS = "USER_SUCCESS";
export const USER_FAILURE = "USER_FAILURE";

export const fetchUser = index => dispatch => {
  console.log("USER");
  dispatch({ type: FETCH_USER});
  axiosWithAuth()
    .get(`/users/getcurrentuser`)
    .then(res => {
      console.log('fetched User', res)
      dispatch({type:USER_SUCCESS, payload:res.data})
      return true;
    })
    .catch(err => {
      console.log("fetchUser", err.response);
      dispatch({type: USER_FAILURE, payload: err.response})
    });
};



