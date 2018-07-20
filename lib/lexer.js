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

const operators = [
   '+'
 , '-'
 , '*'
 , '/'
]

const lexer = moo.compile({
   S:      /[ \t]+/

 , comment: /#.*?$/

 , id: {
      match: /[a-z][a-zA-Z0-9']*/
    , keywords: keywordsMap
   }

 , module: /[A-Z][a-zA-Z]*/

 , number:  /0|[1-9][0-9]*/ // no floats, just base-10 ints, for now

 , string:  /"(?:\\["\\]|[^\n"\\])*"/

 , lparen:  '('
 , rparen:  ')'
 , op: operators

 , NL:      { match: /\n/, lineBreaks: true }

})

module.exports = lexer
