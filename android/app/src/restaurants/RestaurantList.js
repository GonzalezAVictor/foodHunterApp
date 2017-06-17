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

export default class RestaurantList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    // this.addCategory = this.addCategory.bind(this);
  }

  render() {
    return (
      <View>
        <Text>RestaurantList</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  }
});

AppRegistry.registerComponent('RestaurantList', () => RestaurantList);