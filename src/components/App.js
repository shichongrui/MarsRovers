/* @flow */

import React, {Component} from 'react'
import {TabBarIOS} from 'react-native'

import type {roverTypes} from '../common/nasaApi'

import Curiosity from './Curiosity'
import Opportunity from './Opportunity'
import Spirit from './Spirit'

import {navigationActions} from '../actions'

type Props = {
  photos: any,
  activeTab: roverTypes
}

export default class App extends Component {
  props: Props

  render () {
    return (
      <TabBarIOS>
        <Curiosity
          selected={this.props.activeTab === 'curiosity'}
          photos={this.props.photos.curiosity}
          photosLoading={this.props.photos.photosPending}
          onPress={navigationActions.changeTab}
          nextSol={this.props.photos.curiosityNextSol}
        />
        <Opportunity
          selected={this.props.activeTab === 'opportunity'}
          photos={this.props.photos.opportunity}
          photosLoading={this.props.photos.photosPending}
          onPress={navigationActions.changeTab}
          nextSol={this.props.photos.opportunityNextSol}
        />
        <Spirit
          selected={this.props.activeTab === 'spirit'}
          photos={this.props.photos.spirit}
          photosLoading={this.props.photos.photosPending}
          onPress={navigationActions.changeTab}
          nextSol={this.props.photos.spiritNextSol}
        />
      </TabBarIOS>
    )
  }
}
