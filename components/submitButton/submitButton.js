function submitButton(text, validateFunction, submitFunction) {
    const button = document.createElement('button');
    button.textContent = text;
    button.onclick = (e) => {
        e.preventDefault();
        if (validateFunction() === false)
            return;
        submitFunction();
    };
    return button;
}
export default submitButton;
