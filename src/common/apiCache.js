/* @flow */
import {AsyncStorage} from 'react-native'

export async function getItem (key: string): Promise<any> {
  let cachedValue = await AsyncStorage.getItem(key)
  return JSON.parse(cachedValue)
}

export function setItem (key: string, value: any): Promise {
  return AsyncStorage.setItem(key, JSON.stringify(value))
}

export default {
  getItem,
  setItem
}