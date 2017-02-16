/* @flow */

import {combineReducers, createStore} from 'redux'

import photosReducer from './reducers/photos'
import navigationReducer from './reducers/navigation'

let reducers = combineReducers({
  photos: photosReducer,
  navigation: navigationReducer
})

const store = createStore(reducers)

export default store
export const dispatch = store.dispatch