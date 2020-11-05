import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {
  Container,
  Header,
  Content,
  ListItem,
  CheckBox,
  Text,
  Body,
} from 'native-base';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import colors from '../config/colors';

export default function SecondScreen({route}) {
  const data = route.params;
  console.log(data);
  return (
    <ScrollView>
      <AppScreen style={styles.screen}>
        {data.map((val, key) => {
          return (
            <View style={styles.listView} key={key}>
              <AppText style={styles.text}>{val.fieldName}</AppText>
              {val.type.label === 'CheckBox' && (
                <AppText> This is CheckBox</AppText>
                // <View>
                //   {val.type.values.map((checkbox, i) => {
                //     return (
                //       <View key={i}>
                //         <Text>{checkbox.name}</Text>
                //         <CheckBox value={checkbox.value} key={checkbox.id} />
                //       </View>
                //     );
                //   })}
                // </View>
              )}
              {val.type.label === 'Number' && <Text> This is Number</Text>}
              {val.type.label === 'Boolean' && <Text> This is Boolean</Text>}
              {val.type.label === 'Text' && <Text> This is Text</Text>}
            </View>
          );
        })}
      </AppScreen>
    </ScrollView>
    // <View style={styles.screen}>
    //   <Text> Second Screen </Text>
    //   <Text> Form Name : {data.formName}</Text>
    //   {/* <Text> Type : {data.formName.type.label} </Text>
    //   {data.formName.type.label === 'CheckBox' && (
    //     <Text>This is Check Box Screen!</Text>
    //   )}
    //   {data.formName.type.label === 'Text' && <Text>This is Text Screen!</Text>}
    //   {data.formName.type.label === 'Boolean' && (
    //     <Text>This is Boolean Screen!</Text>
    //   )}
    //   {data.formName.type.label === 'Number' && (
    //     <Text>This is Number Screen!</Text>
    //   )} */}
    // </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  listView: {
    padding: 20,
  },
});
