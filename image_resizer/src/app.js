import express from "express";
import handleResize from './handleResize'
import handleImageUpload from './handleImageUpload'
import bodyParser from "body-parser";
import morgan from 'morgan'

export default (port) => {
  const app = express();
  morgan('combined')


  // Routes
  app.get(/\/thumbnail\.(jpg|png)/, handleResize);
  app.post(
    '/uploads/:image',
    bodyParser.raw({
      limit: "10mb",
      type: "image/*"
    }),
    handleImageUpload
  )

  app.listen(port, () => {
    console.log("Listening on port:", port);
  });

  return app
}
