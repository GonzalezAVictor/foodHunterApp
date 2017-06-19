import React from 'react';
import { 
  View,
  StyleSheet,
  TextInput,
  AppRegistry,
  Image,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import Icon from'react-native-vector-icons/Ionicons';

import { connect } from 'react-redux';

class RestaurantItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.goHome = this.goHome.bind(this);
    this.goRestaurantProfile = this.goRestaurantProfile.bind(this);
  }

  goHome() {
    this.props.setCurrentView('Home');
  }

  goRestaurantProfile() {
    this.props.setCurrentRestaurant(this.props.restaurant);
    this.props.setCurrentView('RestaurantProfile');
  }

  render() {
    let { restaurant } =  this.props;
    return (
      <TouchableOpacity onPress={this.goRestaurantProfile}> 
        <View style={styles.restaurantCard}>
          <Image style={styles.restaurantImage} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>
          <View style={styles.restaurantCardData}>
            <Text style={styles.restaurantName}>{restaurant.name}</Text>
            <Text>{restaurant.openAt} - {restaurant.closeAt}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  headerIcon: {
    padding: 10
  },
  bodyContainer: {
    flex: 1,
    padding: 5
  },
  restaurantCard: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 5
  },
  restaurantImage: {
    width: 70,
    height: 70,
    padding: 10,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  restaurantCardData: {
    flexDirection: 'column',
    padding: 5
  },
  restaurantName: {
    fontSize: 17,
    marginBottom: 3
  }
});

let mapStateToProps = state => {
  return {
  }
}

function mapDispatchToProps(dispatch, ownProps) { 
  return {
    setCurrentView: (view) => dispatch({
      type: 'SET_CURRENT_VIEW',
      view: view
    }),
    setCurrentRestaurant: (restaurant) => dispatch({
      type: 'SET_CURRENT_RESTAURANT',
      restaurant: restaurant
    })
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantItemList);

AppRegistry.registerComponent('RestaurantItemList', () => RestaurantItemList);