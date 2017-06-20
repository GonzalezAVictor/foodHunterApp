import React from 'react';
import { 
  View,
  StyleSheet,
  TextInput,
  AppRegistry,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from 'react-native';
import Icon from'react-native-vector-icons/Ionicons';
import RestaurantItemList from './RestaurantItemList';

import { connect } from 'react-redux';

class RestaurantList extends React.Component {
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
    this.props.setCurrentView('RestaurantProfile');
  }

  createRestaurantList() {
    return this.props.currentRestaurants.map((restaurant, i) => {
      console.log('restaurant: ', restaurant);
      return <RestaurantItemList restaurant={restaurant} key={i}/>
    })
  }

  render() {
    console.log('currentRestaurants: ', this.props.currentRestaurants);
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={this.goHome}>
            <Icon style={styles.headerIcon} name="md-arrow-back" size={35} color="#2C0F19" />
          </TouchableOpacity>
          <Text style={styles.headerLabel}>Restaurantes</Text>
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.restaurantList}>
            <ScrollView>
              {this.createRestaurantList()}
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9EAEE',
  },
  headerContainer: {
    padding: 10,
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#D23540',
    alignItems: 'center',
  },
  headerIcon: {
    padding: 10
  },
  headerLabel:{
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    paddingRight: 25
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
    currentRestaurants: state.currentRestaurants
  }
}

function mapDispatchToProps(dispatch, ownProps) { 
  return {
    setCurrentView: (view) => dispatch({
      type: 'SET_CURRENT_VIEW',
      view: view
    })
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);

AppRegistry.registerComponent('RestaurantList', () => RestaurantList);