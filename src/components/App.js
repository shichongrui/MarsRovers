/* @flow */

import React, {Component} from 'react'
import {TabBarIOS} from 'react-native'

import type {roverTypes} from '../common/nasaApi'

import Curiosity from './Curiosity'
import Opportunity from './Opportunity'
import Spirit from './Spirit'

import {navigationActions} from '../actions'

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
          onPress={navigationActions.changeTab}
        />
        <Opportunity 
          selected={this.props.activeTab === 'opportunity'}
          photos={this.props.photos.opportunity}
          onPress={navigationActions.changeTab}
        />
        <Spirit 
          selected={this.props.activeTab === 'spirit'}
          photos={this.props.photos.spirit}
          onPress={navigationActions.changeTab}
        />
      </TabBarIOS>
    )
  }
}