/* global define */

define('ace/mode/mustache', function(require, exports, module) {
  "use strict";

var oop = require("../lib/oop");
var PlainTextMode = require("./plain_text").Mode;
var MustacheHighlightRules = require("./mustache_highlight_rules").MustacheHighlightRules;

var Mode = function() {
    PlainText.call(this);
    this.HighlightRules = MustacheHighlightRules;

};

oop.inherits(Mode, PlainTextMode);

(function() {
    this.blockComment = {start: "{{!--", end: "--}}"};
    this.$id = "ace/mode/mustache";
}).call(Mode.prototype);

exports.Mode = Mode;
});
