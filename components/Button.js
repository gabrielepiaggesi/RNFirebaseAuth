import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Button = (props) => {

  return(
    <TouchableOpacity style={styles.buttonStyle}  onPress={props.onPress} >
      <Text style={styles.textStyle}> {props.children} </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle:{
    flex: 1,   //expand the content how much it possible can
    alignSelf : 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    minHeight: 40
  },
  textStyle:{
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
}

export {Button};
