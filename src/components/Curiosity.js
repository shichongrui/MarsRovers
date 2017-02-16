/* @flow */

import React, {Component} from 'react'
import {Image} from 'react-native'

import TabBarItem from './TabBarItem'
import {photosActions} from '../actions'

type Props = {
  selected: boolean,
  photos: Array<any>
}

export default class  Curiosity extends Component {
  props: Props

  constructor (props: Props) {
    super(props)

    setTimeout(() => photosActions.getPhotos('curiosity'), 100)
  }

  render () {
    return (
      <TabBarItem
        {...this.props}
        title="Curiosity"
      >
        {this.props.photos.map((photo, i) => {
          return (
            <Image key={i} source={{uri: photo.img_src}} style={{width: 400, height: 400}} />
          )
        })}
      </TabBarItem>
    )
  }
}