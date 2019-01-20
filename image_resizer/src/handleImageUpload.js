import path from 'path'
import fs from 'fs'

export default (req, res) =>  {
  let image = req.params.image.toLowerCase()

  if (!image.match(/\.(png|jpg)$/)) {
    return res.status(403).end()
  }

  const length = req.body.length

  const fd = fs.createWriteStream(
    path.join(__dirname, "uploads", image), {
      flages: "w+",
      encoding: "binary"
    }
  )

  fd.on("close", () => {
    res.send({ status: "ok", size: length });
  })

  fd.end(req.body)
}

