import appendListToNode from "../../utils/appendListToNode.js"

function tutorial() {

  const tutorialDiv = document.createElement('div')
  tutorialDiv.classList.add('flex', 'flex-col', 'justify-center', 'items-center')

  const tutorialImg = document.createElement('img')
  tutorialImg.src = "../../../static/images/fresnelFormula.png"
  tutorialImg.width = 200

  const tutorialText = document.createElement('p')
  tutorialText.innerText = 'explicacion'

  

  appendListToNode([
    tutorialImg,
    tutorialText
  ], tutorialDiv)

  return tutorialDiv
}

export default tutorial