import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import './src/i18n/i18n';
import {ReduxProvider} from './src/redux/store';
import BottomTabs from './src/navigation/Home/BottomTabs';

const App = () => {
  return (
    <NavigationContainer>
      <ReduxProvider>
        <BottomTabs />
      </ReduxProvider>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor="transparent"
      />
    </NavigationContainer>
  );
};

export default App;
