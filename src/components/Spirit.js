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

export class Spirit extends Component {
  props: Props

  constructor (props: Props) {
    super(props)

    asap(() => photosActions.getPhotos('spirit'))
  }

  onPress = () => {
    this.props.onPress('spirit')
  }

  getNextSet = () => {
    photosActions.getPhotos('spirit', this.props.nextSol)
  }

  render () {
    return (
      <TabBarItem
        {...this.props}
        title='Spirit'
        onPress={this.onPress}
        onEndReached={this.getNextSet}
      />
    )
  }
}

export default connect(
  (state) => {
    return {
      selected: state.navigation.activeTab === 'spirit',
      photos: state.photos.spirit,
      photosLoading: state.photos.photosPending,
      nextSol: state.photos.spiritNextSol
    }
  },
  () => {
    return {
      onPress: navigationActions.changeTab
    }
  }
)(Spirit)
