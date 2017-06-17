import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import AndroidApp from './android/app/AndroidApp';
import { Provider } from 'react-redux';

import { createStore, combineReducers } from 'redux';

let globalState = {
  IdCategoriesSelected: [],
  currentRestaurant: {},
  currentRestaurants: {},
}

function appReducer(state, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case 'ADD_SELECTED_CATEGORY':
      console.log('ADD_SELECTED_CATEGORY');
      return newState;
      break;
    default:
      return state
  }
}

let store = createStore(appReducer, globalState);

console.log('store: ', store.getState());

store.dispatch({type: 'ADD_SELECTED_CATEGORY'});

export default class foodHunterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    console.log('render foodHunterApp');
    return (
      <Provider store={store}>
        <AndroidApp/>
      </Provider>
    );
  }
}


AppRegistry.registerComponent('foodHunterApp', () => foodHunterApp);
