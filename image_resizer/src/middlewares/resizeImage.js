export default  (req, _res, next, dimensions) => {
  req.width = +dimensions[0]
  req.height = +dimensions[1]
  return next()
}
