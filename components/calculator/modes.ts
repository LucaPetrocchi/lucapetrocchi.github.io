import appendListToNode from "../../utils/appendListToNode.js"
import getRadioButton from "../../utils/getRadioButton.js"

function modes() {

  const [distanceKm, distanceKmLabel] = getRadioButton(
    'Kilómetros',
    'distance',
    'km',
    'km'
  )

  distanceKm.checked = true

  const [distanceM, distanceMLabel] = getRadioButton(
    'Metros',
    'distance',
    'm',
    'm'
  )

  const distanceForm = document.createElement('form')
  appendListToNode([
    distanceKm,
    distanceKmLabel,
    distanceM,
    distanceMLabel
  ], distanceForm)

  const [freqGhz, freqGhzLabel] = getRadioButton(
    'Gigahercios',
    'frequency',
    'ghz',
    'ghz'
  )

  freqGhz.checked = true

  const [freqMhz, freqMhzLabel] = getRadioButton(
    'Megahercios',
    'frequency',
    'mhz',
    'mhz'
  )

  const frequencyForm = document.createElement('form')
  appendListToNode([
    freqGhz,
    freqGhzLabel,
    freqMhz,
    freqMhzLabel
  ], frequencyForm)

  const getModeValues = (): [string, string] => {
    const dist = document.querySelector('input[name="distance"]:checked') as HTMLInputElement
    const freq = document.querySelector('input[name="frequency"]:checked') as HTMLInputElement

    let dT: string;
    let fT: string;
    if (!dist) { dT = 'km' }
    else { dT = dist.value }

    if (!freq) { fT = 'ghz' }
    else { fT = freq.value }
  
    return [fT, dT]
  }

  return {
    distanceForm,
    frequencyForm,
    getModeValues
  }

}

export default modes