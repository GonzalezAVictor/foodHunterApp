import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Login from './src/login/Login';
import Home from './src/home/Home';
import RestaurantProfile from './src/restaurants/RestaurantProfile';
import RestaurantList from './src/restaurants/RestaurantList';
import UserProfile from './src/users/UserProfile';

export default class AndroidApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'Login'
    }
    this.handleChangeView = this.handleChangeView.bind(this);
  }

  handleChangeView(newView) {
    this.setState({currentView: newView});
  }

  render() {
    switch (this.state.currentView) {
      case 'Home':
        return (
          <View style={{flex: 1}}>
            <Home
              changeView={this.handleChangeView}
            />
          </View>
        );
        break;
      case 'UserProfile':
        return (
          <View style={{flex: 1}}>
            <UserProfile
              changeView={this.handleChangeView}
            />
          </View>
        );
        break;
      case'RestaurantList':
        return (
          <View style={{flex: 1}}>
            <RestaurantList
              changeView={this.handleChangeView}
            />
          </View>
        );
        break;
      default:
        return (
          <View style={{flex: 1}}>
            <Login
              changeView={this.handleChangeView}
            />
          </View>
        );
    }
  }
}

AppRegistry.registerComponent('AndroidApp', () => AndroidApp);
