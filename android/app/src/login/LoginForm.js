import React from 'react';
import { View, 
  StyleSheet,
  TextInput,
  AppRegistry,
  Image,
  Text,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import Api from './../api/Api';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      errorMessage: '',
      token: '',
    }
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    credentials = {
      userName: 'victor@gmail.com',
      password: '1234',
    };
    let cb = (response) => {
      this.setState({token: response})
      this.verifyUser();
    }
    let response = Api.login(credentials, cb);
  }

  verifyUser() {
    if (this.state.token !== '') {
      console.log(this.state.token);
      this.props.changeView('Home');
      let userData = {
        userData: this.state.userName,
        token: this.state.token,
      };
      AsyncStorage.setItem('userData', userData);
    } else {
      // TODO: mostrar 'usuario y/o contraseña no validos'
    }
  }

  render() {

    return (
      <View style={ styles.container }>
      	<TextInput
          onChangeText={(text) => this.setState({userName: text})}
      		style={ styles.textInput }
      		placeholder="Username"
    		/>
      	<TextInput
          onChangeText={(text) => this.setState({password: text})}
      		style={ styles.textInput }
      		placeholder="Password"
      		secureTextEntry
    		/>
      	<TouchableOpacity style={ styles.buttonsContainer} onPress={this.handleLogin}>
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
  	backgroundColor: '#00A700',
    borderRadius: 4,
  	height: 30
  },
  buttonText: {
  	textAlign: 'center'
  }
});

AppRegistry.registerComponent('LoginForm', () => LoginForm);
