const _ = require('lodash')
    , moo = require('moo')

const keywords = [
   'end'
 , 'for'
 , 'in'
 , 'if'
 , 'is'
 , 'import'
 , 'log'
 , 'loop'
 , 'new'
 , 'when'
]

const keywordsMap = _.zipObject(keywords.map(keyword => 'K' + keyword), keywords)

const lexer = moo.compile({
   S:      /[ \t]+/
 , comment: /#.*?$/
 , id: {
      match: /[a-zA-Z]+/
    , keywords: keywordsMap
   }
 , number:  /0|[1-9][0-9]*/ // no floats, just base-10 ints, for now
 , string:  /"(?:\\["\\]|[^\n"\\])*"/
 , lparen:  '('
 , rparen:  ')'
//,operator: ['+', '-', '*', '/'] // letttttt's avoid infix for now -_-
 , NL:      { match: /\n/, lineBreaks: true }

})

lexer.reset(process.argv[2])

for (let here of lexer) {
   console.log(here)
}
