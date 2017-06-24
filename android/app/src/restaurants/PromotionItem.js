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
import Icon from'react-native-vector-icons/Ionicons';
import Api from './../api/Api';

import { connect } from 'react-redux';

class PromotionItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDescription: false
    }
    this.changeStateDescription = this.changeStateDescription.bind(this);
    this.followPromotion = this.followPromotion.bind(this);
    this.huntPromotion = this.huntPromotion.bind(this);
  }

  followPromotion() {
    console.log('followPromotion:');
    Api.followPromotion(this.props.promotion.id, this.props.userData.token);
  }

  huntPromotion() {
    console.log('huntPromotion');
    Api.huntPromotion(this.props.promotion.id, this.props.userData.token);
  }

  showDescription() {
    let { promotion } = this.props;
    if (this.state.showDescription) {
      return  <View style={styles.descriptionContainer}>
        <Text>{ promotion.details }</Text>
        {promotion.promotion_type === 'flash' ? 
          <Text>{promotion.startAt} - {promotion.endAt}</Text> : <Text>Libres: {promotion.amount_available}</Text>}
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={[styles.button, styles.buttomLeft]} onPress={this.followPromotion}>
              <Text>Seguir</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttomRight]} onPress={this.huntPromotion}>
              <Text>Cazar</Text>
            </TouchableOpacity>
          </View>
      </View>
    } else {
      return null;
    }
  }

  changeStateDescription() {
    let newStateDescription = this.state.showDescription;
    this.setState({showDescription: !newStateDescription});
  }

  render() {
    let { promotion } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <TouchableOpacity style={{flex: 9}} onPress={this.changeStateDescription}>
            <Text style={styles.promotionName}>{promotion.name}</Text>
          </TouchableOpacity>
          {promotion.promotion_type === 'flash' ? 
            <Icon style={styles.promotionIcon} name="md-flash" size={25} color="#2C0F19" /> : 
            <Icon style={styles.promotionIcon} name="md-star" size={25} color="#2C0F19" />}
          
        </View>
        {this.showDescription()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E9EAEE',
    flexDirection: 'column',
    borderRadius: 8,
    backgroundColor: '#FFD669',
    marginBottom: 5,
    padding: 10,
  },
  promotionName: {
    fontSize: 20,
    flex: 1
  },
  title:{
    flexDirection: 'row',
  },
  descriptionContainer: {
    flexDirection: 'column'
  },
  promotionIcon: {
    flex: 1
  },
  buttonsContainer: {
    flexDirection: 'row',
    margin: -10,
    marginTop: 0
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    backgroundColor: '#E5C15E'
  },
  buttomLeft: {
    borderBottomLeftRadius: 8
  },
  buttomRight: {
    borderBottomRightRadius: 8
  }
});

let mapStateToProps = state => {
  return {
    userData: state.userData
  }
}

export default connect(mapStateToProps)(PromotionItem);

AppRegistry.registerComponent('PromotionItem', () => PromotionItem);