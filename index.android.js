import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Login from './android/app/src/login/Login';
import Home from './android/app/src/home/Home';
import RestaurantProfile from './android/app/src/restaurants/RestaurantProfile';
import UserProfile from './android/app/src/users/UserProfile';

export default class foodHunterApp extends Component {
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
            <Home/>
          </View>
        );
        break;
      case 'alsnd':
        break;
      case'asdas':
        break;
      default:
        return (
          <View style={{flex: 1}}>
            <Login changeView={this.handleChangeView}/>
          </View>
        );
    }
  }
}

AppRegistry.registerComponent('foodHunterApp', () => foodHunterApp);
