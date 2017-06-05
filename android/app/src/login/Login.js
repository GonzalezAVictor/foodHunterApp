import React from 'react';
import { View, StyleSheet, TextInput, AppRegistry, Image, Text } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends React.Component {
  static propTypes = {
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={ styles.container }>
      	<Text style={styles.logo}>
      		FOOD HUNTER
      	</Text>
      	<LoginForm/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    fontFamily: 'Karla',
    fontSize: 40
  },
  container: {
  	alignItems: 'center',
  	backgroundColor: '#B2230A',
  }
});

AppRegistry.registerComponent('Login', () => Login);
