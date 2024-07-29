import appendListToNode from "../../utils/appendListToNode.js";
function inputs() {
    function inputDiv() {
        const input = document.createElement('div');
        input.classList.add('flex', 'justify-between');
        return input;
    }
    const frequencyInputLabel = document.createElement('label');
    frequencyInputLabel.htmlFor = 'frequencyInput';
    frequencyInputLabel.innerText = 'Frecuencia';
    const frequencyInput = document.createElement('input');
    frequencyInput.type = 'number';
    frequencyInput.name = "frequencyInput";
    frequencyInput.min = '1';
    frequencyInput.step = 'any';
    frequencyInput.required = true;
    const distanceInputLabel = document.createElement('label');
    distanceInputLabel.htmlFor = 'distanceInput';
    distanceInputLabel.innerText = 'Distancia';
    const distanceInput = document.createElement('input');
    distanceInput.type = 'number';
    distanceInput.name = 'distanceInput';
    distanceInput.min = '1';
    distanceInput.step = 'any';
    distanceInput.required = true;
    const frequency = inputDiv();
    appendListToNode([frequencyInputLabel, frequencyInput], frequency);
    const distance = inputDiv();
    appendListToNode([distanceInputLabel, distanceInput], distance);
    const getInputValues = () => {
        const f = parseFloat(frequencyInput.value);
        const d = parseFloat(distanceInput.value);
        return [f, d];
    };
    return [
        frequency,
        distance,
        getInputValues
    ];
}
export default inputs;
