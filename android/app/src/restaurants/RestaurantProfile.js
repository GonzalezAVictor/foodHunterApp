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
import RestaurantCard from './RestaurantCard';
import PromotionItem from './PromotionItem';
import Api from './../api/Api';

import { connect } from 'react-redux';

class RestaurantProfile extends React.Component {
  constructor(props) {
    super(props);
    this.goHome = this.goHome.bind(this);
    this.followRestaurant = this.followRestaurant.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  goHome() {
    this.props.setCurrentView('Home');
  }

  goBack() {
    this.props.goBack();
  }

  createPromotionsList() {
    return this.props.currentRestaurant.promotions.map((promotion, i) => {
      return <PromotionItem key={i} promotion={promotion}/>
    })
  }

  followRestaurant() {
    restaurantId = this.props.currentRestaurant.id;
    console.log('followRestaurant: ', restaurantId);
    Api.followRestaurant(restaurantId);
  }

  render() {
    console.log('promotions: ', this.props.currentRestaurant.promotions);
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={this.goBack}>
            <Icon style={styles.personIcon} name="md-arrow-back" size={35} color="#2C0F19" />
          </TouchableOpacity>
          <Text style={styles.restaurantName}>{ this.props.currentRestaurant.name }</Text>
          <TouchableOpacity onPress={this.followRestaurant}>
            <Icon style={styles.personIcon} name="md-heart-outline" size={35} color="#2C0F19" />
          </TouchableOpacity>
        </View>
        <View style={styles.bodyContainer}>
          <RestaurantCard restaurant={this.props.currentRestaurant}/>
          <View style={styles.promotionsList}>
            {this.createPromotionsList()}
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
  personIcon: {
    padding: 10
  },
  searchBar: {
    flex: 1,
    height: 40,
    backgroundColor: '#C2827A',
    borderRadius: 15,
  },
  restaurantName:{
    flex: 1,
    fontSize: 20,
    textAlign: 'center'
  },
  promotionsList: {
    // backgroundColor: '#FFFFFF',
    borderRadius: 8,
    margin: 5
  }
});

let mapStateToProps = state => {
  return {
    currentRestaurant: state.currentRestaurant
  }
}

function mapDispatchToProps(dispatch, ownProps) { 
  return {
    setCurrentView: (view) => dispatch({
      type: 'SET_CURRENT_VIEW',
      view: view
    }),
    goBack: () => dispatch({
      type: 'BACK_VIEW'
    }),
  } 
} 

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantProfile);

AppRegistry.registerComponent('RestaurantProfile', () => RestaurantProfile);
