import express from "express"
import morgan from 'morgan'
import routes from './routes'
import middlewares from './middlewares'

export default (port) => {
  const app = express();
  middlewares(app)
  routes(app)
  morgan('combined')


  app.listen(port, () => {
    console.log("Listening on port:", port);
  });

  return app
}
