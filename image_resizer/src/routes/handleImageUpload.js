import path from 'path'
import fs from 'fs'

export default (req, res) =>  {
  let image = req.params.image.toLowerCase()

  const length = req.body.length

  const fd = fs.createWriteStream(
    req.localpath, {
      flages: "w+",
      encoding: "binary"
    }
  )

  fd.end(req.body)

  fd.on("close", () => {
    res.send({ status: "ok", size: req.body.length });
  })
}

