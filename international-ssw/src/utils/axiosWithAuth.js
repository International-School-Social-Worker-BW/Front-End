import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'jondscott21-internationschool.herokuapp.com/',
    headers: {
      Authorization: token
    }
  });
};

//[ Base URL: jondscott21-internationschool.herokuapp.com/ ]
