import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

function AppCheckBox({
  selected,
  onPress,
  style,
  size = 35,
  color = '#211f30',
  text = '',
  ...props
}) {
  return (
    <TouchableOpacity
      style={[styles.checkBox, style]}
      onPress={onPress}
      {...props}>
      <Icon
        size={size}
        color={color}
        name={selected ? 'check-box' : 'check-box-outline-blank'}
      />

      <Text> {text} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  checkBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default AppCheckBox;
