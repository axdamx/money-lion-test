import React from 'react';
import {Switch} from 'react-native';
function AppSwitch({isNew, onPress}) {
  return <Switch value={isNew} onValueChange={onPress} />;
}

export default AppSwitch;
