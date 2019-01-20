import express from "express";
import morgan from 'morgan'
import routes from './routes'

export default (port) => {
  const app = express();
  routes(app)
  morgan('combined')


  app.listen(port, () => {
    console.log("Listening on port:", port);
  });

  return app
}
