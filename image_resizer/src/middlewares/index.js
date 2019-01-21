import verifyImageExists from './verifyImageExists'
import resizeImage from './resizeImage'

export default (app) => {
  app.param("image", verifyImageExists)
  app.param(['width', 'height'], resizeImage)

  return app
}