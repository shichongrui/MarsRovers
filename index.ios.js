/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  View,
  Text
} from 'react-native'

import App from './src/components/App'
import store from './src/store'

class AppWrapper extends Component {
  constructor () {
    super()

    store.subscribe(() => this.forceUpdate())
  }

  render () {
    let state = store.getState()
    return (
      <App activeTab={state.navigation.activeTab} photos={state.photos} />
    )
  }
}

AppRegistry.registerComponent('MarsRovers', () => AppWrapper)
