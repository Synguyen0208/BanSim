import React from 'react';
import GradientBackground from './GradientBackground';
import WView from './WView';

const Empty = ({children, ...props}: {children: React.ReactNode}) => (
  <WView {...props}>{children}</WView>
);

const AppComponents = Object.freeze({
  GradientBackground,
  Empty,
});

export default AppComponents;

export type AppComponent = keyof typeof AppComponents;
