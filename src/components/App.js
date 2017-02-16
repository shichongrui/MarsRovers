/* @flow */

import React, {Component} from 'react'
import {TabBarIOS} from 'react-native'

import type {roverTypes} from '../common/nasaApi'

import Curiosity from './Curiosity'
import Opportunity from './Opportunity'
import Spirit from './Spirit'

type Props = {
  photos: any
}

export default class App extends Component {

  render () {
    return (
      <TabBarIOS>
        <Curiosity 
          selected={this.props.activeTab === 'curiosity'}
          photos={this.props.photos.curiosity}
        />
        <Opportunity 
          selected={this.props.activeTab === 'opportunity'}
        />
        <Spirit 
          selected={this.props.activeTab === 'spirit'}
        />
      </TabBarIOS>
    )
  }
}