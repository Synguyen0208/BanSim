import {StyleSheet} from 'react-native';

const type = {
  semiBold: 'Muli-SemiBold',
  bold: 'Muli-Bold',
  medium: 'Muli-Medium',
  regular: 'Muli-Regular',
  light: 'Muli-Light',
};

const size = {
  S8: 8,
  S10: 10,
  S12: 12,
  S13: 13,
  S14: 14,
  S15: 15,
  S16: 16,
  S17: 17,
  S18: 18,
  S20: 20,
  S24: 24,
  S28: 28,
  S30: 30,
  S36: 36,
  S40: 40,
};

export const FontTextStyles = StyleSheet.create({
  bold24: {
    fontSize: size.S24,
    fontFamily: type.bold,
  },
  bold20: {
    fontSize: size.S20,
    fontFamily: type.bold,
  },
  bold18: {
    fontSize: size.S18,
    fontFamily: type.bold,
  },
  bold16: {
    fontSize: size.S16,
    fontFamily: type.bold,
  },
  semiBold18: {
    fontSize: size.S18,
    fontFamily: type.semiBold,
  },
  semiBold16: {
    fontSize: size.S16,
    fontFamily: type.semiBold,
  },
  semiBold14: {
    fontSize: size.S14,
    fontFamily: type.semiBold,
  },
  bold14: {
    fontSize: size.S14,
    fontFamily: type.bold,
  },
  bold13: {
    fontSize: size.S13,
    fontFamily: type.bold,
  },
  bold12: {
    fontSize: size.S12,
    fontFamily: type.bold,
  },
  bold10: {
    fontSize: size.S10,
    fontFamily: type.bold,
  },
  semiBold12: {
    fontSize: size.S12,
    fontFamily: type.semiBold,
  },
  medium20: {
    fontSize: size.S20,
    fontFamily: type.medium,
  },
  medium18: {
    fontSize: size.S18,
    fontFamily: type.medium,
  },
  medium16: {
    fontSize: size.S16,
    fontFamily: type.medium,
  },
  medium14: {
    fontSize: size.S14,
    fontFamily: type.medium,
  },
  medium12: {
    fontSize: size.S12,
    fontFamily: type.medium,
  },
  regular24: {
    fontSize: size.S24,
    fontFamily: type.regular,
  },
  regular20: {
    fontSize: size.S20,
    fontFamily: type.regular,
  },
  regular18: {
    fontSize: size.S18,
    fontFamily: type.regular,
  },
  regular16: {
    fontSize: size.S16,
    fontFamily: type.regular,
  },
  regular15: {
    fontSize: size.S15,
    fontFamily: type.regular,
  },
  regular14: {
    fontSize: size.S14,
    fontFamily: type.regular,
  },
  regular12: {
    fontSize: size.S12,
    fontFamily: type.regular,
  },
  regular10: {
    fontSize: size.S10,
    fontFamily: type.regular,
  },
  light20: {
    fontSize: size.S20,
    fontFamily: type.light,
  },
  light18: {
    fontSize: size.S18,
    fontFamily: type.light,
  },
  light16: {
    fontSize: size.S16,
    fontFamily: type.light,
  },
  light14: {
    fontSize: size.S14,
    fontFamily: type.light,
  },
  light12: {
    fontSize: size.S12,
    fontFamily: type.light,
  },
  light10: {
    fontSize: size.S10,
    fontFamily: type.light,
  },
});

export default {
  type,
  size,
};

export type TextType = keyof typeof FontTextStyles;
