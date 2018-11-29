const dict = require('./ContatosProd.json')
const RadixTree = require('../RadixTree/RadixTree')

const argv = require('yargs')
    .usage('Uso: $0 -c [Nome_do_Contato]')
    .demandOption(['c'])
    .argv



const tree = new RadixTree(dict)
const matchs = tree.find(argv.c)

console.log(`Contato ${argv.c}:`)

console.log(JSON.stringify(
    matchs.map(match => 
        match
    ),null,4)
)
