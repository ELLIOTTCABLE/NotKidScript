@{%
   const lexer = require('./lexer.js')

   const $ = function node(type, body, contents) {
      return {
         type,
         body,
         contents
      }
   }
%}

@lexer lexer


prog -> main {% id %}

main -> (statement _ %comment:? %NL:?):* {% ([stm, _s, _comment, _nl]) => {
   // console.log("MAIN: ", stm, _s, _comment, _nl)
} %}

statement -> import

import -> %Kimport __ %module {% (data) => {
   console.log("IMPORT 0: ", data[0])
   console.log("IMPORT 1: ", data[1])
   console.log("IMPORT 2: ", data[2])
   console.log("IMPORT 3: ", data[3])
} %}

comment? -> _ %comment:? {% ()=> null %}

_ ->  %S:* {% ()=> null %}
__ -> %S:+ {% ()=> null %}
