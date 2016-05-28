const Song = require('nesly-sound')
const song = Song()

const tri = song.triangle
const octaves = [2, 3, 4, 5, 6, 7, 8]

octaves.forEach((o) => {
  const note = 'C' + o
  tri([note]).timing(1 / 4)
})

song.done()
song.write()
