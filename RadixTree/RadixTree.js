const Edge = require('./Edge')
const Node = require('./Node')

class RadixTree {
    constructor(dict = []){
        this._dict = dict
        this.root = new Node();

        this.build(dict)
    }

    getRoot(){
        return this.root
    }

    build(dict){
        for (let key in dict) {
            let tokens = dict[key]            

            tokens.forEach(token => {                
                this._add(token)
            });
        }
    }

    insert(str) {
        this._list.push(str)
        this._add(str, this._list.length - 1)
    }

    _diff(strA, strB) {
        let length_A = (strA || '').length
        let length_B = (strB || '').length
        let total_len = length_A < length_B ? length_A : length_B
        let index = 0
        for (; index < total_len ; index++){
            let str_A = strA[index]
            let str_B = strB[index]
            if(str_A !== str_B) {
                break
            }
        }
        return index
    }

    _add(str, parent) {
        let val = str
        if (typeof str === 'object') {
            val = str.Nome
        }

        let node = parent || this.root

        for (let edge of node.edges) {
            let diff_index = this._diff(val, edge.label)

            if (diff_index > 0) {
                if (diff_index === edge.label.length) {
                    this._add(val.slice(diff_index), edge.targetNode)
                    return
                }
                
                let edges = [
                    new Edge(edge.label.slice(diff_index), edge.targetNode), 
                    new Edge(val.slice(diff_index), new Node([str]))
                ]
                let new_node = new Node()
                new_node.addEdges(edges)

                node.removeEdge(edge)
                node.addEdge(new Edge(val.slice(0, diff_index), new_node))
                return
            }
        }
        
        let edge = new Edge(val, new Node([str]))
        node.addEdge(edge)

        if (node.isLeaf()) {
            node.addEdge('', new Node(node.targetNode.str))
        }
        return
    }

    find(prefix, parent) {
        let node = parent || this.root

        if (node.isLeaf() || prefix === "") {
            return node.vals
        }
        for (let edge of node.edges) {
            let diff_index = this._diff(prefix, edge.label)

            if (diff_index > 0) {
                return this.find(prefix.slice(diff_index), edge.targetNode)
            }
        }
        return []
    }
}

module.exports = RadixTree
