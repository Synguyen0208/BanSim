import {Image, StyleSheet} from 'react-native';
import React from 'react';
import {Category, SCREEN_WIDTH} from '../themes/Constant';
import {Colors} from '../themes';
import WView from './WView';
import Text from './Text';
import AppComponents from '.';

const CategoryCard = ({icon, label, wrapBy, wrapByProps, color}: Category) => {
  const WrapBy = wrapBy ? AppComponents[wrapBy] : AppComponents.Empty;
  const width = SCREEN_WIDTH / 4 - 40;
  return (
    <WView alignCenter w={width}>
      <WrapBy
        {...wrapByProps}
        style={{
          ...wrapByProps?.style,
          ...styles.iconView,
          width: width,
          height: width - 10,
          backgroundColor: !wrapBy && (color || Colors.primary),
        }}>
        <Image source={icon} style={styles.icon} />
      </WrapBy>
      <Text color={Colors.blackText} center type="bold14">
        {label}
      </Text>
    </WView>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  icon: {
    width: 35,
    height: 35,
    tintColor: Colors.white,
  },
  iconView: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
});
