import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

function AppScreen({children, style}) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 20,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default AppScreen;
