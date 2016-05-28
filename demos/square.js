const Song = require('nesly-sound')
const song = Song()

const sq = song.square1
const octaves = [2, 3, 4, 5, 6, 7, 8]

octaves.forEach((o) => {
  const note = 'C' + o
  sq([note]).timing(1 / 4)
})

song.done()
song.write()
