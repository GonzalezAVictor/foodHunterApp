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

export default class PromotionItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDescription: false
    }
    this.changeStateDescription = this.changeStateDescription.bind(this);
  }

  showDescription() {
    if (this.state.showDescription) {
      return  <View style={styles.descriptionContainer}>
        <Text>{ this.props.promotion.details }</Text>
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
    let { promotion } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <TouchableOpacity onPress={this.changeStateDescription}>
            <Text style={styles.promotionName}>{promotion.name}</Text>
          </TouchableOpacity>
          <Icon style={styles.promotionIcon} name="md-flash" size={25} color="#2C0F19" />
        </View>
        {this.showDescription()}
      </View>
    );
  }
}
let promotionTitle = Dimensions.get('window').width * .87;

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
    width: promotionTitle,
  },
  title:{
    flexDirection: 'row',
  },
  descriptionContainer: {
    flexDirection: 'column'
  },
  promotionIcon: {
    paddingRight: 5
  }
});

AppRegistry.registerComponent('PromotionItem', () => PromotionItem);