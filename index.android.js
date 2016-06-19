/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var index = require('./react_src/index.js')();
console.log('index', index);

class awesome_000 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          שלום שלום
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
          Great now we have edited the file and we have some stuff going on.
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// AppRegistry.registerComponent('awesome_000', () => awesome_000);
AppRegistry.registerComponent('awesome_000', () => index);
