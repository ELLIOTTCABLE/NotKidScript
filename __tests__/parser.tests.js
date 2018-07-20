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

describe('Basic functionality', ()=> {
   test('handles a simple import statement', ()=> {
      expect(()=> parse("import Tv")).not.toThrow()
   })

   test('handles multiple (import) statements', ()=> {
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
})

describe('Basic statement types', ()=> {
   test('produces log statements', ()=> {
      let res = parse('log "Hi!"')
      , log_stmt = res[0]
      expect(log_stmt).toHaveProperty('type', 'log')
      expect(log_stmt).toHaveProperty('payload')
      expect(log_stmt.payload).toHaveProperty('string', "Hi!")
   })

   test('produces an expression-statement', ()=> {
      let res = parse('2 + 2')
      , expr_stmt = res[0]
      expect(expr_stmt).toHaveProperty('type', 'expression')
      expect(expr_stmt.contents).toBeDefined()
   })
})

describe('Basic expression types', ()=> {
   test('produces numbers', ()=> {
      let res = parse('2')
      , expr_stmt = res[0]
      expect(expr_stmt).toHaveProperty('type', 'expression')
      expect(expr_stmt).toHaveProperty('contents')
      expect(expr_stmt.contents).toHaveProperty('type', 'number')
      expect(expr_stmt.contents).toHaveProperty('payload', '2')
   })

   test('produces infix addition', ()=> {
      let res = parse('2 + 2')
      , expr_stmt = res[0]
      , infix = expr_stmt.contents
      expect(infix).toHaveProperty('type', 'infix')
      expect(infix).toHaveProperty('payload', {op: '+'})
   })

   test('produces infix subtraction', ()=> {
      let res = parse('2 - 2')
      , expr_stmt = res[0]
      , infix = expr_stmt.contents
      expect(infix).toHaveProperty('type', 'infix')
      expect(infix).toHaveProperty('payload', {op: '-'})
   })

   test('produces infix multiplication', ()=> {
      let res = parse('2 * 2')
      , expr_stmt = res[0]
      , infix = expr_stmt.contents
      expect(infix).toHaveProperty('type', 'infix')
      expect(infix).toHaveProperty('payload', {op: '*'})
   })

   test('produces infix division', ()=> {
      let res = parse('2 / 2')
      , expr_stmt = res[0]
      , infix = expr_stmt.contents
      expect(infix).toHaveProperty('type', 'infix')
      expect(infix).toHaveProperty('payload', {op: '/'})
   })

   test('produces infix math associatively', ()=> {
      let res = parse('2 + 2 / 4')
      , expr_stmt = res[0]
      , parent = expr_stmt.contents
      expect(parent).toHaveProperty('type', 'infix')
      expect(parent).toHaveProperty('payload', {op: '+'})
      expect(parent).toHaveProperty('contents')
      expect(child).toHaveProperty('type', 'infix')
      expect(child).toHaveProperty('payload', {op: '/'})
      expect(child).not.toHaveProperty('contents')
   })
})
