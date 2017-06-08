import React, { Component } from 'react';
import { AppRegistry, View, TextInput } from 'react-native';
import Login from './android/app/src/login/Login';
import Home from './android/app/src/home/Home';

export default class foodHunterApp extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Home/>
      </View>
    );
  }
}

AppRegistry.registerComponent('foodHunterApp', () => foodHunterApp);
