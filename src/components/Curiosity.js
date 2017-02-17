/* @flow */

import React, {Component} from 'react'
import asap from 'asap'

import TabBarItem from './TabBarItem'
import {photosActions} from '../actions'

type Props = {
  selected: boolean,
  photos: Array<any>,
  onPress: Function,
  photosLoading: boolean,
  nextSol: number
}

export default class Curiosity extends Component {
  props: Props

  constructor (props: Props) {
    super(props)

    asap(() => photosActions.getPhotos('curiosity'))
  }

  onPress = () => {
    this.props.onPress('curiosity')
  }

  getNextSet = () => {
    photosActions.getPhotos('spirit', this.props.nextSol)
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
