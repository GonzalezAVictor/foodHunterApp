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
import UserRestaurants from './UserRestaurants';
import UserStats from './UserStats';
import UserPromotions from './UserPromotions';
import Icon from'react-native-vector-icons/Ionicons';
import IconMaterial from'react-native-vector-icons/MaterialCommunityIcons';
import Api from './../api/Api';

import { connect } from 'react-redux';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantsFollowed: [],
      promotionsFollowed: [],
      currentPanel: 'UserRestaurants'
    }
    this.goBack = this.goBack.bind(this);
    this.showPanel = this.showPanel.bind(this);
    this.showRestaurants = this.showRestaurants.bind(this);
    this.showStats = this.showStats.bind(this);
    this.showPromotions = this.showPromotions.bind(this);
  }

  componentWillMount() {
    console.log('mounting UserProfile');
    let cb = (response) => {
      this.setState({
        restaurantsFollowed: response.followedRestaurants,
        promotionsFollowed: response.followedPromotions
      });
    }
    Api.getUserData(this.props.userData.token, cb, true);
  }

  goBack() {
    this.props.goBack();
  }

  showPanel() {
    let { restaurantsFollowed, promotionsFollowed } = this.state;
    switch(this.state.currentPanel) {
      case 'UserStats':
        return <UserStats/>
        break;
      case 'UserRestaurants':
        return <UserRestaurants restaurantsFollowed={restaurantsFollowed}/>
        break;
      case 'UserPromotions':
        return <UserPromotions promotionsFollowed={promotionsFollowed}/>
        break;
      default:
        return <UserStats/>
    }
  }

  showRestaurants() {
    this.setState({currentPanel: 'UserRestaurants'});
  }

  showStats() {
    this.setState({currentPanel: 'UserStats'});
  }

  showPromotions() {
    this.setState({currentPanel: 'UserPromotions'});
  }

  showAchievements() {
    this.setState({currentPanel: 'UserAchievments'});
  }

  render() {
    let { userData } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={this.goBack}>
            <Icon style={styles.personIcon} name="md-arrow-back" size={35} color="#2C0F19" />
          </TouchableOpacity>
          <Text style={styles.userName}>{ userData.name }</Text>
        </View>
        <View style={styles.body}>
          <Text>Contenido dle body</Text>
          <View style={styles.categoryLabelContainer}>
            <Text style={styles.categoryLabel}>PastaBurguesivoro</Text>
          </View>
          <View style={styles.userData}>
            {this.showPanel()}
          </View>
        </View>
        <View style={styles.footerBar}>
          <TouchableOpacity style={styles.footerItem} onPress={this.showRestaurants}>
            <Icon style={styles.personIcon} name="ios-restaurant" size={35} color="#2C0F19" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerItem} onPress={this.showPromotions}>
            <IconMaterial style={styles.personIcon} name="sale" size={35} color="#2C0F19" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerItem}>
            <Icon style={styles.personIcon} name="md-trophy" size={35} color="#2C0F19" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerItem}  onPress={this.showStats}>
            <Icon style={styles.personIcon} name="md-stats" size={35} color="#2C0F19" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9EAEE'
  },
  headerContainer: {
    padding: 10,
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#D23540',
    alignItems: 'center',
  },
  userName:{
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    paddingRight: 25
  },
  body: {
    flex: 1
  }, userData: {
    borderRadius: 4,
    flex: 1,
    // backgroundColor: 'blue',
    padding: 10
  },
  categoryLabelContainer: {
    height: 80,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryLabel: {
    fontSize: 40
  },
  footerBar: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    height: 50,
    alignItems: 'center'
  },
  footerItem: {
    flex: 1,
    alignItems: 'center'
  }
});

let mapStateToProps = state => {
  return {
    userData: state.userData
  }
}

function mapDispatchToProps(dispatch, ownProps) { 
  return {
    goBack: () => dispatch({
      type: 'BACK_VIEW'
    }),
  } 
} 

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);

AppRegistry.registerComponent('UserProfile', () => UserProfile);
