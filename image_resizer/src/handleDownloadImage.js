import path from 'path'
import fs from 'fs'

export default (req, res) => {
  const ext = path.extname(req.params.image)

  if(!ext.match(/^\.(png|jpg)$/)) {
    return res.status(404).end()
  }

  const fd = fs.createReadStream(path.join(__dirname, "uploads", req.params.image))

  fd.on('error', e => {
    if (e.code == 'ENOENT') {
      return res.status(404).end()
    }

    res.status(500).end()
  })

  res.setHeader('Content-Type', `imag/${ext.substr(1)}`)

  fd.pipe(res)
}