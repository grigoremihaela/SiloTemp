'use strict';

import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation'
import FirstScreen from './FirstScreen'
import SecondScreen from './SecondScreen'
import ThirdScreen from './ThirdScreen'

const App = StackNavigator({
  First: {
    screen: FirstScreen,
    navigationOptions: {
      title: 'Silo',
    }
  },
  Second: {
    screen: SecondScreen,
    navigationOptions: {
      title: 'Temp',
    }
  },
  Third: {
    screen: ThirdScreen,
    navigationOptions: {
      title: 'Details'
    }
  }
})

export default App

