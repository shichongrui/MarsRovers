/* @flow */

import React, {Component} from 'react'
import {Text} from 'react-native'
import asap from 'asap'

import TabBarItem from './TabBarItem'
import {photosActions} from '../actions'

type Props = {
  selected: boolean,
  photos: Array<any>,
  onPress: Function
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

  render () {
    return (
      <TabBarItem
        {...this.props}
        title="Opportunity"
        onPress={this.onPress}
      />
    )
  }
}