import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Login from './android/app/src/login/Login';
import Home from './android/app/src/home/Home';
import RestaurantProfile from './android/app/src/restaurants/RestaurantProfile';
import UserProfile from './android/app/src/users/UserProfile';

export default class foodHunterApp extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <UserProfile/>
      </View>
    );
  }
}

AppRegistry.registerComponent('foodHunterApp', () => foodHunterApp);
