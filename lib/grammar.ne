@{%
   const lexer = require('./lexer.js')

   const $ = function node(type, payload, contents) {
      return {
         type,
         payload,
         contents
      }
   }
%}

@lexer lexer

prog -> statement:* {% ([stmts]) => stmts %}

statement -> statement_body %comment:? nl? {% ([stmt, _comm, _nl]) => stmt %}
statement_body ->
   import_stmt {% id %}
 | log_stmt {% id %}

import_stmt -> %Kimport __ %module {% ([kw, _, name]) => $('import', {module_name: name.value}) %}
log_stmt    -> %Klog _ %string     {% ([kw, _, string]) =>
                  $('log', {string: string.value}) %}

comment? -> _ %comment:? {% ()=> null %}

nl? -> %NL:? {% ()=> null %}

_ ->  %S:* {% ()=> null %}
__ -> %S:+ {% ()=> null %}
