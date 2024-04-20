import navigationStrings from '../constants/navigationStrings';
import React from 'react';
import TabRoutes from './TabRoutes';

export default function MainStack(Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.CHAT}
        component={TabRoutes}
        options={{headerShown: false}}
      />
    </>
  );
}
