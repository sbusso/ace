<!-- -->
/* global define */

define('ace/mode/spintax', function(require, exports, module) {
  "use strict";

var oop = require("../lib/oop");
var PlainTextMode = require("./plain_text").Mode;
var SpintaxHighlightRules = require("./spintax_highlight_rules").SpintaxHighlightRules;

var Mode = function() {
    PlainText.call(this);
    this.HighlightRules = SpintaxHighlightRules;

};

oop.inherits(Mode, PlainTextMode);

(function() {
    this.blockComment = {start: "{{!--", end: "--}}"};
    this.$id = "ace/mode/spintax";
}).call(Mode.prototype);

exports.Mode = Mode;
});
