/* eslint-disable no-undef */
const FH_API_ENDPOINT = 'https://foodh.herokuapp.com/api/v1';

function login(credentials, cb) {
  fetch(FH_API_ENDPOINT.concat('/sessions'), {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: credentials.userName,
      password: credentials.password,
    })
  }).then((response) => response.json())
    .then((responseJson) => {
      cb(responseJson);
    })
    .catch((error) => {
      console.error(error);
    });
}

function getCategories(cb) {
  fetch(FH_API_ENDPOINT.concat('/categories'), {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }).then((response) => response.json())
    .then((responseJson) => {
      cb(responseJson.data);
    })
    .catch((error) => {
      console.error(error);
    });
}

function getRandomRestaurant(catedoriesId, cb) {
  console.log('API getRandomRestaurant');
  fetch(FH_API_ENDPOINT.concat('/restaurants/random'), {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'restaurantsId': [1, 2, 3]
    })
  }).then((response) => {response.json()})
    .then((responseJson) => {
      console.log('respuesta: ', responseJson);
      cb(responseJson);
    })
    .catch((error) => {
      console.error(error);
    });
}


const Api = { login, getCategories, getRandomRestaurant };
export default Api;