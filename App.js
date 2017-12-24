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
      //these details are given by firebase when the project is initialized
      apiKey: "your api key",
      authDomain: "your url",
      databaseURL: "your url",
      projectId: "your project id",
      storageBucket: "your storage bucket",
      messagingSenderId: "your number"
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
