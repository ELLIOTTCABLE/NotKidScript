@{%
   const moo = require('moo')
   const lexer = require('./lexer.js')
%}

@lexer lexer


prog -> main {% id %}

main -> (statement _ %comment:? %NL:?):*

statement -> import

import -> %Kimport __ %module

_ -> %S:*
__ -> %S:+
