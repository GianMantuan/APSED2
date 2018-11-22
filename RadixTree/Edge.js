class Edge {
    constructor(label, targetNode) {
        this.label = label === "" ? null : label
        this.targetNode = targetNode
    }
}

module.exports = Edge