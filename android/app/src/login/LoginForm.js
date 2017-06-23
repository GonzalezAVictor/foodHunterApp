import React from 'react';
import { View, 
  StyleSheet,
  TextInput,
  AppRegistry,
  Image,
  Text,
  TouchableOpacity,
  AsyncStorage,
  KeyboardAvoidingView
} from 'react-native';
import Api from './../api/Api';

import { connect } from 'react-redux';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: '',
      confirmPassword: '',
      errorMessage: '',
      token: '',
      signingUp: false,
      userData: {}
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  componentDidMount() {
    console.log('mounting');
    AsyncStorage.getItem('userData').then((value) => {
      if (value !== null) {
        this.props.setCurrentView('Home');
      }
    })
  }

  handleLogin() {
    credentials = {
      email: 'victor@gmail.com',
      password: '1234',
    };
    let cbLogin = (response) => {
      console.log('responseeeee: ', response)
      this.setState({token: response})
      this.verifyUser();
    }
    if (!this.state.signingUp) {
      Api.login(credentials, cbLogin);
    } else {
      let userData = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      }
      let cbRegister = (response) => {
        this.setState({userData: response});
        Api.login(userData, cbLogin);
      }
      
      Api.signUp(userData, cbRegister);
    }
  }

  verifyUser() {
    let { token } = this.state;
    console.log('token: ', this.state.token.token)
    console.log('tamaño del token: ', this.state.token.length)
    if ((token !== '' || token !== undefined) && token.token !== undefined) {
      console.log(this.state.token);
      let userData = {
        userData: this.state.userData,
        token: this.state.token,
      };
      console.log('JSON.stringfy: ', JSON.stringify(userData));
      AsyncStorage.setItem('userData', JSON.stringify(userData));
      this.props.setCurrentView('Home');
    } else {
      // TODO: mostrar 'usuario y/o contraseña no validos'
    }
  }

  handleRegister() {
    let newSigningUpState = this.state.signingUp;
    this.setState({signingUp: !newSigningUpState});
  }

  cleanAS() {
    AsyncStorage.clear();
  }


  render() {
    let { signingUp } = this.state;
    return (
      <View style={ styles.container }>
        { signingUp ? 
          <TextInput
          onChangeText={(text) => this.setState({email: text})}
          style={ styles.textInput }
          placeholder="Email"
        /> : null}
      	<TextInput
          onChangeText={(text) => this.setState({name: text})}
      		style={ styles.textInput }
      		placeholder="Nombre de usuario"
    		/>
      	<TextInput
          onChangeText={(text) => this.setState({password: text})}
      		style={ styles.textInput }
      		placeholder="Contraseña"
      		secureTextEntry
    		/>
        { signingUp ? 
          <TextInput
          onChangeText={(text) => this.setState({confirmPassword: text})}
          style={ styles.textInput }
          placeholder="Confirmar contraseña"
          secureTextEntry
        /> : null}
      	<TouchableOpacity style={ styles.buttonsContainer} onPress={this.handleLogin}>
      		<Text style={ styles.buttonText }>LOGIN</Text>
      	</TouchableOpacity>
        <TouchableOpacity style={{}} onPress={this.handleRegister}>
          <Text style={ styles.buttonText }>registate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{}} onPress={this.cleanAS}>
          <Text style={ styles.buttonText }>Clean AS</Text>
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
  	marginBottom: 10,
  	borderRadius: 4,
  },
  buttonsContainer: {
  	backgroundColor: '#00A700',
    borderRadius: 4,
  	height: 30
  },
  buttonText: {
  	textAlign: 'center',
  }
});


let mapStateToProps = state => {
  return {
    currentView: state.currentView
  }
}

function mapDispatchToProps(dispatch, ownProps) { 
  return {
    setCurrentView: (view) => dispatch({
      type: 'SET_CURRENT_VIEW',
      view: view
    })
  } 
} 

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

AppRegistry.registerComponent('LoginForm', () => LoginForm);
