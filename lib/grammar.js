// Generated automatically by nearley, version 2.15.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

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
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "prog", "symbols": ["statements"], "postprocess": id},
    {"name": "statements$ebnf$1", "symbols": ["statement"]},
    {"name": "statements$ebnf$1", "symbols": ["statements$ebnf$1", "statement"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "statements", "symbols": ["statements$ebnf$1"], "postprocess": id},
    {"name": "statements$ebnf$2", "symbols": []},
    {"name": "statements$ebnf$2", "symbols": ["statements$ebnf$2", "statement"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "statements", "symbols": ["statements$ebnf$2", "last_statement"], "postprocess": ([stmts, last]) => _.concat(stmts, last)},
    {"name": "statement", "symbols": ["_", "statement_body", "comment?", "nl"], "postprocess": ([_s, stmt, _comm, _nl]) => stmt},
    {"name": "last_statement", "symbols": ["_", "statement_body", "comment?"], "postprocess": ([_s, stmt, _comm]) => stmt},
    {"name": "statement_body", "symbols": ["import_stmt"], "postprocess": id},
    {"name": "statement_body", "symbols": ["log_stmt"], "postprocess": id},
    {"name": "statement_body", "symbols": ["if_stmt"], "postprocess": id},
    {"name": "statement_body", "symbols": ["expr_stmt"], "postprocess": id},
    {"name": "import_stmt", "symbols": [(lexer.has("Kimport") ? {type: "Kimport"} : Kimport), "__", (lexer.has("module") ? {type: "module"} : module)], "postprocess":  ([kw, _, name]) =>
        $('import', {module_name: name.value}) },
    {"name": "log_stmt", "symbols": [(lexer.has("Klog") ? {type: "Klog"} : Klog), "_", (lexer.has("string") ? {type: "string"} : string)], "postprocess":  ([kw, _, string]) =>
        $('log', {string: string.value}) },
    {"name": "if_stmt", "symbols": [(lexer.has("Kif") ? {type: "Kif"} : Kif), "_", "parenthesized_expression", "nl", "body", "nl", "_", (lexer.has("Kend") ? {type: "Kend"} : Kend)], "postprocess":  ([_lkw, _ls, predicate, _lnl, body, _rnl, _rs, _rkw]) =>
        $('if', null, {predicate, body}) },
    {"name": "if_stmt", "symbols": [(lexer.has("Kif") ? {type: "Kif"} : Kif), "__", "expression", "nl", "body", "nl", "_", (lexer.has("Kend") ? {type: "Kend"} : Kend)], "postprocess":  ([_lkw, _ls, predicate, _lnl, body, _rnl, _rs, _rkw]) =>
        $('if', null, {predicate, body}) },
    {"name": "expr_stmt", "symbols": ["expression"], "postprocess":  ([expr]) =>
        $('expression', null, expr) },
    {"name": "body", "symbols": ["statements"], "postprocess": id},
    {"name": "expression", "symbols": ["infix"], "postprocess": id},
    {"name": "expression", "symbols": ["delimited_expr"], "postprocess": id},
    {"name": "delimited_expr", "symbols": ["parenthesized_expression"], "postprocess": id},
    {"name": "delimited_expr", "symbols": [(lexer.has("number") ? {type: "number"} : number)], "postprocess": ([num]) => $('number', num.value)},
    {"name": "parenthesized_expression", "symbols": [(lexer.has("lparen") ? {type: "lparen"} : lparen), "_", "expression", "_", (lexer.has("rparen") ? {type: "rparen"} : rparen)], "postprocess": ([_lp,_ls, expr, _rs,_rp]) => expr},
    {"name": "infix", "symbols": ["sum"], "postprocess": id},
    {"name": "sum$subexpression$1", "symbols": [(lexer.has("add") ? {type: "add"} : add)]},
    {"name": "sum$subexpression$1", "symbols": [(lexer.has("sub") ? {type: "sub"} : sub)]},
    {"name": "sum", "symbols": ["sum", "_", "sum$subexpression$1", "_", "product"], "postprocess": infix},
    {"name": "sum", "symbols": ["product"], "postprocess": id},
    {"name": "product$subexpression$1", "symbols": [(lexer.has("mult") ? {type: "mult"} : mult)]},
    {"name": "product$subexpression$1", "symbols": [(lexer.has("div") ? {type: "div"} : div)]},
    {"name": "product", "symbols": ["product", "_", "product$subexpression$1", "_", "exp"], "postprocess": infix},
    {"name": "product", "symbols": ["exp"], "postprocess": id},
    {"name": "exp$subexpression$1", "symbols": [(lexer.has("exp") ? {type: "exp"} : exp)]},
    {"name": "exp", "symbols": ["delimited_expr", "_", "exp$subexpression$1", "_", "exp"], "postprocess": infix},
    {"name": "exp", "symbols": ["delimited_expr"], "postprocess": id},
    {"name": "comment?$ebnf$1", "symbols": [(lexer.has("comment") ? {type: "comment"} : comment)], "postprocess": id},
    {"name": "comment?$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "comment?", "symbols": ["_", "comment?$ebnf$1"], "postprocess": ()=> null},
    {"name": "nl", "symbols": ["_", (lexer.has("NL") ? {type: "NL"} : NL)], "postprocess": ()=> null},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", (lexer.has("S") ? {type: "S"} : S)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": ()=> null},
    {"name": "__$ebnf$1", "symbols": [(lexer.has("S") ? {type: "S"} : S)]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", (lexer.has("S") ? {type: "S"} : S)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": ()=> null}
]
  , ParserStart: "prog"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
