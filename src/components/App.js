/* @flow */

import React, {Component} from 'react'
import {TabBarIOS} from 'react-native'

import type {roverTypes} from '../common/nasaApi'

import Curiosity from './Curiosity'
import Opportunity from './Opportunity'
import Spirit from './Spirit'

import {navigationActions} from '../actions'

export default class App extends Component {

  render () {
    return (
      <TabBarIOS>
        <Curiosity />
        <Opportunity />
        <Spirit />
      </TabBarIOS>
    )
  }
}
