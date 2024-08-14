import appendListToNode from "../../utils/appendListToNode.js"

function inputs(): [
  HTMLDivElement, 
  HTMLDivElement, 
  () => [f: number, d: number]
] {

  function inputDiv () {
    const input = document.createElement('div')
    input.classList.add('flex', 'justify-between')
    return input
  }

  function inputForm(name: string, labelText: string): [
    HTMLLabelElement,
    HTMLInputElement
  ] {
    const label = document.createElement('label')
    label.htmlFor = name
    label.innerText = labelText

    const input = document.createElement('input')
    input.classList.add('border', 'border-gray-400', 'rounded-xl', 'p-1')
    input.type = "string"
    input.name = name
    input.min = '1'
    input.step = 'any'
    input.required = true

    return [label, input]
  }

  const [frequencyInputLabel, frequencyInput] = inputForm('frequencyInput', 'Frecuencia')

  const [distanceInputLabel, distanceInput] = inputForm('distanceInput', 'Distancia')

  const frequency = inputDiv()
  appendListToNode([frequencyInputLabel, frequencyInput], frequency)

  const distance = inputDiv()
  appendListToNode([distanceInputLabel, distanceInput], distance)
  

  const getInputValues = (): [f: number, d: number] => {
    const f = parseFloat(frequencyInput.value.replace(/\D/g,'').replace(/,/, "."))
    const d = parseFloat(distanceInput.value.replace(/\D/g,'').replace(/,/, "."))

    return [f, d]
  }

  return [
    frequency,
    distance,
    getInputValues
  ]

}

export default inputs