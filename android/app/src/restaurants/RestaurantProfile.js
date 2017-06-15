import React from 'react';
import { View, StyleSheet, TextInput, AppRegistry, Image, Text, TouchableOpacity, Dimensions} from 'react-native';

export default class RestaurantProfile extends React.Component {
  constructor(props) {
    super(props);
    this.addCategory = this.addCategory.bind(this);
  }

  addCategory() {
    this.props.addCategory(this.props.category.id);
  }

  render() {
    return (
      <View>
        <Text>Perfil del restaurante</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  }
});

AppRegistry.registerComponent('RestaurantProfile', () => RestaurantProfile);
