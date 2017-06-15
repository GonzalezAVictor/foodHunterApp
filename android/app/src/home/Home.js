import React from 'react';
import { View, StyleSheet, TextInput, AppRegistry, Image, Text, TouchableOpacity, Dimensions} from 'react-native';
import Api from './../api/Api';
import CategoryCard from './CategoryCard';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      categoriesSelected: [],
    }
    this.addCategory = this.addCategory.bind(this);
    this.getRandomRestaurant = this.getRandomRestaurant.bind(this);
    this.getAllRestaurants = this.getAllRestaurants.bind(this);
  }

  componentWillMount() {
    console.log('mounting');
    let cb = (response) => {
      this.setState({
        categories: response
      });
      console.log(this.state.categories);
    }
    Api.getCategories(cb);
  }

  createCards() {
    return this.state.categories.map((category, i) => {
      return <CategoryCard key={i} category={category} addCategory={this.addCategory}/>
    })
  }

  addCategory(id) {
    let category = this.state.categoriesSelected.findIndex((categoryId) => {
      return categoryId === id;
    });
    if (category === -1) {
      let newCategoriesSelectedState = this.state.categoriesSelected.slice();
      newCategoriesSelectedState.push(id);
      this.setState({
        categoriesSelected: newCategoriesSelectedState
      });
    } else {
      let newCategoriesSelectedState = this.state.categoriesSelected.slice();
      newCategoriesSelectedState.splice(category, 1);
      this.setState({
        categoriesSelected: newCategoriesSelectedState
      });
    }
    console.log('id: ', category);
  }

  getRandomRestaurant() {
    console.log('getRandomRestaurant ', this.state.categoriesSelected);
    let cb = () => {
      console.log('ccccccbbbbbbb');
    }
    Api.getRandomRestaurant(categoriesId, cb);
  }

  getAllRestaurants() {
    console.log('categoriesSelected: ', this.state.categoriesSelected);
  }

  render() {
    return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <Text>
          ICONO
        </Text>
        <TextInput style={styles.searchBar}/>
      </View>
      <View style={styles.homeBodyContainer}>
        {this.createCards()}
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={ styles.button50} onPress={this.getAllRestaurants}>
          <Text style={ styles.showAll }>Todos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.button50 } onPress={this.getRandomRestaurant}>
          <Text style={ styles.random }>Aleatorio</Text>
        </TouchableOpacity>
      </View>
    </View>
    );
  }
}

let buttonWidth = Dimensions.get('window').width * .5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },searchBarContainer: {
    padding: 10,
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#D23540',
    alignItems: 'center',
  },
  searchBar: {
    flex: 1,
    height: 40,
    backgroundColor: '#C2827A',
    borderRadius: 15,
  },
  homeBodyContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#E9EAEE'
  },
  buttonsContainer: {
    height: 50,
    flexDirection: 'row',
  },
  button50: {
    alignItems: 'center',
    width: buttonWidth,
    justifyContent: 'center',
  },categoryCard: {
    height: 60,
    backgroundColor: '#ff7f50',
    marginBottom: 5,
    borderRadius: 4
  }, showAll: {
    fontSize: 20
  }, random: {
    color: '#E2374B',
    fontSize: 20,
  }
});

AppRegistry.registerComponent('Home', () => Home);