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

import { connect } from 'react-redux';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      userName: '',
      password: '',
      confirmPassword: '',
      errorMessage: '',
      token: '',
      signingUp: false
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  componentDidMount() {
    console.log('mounting');
    AsyncStorage.getItem('userData').then((value) => {
      console.log('>>>> value: ', value);
    })
  }

  handleLogin() {
    credentials = {
      userName: 'victor@gmail.com',
      password: '1234',
    };
    if (!this.state.signingUp) {
      let cbLogin = (response) => {
        this.setState({token: response})
        this.verifyUser();
      }
      let response = Api.login(credentials, cbLogin);
    } else {
      let cbRegister = (response) => {
        this.setState({token: response});
        this.verifyUser();
      }
      let userData = {
        name: this.state.userName,
        email: this.state.email,
        password: this.state.password
      }
      Api.signUp(userData, cbRegister);
    }
  }

  verifyUser() {
    if (this.state.token !== '' || this.state.token !== undefined) {
      console.log(this.state.token);
      let userData = {
        userData: this.state.userName,
        token: this.state.token,
      };
      AsyncStorage.setItem('userData', userData);
      // this.props.setCurrentView('Home');
    } else {
      // TODO: mostrar 'usuario y/o contraseña no validos'
    }
  }

  handleRegister() {
    let newSigningUpState = this.state.signingUp;
    this.setState({signingUp: !newSigningUpState});
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
          onChangeText={(text) => this.setState({userName: text})}
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
