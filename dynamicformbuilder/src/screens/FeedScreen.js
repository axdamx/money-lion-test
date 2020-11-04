import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../config/colors';

export default function FeedScreen() {
  return (
    <View style={styles.screen}>
      <Text> First Screen </Text>
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
