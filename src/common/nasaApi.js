/* @flow */

const API_KEY = 'rYQoQWq0dHJ9eD39QAIR3fJ7APVbiFT5GiKCXWVR'

function formatDate (date: Date): string {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}

export type roverTypes = 'curiosity' | 'spirit' | 'opportunity'

export async function getPhotos (rover: roverTypes, earthDate: Date = new Date()): Promise<any> {
  let manifest = await getRoverManifest(rover)
  let maxDate = manifest.photo_manifest.max_date

  let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${maxDate}&api_key=${API_KEY}`
  let response = await fetch(url)
  let json = await response.json()
  return json
}

export async function getRoverManifest(rover: roverTypes): Promise<any> {
  let url = `https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?api_key=${API_KEY}`
  let response = await fetch(url)
  let json = await response.json()
  return json
}