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

export default class Opportunity extends Component {
  props: Props

  constructor (props: Props) {
    super(props)

    asap(() => photosActions.getPhotos('opportunity'))
  }

  onPress = () => {
    this.props.onPress('opportunity')
  }

  getNextSet = () => {
    photosActions.getPhotos('spirit', this.props.nextSol)
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
