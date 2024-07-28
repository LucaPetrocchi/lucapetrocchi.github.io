import getFresnel from "../../utils/getFresnel.js";
import hiddenP from "../hiddenP/hiddenP.js";
import inputs from "./inputs.js";
import submitButton from "../submitButton/submitButton.js";
import appendListToNode from "../../utils/appendListToNode.js";
import modes from "./modes.js";
function calculator() {
    const [resultP, showResult] = hiddenP();
    const { distanceForm, frequencyForm, getModeValues } = modes();
    const { frequencyInputLabel, frequencyInput, distanceInput, distanceInputLabel, getInputValues } = inputs();
    const validateInputs = () => {
        const [f, d] = getInputValues();
        if (isNaN(f) || isNaN(d)) {
            alert('Recuerde ingresar valor');
            return false;
        }
        if (f < 0 || d < 0) {
            alert('Ingrese valor mayor a 0');
            return false;
        }
        else
            return true;
    };
    const submitFunc = () => {
        let [f, d] = getInputValues();
        const [fT, dT] = getModeValues();
        if (fT === 'mhz')
            f = f / 1000;
        if (dT === 'm')
            d = d / 1000;
        showResult(`${getFresnel(d, f)}`);
    };
    const button = submitButton('calcular', validateInputs, submitFunc);
    const formElement = document.createElement('form');
    appendListToNode([
        frequencyForm,
        distanceForm,
        frequencyInputLabel,
        frequencyInput,
        distanceInputLabel,
        distanceInput,
        button,
        resultP
    ], formElement);
    return formElement;
}
export default calculator;
