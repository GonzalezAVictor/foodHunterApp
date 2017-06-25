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
import Icon from'react-native-vector-icons/Ionicons';

export default class UserPromotions extends React.Component {
  constructor(props) {
    super(props);
  }

  createRows() {
    return this.props.promotionsFollowed.map((promotions, i) => {
      return <View key={i} style={styles.promotionItem}>
        <Text style={styles.promotionName}>{promotions.name}</Text>
        <Text style={styles.borderBottom}></Text>
      </View>
    });
  }

  render() {
    // let { userData } = this.props;
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center'}}>UserPromotions</Text>
        <View style={styles.promotionTable}>
          {this.createRows()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  promotionTable: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 5
  },
  promotionItem: {
    height: 35,
    paddingHorizontal: 10,
    justifyContent: 'center'
  },
  borderBottom: {
    borderBottomWidth: 1,
    marginHorizontal: 20,
    textAlign: 'center',
    borderColor: '#E9EAEE',
    marginTop: 2
  },
  promotionName: {
    fontSize: 15
  }
});