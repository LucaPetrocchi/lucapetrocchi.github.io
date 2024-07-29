import appendListToNode from "./appendListToNode.js"

function getRadioButton(
  labelText: string,
  name: string,
  id: string,
  value: string,
  checked?: boolean
) {

  const wrapper = document.createElement('div')
  wrapper.classList.add('flex', 'gap-1')

  const label = document.createElement('label')
  label.innerText = labelText
  label.htmlFor = id

  const input = document.createElement('input')
  input.type = 'radio'
  input.id = id
  input.name = name
  input.value = value
  if (checked) input.checked = true
  
  appendListToNode([input, label], wrapper)

  return wrapper
}

export default getRadioButton