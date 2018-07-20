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

prog -> statement:* {% ([stmts]) => stmts %}

statement -> statement_body %comment:? nl? {% ([stmt, _comm, _nl]) => stmt %}
statement_body ->
   import_stmt
   {% ([stmt]) => stmt %}

import_stmt -> %Kimport __ %module {% ([kw, _, name]) => $('import', {module_name: name.value}) %}

comment? -> _ %comment:? {% ()=> null %}

nl? -> %NL:? {% ()=> null %}

_ ->  %S:* {% ()=> null %}
__ -> %S:+ {% ()=> null %}
