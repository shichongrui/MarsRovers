/* @flow */
import type {roverTypes} from '../common/nasaApi'

import {bindActionCreators} from 'redux'
import {getPhotos} from '../common/nasaApi'

export const PHOTO_REQUEST_STARTED = 'photos.requestStarted'
export const PHOTO_REQUEST_SUCCESSFUL = 'photos.requestSuccessful'
export const PHOTO_REQUEST_FAILED = 'photos.requestFailed'

const creators = {
  requestStarted: () => ({ type: PHOTO_REQUEST_STARTED }),
  requestSuccessful: (photos, rover) => ({ type: PHOTO_REQUEST_SUCCESSFUL, photos, rover }),
  requestFailed: (error) => ({ type: PHOTO_REQUEST_FAILED, error })
}

export default function createPhotoActions (dispatch: Function) {
  let actions = bindActionCreators(creators, dispatch)

  return {
    ...actions,

    async getPhotos (rover: roverTypes) {
      actions.requestStarted()

      try {
        let photos = await getPhotos(rover, new Date())
        actions.requestSuccessful(photos, rover)
      } catch (err) {
        actions.requestFailed(err)
      }
    }
  }
}