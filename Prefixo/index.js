const argv = require('yargs')
    .usage('Uso: $0 -p [Prefixo]')
    .demandOption(['p'])
    .argv


const dict = require('./palavrasProd.json')
const RadixTree = require('../RadixTree/RadixTree')

const tree = new RadixTree(dict)
const matchs = tree.find(argv.p)


console.log(`Prefixo ${argv.p}:`)
console.log(
    matchs.map(match => 
        match
    )
)
