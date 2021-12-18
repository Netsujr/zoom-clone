import React from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

function Home() {
  return (
    <View>
      <SafeAreaView>
        <Header />
        <SearchBar />
      </SafeAreaView>
    </View>
  );
}

export default Home
