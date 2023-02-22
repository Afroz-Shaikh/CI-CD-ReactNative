import React from 'react';
import {View, Text} from 'react-native';
import {Appbar} from 'react-native-paper';
// import {Appbar} from 'react-native-paper';

const MyApp = () => {
  return (
    <>
      <Appbar>
        <Appbar.Content title="Mobile Pipeline Test" />
      </Appbar>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Version 2.1</Text>
        <Text>- Circle CI ✅</Text>
        <Text>- Fastlane ✅</Text>
        <Text>- Firebase Distribution ⛔️</Text>
      </View>
    </>
  );
};

export default MyApp;
