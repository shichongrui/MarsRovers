/* @flow */

import React, {Component} from 'react'
import {Image} from 'react-native'
import asap from 'asap'

import TabBarItem from './TabBarItem'
import {photosActions} from '../actions'

type Props = {
  selected: boolean,
  photos: Array<any>,
  onPress: Function
}

export default class  Curiosity extends Component {
  props: Props

  constructor (props: Props) {
    super(props)

    asap(() => photosActions.getPhotos('curiosity'))
  }

  onPress = () => {
    this.props.onPress('curiosity')
  }

  render () {
    return (
      <TabBarItem
        {...this.props}
        title="Curiosity"
        onPress={this.onPress}
      />
    )
  }
}