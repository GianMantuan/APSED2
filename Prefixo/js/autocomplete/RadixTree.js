const RadixTree = () => {
    class Edge {
        constructor(label, targetNode) {
            this.label = label === "" ? null : label;
            this.targetNode = targetNode;
        }
    }

    class Node {
        constructor(vals = []) {
            this.edges = [];

            this.vals = vals;
        }

        isLeaf = () => {
            return this.edges.length = 0;
        }

        removeEdge = (edge) => {
            this.edges = this.edges.filter((_edge) => {
                return _edge.label !== edge.label;
            });
        }

        addEdges(edges) {
            edges.forEach((edge) => {
                this.addEdge(edge);
            });
        }
    }
}