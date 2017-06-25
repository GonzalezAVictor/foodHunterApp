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

function followRestaurant(restaurantId, token, action) {
  console.log('API followRestaurant');
  fetch(FH_API_ENDPOINT.concat('/users/followedRestaurants'), {
    method: `${action}`,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      'restaurantId': restaurantId
    })
  }).then((response) => {
    console.log('satus: ',response.status);
    return response.json()
  }).then((responseJson) => {
    console.log('Done... I guess: ', responseJson);
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

function followPromotion(promotionId, token) {
  console.log('API followPromotion');
  fetch(FH_API_ENDPOINT.concat('/users/followedPromotions'), {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
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

function huntPromotion(promotionId, token) {
  console.log('API huntPromotion');
  fetch(FH_API_ENDPOINT.concat('/users/followedPromotions'), {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
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

function getUserData(token, cb, allData: Boolean) {
  console.log('API getUserData');
  let include = '';
  include = allData ? '?include=all' : '';
  fetch(FH_API_ENDPOINT.concat(`/users/profile${include}`), {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }).then((response) => {
    return response.json();
  }).then((responseJson) => {
    console.log('Api response: ', responseJson);
      cb(responseJson.data);
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
  huntPromotion,
  getUserData
};
export default Api;