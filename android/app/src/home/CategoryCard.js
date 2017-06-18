import React from 'react';
import { View, StyleSheet, TextInput, AppRegistry, Image, Text, TouchableOpacity, Dimensions} from 'react-native';

export default class CategoryCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.addCategory = this.addCategory.bind(this);
  }

  addCategory() {
    let currentSelected = this.state.selected;
    this.props.addCategory(this.props.category.id);
    this.setState({selected: !currentSelected});
  }

  render() {
    if (this.props.selected) {
      return (
        <View>
          <TouchableOpacity style={styles.categoryCardSelected} onPress={this.addCategory}>
            <Text style={styles.categoryLabel} >{this.props.category.name}</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View>
          <TouchableOpacity style={styles.categoryCard} onPress={this.addCategory}>
            <Text style={styles.categoryLabel} >{this.props.category.name}</Text>
          </TouchableOpacity>
        </View>
      );
    }
    
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
  },categoryCardSelected: {
    height: 80,
    backgroundColor: '#75162E',
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
