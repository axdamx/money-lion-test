import React, {useState} from 'react';
import {Alert, StyleSheet, Switch, TextInput, View} from 'react-native';
import AppButton from '../components/AppButton';
import AppPicker from '../components/AppPicker';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import colors from '../config/colors';

export default function FirstScreen({navigation}) {
  const [item, setItem] = useState('');
  const [formName, setFormName] = useState('');
  //   const [isNew, setIsNew] = useState(false);
  const categories = [
    {label: 'Text', value: 1},
    {label: 'Number', value: 2},
    {label: 'Boolean', value: 3},
    {label: 'CheckBox', value: 4},
  ];

  const onBtnPress = () => {
    if (item === '' || formName === '') {
      Alert.alert('Its Empty!');
    } else {
      console.log({item, formName});
      navigation.navigate('Second');
    }
  };

  return (
    <AppScreen style={styles.screen}>
      <AppText style={styles.text}> Form Name </AppText>
      <AppTextInput
        placeholder={'Enter Form Name'}
        onChangeText={(text) => setFormName(text)}
      />
      <AppText style={styles.text}> Type </AppText>
      <AppPicker
        selectedItem={item}
        placeholder="Choose your type!"
        items={categories}
        onSelectItem={(itemValue) => setItem(itemValue)}
      />
      <AppButton title="Next" onPress={onBtnPress} />
      {/* <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} /> */}
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
    flex: 1,
  },
  text: {
    padding: 10,
    textDecorationLine: 'underline',
    marginTop: 10,
    color: colors.primary,
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 20,
  },
});
