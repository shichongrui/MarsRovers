/* @flow */

import React, {Component} from 'react'
import {TabBarIOS, ScrollView, StyleSheet, Image} from 'react-native'

type Props = {
  selected: boolean,
  title: string,
  photos: Array<any>
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
          {this.props.photos.map((photo, i) => {
            return (
              <Image key={i} source={{uri: photo.img_src}} style={{width: 400, height: 400}} />
            )
          })}
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