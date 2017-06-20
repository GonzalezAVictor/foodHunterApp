import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import AndroidApp from './android/app/AndroidApp';
import { Provider } from 'react-redux';

import { createStore, combineReducers } from 'redux';

let globalState = {
  IdCategoriesSelected: [],
  currentRestaurant: {},
  currentRestaurants: {},
  currentView: ['Login']
}

function appReducer(state, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case 'ADD_SELECTED_CATEGORY':
      console.log('ADD_SELECTED_CATEGORY');
      return Object.assign({}, state, { 
        IdCategoriesSelected: [...state.IdCategoriesSelected, action.id] 
      });
      break;
    case 'REMOVE_SELECTED_CATEGORY':
      console.log('REMOVE_SELECTED_CATEGORY');
      let categoryIndex = state.IdCategoriesSelected.findIndex((categoryId) => {
        return categoryId === action.id;
      });
      return Object.assign({}, state, { 
        IdCategoriesSelected: [...state.IdCategoriesSelected.slice(0, categoryIndex), ...state.IdCategoriesSelected.slice(categoryIndex + 1)] 
      }) 
      break;
    case 'SET_CURRENT_RESTAURANT':
      console.log('SET_CURRENT_RESTAURANT');
      newState.currentRestaurant = action.restaurant;
      console.log(newState);
      return newState;
      break;
    case 'SET_CURRENT_RESTAURANTS':
      console.log('SET_CURRENT_RESTAURANTS');
      newState.currentRestaurants = action.restaurants;
      console.log(newState);
      return newState;
      break;
    case 'SET_CURRENT_VIEW':
      console.log('SET_CURRENT_VIEW');
      newState.currentView = [...newState.currentView, action.view];
      console.log(newState);
      return newState;
      break;
    case 'BACK_VIEW':
      console.log('BACK_VIEW');
      return Object.assign({}, state, { 
        currentView: [...state.currentView.slice(0, state.currentView.length - 1)] 
      })
      break;
    default:
      return state;
  }
  console.log('New State: ', newState);
}

let store = createStore(appReducer, globalState);

console.log('store: ', store.getState());

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
