/* @flow */

import React, {Component} from 'react'
import {Text} from 'react-native'

import TabBarItem from './TabBarItem'

type Props = {
  selected: boolean
}

export default class  Curiosity extends Component {
  props: Props

  render () {
    return (
      <TabBarItem
        {...this.props}
        title="Spirit"
      >
        <Text>Spirit</Text>
      </TabBarItem>
    )
  }
}