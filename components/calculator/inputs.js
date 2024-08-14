import appendListToNode from "../../utils/appendListToNode.js";
function inputs() {
    function inputDiv() {
        const input = document.createElement('div');
        input.classList.add('flex', 'justify-between');
        return input;
    }
    function inputForm(name, labelText) {
        const label = document.createElement('label');
        label.htmlFor = name;
        label.innerText = labelText;
        const input = document.createElement('input');
        input.classList.add('border', 'border-gray-400', 'rounded-xl', 'p-1');
        input.type = "string";
        input.name = name;
        input.min = '1';
        input.step = 'any';
        input.required = true;
        return [label, input];
    }
    const [frequencyInputLabel, frequencyInput] = inputForm('frequencyInput', 'Frecuencia');
    const [distanceInputLabel, distanceInput] = inputForm('distanceInput', 'Distancia');
    const frequency = inputDiv();
    appendListToNode([frequencyInputLabel, frequencyInput], frequency);
    const distance = inputDiv();
    appendListToNode([distanceInputLabel, distanceInput], distance);
    const getInputValues = () => {
        const f = parseFloat(frequencyInput.value.replace(/,/, ".").replace(/[^\d\.]/g, ''));
        const d = parseFloat(distanceInput.value.replace(/,/, ".").replace(/[^\d\.]/g, ''));
        return [f, d];
    };
    return [
        frequency,
        distance,
        getInputValues
    ];
}
export default inputs;
