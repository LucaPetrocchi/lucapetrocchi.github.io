
import getFresnel from "../../utils/getFresnel.js"
import hiddenP from "../hiddenP/hiddenP.js"
import inputs from "./inputs.js";
import submitButton from "../submitButton/submitButton.js";
import appendListToNode from "../../utils/appendListToNode.js";
import modes from "./modes.js";

function calculator() {

  function formDiv() {
    const form = document.createElement('div')
    form.classList.add('w-full', 'flex', 'flex-col')
    return form
  }

  const [resultP, showResult] = hiddenP();

  const [
    distanceModes,
    frequencyModes,
    getModeValues
  ] = modes()

  const [
    frequencyInput,
    distanceInput,
    getInputValues
  ] = inputs()


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
    let [f, d] = getInputValues()
    const [fT, dT] = getModeValues()

    if (fT === 'mhz') f = f / 1000
    if (dT === 'm') d = d / 1000

    showResult(`Radio (en metros): ${getFresnel(d, f)}`)
  }

  const button = submitButton(
    'Calcular',
    validateInputs,
    submitFunc
  )

  button.classList.add('w-full', 'm-2', 'p-2', 'bg-blue-900', 'text-white',
    'rounded-xl', 'basis-full'
  )
  
  const formElement = document.createElement('form');
  formElement.classList.add('flex', 'flex-wrap', 'gap-2', 'max-w-full')

  const frequencyForm = formDiv() 
  appendListToNode([
    frequencyInput,
    frequencyModes
  ], frequencyForm)

  const distanceForm = formDiv() 
  appendListToNode([
    distanceInput,
    distanceModes
  ], distanceForm)

  
  appendListToNode([
    frequencyForm,
    distanceForm,
    button,
    resultP
  ], formElement)
  
  return formElement
}

export default calculator