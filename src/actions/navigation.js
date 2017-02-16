/* @flow */
import {bindActionCreators} from 'redux'

export const CHANGE_TAB = 'navigation.changeTab'

const creators = {
  changeTab: (tab) => ({ type: CHANGE_TAB, tab })
}

export default function createNavigationActions (dispatch: Function) {
  let actions = bindActionCreators(creators, dispatch)

  return actions
}