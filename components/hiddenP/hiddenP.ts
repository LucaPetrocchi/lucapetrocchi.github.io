function hiddenP(): [
  HTMLParagraphElement, 
  (text: string) => void
] {
  const p = document.createElement('p')
  p.classList.add('hidden')

  const displayP = (text: string) => {
    if (p.classList.contains('hidden')) { p.classList.remove('hidden') }
    p.innerText = text
  }

  return [p, displayP]
}

export default hiddenP