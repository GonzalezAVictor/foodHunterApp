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
// require('./img/favicon.png')

export default class RestaurantCard extends React.Component {
  constructor(props) {
    super(props);
    // this.addCategory = this.addCategory.bind(this);
  }

  // addCategory() {
  //   this.props.addCategory(this.props.category.id);
  // }

  createCategoriesList() {
    return this.props.restaurant.categories.map((category) => {
      return <Text>{category.name}</Text>
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.restaurantImage}>Restaurant Image</Text>
        {this.createCategoriesList()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E9EAEE',
    flexDirection: 'row'
  },
  restaurantImage: {
    width: 150,
    height: 150,
    backgroundColor: 'red'
  }
});

AppRegistry.registerComponent('RestaurantCard', () => RestaurantCard);