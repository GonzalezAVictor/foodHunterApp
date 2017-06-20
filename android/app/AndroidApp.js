import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Login from './src/login/Login';
import Home from './src/home/Home';
import RestaurantProfile from './src/restaurants/RestaurantProfile';
import RestaurantList from './src/restaurants/RestaurantList';
import UserProfile from './src/users/UserProfile';

import { connect } from 'react-redux';

class AndroidApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.handleChangeView = this.handleChangeView.bind(this);
  }

  handleChangeView(newView) {
    this.setState({currentView: newView});
  }

  render() {
    switch (this.props.currentView[this.props.currentView.length - 1]) {
      case 'Home':
        return (
          <View style={{flex: 1}}>
            <Home/>
          </View>
        );
        break;
      case 'UserProfile':
        return (
          <View style={{flex: 1}}>
            <UserProfile/>
          </View>
        );
        break;
      case'RestaurantList':
        return (
          <View style={{flex: 1}}>
            <RestaurantList/>
          </View>
        );
        break;
      case'RestaurantProfile':
        return (
          <View style={{flex: 1}}>
            <RestaurantProfile/>
          </View>
        );
        break;
      default:
        return (
          <View style={{flex: 1}}>
            <Login/>
          </View>
        );
    }
  }
}

let mapStateToProps = state => {
  return {
    currentView: state.currentView
  }
}

export default connect(mapStateToProps)(AndroidApp);

AppRegistry.registerComponent('AndroidApp', () => AndroidApp);
