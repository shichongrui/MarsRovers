/* @flow */

import React, {Component} from 'react'
import asap from 'asap'
import {connect} from 'react-redux'

import TabBarItem from './TabBarItem'
import {photosActions, navigationActions} from '../actions'

type Props = {
  selected: boolean,
  photos: Array<any>,
  onPress: Function,
  photosLoading: boolean,
  nextSol: number
}

export class Opportunity extends Component {
  props: Props

  constructor (props: Props) {
    super(props)

    asap(() => photosActions.getPhotos('opportunity'))
  }

  onPress = () => {
    this.props.onPress('opportunity')
  }

  getNextSet = () => {
    photosActions.getPhotos('opportunity', this.props.nextSol)
  }

  render () {
    return (
      <TabBarItem
        {...this.props}
        title='Opportunity'
        onPress={this.onPress}
        onEndReached={this.getNextSet}
      />
    )
  }
}

export default connect(
  (state) => {
    return {
      selected: state.navigation.activeTab === 'opportunity',
      photos: state.photos.opportunity,
      photosLoading: state.photos.photosPending,
      nextSol: state.photos.opportunityNextSol
    }
  },
  () => {
    return {
      onPress: navigationActions.changeTab
    }
  }
)(Opportunity)
