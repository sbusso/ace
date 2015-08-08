/* global define */

define(function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
// var TextMode = require("./text").Mode;
// var Tokenizer = require("../tokenizer").Tokenizer;
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
var SpintaxHighlightRules = require("./spintax_highlight_rules").SpintaxHighlightRules;

function pop2(currentState, stack) {
    stack.splice(0, 3);
    return stack.shift() || "start";
}
function pop1(currentState, stack) {
    stack.splice(0, 2);
    return stack.shift() || "start";
}
function pop3(currentState, stack) {
    stack.splice(0, 4);
    return stack.shift() || "start";
}
var MustacheHighlightRules = function() {
    TextHighlightRules.call(this);
    SpintaxHighlightRules.call(this);
    var mustache = {
        regex : "(?={{)",
        push : "mustache"
    };
    // var spintax = {
    //     // regex: "\\[|\\]|\\|",
    //     // push : "spintax"
    // };
    for (var key in this.$rules) {
        this.$rules[key].unshift(mustache);
        // this.$rules[key].unshift(spintax);
    }

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

    // this.$rules.spintax = [
    //     {
    //          token: "keyword.operator",
    //          regex: "\\[|\\]|\\|"
    //      }
    //   ];


    this.$rules.mustache = [

        {
        token : "support.function", // unescaped variable
        regex : "{{{",
        push : [{
            token : "support.function",
            regex : "}}}",
            next : pop2
        }, {
            token : "variable.parameter",
            regex : "[a-zA-Z_$][a-zA-Z0-9_$]*"
        }]
    }, {
        token : "keyword.control.start", // begin section
        regex : "{{[#\\^/]{1}",
        push : [{
            token : "keyword.control.end",
            regex : "}}",
            next : pop2
        }, {
            token : "keyword.control",
            regex : "[a-zA-Z_$][a-zA-Z0-9_$]*"
        }]
    }, {
        token : "storage.type.partial.start", // begin section
        regex : "{{>",
        push : [{
            token : "storage.type.partial.end",
            regex : "}}",
            next : pop2
        }, {
            token : "storage.type.partial.name",
            regex : "[a-zA-Z_$][a-zA-Z0-9_$]*"
        }]
    }, {
        token : "variable.other.start", // begin section
        regex : "{{",
        push : [{
            token : "variable.other.end",
            regex : "}}",
            next : pop2
        }, {
            token : "variable.other.name",
            regex : "[a-zA-Z_$][a-zA-Z0-9_$]*"
        }]
    }];

    this.normalizeRules();
};

oop.inherits(MustacheHighlightRules, TextHighlightRules);

exports.MustacheHighlightRules = MustacheHighlightRules;
});
