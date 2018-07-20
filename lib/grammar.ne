@{%
   const _     = require('lodash')
       , lexer = require('./lexer.js')

   const $ = function node(type, payload, contents) {
      let n = {}
      n.type = type
      if (payload) n.payload = payload
      if (contents) n.contents = contents
      return n
   }
%}

@lexer lexer

prog -> statements {% id %}

statements     ->
   statement:+                {% id %}
 | statement:* last_statement {% ([stmts, last]) => _.concat(stmts, last) %}

statement      -> statement_body comment? nl {% ([stmt, _comm, _nl]) => stmt %}
last_statement -> statement_body comment?    {% ([stmt, _comm]) => stmt %}
statement_body ->
   import_stmt {% id %}
 | log_stmt    {% id %}

import_stmt -> %Kimport __ %module {% ([kw, _, name]) =>
                  $('import', {module_name: name.value}) %}
log_stmt    -> %Klog _ %string     {% ([kw, _, string]) =>
                  $('log', {string: string.value}) %}

comment? -> _ %comment:? {% ()=> null %}

nl -> %NL {% ()=> null %}

_  -> %S:* {% ()=> null %}
__ -> %S:+ {% ()=> null %}
