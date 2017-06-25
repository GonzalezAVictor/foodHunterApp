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

export default class UserStats extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // let { userData } = this.props;
    return (
      <View style={styles.container}>
        <Text>UserStats</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});