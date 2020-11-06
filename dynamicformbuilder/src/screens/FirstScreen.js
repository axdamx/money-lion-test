import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  ScrollView,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import AppButton from '../components/AppButton';
import AppPicker from '../components/AppPicker';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import colors from '../config/colors';
import {
  addCustomField,
  removeCustomField,
  clearCustomField,
} from '../redux/form';

export default function FirstScreen({navigation}) {
  const [type, setType] = useState('');
  const [fieldName, setFieldName] = useState('');
  const [checkboxOption, setCheckboxOption] = useState('');
  const [arrayCheckbox, setArrayCheckbox] = useState([]);
  const categories = [
    {label: 'Text', id: 1},
    {label: 'Number', id: 2},
    {label: 'Boolean', id: 3},
    {label: 'CheckBox', id: 4},
  ];
  const dispatch = useDispatch();
  const customField = useSelector((state) => state.formReducer.customField);

  const onBtnPress = () => {
    if (type === '' || fieldName === '') {
      Alert.alert('Its Empty!');
    } else {
      navigation.navigate('Second');
    }
  };

  const addCustomFieldBtn = () => {
    if (type === '' || fieldName === '') {
      Alert.alert('Its Empty!');
    } else {
      dispatch(addCustomField({fieldName, type, arrayCheckbox}));
      Alert.alert('Successfully Added!');
      setArrayCheckbox([]);
    }
  };

  const addCheckBoxOption = () => {
    var arr1 = arrayCheckbox;
    var arr2 = {name: checkboxOption, value: checkboxOption, checked: false};
    var newData = [...arr1, arr2];
    setArrayCheckbox(newData);
  };

  const removeField = (val) => {
    dispatch(removeCustomField(val.fieldName));
  };

  const removeCheckBoxOptions = (val) => {
    const newArray = arrayCheckbox.filter((element) => {
      return element.name !== val.name;
    });
    setArrayCheckbox(newArray);
  };

  const clearBtn = () => {
    setType('');
    setFieldName('');
    setArrayCheckbox([]);
    dispatch(clearCustomField());
  };

  return (
    <ScrollView>
      <AppScreen style={styles.screen}>
        <View style={styles.formClearBtn}>
          <AppText style={styles.text}> Form Name </AppText>
          <AppButton title="Clear" onPress={clearBtn} width="50%" />
        </View>
        <AppTextInput
          autoCorrect={false}
          placeholder={'Enter Form Name'}
          onChangeText={(text) => setFieldName(text)}
        />
        <AppText style={styles.text}> Type </AppText>
        <AppPicker
          selectedItem={type}
          placeholder="Choose your type"
          types={categories}
          onSelectItem={(typeValue) => setType(typeValue)}
          icon="chevron-right"
        />
        {type.label === 'CheckBox' && (
          <AppScreen style={styles.checkboxScreen}>
            <AppText style={styles.text}> Enter Check Box Options </AppText>
            {arrayCheckbox.map((val, key) => {
              return (
                <View style={styles.customField} key={key}>
                  <View>
                    <AppText style={styles.checkboxText}>- {val.name}</AppText>
                  </View>
                  <View>
                    <TouchableWithoutFeedback
                      onPress={() => removeCheckBoxOptions(val)}>
                      <View style={styles.closeBtn}>
                        <Icon name="clear" size={35} color={colors.primary} />
                      </View>
                    </TouchableWithoutFeedback>
                  </View>
                </View>
              );
            })}
            <AppTextInput
              placeholder={'Enter checkbox options'}
              onChangeText={(text) => setCheckboxOption(text)}
            />
            <View style={styles.centerView}>
              <AppButton title="Add Options" onPress={addCheckBoxOption} />
            </View>
          </AppScreen>
        )}
        <View style={styles.centerView}>
          <AppButton
            title="Add"
            onPress={addCustomFieldBtn}
            color="secondary"
          />
        </View>
        <AppText style={styles.summaryText}> Your Form Summary </AppText>
        {customField.map((val, key) => {
          return (
            <View style={styles.customField} key={key}>
              <View>
                <AppText>FieldName: {val.fieldName}</AppText>
                <AppText>FieldType: {val.type.label}</AppText>
              </View>
              <View>
                <TouchableWithoutFeedback onPress={() => removeField(val)}>
                  <View style={styles.closeBtn}>
                    <Icon name="clear" size={35} color={colors.primary} />
                  </View>
                </TouchableWithoutFeedback>
              </View>
              {/* <Button title="Remove" onPress={() => removeField(val)} /> */}
            </View>
          );
        })}
      </AppScreen>
      <View style={styles.centerView}>
        <AppButton title="Next" onPress={onBtnPress} color="secondary" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
  centerView: {
    alignItems: 'center',
  },
  formClearBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkboxScreen: {
    padding: 10,
    backgroundColor: colors.light,
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: 'center',
  },
  text: {
    padding: 5,
    textDecorationLine: 'underline',
    marginTop: 10,
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 20,
  },
  checkboxText: {
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.mediumGray,
    padding: 10,
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
  closeBtn: {
    alignItems: 'flex-end',
    marginRight: 10,
  },
});
