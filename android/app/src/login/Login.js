import React from 'react';
import { 
  View, 
  StyleSheet, 
  TextInput, 
  AppRegistry, 
  Image, 
  Text, 
  KeyboardAvoidingView 
} from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends React.Component {
  static propTypes = {
  };

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoLabel}>FOOD</Text>
          <Text style={styles.logoLabel}>HUNTER</Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm/>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  	alignItems: 'center',
  	backgroundColor: '#B2230A',
    paddingTop: 30
  },
  logoLabel: {
    fontSize: 60
  },
  logoContainer: {
    alignItems: 'center',
    backgroundColor: '#B2230A',
  },
  formContainer: {
    paddingTop: 30
  }
});

AppRegistry.registerComponent('Login', () => Login);
