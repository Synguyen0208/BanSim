import {
  Image,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import Images from '../themes/Images';
import {Colors} from '../themes';
import WView from './WView';

const SearchBar = () => {
  return (
    <TouchableWithoutFeedback>
      <WView style={styles.searchBar} row color={Colors.tabBackground}>
        <Image source={Images.Search} />
        <TextInput placeholder="Tìm sim trên BestSim" style={styles.input} />
      </WView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flex: 1,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 0,
    marginLeft: 5,
  },
});

export default SearchBar;
