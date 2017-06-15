import React from 'react';
import { View, StyleSheet, TextInput, AppRegistry, Image, Text, TouchableOpacity, Dimensions} from 'react-native';

export default class CategoryCard extends React.Component {
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
        <TouchableOpacity style={styles.categoryCard} onPress={this.addCategory}>
          <Text style={styles.categoryLabel} >{this.props.category.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  categoryCard: {
  height: 80,
  backgroundColor: 'rgba(0, 0, 0, 0.5);',
  marginBottom: 10,
  borderRadius: 4,
  alignItems: 'center',
  justifyContent: 'center',
  }, categoryLabel: {
    color: '#FFFFFF',
    fontWeight: 'normal',
    fontSize: 30
  }
});

AppRegistry.registerComponent('CategoryCard', () => CategoryCard);
