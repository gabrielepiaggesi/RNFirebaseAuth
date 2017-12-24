import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const Spinner = (props) => {
  return (
      <View style={styles.spinnerStyle}>
        <ActivityIndicator size={props.size || 'large'} />
      </View>
  );
};

const styles = {
  spinnerStyle:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10
  }
};

export default Spinner;
