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
    {"name": "statement", "symbols": ["statement_body", "comment?", "nl"], "postprocess": ([stmt, _comm, _nl]) => stmt},
    {"name": "last_statement", "symbols": ["statement_body", "comment?"], "postprocess": ([stmt, _comm]) => stmt},
    {"name": "statement_body", "symbols": ["import_stmt"], "postprocess": id},
    {"name": "statement_body", "symbols": ["log_stmt"], "postprocess": id},
    {"name": "import_stmt", "symbols": [(lexer.has("Kimport") ? {type: "Kimport"} : Kimport), "__", (lexer.has("module") ? {type: "module"} : module)], "postprocess":  ([kw, _, name]) =>
        $('import', {module_name: name.value}) },
    {"name": "log_stmt", "symbols": [(lexer.has("Klog") ? {type: "Klog"} : Klog), "_", (lexer.has("string") ? {type: "string"} : string)], "postprocess":  ([kw, _, string]) =>
        $('log', {string: string.value}) },
    {"name": "comment?$ebnf$1", "symbols": [(lexer.has("comment") ? {type: "comment"} : comment)], "postprocess": id},
    {"name": "comment?$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "comment?", "symbols": ["_", "comment?$ebnf$1"], "postprocess": ()=> null},
    {"name": "nl", "symbols": [(lexer.has("NL") ? {type: "NL"} : NL)], "postprocess": ()=> null},
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
