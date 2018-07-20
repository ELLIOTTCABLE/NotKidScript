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
    {"name": "prog", "symbols": ["main"], "postprocess": id},
    {"name": "main$ebnf$1", "symbols": []},
    {"name": "main$ebnf$1$subexpression$1$ebnf$1", "symbols": [(lexer.has("comment") ? {type: "comment"} : comment)], "postprocess": id},
    {"name": "main$ebnf$1$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "main$ebnf$1$subexpression$1$ebnf$2", "symbols": [(lexer.has("NL") ? {type: "NL"} : NL)], "postprocess": id},
    {"name": "main$ebnf$1$subexpression$1$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "main$ebnf$1$subexpression$1", "symbols": ["statement", "_", "main$ebnf$1$subexpression$1$ebnf$1", "main$ebnf$1$subexpression$1$ebnf$2"]},
    {"name": "main$ebnf$1", "symbols": ["main$ebnf$1", "main$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "main", "symbols": ["main$ebnf$1"], "postprocess":  ([stm, _s, _comment, _nl]) => {
           // console.log("MAIN: ", stm, _s, _comment, _nl)
        } },
    {"name": "statement", "symbols": ["import"]},
    {"name": "import", "symbols": [(lexer.has("Kimport") ? {type: "Kimport"} : Kimport), "__", (lexer.has("module") ? {type: "module"} : module)], "postprocess":  (data) => {
           console.log("IMPORT 0: ", data[0])
           console.log("IMPORT 1: ", data[1])
           console.log("IMPORT 2: ", data[2])
           console.log("IMPORT 3: ", data[3])
        } },
    {"name": "comment?$ebnf$1", "symbols": [(lexer.has("comment") ? {type: "comment"} : comment)], "postprocess": id},
    {"name": "comment?$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "comment?", "symbols": ["_", "comment?$ebnf$1"], "postprocess": ()=> null},
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
