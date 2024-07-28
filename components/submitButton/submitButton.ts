function submitButton(
  text: string,
  validateFunction: () => boolean,
  submitFunction: () => void,
) {
  const button = document.createElement('button')
  button.textContent = text
  button.onclick = (e: Event) => {
    e.preventDefault()

    if (validateFunction() === false) return

    submitFunction()
  }

  return button
}

export default submitButton