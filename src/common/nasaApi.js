/* @flow */

const API_KEY = 'rYQoQWq0dHJ9eD39QAIR3fJ7APVbiFT5GiKCXWVR'

function formatDate (date: Date): string {
  return '2017-2-15'
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}

export type roverTypes = 'curiosity' | 'spirit' | 'opportunity'

export async function getPhotos (rover: roverTypes, earthDate: Date): Promise<any> {
  let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${formatDate(earthDate)}&api_key=${API_KEY}`
  let response = await fetch(url)
  let json = await response.json()
  return json
}