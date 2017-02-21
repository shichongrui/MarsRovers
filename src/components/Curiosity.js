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

export class Curiosity extends Component {
  props: Props

  constructor (props: Props) {
    super(props)

    asap(() => photosActions.getPhotos('curiosity'))
  }

  onPress = () => {
    this.props.onPress('curiosity')
  }

  getNextSet = () => {
    photosActions.getPhotos('curiosity', this.props.nextSol)
  }

  render () {
    return (
      <TabBarItem
        {...this.props}
        title='Curiosity'
        onPress={this.onPress}
        onEndReached={this.getNextSet}
      />
    )
  }
}

export default connect(
  (state) => {
    return {
      selected: state.navigation.activeTab === 'curiosity',
      photos: state.photos.curiosity,
      photosLoading: state.photos.photosPending,
      nextSol: state.photos.curiosityNextSol
    }
  },
  () => {
    return {
      onPress: navigationActions.changeTab
    }
  }
)(Curiosity)
