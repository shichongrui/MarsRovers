/* @flow */

import {
  PHOTO_REQUEST_STARTED, PHOTO_REQUEST_SUCCESSFUL, PHOTO_REQUEST_FAILED
} from '../actions/photos'

let initialState = {
  photosPending: false,
  photosSuccessful: false,
  photosError: null,
  curiosity: [],
  spirit: [],
  opportunity: []
}

export default function photosReducer (state: any = initialState, action: any) {
  switch (action.type) {
    case PHOTO_REQUEST_STARTED:
      return {
        ...state,
        photosPending: true,
        photosSuccessful: false,
        photosError: null
      }
    case PHOTO_REQUEST_SUCCESSFUL:
      let nextPhotos = state[action.rover].slice()
      nextPhotos.push(...action.photos)
      return {
        ...state,
        photosPending: false,
        photosSuccessful: true,
        [action.rover]: nextPhotos,
        nextSol: action.nextSol
      }
    case PHOTO_REQUEST_FAILED:
      return {
        ...state,
        photosPending: false,
        photosError: action.error
      }
    default:
      return state
  }
}
