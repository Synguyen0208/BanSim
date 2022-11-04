import React from 'react';
import {StyleSheet, View, ActivityIndicator, Text} from 'react-native';
import {Colors} from '../themes';

type WViewProps = {
  fill?: boolean;
  children?: React.ReactNode;
  row?: boolean;
  alignCenter?: boolean;
  justifyCenter?: boolean;
  center?: boolean;
  style?: any;
  mTop?: number;
  mBottom?: number;
  mLeft?: number;
  mRight?: number;
  pTop?: number;
  pBottom?: number;
  pLeft?: number;
  pRight?: number;
  pHoz?: number;
  pVer?: number;
  pDin?: number;
  pDing?: number;
  mHoz?: number;
  mVer?: number;
  color?: string;
  h?: number | string;
  w?: number | string;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
  backgroundColor?: string;
  justifyContent?: string;
  alignItems?: string;
  selfCenter?: boolean;
  absolute?: boolean;
  aTop?: number;
  aBottom?: number;
  aLeft?: number;
  aRight?: number;
  loading?: boolean;
  message?: string;
};

const WView = ({
  fill,
  children,
  row,
  alignCenter,
  justifyCenter,
  center,
  style,
  mTop,
  mBottom,
  mLeft,
  mRight,
  pTop,
  pBottom,
  pLeft,
  pRight,
  pHoz,
  pVer,
  pDin,
  pDing,
  mHoz,
  mVer,
  color,
  h,
  w,
  borderRadius,
  borderWidth,
  borderColor,
  backgroundColor,
  justifyContent,
  alignItems,
  selfCenter,
  absolute,
  aTop = 0,
  aBottom = 0,
  aRight = 0,
  aLeft = 0,
  loading = false,
  message = '',
}: WViewProps) => {
  return (
    <View
      style={[
        fill && styles.fill,
        row && styles.row,
        alignCenter && styles.alignCenter,
        justifyCenter && styles.justifyCenter,
        center && styles.center,
        mTop && {marginTop: mTop},
        mBottom && {marginBottom: mBottom},
        mLeft && {marginLeft: mLeft},
        mRight && {marginRight: mRight},
        pTop && {paddingTop: pTop},
        pBottom && {paddingBottom: pBottom},
        pLeft && {paddingLeft: pLeft},
        pRight && {paddingRight: pRight},
        pHoz && {paddingHorizontal: pHoz},
        pVer && {paddingVertical: pVer},
        pDin && {padding: pDin},
        pDing && {padding: pDing},
        mHoz && {marginHorizontal: mHoz},
        mVer && {marginVertical: mVer},
        color && {backgroundColor: color},
        h && {height: h},
        w && {width: w},
        borderRadius && {borderRadius: borderRadius},
        borderWidth && {borderWidth: borderWidth},
        backgroundColor && {backgroundColor: backgroundColor},
        borderColor && {borderColor: borderColor},
        justifyContent && {justifyContent: justifyContent},
        alignItems && {alignItems: alignItems},
        selfCenter && styles.selfCenter,
        absolute && {
          ...styles.absolute,
          top: aTop,
          bottom: aBottom,
          right: aRight,
          left: aLeft,
        },
        style && style,
      ]}>
      {children}
      {loading && (
        <View style={[styles.fadeView, styles.center]}>
          <ActivityIndicator animating size="large" color={Colors.default} />
          {!!message && <Text style={styles.message}>{message}</Text>}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  fill: {
    flex: 1,
  },
  alignCenter: {alignItems: 'center'},
  justifyCenter: {
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  selfCenter: {alignSelf: 'center'},
  absolute: {
    position: 'absolute',
  },
  fadeView: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.dimgray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 14,
    color: Colors.white,
  },
});

export default WView;
