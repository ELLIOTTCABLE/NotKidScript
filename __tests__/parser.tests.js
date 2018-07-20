const assert  = require('assert')
    , nearley = require('nearley')

const lexer   = require('../lib/lexer.js')
    , grammar = require('../lib/grammar.js')
    , compiled = nearley.Grammar.fromCompiled(grammar)

const parse = function(str){
   const parser = new nearley.Parser(compiled)
   parser.feed(str)

   if (parser.results.length === 0)
      throw new Error("Unexpected end-of-input.")
   if (parser.results.length > 1)
      throw new Error("Ambiguous grammar! (I wish this were Menhir.)")

   return parser.results[0]
}

test('handles an import statement', ()=> {
   expect(()=> parse("import Tv")).not.toThrow()
})

test('handles multiple statements', ()=> {
   expect(()=> parse("import Tv\nimport Player")).not.toThrow()
})

test('returns an array for one statement', ()=> {
   let res = parse("import Tv")
   expect(res).toBeInstanceOf(Array)
   expect(res).toHaveLength(1)
})

test('returns an array of statements', ()=> {
   let res = parse("import Tv\nimport Player")
   expect(res).toBeInstanceOf(Array)
   expect(res).toHaveLength(2)
})

test('produces an node-Object for each statement', ()=> {
   let res = parse("import Tv")
     , import_stmt = res[0]
   expect(import_stmt).toHaveProperty('type', 'import')
})

