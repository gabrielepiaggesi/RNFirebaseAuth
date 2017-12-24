import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './components';
import Spinner from './components/Spinner';


class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress(){
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });
    firebase.auth().signInWithEmailAndPassword(email, password).then(this.onLoginSuccess.bind(this))
    .catch(()=>{
        firebase.auth().createUserWithEmailAndPassword(email, password).then(this.onLoginSuccess.bind(this))
          .catch(()=>{
            this.onLoginError();
          });
      });
  }

  onLoginSuccess(){
    this.setState({ email: '', password: '', error: '', loading: false });
  }

  onLoginError(){
    this.setState({ email: '', password: '',error: 'Authentication Failed :(', loading: false});
  }

  renderButton(){
    if(this.state.loading){
      console.log('caricamento');
      return <Spinner />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        LogIn or SignUp
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input label={'Email'} underlineColorAndroid='transparent'
            placeholder={'example@gmail.com'}
            style={{ height: 20, width:100 }}
            value={this.state.email} onChangeText={email => this.setState({email})}
          />
        </CardSection>

        <CardSection>
          <Input label={'Password'} underlineColorAndroid='transparent'
            placeholder={'password'} hideText
            style={{ height: 20, width:100 }}
            value={this.state.password} onChangeText={password => this.setState({password})}
          />
        </CardSection>

        <Text style={styles.errorStyle}>{this.state.error}</Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }

}

const styles = {
  errorStyle:{
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}


export default LoginForm;
