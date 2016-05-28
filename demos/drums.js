const Song = require('nesly-sound')
const song = Song()

const noise = song.noise

function loop (n, fn) {
  if (n === 0) return

  fn()
  return loop(n - 1, fn)
}

loop(16, function (i) {
  noise(['$0F'])
  noise(['$04, $06']).timing(1 / 16)
})

song.done()
song.write()
