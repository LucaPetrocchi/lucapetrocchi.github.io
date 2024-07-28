function appendListToNode(nodeList, parent) {
    nodeList.map((e) => {
        parent.appendChild(e);
    });
}
export default appendListToNode;
