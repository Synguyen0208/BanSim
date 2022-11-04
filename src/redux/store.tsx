import {configureStore} from '@reduxjs/toolkit';
import React from 'react';
import {Provider} from 'react-redux';
import {persistReducer, persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import reduxPersist from '../config/ReduxPersist';
import reducer from './reducers';

const persistedReducer = persistReducer(reduxPersist, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

const persistor = persistStore(store);

export const ReduxProvider = (props: {children: React.ReactNode}) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {props.children}
    </PersistGate>
  </Provider>
);
//type
export type RootState = Omit<ReturnType<typeof store.getState>, '_persist'>;
export type AppDispatch = typeof store.dispatch;
