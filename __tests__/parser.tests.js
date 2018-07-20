const assert  = require('assert')
    , nearley = require('nearley')

const lexer   = require('../lib/lexer.js')
    , grammar = require('../lib/grammar.js')

const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar))
    , parse = function(str){
   parser.feed(str)

   if (parser.results.length === 0)
      throw new Error("Unexpected end-of-input.")
   if (parser.results.length > 1)
      throw new Error("Ambiguous grammar! (I wish this were Menhir.)")

   return parser.results[0]
}

test('parses an import statement', ()=> {
   expect(()=> parse("import Tv")).not.toThrow()
})
