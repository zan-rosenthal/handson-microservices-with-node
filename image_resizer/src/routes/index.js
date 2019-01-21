import handleResize from "./handleResize";
import handleImageUpload from "./handleImageUpload";
import handleCheckImage from "./handleCheckImage"
import handleDownloadImage from "./handleDownloadImage"
import bodyParser from "body-parser";

export default (app) => {
  app.get(/\/thumbnail\.(jpg|png)/, handleResize);

  app.get("/uploads/:width(\\d+)x:height(\\d+)-:image", handleDownloadImage);
  app.get("/uploads/_x:height(\\d+)-:image", handleDownloadImage);
  app.get("/uploads/:width(\\d+)x_-:image", handleDownloadImage);
  app.get("/uploads/:image", handleDownloadImage);

  app.get('/uploads/:image', handleDownloadImage)
  app.head("/uploads/:image", handleCheckImage)
  app.post(
    '/uploads/:image',
    bodyParser.raw({
      limit: "10mb",
      type: "image/*"
    }),
    handleImageUpload
  )
}