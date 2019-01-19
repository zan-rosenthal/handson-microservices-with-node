import thumbnail from "./thumbnail.js";

import sharp from "sharp";

const defaultWidth = 300;
const defaultHeight = 200;

const baseImage = ({ height, width }) => sharp({
  create: {
    width: parseInt(width) || defaultWidth,
    height: parseInt(height) || defaultHeight,
    channels: 4,
    background: { r: 0, g: 0, b: 0 }
  }
})


export default ({ query, params }, res) => {
  const format = params[0] == "png" ? "png" : "jpeg";
  console.log('QUERY', query)
  baseImage(query)
    .overlayWith(thumbnail(query))[format]().pipe(res);
  }