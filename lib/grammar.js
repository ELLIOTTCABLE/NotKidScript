// Generated automatically by nearley, version 2.15.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

   const moo = require('moo')
   const lexer = require('./lexer.js')
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "prog", "symbols": ["main"], "postprocess": id},
    {"name": "main$ebnf$1", "symbols": []},
    {"name": "main$ebnf$1$subexpression$1$ebnf$1", "symbols": [(lexer.has("comment") ? {type: "comment"} : comment)], "postprocess": id},
    {"name": "main$ebnf$1$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "main$ebnf$1$subexpression$1$ebnf$2", "symbols": [(lexer.has("NL") ? {type: "NL"} : NL)], "postprocess": id},
    {"name": "main$ebnf$1$subexpression$1$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "main$ebnf$1$subexpression$1", "symbols": ["statement", "_", "main$ebnf$1$subexpression$1$ebnf$1", "main$ebnf$1$subexpression$1$ebnf$2"]},
    {"name": "main$ebnf$1", "symbols": ["main$ebnf$1", "main$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "main", "symbols": ["main$ebnf$1"]},
    {"name": "statement", "symbols": ["import"]},
    {"name": "import", "symbols": [(lexer.has("Kimport") ? {type: "Kimport"} : Kimport), "__", (lexer.has("module") ? {type: "module"} : module)]},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", (lexer.has("S") ? {type: "S"} : S)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"]},
    {"name": "__$ebnf$1", "symbols": [(lexer.has("S") ? {type: "S"} : S)]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", (lexer.has("S") ? {type: "S"} : S)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"]}
]
  , ParserStart: "prog"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
