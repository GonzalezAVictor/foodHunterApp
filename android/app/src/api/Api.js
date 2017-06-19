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
      'categoriesId': catedoriesId
    })
  }).then((response) => response.json()).then((responseJson) => {
      cb(responseJson.data);
    })
}

function getAllRestaurants(cb) {
  console.log('API getAllRestaurants');
  fetch(FH_API_ENDPOINT.concat('/restaurants'), {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }).then((response) => response.json()).then((responseJson) => {
    console.log('Api response: ', responseJson.data);
      cb(responseJson.data);
    })
}

function followRestaurant(restaurantId) {
  console.log('API followRestaurant');
  fetch(FH_API_ENDPOINT.concat('/users/followedRestaurants'), {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIsImlzcyI6Imh0dHA6XC9cL2Zvb2RoLmhlcm9rdWFwcC5jb21cL2FwaVwvdjFcL3Nlc3Npb25zIiwiaWF0IjoxNDk3ODM5NDkxLCJleHAiOjE0OTg0NDQyOTEsIm5iZiI6MTQ5NzgzOTQ5MSwianRpIjoiZWkyZU4xSFhBNzNRbVA4MiJ9.0qdW_5HFlp-CLwoihmSUa87jHJN24crLUyvcDgoh2j0'
    },
    body: JSON.stringify({
      'restaurantId': restaurantId
    })
  }).then((response) => {
    console.log('satus: ',response.status);
    return response.json()
  }).then((responseJson) => {
    console.log('Done... I guess')
      // cb(responseJson.data);
    })
}

const Api = { 
  login,
  getCategories,
  getRandomRestaurant,
  getAllRestaurants,
  followRestaurant,
};
export default Api;