/* eslint-disable no-undef */
const FH_API_ENDPOINT = 'https://foodh.herokuapp.com/api/v1';

function login(credentials, cb) {
  console.log('credentials to send: ', credentials.email);
  fetch(FH_API_ENDPOINT.concat('/sessions'), {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: credentials.email,
      password: credentials.password,
    })
  }).then((response) => {
    return response.json();
  })
    .then((responseJson) => {
      cb(responseJson);
      return null;
    })
}

function signUp(userData, cb) {
  console.log('datoc a registrar: ', userData);
  fetch(FH_API_ENDPOINT.concat('/users'), {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: userData.name,
      email: userData.email,
      password: userData.password,
    })
  }).then((response) => {
    console.log(response.status);
    return response.json();
  })
    .then((responseJson) => {
      console.log('signUp response: ', responseJson);
      cb(responseJson);
      return null;
    })
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
    console.log('responseJson: ', responseJson);
      cb(responseJson.data);
    })
}

function getAllRestaurants(catedoriesId, cb) {
  console.log('API getRandomRestaurant');
  fetch(FH_API_ENDPOINT.concat('/restaurants/all'), {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'categoriesId': catedoriesId
    })
  }).then((response) => response.json()).then((responseJson) => {
    console.log('responseJson: ', responseJson);
      cb(responseJson.data);
    })
}

function getAllRestaurantsNoCategories(cb) {
  console.log('API getAllRestaurantsNoCategories');
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

function getRestaurant(restaurantId, cb) {
  console.log('API getRestaurant');
  fetch(FH_API_ENDPOINT.concat(`/restaurants/${restaurantId}`), {
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

function followPromotion(promotionId) {
  console.log('API followPromotion');
  fetch(FH_API_ENDPOINT.concat('/users/followedPromotions'), {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIsImlzcyI6Imh0dHA6XC9cL2Zvb2RoLmhlcm9rdWFwcC5jb21cL2FwaVwvdjFcL3Nlc3Npb25zIiwiaWF0IjoxNDk3ODM5NDkxLCJleHAiOjE0OTg0NDQyOTEsIm5iZiI6MTQ5NzgzOTQ5MSwianRpIjoiZWkyZU4xSFhBNzNRbVA4MiJ9.0qdW_5HFlp-CLwoihmSUa87jHJN24crLUyvcDgoh2j0'
    },
    body: JSON.stringify({
      'promotionId': promotionId
    })
  }).then((response) => {
    console.log('satus: ',response.status);
    return response.json()
  }).then((responseJson) => {
    console.log('responseJson: ', responseJson);
      // cb(responseJson.data);
    })
}

function huntPromotion(promotionId) {
  console.log('API huntPromotion');
  fetch(FH_API_ENDPOINT.concat('/users/followedPromotions'), {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIsImlzcyI6Imh0dHA6XC9cL2Zvb2RoLmhlcm9rdWFwcC5jb21cL2FwaVwvdjFcL3Nlc3Npb25zIiwiaWF0IjoxNDk3ODM5NDkxLCJleHAiOjE0OTg0NDQyOTEsIm5iZiI6MTQ5NzgzOTQ5MSwianRpIjoiZWkyZU4xSFhBNzNRbVA4MiJ9.0qdW_5HFlp-CLwoihmSUa87jHJN24crLUyvcDgoh2j0'
    },
    body: JSON.stringify({
      'promotionId': promotionId
    })
  }).then((response) => {
    console.log('satus: ',response.status);
    return response.json()
  }).then((responseJson) => {
    console.log('responseJson: ', responseJson);
      // cb(responseJson.data);
    })
}

const Api = { 
  login,
  getCategories,
  getRandomRestaurant,
  getAllRestaurantsNoCategories,
  followRestaurant,
  signUp,
  getAllRestaurants,
  getRestaurant,
  followPromotion,
  huntPromotion
};
export default Api;