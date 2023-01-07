import {REACT_APP_SERVER_URL, REACT_APP_SOCKETS_URL} from '@env';
import axios from 'axios';
import {getData, displayDate, tConvert} from './utils';

const setIsActive = async data => {
  const token = await getData('@token');
  var config = {
    method: 'post',
    url: `${REACT_APP_SERVER_URL}/user/isactive`,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    data: {
      status: `${data}`,
    },
  };

  axios(config)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export {setIsActive};
