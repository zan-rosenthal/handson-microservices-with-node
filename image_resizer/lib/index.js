import express from "express";
import handleImageRequest from './handleImageRequest'

const app = express();

app.get(/\/thumbnail\.(jpg|png)/, handleImageRequest);

app.listen(3000, () => {
  console.log("ready");
});
