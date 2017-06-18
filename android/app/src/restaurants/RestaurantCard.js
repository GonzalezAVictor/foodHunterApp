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
} from 'react-native';
// require('./img/favicon.png')

export default class RestaurantCard extends React.Component {
  constructor(props) {
    super(props);
  }

  createCategoriesList() {
    return this.props.restaurant.categories.map((category, i) => {
      return <Text key={i}>{category.name}</Text>
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.restaurantImage} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>
        {this.createCategoriesList()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    margin: 5,
    borderRadius: 8
  },
  restaurantImage: {
    width: 150,
    height: 150,
    padding: 10,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  }
});

AppRegistry.registerComponent('RestaurantCard', () => RestaurantCard);