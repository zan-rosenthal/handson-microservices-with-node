"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var border = 5;
var bgcolor = "#fcfcfc";
var fgcolor = "#ddd";
var textcolor = "#aaa";
var textsize = 24;

exports.default = function (height, width) {
  return new Buffer("<svg width=\"" + width + "\" height=\"" + height + "\">\n      <rect\n        x=\"0\" y=\"0\"\n        width=\"" + width + "\" height=\"" + height + "\"\n        fill=\"" + fgcolor + "\" />\n      <rect\n        x=\"" + border + "\" y=\"" + border + "\"\n        width=\"" + (width - border * 2) + "\" height=\"" + (height - border * 2) + "\"\n        fill=\"" + bgcolor + "\" />\n      <line\n        x1=\"" + border * 2 + "\" y1=\"" + border * 2 + "\"\n        x2=\"" + (width - border * 2) + "\" y2=\"" + (height - border * 2) + "\"\n        stroke-width=\"" + border + "\" stroke=\"" + fgcolor + "\" />\n      <line\n        x1=\"" + (width - border * 2) + "\" y1=\"" + border * 2 + "\"\n        x2=\"" + border * 2 + "\" y2=\"" + (height - border * 2) + "\"\n        stroke-width=\"" + border + "\" stroke=\"" + fgcolor + "\" />\n      <rect\n        x=\"" + border + "\" y=\"" + (height - textsize) / 2 + "\"\n        width=\"" + (width - border * 2) + "\" height=\"" + textsize + "\"\n        fill=\"" + bgcolor + "\" />\n      <text\n        x=\"" + width / 2 + "\" y=\"" + height / 2 + "\" dy=\"8\"\n        font-family=\"Helvetica\" font-size=\"" + textsize + "\"\n        fill=\"" + textcolor + "\" text-anchor=\"middle\">" + width + " x " + height + "</text>\n    </svg>");
};