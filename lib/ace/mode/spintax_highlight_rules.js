/* global define */

define(function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
// var TextMode = require("./text").Mode;
// var Tokenizer = require("../tokenizer").Tokenizer;
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

var SpintaxHighlightRules = function() {




    // this.$rules.spintax = [{
    //     token : "spintax.start", // begin section
    //     regex : "\\[",
    //     push : [{
    //         token : "spintax.end",
    //         regex : "\\]",
    //         next : pop1
    //     }, {
    //         token : "spintax.text",
    //         regex : "[a-zA-Z0-9_$]*"
    //     }]
    // }];

    this.$rules = {
     start: [
        {
             token: "keyword.operator",
             regex: "\\[|\\]|\\|"
         }
      ]
    };


};

oop.inherits(SpintaxHighlightRules, TextHighlightRules);

exports.SpintaxHighlightRules = SpintaxHighlightRules;
});
