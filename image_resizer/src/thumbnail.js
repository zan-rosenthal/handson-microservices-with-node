export default ({
  height = 200,
  width = 300,
  border = 5,
  bgcolor = "#fcfcfc",
  fgcolor = "#ddd",
  textcolor = "#aaa",
  textsize = 24,
}) => new Buffer(
    `<svg width="${width}" height="${height}">
        <rect
          x="0" y="0"
          width="${width}" height="${height}"
          fill="${fgcolor}" />
        <rect
          x="${border}" y="${border}"
          width="${width - border * 2}" height="${height - border * 2}"
          fill="${bgcolor}" />
        <line
          x1="${border * 2}" y1="${border * 2}"
          x2="${width - border * 2}" y2="${height - border * 2}"
          stroke-width="${border}" stroke="${fgcolor}" />
        <line
          x1="${width - border * 2}" y1="${border * 2}"
          x2="${border * 2}" y2="${height - border * 2}"
          stroke-width="${border}" stroke="${fgcolor}" />
        <rect
          x="${border}" y="${(height - textsize) / 2}"
          width="${width - border * 2}" height="${textsize}"
          fill="${bgcolor}" />
        <text
          x="${width / 2}" y="${height / 2}" dy="8"
          font-family="Helvetica" font-size="${textsize}"
          fill="${textcolor}" text-anchor="middle">${width} x ${height}</text>
      </svg>`
  )