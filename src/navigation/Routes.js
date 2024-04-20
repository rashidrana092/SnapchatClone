import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>{MainStack(Stack)}</Stack.Navigator>
    </NavigationContainer>
  );
}
