"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _sharp = require("sharp");

var _sharp2 = _interopRequireDefault(_sharp);

var _thumbnail = require("./thumbnail.js");

var _thumbnail2 = _interopRequireDefault(_thumbnail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var width = 300;
var height = 200;

var image = (0, _sharp2.default)({
  create: {
    width: width,
    height: height,
    channels: 4,
    background: { r: 0, g: 0, b: 0 }
  }
});

app.get(/\/thumbnail\.(jpg|png)/, function (req, res, next) {
  var format = req.params[0] == "png" ? "png" : "jpeg";

  image.overlayWith((0, _thumbnail2.default)(height, width))[format]().pipe(res);
});

app.listen(3000, function () {
  console.log("ready");
});