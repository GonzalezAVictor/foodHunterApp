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
  ScrollView,
  Button
} from 'react-native';
import Api from './../api/Api';
// import Icon from 'react-native-vector-icons/FontAwesome';
import CategoryCard from './CategoryCard';
import Icon from'react-native-vector-icons/Ionicons';

import { connect } from 'react-redux';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      categoriesSelected: [],
      searching: false
    }
    this.addCategory = this.addCategory.bind(this);
    this.getRandomRestaurant = this.getRandomRestaurant.bind(this);
    this.getAllRestaurants = this.getAllRestaurants.bind(this);
    this.goUserProfile = this.goUserProfile.bind(this);
    this.search = this.search.bind(this);
  }

  componentWillMount() {
    let { currentCategories, setCurrentCategories } = this.props;
    if (currentCategories.length === 0) {
      let cb = (response) => {
        setCurrentCategories(response);
      }
      Api.getCategories(cb);
    } else {
      console.log('las categorias han sifo fetcheadas');
    }
  }

  createCards() {
    return this.props.currentCategories.map((category, i) => {
      let selected = false;
      if (this.props.IdCategoriesSelected.indexOf(category.id) !== -1) {selected = true;}
      return <CategoryCard 
        key={i} 
        category={category} 
        addCategory={this.addCategory}
        selected={selected}
      />
    })
  }

  addCategory(id) {
    let category = this.props.IdCategoriesSelected.findIndex((categoryId) => {
      return categoryId === id;
    });
    if (category === -1) {
      this.props.addIdCategory(id);
    } else {
      this.props.remomeIdCategory(id);
    }
  }

  getRandomRestaurant() {
    console.log('getRandomRestaurant ', this.props.IdCategoriesSelected);
    let cb = (restaurant) => {
      this.props.setCurrentRestaurant(restaurant);
      this.props.setCurrentView('RestaurantProfile');
    }
    Api.getRandomRestaurant(this.props.IdCategoriesSelected, cb);
  }

  getAllRestaurants() {
    console.log('categoriesSelected: ', this.props.IdCategoriesSelected.length);
    let cb = (restaurants) => {
      this.props.setCurrentRestaurants(restaurants);
      this.props.setCurrentView('RestaurantList');
    }
    if (this.props.IdCategoriesSelected.length > 0) {
      Api.getAllRestaurants(this.props.IdCategoriesSelected, cb);
    } else {
      Api.getAllRestaurantsNoCategories(cb);
    }
  }

  goUserProfile() {
    this.props.setCurrentView('UserProfile');
  }

  search() {
    let newSearchingState = this.state.searching;
    this.setState({searching: !newSearchingState});
  }

  manageSearchBar() {
    if (this.state.searching) {
      return <View style={{ flexDirection:'row', flex: 1 }}>
        <TextInput
          style={styles.searchBar}
        />
        <TouchableOpacity onPress={this.search}>
          <Icon style={styles.personIcon} name="md-search" size={35} color="#2C0F19" />
        </TouchableOpacity>
      </View>
      
    } else {
      return  <View style={{ flexDirection:'row', flex: 1}}>
        <Text style={styles.headerLabel}>Categorias</Text>
        <TouchableOpacity onPress={this.search}>
          <Icon style={styles.personIcon} name="md-search" size={35} color="#2C0F19" />
        </TouchableOpacity>
      </View>
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBarContainer}>
          <TouchableOpacity onPress={this.goUserProfile}>
            <Icon style={styles.personIcon} name="md-person" size={35} color="#2C0F19" />
          </TouchableOpacity>
          {this.manageSearchBar()}
        </View>
        <View style={styles.homeBodyContainer}>
          <ScrollView>
            {this.createCards()}
          </ScrollView>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={ styles.button50 } onPress={this.getAllRestaurants}>
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
    marginTop: 7,
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
  },
  headerLabel:{
    fontSize: 20,
    flex: 1,
    padding: 10,
    paddingTop: 12,
    textAlign: 'center',
  }
});

let mapStateToProps = state => {
  return {
    IdCategoriesSelected: state.IdCategoriesSelected,
    currentCategories: state.currentCategories
  }
}

function mapDispatchToProps(dispatch, ownProps) { 
  return {
    addIdCategory: (id) => dispatch({ 
      type: 'ADD_SELECTED_CATEGORY',
      id: id,
    }),
    remomeIdCategory: (id) => dispatch({
      type: 'REMOVE_SELECTED_CATEGORY',
      id: id
    }),
    setCurrentRestaurant: (restaurant) => dispatch({
      type:'SET_CURRENT_RESTAURANT',
      restaurant: restaurant
    }),
    setCurrentView: (view) => dispatch({
      type: 'SET_CURRENT_VIEW',
      view: view
    }),
    setCurrentRestaurants: (restaurants) => dispatch({
      type: 'SET_CURRENT_RESTAURANTS',
      restaurants: restaurants
    }),
    setCurrentCategories: (categories) => dispatch({
      type: 'SET_CURRENT_CATEGORIES',
      categories: categories
    })
  } 
} 

export default connect(mapStateToProps, mapDispatchToProps)(Home);

AppRegistry.registerComponent('Home', () => Home);