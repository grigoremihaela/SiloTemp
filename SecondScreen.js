/* @flow */

'use strict';

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator,
  ListView,
  Image,
  ScrollView,
} from 'react-native';

type Props = {};

export default class SecondScreen extends Component<Props> {

  static navigationOptions = {
    title: 'Temp',
  };

  constructor(props){
    super(props);
    this.state ={
      isLoading: true,
      temperatures: {}
    };
  }

  componentDidMount() {
    return fetch('https://pi-temp-api.herokuapp.com/get/temperature')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { params } = this.props.navigation.state;
    const { navigate } = this.props.navigation;

    if (this.state.isLoading) {
      return (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }

    return (
      <ScrollView style={{flex:1, backgroundColor:'white'}}>
      <View style={styles.container}>
        <Text>Temperatures</Text>
        <Image
          style={styles.image}
          source={require('./Resources/silo1.png')}
          resizeMode="stretch"
        />

        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => 
            <Text>
              {Math.round(rowData.temp)}°C, 
              pin {rowData.pin}/{rowData.numberSensor},
              date {new Date(rowData.created_at).toLocaleDateString()}
            </Text>
          }
        />
        <Button onPress={() => navigate('Third', {from: 'second'})} title="Go to the details"></Button>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 50
  }
});