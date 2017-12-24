import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Header, Button } from './components';  //di default prende index dove viene esportato tutto
import LoginForm from './LoginForm';
import Spinner from './components/Spinner';

class App extends Component {

state = { loggedIn: null };
//firebase initial config setup
  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyAz4li1tF5m2oU7GBgmO2BKg2btRCEbfXE",
      authDomain: "auth-8d988.firebaseapp.com",
      databaseURL: "https://auth-8d988.firebaseio.com",
      projectId: "auth-8d988",
      storageBucket: "auth-8d988.appspot.com",
      messagingSenderId: "1018433798257"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({ loggedIn: true });
      }else{
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent(){
    switch(this.state.loggedIn){
      case true: return (
                  <Button onPress={() => firebase.auth().signOut()}>
                    Log out
                  </Button>
                );

      case false:  return <LoginForm style={{paddingTop: 20}}/>;

      default: return <Spinner  size='large'/>;
    }

  }

  render() {
    return (
      <View>
        <Header title={'Authentication'} />
        {this.renderContent()}
        <Text style={{alignSelf: 'center', marginTop: 10}}>powered by Firebase</Text>
      </View>
    );
  }

}


export default App;
