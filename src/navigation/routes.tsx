import React from 'react';
import {ImageSourcePropType, StatusBar, View} from 'react-native';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import Images from '../themes/Images';
import GradientBackground from '../components/GradientBackground';
import {Colors} from '../themes';
import {AppScreens} from './RegisterScreen';

type BottomTabType = {
  name: string;
  label: string;
  component: () => JSX.Element;
  icon: ImageSourcePropType;
  options?: BottomTabNavigationOptions;
};

const defaultOptions = {
  header: () => <View style={{height: StatusBar.currentHeight}} />,
};

const routes: {BOTTOM_TAB: BottomTabType[]} = {
  BOTTOM_TAB: [
    {
      name: 'Home',
      label: 'Trang chủ',
      component: AppScreens.Home,
      icon: Images.Home,
      options: {
        header: () => (
          <GradientBackground
            colors={[Colors.primary, Colors.primaryLight]}
            style={{height: StatusBar.currentHeight}}
          />
        ),
      },
    },
    {
      name: 'Education',
      label: 'Tra số',
      component: AppScreens.Education,
      icon: Images.Search,
      options: defaultOptions,
    },
    {
      name: 'Profile',
      label: 'Đơn hàng',
      component: AppScreens.Profile,
      icon: Images.Cart,
      options: defaultOptions,
    },
    {
      name: 'Introduction',
      label: 'Giới thiệu',
      component: AppScreens.Profile,
      icon: Images.InfoCircleBold,
      options: defaultOptions,
    },
  ],
};

export default routes;
