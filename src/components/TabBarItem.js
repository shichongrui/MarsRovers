/* @flow */

import React, {Component} from 'react'
import {TabBarIOS, ScrollView, StyleSheet} from 'react-native'

type Props = {
  selected: boolean,
  title: string,
  children?: Element<*>
}

export default class TabBarItem extends Component {
  props: Props

  render () {
    return (
      <TabBarIOS.Item
        {...this.props}
        style={styles.item}
      >
        <ScrollView>
          {this.props.children}
        </ScrollView>
      </TabBarIOS.Item>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    paddingTop: 20
  }
})