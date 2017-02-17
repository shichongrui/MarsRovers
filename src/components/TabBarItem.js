/* @flow */

import React, {Component} from 'react'
import {TabBarIOS, View, ListView, StyleSheet, Image, ActivityIndicator} from 'react-native'

type Props = {
  selected: boolean,
  title: string,
  photos: Array<any>,
  photosLoading: boolean,
  onEndReached: Function
}

type State = {
  ds: ListView.DataSource,
  dataSource: any
}

export default class TabBarItem extends Component {
  props: Props
  state: State

  constructor (props: Props) {
    super(props)

    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      ds,
      dataSource: ds.cloneWithRows([])
    }
  }

  componentWillReceiveProps (nextProps: Props) {
    if (this.props.photos.length < nextProps.photos.length) {
      this.setState({
        dataSource: this.state.ds.cloneWithRows(nextProps.photos)
      })
    }
  }

  renderRow (rowData: any) {
    return (
      <Image source={{uri: rowData.img_src}} style={{width: 400, height: 400}} />
    )
  }

  render () {
    return (
      <TabBarIOS.Item
        {...this.props}
        style={styles.item}
      >
        <View>
          {this.props.photos.length > 0 &&
            <ListView
              dataSource={this.state.dataSource}
              renderRow={this.renderRow}
              onEndReached={this.props.onEndReached}
              onEndReachedThreshold={1000}
              pageSize={5}
            />
          }
          {this.props.photosLoading &&
            <ActivityIndicator />}
        </View>
      </TabBarIOS.Item>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    paddingTop: 20,
    flex: 1,
    justifyContent: 'center'
  }
})
