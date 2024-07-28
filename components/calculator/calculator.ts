
import getFresnel from "../../utils/getFresnel.js"
import hiddenP from "../hiddenP/hiddenP.js"
import inputs from "./inputs.js";
import submitButton from "../submitButton/submitButton.js";

function calculator() {
  const [resultP, showResult] = hiddenP();

  const { 
    frequencyInputLabel,
    frequencyInput,
    distanceInput,
    distanceInputLabel
  } = inputs()

  const getInputValues = (): [f: number, d: number] => {
    const f = parseFloat(frequencyInput.value)
    const d = parseFloat(distanceInput.value)

    return [f, d]
  }

  const validateInputs = () => {
    const [f, d] = getInputValues()
    if (isNaN(f) || isNaN(d)) {
      alert('Recuerde ingresar valor')
      return false
    }

    if (f < 0 || d < 0) {
      alert('Ingrese valor mayor a 0')
      return false
    }

    else return true
  }

  const submitFunc = () => {
    const [f, d] = getInputValues()
    showResult(`${getFresnel(d, f)}`)
  }

  const button = submitButton(
    'calcular',
    validateInputs,
    submitFunc
  )
  
  const formElement = document.createElement('form');
  
  [
    frequencyInputLabel, 
    frequencyInput, 
    distanceInputLabel, 
    distanceInput,
    button,
    resultP
  ].map((e) => {
    formElement.appendChild(e)
  })
  
  return formElement
}

export default calculator