import express from "express";
import sharp from "sharp";
import thumbnail from "./thumbnail.js";

const app = express();

const width = 300;
const height = 200;

const image = sharp({
  create: {
    width: width,
    height: height,
    channels: 4,
    background: { r: 0, g: 0, b: 0 }
  }
});

app.get(/\/thumbnail\.(jpg|png)/, (req, res, next) => {
  const format = req.params[0] == "png" ? "png" : "jpeg";

  image
    .overlayWith(thumbnail(height, width))
    [format]()
    .pipe(res);
});

app.listen(3000, () => {
  console.log("ready");
});
