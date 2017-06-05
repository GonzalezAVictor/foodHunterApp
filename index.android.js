import React, { Component } from 'react';
import { AppRegistry, View, TextInput } from 'react-native';
import Login from './android/app/src/login/Login';

export default class foodHunterApp extends Component {
  render() {
    return (
      <View>
        <Login/>
      </View>
    );
  }
}

AppRegistry.registerComponent('foodHunterApp', () => foodHunterApp);
