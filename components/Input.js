import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = (props) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.labelStyle}>{props.label}</Text>
      <TextInput
      style={styles.inputStyle}
      value={props.value}
      onChangeText={props.onChangeText}
      underlineColorAndroid='transparent'
      autoCorrect={false}
      placeholder={props.placeholder}
      secureTextEntry={props.hideText}
      />
    </View>
  );
};

const styles={
  viewStyle:{
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  labelStyle:{
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  inputStyle:{
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  }
}

export {Input};
