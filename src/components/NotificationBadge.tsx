import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import Images from '../themes/Images';
import {Colors} from '../themes';
import WView from './WView';
import Text from './Text';

const NotificationBadge = () => {
  return (
    <WView pHoz={10} alignItems="flex-end">
      <View style={styles.badge}>
        <Image source={Images.Bell} />
      </View>
      <Text type="bold10" style={styles.numNotification}>
        221
      </Text>
    </WView>
  );
};

export default NotificationBadge;

const styles = StyleSheet.create({
  numNotification: {
    position: 'absolute',
    color: Colors.white,
    backgroundColor: Colors.red,
    borderRadius: 8,
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingHorizontal: 4,
    paddingVertical: 1,
  },
  badge: {
    padding: 5,
    backgroundColor: Colors.white,
    borderRadius: 20,
  },
});
