import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Login from './android/app/src/login/Login';
import Home from './android/app/src/home/Home';
import RestaurantProfile from './android/app/src/restaurants/RestaurantProfile';
import RestaurantList from './android/app/src/restaurants/RestaurantList';
import UserProfile from './android/app/src/users/UserProfile';

export default class foodHunterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'Login',
      input: {}
    }
    this.handleChangeView = this.handleChangeView.bind(this);
  }

  handleChangeView(newView, input) {
    this.setState({input: input});
    this.setState({currentView: newView});
  }

  render() {
    console.log('input: ', this.state.input);
    switch (this.state.currentView) {
      case 'Home':
        return (
          <View style={{flex: 1}}>
            <Home
              changeView={this.handleChangeView}
              input={this.state.input}
            />
          </View>
        );
        break;
      case 'UserProfile':
        return (
          <View style={{flex: 1}}>
            <UserProfile
              changeView={this.handleChangeView}
              input={this.state.input}
            />
          </View>
        );
        break;
      case'RestaurantList':
        return (
          <View style={{flex: 1}}>
            <RestaurantList
              changeView={this.handleChangeView}
              input={this.state.input}
            />
          </View>
        );
        break;
      default:
        return (
          <View style={{flex: 1}}>
            <Login
              changeView={this.handleChangeView}
              input={this.state.input}
            />
          </View>
        );
    }
  }
}

AppRegistry.registerComponent('foodHunterApp', () => foodHunterApp);
