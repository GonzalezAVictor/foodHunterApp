import React from 'react';
import { View, StyleSheet, TextInput, AppRegistry, Image, Text, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
import Api from './../api/Api';
// import Icon from 'react-native-vector-icons/FontAwesome';
import CategoryCard from './CategoryCard';
import Icon from'react-native-vector-icons/Ionicons';

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
    this.goUserProfile = this.goUserProfile.bind(this);
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
    Api.getRandomRestaurant(this.state.categoriesSelected, cb);
    this.props.changeView('RestaurantList');
  }

  getAllRestaurants() {
    console.log('categoriesSelected: ', this.state.categoriesSelected);
  }

  goUserProfile() {
    this.props.changeView('UserProfile');
  }

  render() {
    return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TouchableOpacity onPress={this.goUserProfile}>
          <Icon style={styles.personIcon} name="md-person" size={35} color="#2C0F19" />
        </TouchableOpacity>
        <TextInput style={styles.searchBar}/>
      </View>
      <View style={styles.homeBodyContainer}>
        <ScrollView>
          {this.createCards()}
        </ScrollView>
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
  }, personIcon: {
    padding: 10
  }
});

AppRegistry.registerComponent('Home', () => Home);