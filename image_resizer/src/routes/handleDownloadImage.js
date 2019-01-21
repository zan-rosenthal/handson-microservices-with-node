import path from 'path'
import fs from 'fs'
import sharp from "sharp";

export default ({ localpath, image, width, height }, res) => {
  fs.access(localpath, fs.constants.R_OK, err => {
    if (err) return res.status(404).end();
    const resizedImage = sharp(localpath);

    if (width && height) {
      // ignore aspect ratio if both provided
      resizedImage.resize({ fit: "fill", width, height });
    } else if (width || height) {
      resizedImage.resize({ width, height });
    }

    res.setHeader("Content-Type", `image/${path.extname(image).substr(1)}`);

    resizedImage.pipe(res);
  });
};