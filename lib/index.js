const assert  = require('assert')
    , nearley = require('nearley')

const lexer   = require('./lexer.js')
    , grammar = require('./grammar.js')

const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar))

// lexer.reset(process.argv[2])
//
// for (let here of lexer) {
//       console.log(here)
// }


parser.feed(process.argv[2])

if (parser.results.length === 0)
   throw new Error("Unexpected end-of-input.")
if (parser.results.length > 1)
   throw new Error("Ambiguous grammar! I wish this were Menhir.")


console.log(parser.results[0])
