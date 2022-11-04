import React from 'react';
import {Colors} from '../themes';
import WView from './WView';
import SearchBar from './SearchBar';
import NotificationBadge from './NotificationBadge';
import GradientBackground from './GradientBackground';

const Header = () => {
  return (
    <GradientBackground colors={[Colors.primary, Colors.primaryLight]}>
      <WView pDing={5} row>
        <SearchBar />
        <NotificationBadge />
      </WView>
    </GradientBackground>
  );
};

export default Header;
