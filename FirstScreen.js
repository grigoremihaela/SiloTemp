/* @flow */

'use strict';

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
} from 'react-native';

export default class FirstScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView style={{flex:1, backgroundColor:'white'}}>
      <View style={styles.container}>
        <Text style={styles.title}> Welcome to Silo Temperature! </Text>
        <Image
          style={styles.image}
          source={require('./Resources/silo2.png')}
          resizeMode="stretch"
        />
        <Button onPress={() => navigate('Second', {from: 'first'})} title="Get temperature"></Button>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 50
  },
  image: {
    width: 217,
    height: 138,
    alignSelf: 'center',
  },
});