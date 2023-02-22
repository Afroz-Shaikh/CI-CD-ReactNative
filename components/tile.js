import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Tile = props => {
  return (
    <View style={styles.itemView}>
      <View style={styles.leading}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.itemText}>{props.text} </Text>
      </View>
      <View style={styles.trailing}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemView: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  leading: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    borderRadius: 5,
    backgroundColor: '#55bcf6',
    opacity: 0.4,
    marginRight: 15,
  },
  text: {
    maxWidth: '80%',
  },
  trailing: {
    width: 12,
    height: 12,
    borderColor: '#55bcf6',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Tile;
