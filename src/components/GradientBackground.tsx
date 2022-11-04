import React from 'react';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';
import {Colors} from '../themes';

const defaultGradient = [Colors.primary, Colors.primary];

const GradientBackground = (props: LinearGradientProps) => (
  <LinearGradient
    {...props}
    colors={props.colors || defaultGradient}
    start={{x: 0, y: 0}}
    end={{x: 1, y: 0}}
  />
);

export default GradientBackground;
