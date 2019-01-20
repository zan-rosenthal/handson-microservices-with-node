import handleResize from "./handleResize";
import handleImageUpload from "./handleImageUpload";
import handleCheckImage from "./handleCheckImage"
import bodyParser from "body-parser";

export default (app) => {
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
  app.head("/uploads/:image",handleCheckImage )
}