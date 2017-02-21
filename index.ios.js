/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry
} from 'react-native'
import {Provider} from 'react-redux'

import App from './src/components/App'
import store from './src/store'

class AppWrapper extends Component {
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('MarsRovers', () => AppWrapper)
