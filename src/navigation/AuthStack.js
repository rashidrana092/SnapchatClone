import navigationStrings from '../constants/navigationStrings';
import {Login, InitialScreen, Signup} from '../screens';
import React from 'react';

export default function AuthStack(Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.INITIAL_SCREEN}
        component={InitialScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.LOGIN}
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.SIGNUP}
        component={Signup}
        options={{headerShown: false}}
      />
    </>
  );
}
