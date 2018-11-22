
class Node {
    constructor(vals = []) {
        this.edges = []
        this.vals = vals
    }

    isLeaf() {
        return this.edges.length === 0
    }

    removeEdge(edge) {
        this.edges = this.edges.filter((_edge) => {
            return _edge.label !== edge.label;
        })
    }

    addEdges(edges) {
        edges.forEach(edge => {
            this.addEdge(edge)
        });
    }
    addEdge(edge) {
        this.edges = [...this.edges, edge]
        this.vals = this.edges.reduce((cache, edge) =>{
            return [...cache, ...edge.targetNode.vals]
        }, [])
    }
    getEdge(word) {
        let edges = this.edges.filter((edge) => {
            return edge.label.indexOf(word) === 0
        })
        return null ? edges.length ===0 : edges[0]
    }

    connect(node) {
        this._children = [node, ...this.children]
    }
}

module.exports = Node