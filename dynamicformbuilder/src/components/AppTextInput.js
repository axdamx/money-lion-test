import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import colors from '../config/colors';
import defaultStyles from '../config/style';

function AppTextInput({icon, width = '100%', ...otherProps}) {
  return (
    <View style={[styles.container, {width: width}]}>
      <TextInput style={defaultStyles.text} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mediumGray,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
    width: '100%',
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
