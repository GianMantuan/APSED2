const Edge = require('./Edge')
const Node = require('./Node')
const SilabDict = require('../Ends With/SilabDict.json')
class RadixTree {
    constructor(dict = []){
        console.log('------------------------')
        console.log(`Arquivo recebido`)
        console.log('------------------------')
        this._dict = dict
        this.root = new Node();
        
        //A Arvore é instânciada recebendo um array e automaticamente chama o metodo build
        this.build(dict)
    }

    build(dict){
        //Para a chave do array ele itera sobre cada index chamando o metodo _add

        for (let key in dict) {
            let tokens = dict[key]            

            console.log(`Inserindo cada Palavra/Objeto: `)             

            tokens.forEach(token => {
                console.log(`${token}`)             
                this._add(token)
            });
        }
    }

    _diff(strA, strB) {
        // A diferença retorna a posição (index) de quando as duas strings nao forem iguais
        let length_A = (strA || '').length
        let length_B = (strB || '').length
        let total_len = length_A < length_B ? length_A : length_B
        let index = 0

        console.log('------------------------')        
        console.log(`Buscando diferença`)        

        for (; index < total_len ; index++){

            console.log(`${strA[index]} | ${strB[index]}`)

            let str_A = strA[index]
            let str_B = strB[index]

            if(str_A !== str_B) {
                break
            }
        }
        return index
    }

    _add(str, parent) {
        // if (reversed) str = revert(str)
        // Para diferenciar se é String ou Objeto, ele verifica o tipo do item que esta sendo passado
        // A string entraria como parte do Dicionário e o Objeto como parte da Agenda
        let val = str
        if (typeof str === 'object') {
            val = str.Nome
        }
        let node = parent || this.root
        // Após receber um nó pai ou a raiz ele verifica seus vertices para encontrar similaridade e diferença

        for (let edge of node.edges) {
            console.log('------------------------')        
            console.log(`Não é a primeira palavra`)
                    
            let diff_index = this._diff(val, edge.label)

            if (diff_index > 0) {
                console.log(diff_index)
                if (diff_index === edge.label.length) {
                    this._add(val.slice(diff_index), edge.targetNode)
                    return
                }
                
                //Nesse momento ele cria um array de vértices
                // O primeiro contendo o vertice antigo ate o index que foi retornado da função _diff
                // O segundo vertice contém a parte da palavra/objeto que veio da função build, também a partir do index

                let edges = [
                    new Edge(edge.label.slice(diff_index), edge.targetNode), 
                    new Edge(val.slice(diff_index), new Node([str]))
                ]

                console.log('------------------------')
                console.log(`Quando encontrado diferenças, separa em dois vertices`)
                console.log(edges)        

                

                let new_node = new Node()
                new_node.addEdges(edges)

                node.removeEdge(edge) // Remove o vértice antigo
                node.addEdge(new Edge(val.slice(0, diff_index), new_node)) // Adiciona o novo array de vertices

                console.log('------------------------')
                console.log(`Remove o nó existence e adiciona o novo array de vertices`)
                console.log(this.root)
                return
            }
        }
        // Caso nao tenha nenhuma similaridade com qualquer um dos vertices ja adicionados na arvore
        // ele simplesmente cria um novo vertice        
        
        console.log('------------------------')        
        console.log(`Primeira palavra ${val}`)

        let edge = new Edge(val, new Node([str]))
        node.addEdge(edge)

        console.log(`Raiz depois de inserir`)
        console.log(this.root)
        console.log('------------------------')        


        // Para facilitar a impressao de dados, o valor final da palavra/objeto é adicionado em um atributo do nó final
        if (node.isLeaf()) {
            node.addEdge('', new Node(node.targetNode.str))
        }

        return
    }

    find(prefix, reversed, parent) {
        // Para a busca, ele verifica se o prefixo passado tem alguma similaridade com o algum dos vertices
        // descendo a arvoce até encontrar o valor final armazenado no atributo 'vals'
        let node = parent || this.root
        let rev;

        if (node.isLeaf() || prefix === "") {
            if(reversed) {
                let rev = this.reverseSTR(node.vals)
                return rev
            }
            console.log(node.vals)
            return node.vals
        }
        for (let edge of node.edges) {
            let diff_index = this._diff(prefix, edge.label)

            if (diff_index > 0) {
                return this.find(prefix.slice(diff_index), true, edge.targetNode)
            }
        }
        return []
    }

    reverseSTR(str){
        let match = []
        str.map(key => {
            let silabs = key.split('').reverse().join('')
            match.push(this.matchReverse(silabs))
            return
        })
        return match
    }

    matchReverse(str) {
        let retorno;
        Object.keys(SilabDict).map(key => {
            if (str == key) {
                retorno = SilabDict[key]
            }
        })
        return retorno
    }
}

module.exports = RadixTree
