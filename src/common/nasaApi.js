/* @flow */

const API_KEY = 'rYQoQWq0dHJ9eD39QAIR3fJ7APVbiFT5GiKCXWVR'

export type roverTypes = 'curiosity' | 'spirit' | 'opportunity'

export async function getPhotos (rover: roverTypes, sol: number): Promise<any> {
  let manifest = await getRoverManifest(rover)
  let currentSol = sol ? Math.min(sol, manifest.photo_manifest.max_sol) : manifest.photo_manifest.max_sol
  let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${currentSol}&api_key=${API_KEY}`
  let response = await fetch(url)
  let json = await response.json()
  return {
    nextSol: --currentSol,
    photos: json,
    status: response.status
  }
}

export async function getRoverManifest (rover: roverTypes): Promise<any> {
  let url = `https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?api_key=${API_KEY}`
  let response = await fetch(url)
  let json = await response.json()
  return json
}
