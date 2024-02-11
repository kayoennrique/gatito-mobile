import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import functionStyleStandard from './styles';

export default function Button({ small = false, invert = false, amount, action, styles }) {
  const stylesStandard = functionStyleStandard(small, invert);
  return <TouchableOpacity onPress={action} style={[stylesStandard.button, styles]}>
    <Text style={stylesStandard.amount}>{amount}</Text>
  </TouchableOpacity>
}