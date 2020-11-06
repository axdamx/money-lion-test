import React, {useState} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import colors from '../config/colors';
import AppCheckBox from '../components/AppCheckbox';
import AppTextInput from '../components/AppTextInput';
import AppSwitch from '../components/AppSwitch';
import {useSelector} from 'react-redux';

export default function SecondScreen() {
  const [isCheck, setIsCheck] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const customField = useSelector((state) => state.formReducer.customField);

  const handleCheckBox = (val) => {
    val.checked = !val.checked;
    setIsCheck(!isCheck);
  };

  return (
    <ScrollView>
      <AppScreen style={styles.screen}>
        {customField.map((val, key) => {
          return (
            <View style={styles.listView} key={key}>
              <AppText style={styles.text}>Field Name: {val.fieldName}</AppText>
              {val.type.label === 'CheckBox' && (
                <View>
                  {val.arrayCheckbox.map((checkbox, i) => {
                    return (
                      <View key={i} style={styles.centerView}>
                        <AppCheckBox
                          selected={checkbox.checked}
                          onPress={() => handleCheckBox(checkbox)}
                          text={checkbox.name}
                        />
                      </View>
                    );
                  })}
                </View>
              )}
              {val.type.label === 'Number' && (
                <View>
                  <AppTextInput
                    placeholder={'Enter Number'}
                    keyboardType="number-pad"
                  />
                </View>
              )}
              {val.type.label === 'Boolean' && (
                <View style={styles.centerView}>
                  <AppSwitch
                    isNew={isNew}
                    onPress={(newValue) => setIsNew(newValue)}
                  />
                </View>
              )}
              {val.type.label === 'Text' && (
                <View>
                  <AppTextInput placeholder={'Enter Text'} />
                </View>
              )}
            </View>
          );
        })}
      </AppScreen>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerView: {
    alignItems: 'center',
  },
  text: {
    textDecorationLine: 'underline',
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 20,
  },
  listView: {
    padding: 10,
  },
});
