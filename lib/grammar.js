// Generated automatically by nearley, version 2.15.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

   const lexer = require('./lexer.js')

   const $ = function node(type, body, contents) {
      return {
         type,
         body,
         contents
      }
   }
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "prog$ebnf$1", "symbols": []},
    {"name": "prog$ebnf$1", "symbols": ["prog$ebnf$1", "statement"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "prog", "symbols": ["prog$ebnf$1"], "postprocess": ([stmts]) => stmts},
    {"name": "statement$ebnf$1", "symbols": [(lexer.has("comment") ? {type: "comment"} : comment)], "postprocess": id},
    {"name": "statement$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "statement", "symbols": ["statement_body", "statement$ebnf$1", "nl?"], "postprocess": ([stmt, _comm, _nl]) => stmt},
    {"name": "statement_body", "symbols": ["import_stmt"], "postprocess": ([stmt]) => stmt},
    {"name": "import_stmt", "symbols": [(lexer.has("Kimport") ? {type: "Kimport"} : Kimport), "__", (lexer.has("module") ? {type: "module"} : module)], "postprocess": ([kw, _, name]) => $('import', {module_name: name.value})},
    {"name": "comment?$ebnf$1", "symbols": [(lexer.has("comment") ? {type: "comment"} : comment)], "postprocess": id},
    {"name": "comment?$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "comment?", "symbols": ["_", "comment?$ebnf$1"], "postprocess": ()=> null},
    {"name": "nl?$ebnf$1", "symbols": [(lexer.has("NL") ? {type: "NL"} : NL)], "postprocess": id},
    {"name": "nl?$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "nl?", "symbols": ["nl?$ebnf$1"], "postprocess": ()=> null},
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
