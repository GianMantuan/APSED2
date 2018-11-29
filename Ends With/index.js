const dict = require('./dictSilab.json')
const RadixTree = require('../RadixTree/RadixTree')
const reverseStr = require('./src/reverseString')
let newDict = {}

const argv = require('yargs')
    .usage('Uso: $0 -s [EndsWith]')
    .demandOption(['s'])
    .argv


let reversed = reverseStr(dict)
newDict.invertido = reversed
console.log(newDict)

const tree = new RadixTree(newDict, true)
const matchs = tree.find(argv.s, true)

console.log(`Prefixo ${argv.s}:`)
console.log(
    matchs.map(match => 
        match
    )
)
