import PropTypes from 'prop-types';
import React from 'react';
import {Text as RNText, StyleProp, StyleSheet, TextStyle} from 'react-native';
import {Colors, Fonts} from '../themes';
import {FontTextStyles, TextType} from '../themes/Font';

interface IProps {
  type?: TextType;
  color?: string;
  center?: boolean;
  underLine?: boolean;
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  marginHorizontal?: number;
  marginVertical?: number;
  lineHeight?: number;
  justifyContent?: string;
  fill?: boolean;
  textAlign?: 'center' | 'auto' | 'left' | 'right' | 'justify' | undefined;
}

const Text = (props: IProps) => {
  const {
    type,
    color,
    center,
    underLine,
    style,
    children,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    marginHorizontal,
    marginVertical,
    lineHeight,
    justifyContent,
    fill,
    textAlign,
  } = props;
  return (
    <RNText
      {...props}
      allowFontScaling={false}
      style={[
        !!color && {color},
        !!center && styles.center,
        !!underLine && styles.txtUnderline,
        !!marginTop && {marginTop},
        !!marginBottom && {marginBottom},
        !!marginLeft && {marginLeft},
        !!marginRight && {marginRight},
        !!marginHorizontal && {marginHorizontal},
        !!marginVertical && {marginVertical},
        !!lineHeight && {lineHeight},
        !!textAlign && {textAlign},
        !!justifyContent && styles.justifyContent,
        !!fill && styles.fill,
        !!style && style,
        !!type && FontTextStyles[type],
      ]}>
      {children}
    </RNText>
  );
};
export const styles = StyleSheet.create({
  center: {
    textAlign: 'center',
  },
  fill: {
    flex: 1,
  },
  txtUnderline: {
    textDecorationLine: 'underline',
  },
  normal: {
    color: Colors.default,
    fontFamily: Fonts.type.regular,
  },
  justifyContent: {
    textAlign: 'center',
  },
});

Text.propTypes = {
  type: PropTypes.oneOf(Object.keys(styles)),
  color: PropTypes.string,
  center: PropTypes.bool,
  underLine: PropTypes.bool,
  style: PropTypes.any,
};

export default Text;
