import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../config/colors';
import AppText from './AppText';
import AppScreen from './AppScreen';
import PickerItem from './PickerItem';

function AppPicker({
  icon,
  placeholder,
  types,
  selectedItem,
  onSelectItem,
  width = '100%',
  PickerItemComponent = PickerItem,
  numberOfColumns = 1,
}) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setIsVisible(true)}>
        <View style={[styles.container, {width: width}]}>
          {icon && (
            <Icon
              name={icon}
              size={20}
              color={colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <Icon name="caretdown" size={15} color={colors.medium} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={isVisible} animationType="slide">
        <AppScreen>
          <Button title="close" onPress={() => setIsVisible(false)} />
          <FlatList
            data={types}
            numColumns={numberOfColumns}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({item}) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setIsVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </AppScreen>
      </Modal>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mediumGray,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
  placeholder: {
    color: colors.medium,
    flex: 1,
  },
});

export default AppPicker;
