/* @flow */

'use strict';

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
const octobot = require('./Resources/house.png')

export default class ThirdScreen extends Component {

  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;

    return (
      <ScrollView style={{flex:1, backgroundColor:'white'}}>
      <View style={styles.container}>
        <Text> This is the details!</Text>
        <Image
          style={styles.image}
          source={require('./Resources/silo.png')}
          resizeMode="stretch"
        />
        <Image
          style={styles.image}
          source={require('./Resources/house.png')}
          resizeMode="stretch"
        />
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 30,
    alignItems: 'center',
  }
});