import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../config/colors';

export default function SecondScreen({route}) {
  const data = route.params;
  console.log(data);
  return (
    <View style={styles.screen}>
      <Text> Second Screen </Text>
      <Text> Form Name : {data.formName}</Text>
      <Text> Type : {data.type.label} </Text>
      {data.type.label === 'CheckBox' && <Text>This is Check Box Screen!</Text>}
      {data.type.label === 'Text' && <Text>This is Text Screen!</Text>}
      {data.type.label === 'Boolean' && <Text>This is Boolean Screen!</Text>}
      {data.type.label === 'Number' && <Text>This is Number Screen!</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
