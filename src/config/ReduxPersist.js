import AsyncStorage from '@react-native-community/async-storage';

const reduxPersist = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
  whitelist: ['app'],
  blacklist: ['nav'],
};

export default reduxPersist;
