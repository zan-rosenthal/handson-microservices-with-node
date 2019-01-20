import path from 'path'
import fs from 'fs'

export default (req, res) => fs.exists(
  path.join(__dirname, "uploads", req.params.image),
  (exists) => exists ? res.send(200) : res.send(404, "Image not found")
)