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
import Icon from'react-native-vector-icons/Ionicons';

export default class UserRestaurants extends React.Component {
  constructor(props) {
    super(props);
  }

  createRows() {
    return this.props.restaurantsFollowed.map((restaurant, i) => {
      return <View key={i} style={styles.restaurantItem}>
        <Text style={styles.restaurantName}>{restaurant.name}</Text>
        <Text style={styles.borderBottom}></Text>
      </View>
    });
  }

  render() {
    // let { userData } = this.props;
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center'}}>UserRestaurants</Text>
        <View style={styles.restaurantsTable}>
          {this.createRows()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  restaurantsTable: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 5
  },
  restaurantItem: {
    height: 35,
    paddingHorizontal: 10,
    justifyContent: 'center'
  },
  borderBottom: {
    borderBottomWidth: 1,
    marginHorizontal: 20,
    textAlign: 'center',
    borderColor: '#E9EAEE',
    marginTop: 2
  },
  restaurantName: {
    fontSize: 15
  }
});