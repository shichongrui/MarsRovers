/* @flow */
import type {roverTypes} from '../common/nasaApi'

import {bindActionCreators} from 'redux'
import {getPhotos} from '../common/nasaApi'

export const PHOTO_REQUEST_STARTED = 'photos.requestStarted'
export const PHOTO_REQUEST_SUCCESSFUL = 'photos.requestSuccessful'
export const PHOTO_REQUEST_FAILED = 'photos.requestFailed'

const creators = {
  requestStarted: () => ({ type: PHOTO_REQUEST_STARTED }),
  requestSuccessful: (photos, rover, nextSol) => ({ type: PHOTO_REQUEST_SUCCESSFUL, photos, rover, nextSol }),
  requestFailed: (error) => ({ type: PHOTO_REQUEST_FAILED, error })
}

export default function createPhotoActions (dispatch: Function) {
  let actions = bindActionCreators(creators, dispatch)

  return {
    ...actions,

    async getPhotos (rover: roverTypes, sol: number) {
      actions.requestStarted()

      try {
        let photos
        let nextSol = sol
        let status
        do {
          let response = await getPhotos(rover, nextSol)
          status = response.status
          photos = response.photos.photos
          nextSol = response.nextSol
        } while (status !== 200)

        actions.requestSuccessful(photos, rover, nextSol)
      } catch (err) {
        console.log(err)
        actions.requestFailed(err)
      }
    }
  }
}
