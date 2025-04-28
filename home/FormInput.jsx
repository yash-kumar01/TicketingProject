// components/FormInput.js
import React from 'react';
import { TextInput } from 'react-native';
import styles from '../navStyles/styles';

const FormInput = ({ value, onChangeText, placeholder }) => {
  return (
    <TextInput
      style={styles.formInput}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      placeholderTextColor="white"
    />
  );
};

export default FormInput;
