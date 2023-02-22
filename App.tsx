import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Tile from './components/tile';

const MyApp = () => {
  return (
    <View style={styles.background}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>CI CD MOBILE</Text>
      </View>

      <View style={styles.items}>
        <Tile text={'Circle CI integration'} />
        <Tile text={'Config.yml CircleCI'} />
        <Tile text={'FastLane integration'} />
        <Tile text={'FastLane config'} />
        <Tile text={'Fastlane app build generation'} />
        <Tile text={'Fastlane app build upload'} />
        <Tile text={'Firebase  Distribution'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#e8eaed',
  },

  titleWrapper: {
    // backgroundColor: '#e8eaed',
    paddingTop: 80,

    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});

export default MyApp;
