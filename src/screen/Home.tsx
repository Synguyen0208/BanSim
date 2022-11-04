import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Header from '../components/Header';
import CategoryCard from '../components/CategoryCard';
import {Categories} from '../themes/Constant';
import WView from '../components/WView';

const Home = () => {
  return (
    <WView fill>
      <Header />
      <FlatList
        style={styles.categoryList}
        ItemSeparatorComponent={() => <WView h={20} />}
        numColumns={4}
        data={Categories}
        columnWrapperStyle={styles.categoryListContent}
        renderItem={({item}) => <CategoryCard {...item} />}
      />
    </WView>
  );
};

const styles = StyleSheet.create({
  categoryList: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  categoryListContent: {
    justifyContent: 'space-between',
  },
});

export default Home;
