import React from 'react';
import {
  ActivityIndicator,
  Keyboard,
  SafeAreaView,
  ScrollView,
  StyleProp,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Colors} from '../themes';
import Text from './Text';

interface IProps {
  haveTextInput?: boolean;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  center?: boolean;
  loading?: boolean;
  message?: string;
  subViewStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  disableScrollForContainer?: boolean;
  scrollEnabled?: boolean;
  withoutSafeView?: boolean;
  scrollVertical?: boolean;
  bounces?: boolean;
  keyboardShouldPersistTaps?:
    | boolean
    | 'always'
    | 'never'
    | 'handled'
    | undefined;
  enableResetScrollToCoords?: 'none' | 'interactive' | 'on-drag' | undefined;
  isStickyHeader?: boolean;
}

const Container = ({
  haveTextInput,
  style,
  contentStyle,
  center,
  loading,
  message,
  subViewStyle,
  children,
  disableScrollForContainer,
  scrollEnabled,
  withoutSafeView,
  scrollVertical,
  bounces = true,
  keyboardShouldPersistTaps,
  enableResetScrollToCoords,
  isStickyHeader,
}: IProps) => {
  if (haveTextInput) {
    return (
      <SafeAreaView style={[styles.container, style]}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={scrollVertical}
          keyboardShouldPersistTaps={keyboardShouldPersistTaps || 'always'}
          style={[
            styles.subView,
            center && styles.center,
            subViewStyle && subViewStyle,
          ]}
          contentContainerStyle={contentStyle && contentStyle}
          scrollEnabled={!disableScrollForContainer}
          keyboardDismissMode={enableResetScrollToCoords}
          enableResetScrollToCoords={false}
          contentInsetAdjustmentBehavior="never"
          extraScrollHeight={50}
          nestedScrollEnabled={true}
          stickyHeaderIndices={isStickyHeader ? [1] : [0]}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.absoluteView} />
          </TouchableWithoutFeedback>
          {children}
        </KeyboardAwareScrollView>
        {loading && (
          <View style={styles.fadeView}>
            <ActivityIndicator animating size="large" color={Colors.default} />
            {message && <Text>{message}</Text>}
          </View>
        )}
      </SafeAreaView>
    );
  }
  if (scrollEnabled) {
    return (
      <SafeAreaView style={[styles.container, style]}>
        <ScrollView
          nestedScrollEnabled={true}
          keyboardShouldPersistTaps={keyboardShouldPersistTaps || 'never'}
          scrollEnabled
          bounces={bounces}
          keyboardDismissMode="on-drag"
          style={[
            styles.container,
            center && styles.center,
            subViewStyle && subViewStyle,
          ]}
          contentContainerStyle={styles.contentContainerStyle}
          contentInsetAdjustmentBehavior="never"
          showsVerticalScrollIndicator={false}>
          {children}
        </ScrollView>
        {loading && (
          <View style={styles.fadeView}>
            <ActivityIndicator animating size="large" color={Colors.default} />
            {message && <Text>{message}</Text>}
          </View>
        )}
      </SafeAreaView>
    );
  }
  if (withoutSafeView) {
    return (
      <View style={[styles.container, style]}>
        {children}
        {loading && (
          <View style={styles.fadeView}>
            <ActivityIndicator animating size="large" color={Colors.default} />
            {message && <Text>{message}</Text>}
          </View>
        )}
      </View>
    );
  }
  return (
    <SafeAreaView style={[styles.container, style]}>
      {children}
      {loading && (
        <View style={styles.fadeView}>
          <ActivityIndicator animating size="large" color={Colors.default} />
          {message && <Text>{message}</Text>}
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  subView: {
    flex: 1,
  },
  contentContainerStyle: {flexGrow: 1},
  fadeView: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.dimgray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  absoluteView: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

export default Container;
