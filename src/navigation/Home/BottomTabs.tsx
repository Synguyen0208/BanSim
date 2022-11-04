import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, StyleSheet} from 'react-native';

import Text from '../../components/Text';
import {BottomDefaultOptions} from '../Constant';
import routes from '../routes';
const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={BottomDefaultOptions}>
      {routes.BOTTOM_TAB.map(({label, icon, options, ...props}, index) => (
        <Tab.Screen
          navigationKey={props.name}
          key={index}
          {...props}
          options={{
            tabBarLabel: ({focused, color}) => (
              <Text
                color={color}
                style={styles.tabBarLabel}
                type={focused ? 'bold12' : 'regular12'}>
                {label}
              </Text>
            ),
            tabBarIcon: ({color, size}) => (
              <Image
                source={icon}
                style={{width: size, height: size, tintColor: color}}
              />
            ),
            ...options,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarLabel: {
    fontSize: 12,
    marginTop: 5,
  },
});

export default BottomTabs;
