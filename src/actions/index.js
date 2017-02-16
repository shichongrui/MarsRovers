import createPhotosActions from './photos'
import {dispatch} from '../store'

export const photosActions = createPhotosActions(dispatch)