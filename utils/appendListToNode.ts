function appendListToNode(
  nodeList: HTMLElement[],
  parent: HTMLElement
) {
  nodeList.map((e) => {
    parent.appendChild(e)
  })
}

export default appendListToNode