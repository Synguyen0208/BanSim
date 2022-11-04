import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {Colors} from '../themes';

export const BottomDefaultOptions: BottomTabNavigationOptions = {
  tabBarStyle: {
    paddingVertical: 5,
    borderTopWidth: 0.5,
  },
  tabBarInactiveTintColor: Colors.blackText,
  tabBarActiveTintColor: Colors.primary,
  headerShown: true,
  tabBarHideOnKeyboard: true,
};

export const ROUTE_NAME = {
  HOME: 'Home',
};
