import React from 'react';
import { TextInput } from 'react-native';
import stylesStandard from './styles';

export default function WholeField({ amount, styles, action }) {
  const update = (newValue, actionReturn) => {
    const checkInteger = newValue.match(/^[0-9]*$/);
    if (!checkInteger) return;

    const removeLeft = newValue.replace(/^(0)(.+)/, '$2');

    actionReturn(removeLeft);
  }

  const numberInText = String(amount);

  return <TextInput
    style={[stylesStandard.field, styles]}
    keyboardType='number-pad'
    selectTextOnFocus
    onChangeText={(newValue) => { update(newValue, action) }}
    value={numberInText}
  />
}