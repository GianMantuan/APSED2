const dict = require('./palavrasProd.json')
const RadixTree = require('../RadixTree/RadixTree')
const reverseStr = require('./src/reverseString')

const argv = require('yargs')
    .usage('Uso: $0 -s [EndsWith]')
    .demandOption(['s'])
    .argv


const tree = new RadixTree(dict, true)
const matchs = tree.find(argv.s, true)

console.log(`Prefixo ${argv.s}:`)
console.log(
    matchs.map(match => 
        reverseStr(match)
    )
)
