import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  ScrollView,
  TextInput,
  View,
  Button,
} from 'react-native';
import AppButton from '../components/AppButton';
import AppPicker from '../components/AppPicker';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import colors from '../config/colors';

export default function FirstScreen({navigation}) {
  const [type, setType] = useState('');
  const [fieldName, setFieldName] = useState('');
  const [customField, setCustomField] = useState([]);
  const [checkboxOption, setCheckboxOption] = useState('');
  const [arrayCheckbox, setArrayCheckbox] = useState([]);
  const categories = [
    {label: 'Text', id: 1},
    {label: 'Number', id: 2},
    {label: 'Boolean', id: 3},
    {label: 'CheckBox', id: 4},
  ];

  const onBtnPress = () => {
    if (type === '' || fieldName === '') {
      Alert.alert('Its Empty!');
    } else {
      navigation.navigate('Second', customField);
    }
  };

  const addCustomField = () => {
    if (type === '' || fieldName === '') {
      Alert.alert('Its Empty!');
    } else {
      setCustomField([...customField, {fieldName, type, arrayCheckbox}]);
      setArrayCheckbox([]);
    }
  };

  const addCheckBoxOption = () => {
    var arr1 = arrayCheckbox;
    var arr2 = {name: checkboxOption, value: checkboxOption};
    var newData = [...arr1, arr2];
    console.log(newData);
    setArrayCheckbox(newData);
  };

  const removeField = (val) => {
    const newArray = customField.filter((element) => {
      return element.fieldName !== val.fieldName;
    });
    setCustomField(newArray);
  };

  const clearBtn = () => {
    setType('');
    setFieldName('');
    setCustomField([]);
    setArrayCheckbox([]);
  };

  return (
    <ScrollView>
      <AppScreen style={styles.screen}>
        <AppText style={styles.text}> Form Name </AppText>
        <AppTextInput
          placeholder={'Enter Form Name'}
          onChangeText={(text) => setFieldName(text)}
        />
        <AppText style={styles.text}> Type </AppText>
        <AppPicker
          selectedItem={type}
          placeholder="Choose your type!"
          types={categories}
          onSelectItem={(typeValue) => setType(typeValue)}
        />
        {type.label === 'CheckBox' && (
          <AppScreen style={styles.screen}>
            {arrayCheckbox.map((val, key) => {
              return <AppText key={key}>{val.name}</AppText>;
            })}
            <AppText style={styles.text}> Enter Check Box Options </AppText>
            <AppTextInput
              placeholder={'Enter Form Name'}
              onChangeText={(text) => setCheckboxOption(text)}
            />
            <AppButton title="Add Options" onPress={addCheckBoxOption} />
          </AppScreen>
        )}
        <AppButton title="Add" onPress={addCustomField} />
        <AppButton title="Clear" onPress={clearBtn} />

        {/* <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} /> */}
        <AppText style={styles.summaryText}> Your Form Summary </AppText>

        {customField.map((val, key) => {
          return (
            <View style={styles.customField} key={key}>
              <AppText>FieldName: {val.fieldName}</AppText>
              <AppText>FieldType: {val.type.label}</AppText>
              <Button title="Remove" onPress={() => removeField(val)} />
            </View>
          );
        })}
        <AppButton title="Next" onPress={onBtnPress} />
      </AppScreen>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
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
  optionButton: {
    width: '50%',
  },
  customField: {
    padding: 10,
    backgroundColor: colors.mediumGray,
  },
  summaryText: {
    padding: 10,
    textDecorationLine: 'underline',
    marginTop: 10,
    color: colors.primary,
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 20,
    textAlign: 'center',
  },
});
