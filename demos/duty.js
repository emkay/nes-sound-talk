const Song = require('nesly-sound')
const song = Song()

const sq = song.square1
const dutyCycles = [-25, 0, 25, 50, 0]

dutyCycles.forEach((d) => {
  const note = 'C4'
  sq([note]).timing(1 / 4).duty(d)
})

song.done()
song.write()
