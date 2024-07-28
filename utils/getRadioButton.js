function getRadioButton(labelText, name, id, value) {
    const label = document.createElement('label');
    label.innerText = labelText;
    label.htmlFor = id;
    const input = document.createElement('input');
    input.type = 'radio';
    input.id = id;
    input.name = name;
    input.value = value;
    return [input, label];
}
export default getRadioButton;
