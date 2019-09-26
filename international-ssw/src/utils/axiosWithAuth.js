import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://jondscott21-internationschool.herokuapp.com',
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

//[ Base URL: https://jondscott21-internationschool.herokuapp.com ]
