import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {

  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.title}</Text>
    </View>

  );
};


const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    marginTop: 18,
    justifyContent: 'center',
    lineHeight: 20,
    fontSize: 20
  }
};

export { Header };
