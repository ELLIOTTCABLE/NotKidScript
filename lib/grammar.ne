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

   const infix = ([lhs, _ls, [op], _rs, rhs]) =>
      $('infix', {'op': op.value}, {lhs, rhs})
%}

@lexer lexer

prog -> statements {% id %}


statements     ->
   statement:+                {% id %}
 | statement:* last_statement {% ([stmts, last]) => _.concat(stmts, last) %}

statement      -> _ statement_body comment? nl {% ([_s, stmt, _comm, _nl]) => stmt %}
last_statement -> _ statement_body comment?    {% ([_s, stmt, _comm]) => stmt %}
statement_body ->
   import_stmt {% id %}
 | log_stmt    {% id %}
 | if_stmt     {% id %}
 | expr_stmt   {% id %}

import_stmt -> %Kimport __ %module  {% ([kw, _, name]) =>
                  $('import', {module_name: name.value}) %}
log_stmt    -> %Klog _ %string      {% ([kw, _, string]) =>
                  $('log', {string: string.value}) %}

if_stmt     ->
   %Kif _ parenthesized_expression nl body nl _ %Kend
   {% ([_lkw, _ls, predicate, _lnl, body, _rnl, _rs, _rkw]) =>
      $('if', null, {predicate, body}) %}
 | %Kif __ expression nl body nl _ %Kend
   {% ([_lkw, _ls, predicate, _lnl, body, _rnl, _rs, _rkw]) =>
      $('if', null, {predicate, body}) %}

expr_stmt   -> expression           {% ([expr]) =>
                  $('expression', null, expr) %}


body -> statements {% id %}


expression ->
   math {% id %}
 | parenthesized_expression {% id %}

parenthesized_expression -> %lparen _ expression _ %rparen {% ([_lp,_ls, expr, _rs,_rp]) => expr %}

math -> sum                {% id %}
sum ->
   sum _ (%add|%sub) _ product   {% infix %}
 | product                       {% id %}

product ->
   product _ (%mult|%div) _ exp  {% infix %}
 | exp                           {% id %}

exp ->
   %number _ %exp _ exp          {% infix %}
 | %number                       {% ([num]) => $('number', num.value) %}


comment? -> _ %comment:? {% ()=> null %}

nl -> _ %NL {% ()=> null %}

_  -> %S:* {% ()=> null %}
__ -> %S:+ {% ()=> null %}
