import React from 'react';

import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import navigationStrings from '../constants/navigationStrings';
import {Chat, Map, Camera, Stories} from '../screens';
import imagePath from '../constants/imagePath';
import {Image} from 'react-native';
import colors from '../styles/colors';

const BottomTab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <BottomTab.Navigator
      tabBar={tabProps => (
        <>
          <BottomTabBar {...tabProps} />
        </>
      )}
      initialRouteName={navigationStrings.CHAT}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.black,
        },
      }}>
      <BottomTab.Screen
        name={navigationStrings.MAP}
        component={Map}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{
                  tintColor: focused ? colors.green : colors.white,
                  width: 40,
                  height: 40,
                }}
                source={imagePath.icLoc}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={navigationStrings.CHAT}
        component={Chat}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{
                  tintColor: focused ? colors.green : colors.white,
                  width: 40,
                  height: 40,
                }}
                source={imagePath.icChat}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={navigationStrings.CAMERA}
        component={Camera}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{
                  tintColor: focused ? colors.green : colors.white,
                  width: 40,
                  height: 40,
                }}
                source={imagePath.icCamera}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={navigationStrings.STORIES}
        component={Stories}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={{
                  tintColor: focused ? colors.green : colors.white,
                  width: 40,
                  height: 40,
                }}
                source={imagePath.icPeople}
              />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabRoutes;
