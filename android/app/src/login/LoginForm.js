import React from 'react';
import { View, StyleSheet, TextInput, AppRegistry, Image, Text, TouchableOpacity } from 'react-native';

export default class LoginForm extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={ styles.container }>
      	<TextInput
      		style={ styles.textInput }
      		placeholder="Username"
    		/>
      	<TextInput
      		style={ styles.textInput }
      		placeholder="Password"
      		secureTextEntry
    		/>
      	<TouchableOpacity style={ styles.buttonsContainer }>
      		<Text style={ styles.buttonText }>LOGIN</Text>
      	</TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({	
  container: {
  },
  textInput: {
  	width: 200,
  	height: 40,
  	backgroundColor: '#C2827A',
  	marginBottom: 15,
  	borderRadius: 4,
  },
  buttonsContainer: {
  	backgroundColor: 'rgba(67, 255, 175, 0.75)',
  	height: 30
  },
  buttonText: {
  	textAlign: 'center'
  }
});

AppRegistry.registerComponent('LoginForm', () => LoginForm);
