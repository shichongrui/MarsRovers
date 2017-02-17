/* @flow */
import {CHANGE_TAB} from '../actions/navigation'

let initialState = {
  activeTab: 'curiosity'
}

export default function navigationReducer (state: any = initialState, action: any) {
  switch (action.type) {
    case CHANGE_TAB:
      return {
        ...state,
        activeTab: action.tab
      }
    default:
      return state
  }
}
