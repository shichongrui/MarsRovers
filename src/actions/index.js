import createPhotosActions from './photos'
import createNavigationActions from './navigation'
import {dispatch} from '../store'

export const photosActions = createPhotosActions(dispatch)
export const navigationActions = createNavigationActions(dispatch)
