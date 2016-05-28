const mercury = require('mercury')
const h = mercury.h

const slides = [
  start,
  what,
  what2,
  what3,
  theNes,
  goal,
  goal2,
  goal3,
  why,
  why2,
  why3,
  why4,
  why5,
  how,
  how2,
  how3,
  channels,
  channels2,
  channels3,
  square,
  square2,
  squareDemo,
  triangle,
  triangleDemo,
  noise,
  noiseDemo,
  technique,
  technique2,
  technique3,
  technique4,
  theFuture,
  theFuture2,
  theFuture3,
  help
]

function start (state) {
  return h('div#app', [
    h('div.main', [
      h('div.row', [
        h('div.item', [h('h1.press-start', '8-BIT SOUND:'), h('h2.press-start', 'NES AND JAVASCRIPT')])
      ]),

      h('div.row', [
        h('div.item', [
          h('p.press-start', 'By Michael Matuzak')
        ])
      ])
    ])
  ])
}

function what (state) {
  return h('div#app', [
    h('div.main', [
      h('div.row', [
        h('div.item', [
          h('h1', 'What?')
        ])
      ])
    ])
  ])
}

function what2 (state) {
  return h('div#app', [
    h('div.main', [
      h('div.row', [
        h('div.item', [
          h('h1', 'What?'),
          h('h2', '1980s music tech')
        ])
      ])
    ])
  ])
}

function what3 (state) {
  return h('div#app', [
    h('div.main', [
      h('div.row', [
        h('div.item', [
          h('h1', 'What?'),
          h('h2', '1980s music tech'),
          h('h2', 'JavaScript')
        ])
      ])
    ])
  ])
}

function theNes (state) {
  return h('div#app', [
    h('div.main', [
      h('div.row', [
        h('div.item', [
          h('img', {src: '/static/images/nes.jpg'})
        ])
      ])
    ])
  ])
}

function why (state) {
  return h('div#app', [
    h('div.main', [
      h('div.row', [
        h('div.item', [
          h('h1', 'Why?')
        ])
      ])
    ])
  ])
}

function why2 (state) {
  return h('div#app', [
    h('div.main', [
      h('div.row', [
        h('div.item', [
          h('h1', 'Why?'),
          h('h2', 'Music')
        ])
      ])
    ])
  ])
}

function why3 (state) {
  return h('div#app', [
    h('div.main', [
      h('div.row', [
        h('div.item', [
          h('h1', 'Why?'),
          h('h2', 'Music'),
          h('h2', 'Nostalgia')
        ])
      ])
    ])
  ])
}

function why4 (state) {
  return h('div#app', [
    h('div.main', [
      h('div.row', [
        h('div.item', [
          h('h1', 'Why?'),
          h('h2', 'Music'),
          h('h2', 'Nostalgia'),
          h('h2', 'Browsers')
        ])
      ])
    ])
  ])
}

function why5 (state) {
  return h('div#app', [
    h('div.main', [
      h('div.row', [
        h('div.item', [
          h('h1', 'Fun')
        ])
      ])
    ])
  ])
}

function goal (state) {
  return h('div#app', [
    h('div.main', [
      h('div.row', [
        h('div.item', [
          h('h1', 'The Goal')
        ])
      ])
    ])
  ])
}

function goal2 (state) {
  return h('div#app', [
    h('div.main', [
      h('div.row', [
        h('div.item', [
          h('h1', 'Make it easy to write music for a Nintendo.')
        ])
      ])
    ])
  ])
}

function goal3 (state) {
  return h('div#app', [
    h('div.main', [
      h('div.row', [
        h('div.item', [
          h('h1', 'Using JavaScript')
        ])
      ])
    ])
  ])
}

function how (state) {
  return h('div#app', [
    h('div.main', [
      h('div.row', [
        h('div.item', [
          h('h1', 'How?')
        ])
      ])
    ])
  ])
}

function how2 (state) {
  return h('div#app', [
    h('div.main', [
      h('div.row', [
        h('div.item', [
          h('h1', 'How?'),
          h('h2', 'Reading a lot'),
          h('h2', 'Writing a lot')
        ])
      ])
    ])
  ])
}

function how3 (state) {
  return h('div#app', [
    h('div.main', [
      h('div.row', [
        h('div.item', [
          h('h1', 'How?'),
          h('h2', 'ASM Sound Engine'),
          h('h2', 'JS API')
        ])
      ])
    ])
  ])
}

function channels (state) {
  return h('div#app', [
    h('div.main', [
      h('div.row', [
        h('div.item', [
          h('h1', 'Channels')
        ])
      ])
    ])
  ])
}

function channels2 (state) {
  return h('div#app', [
    h('div.main', [
      h('div.row', [
        h('div.item', [
          h('h1', 'Square'),
          h('h1', 'Square 2'),
          h('h1', 'Triangle'),
          h('h1', 'Noise'),
          h('h1', 'Sampler')
        ])
      ])
    ])
  ])
}

function channels3 (state) {
  return h('div#app', [
    h('div.main', [
      h('div.row', [
        h('div.item', [
          h('h1', 'Square'),
          h('h1', 'Square 2'),
          h('h1', 'Triangle'),
          h('h1', 'Noise'),
          h('h1', [h('strike', 'Sampler')])
        ])
      ])
    ])
  ])
}

function square (state) {
  return h('div#app', [
    h('div.main', [
      h('div.row', [
        h('div.item', [
          h('h1', 'Square'),
          h('h2', '54.6 Hz to 12.4 KHz'),
          h('h2', 'Duty Cycle'),
          h('h2', 'Volume Envelopes'),
          h('h2', 'Frequency Sweeps')
        ])
      ])
    ])
  ])
}

function square2 (state) {
  return h('div#app', [
    h('div.main', [
      h('div.row', [
        h('div.item', [
          h('h1', 'Square'),
          h('h2', '54.6 Hz to 12.4 KHz'),
          h('h2', 'Duty Cycle'),
          h('h2', 'Volume Envelopes'),
          h('h2', [h('strike', 'Frequency Sweeps')])
        ])
      ])
    ])
  ])
}

function squareDemo (state) {
  return h('div#app', [
    h('div.main', [
      h('div.row', [
        h('div.item', [
          h('h1', 'Square'),
          h('h2', 'Demo')
        ])
      ])
    ])
  ])
}

function triangle (state) {
  return h('div#app', [
    h('div.main', [
      h('div.row', [
        h('div.item', [
          h('h1', 'Triangle'),
          h('h2', '27.3 Hz to 55.9 KHz'),
          h('h2', 'Volume on/off')
        ])
      ])
    ])
  ])
}

function triangleDemo (state) {
  return h('div#app', [
    h('div.main', [
      h('div.row', [
        h('div.item', [
          h('h1', 'Triangle'),
          h('h2', 'Demo')
        ])
      ])
    ])
  ])
}

function noise (state) {
  return h('div#app', [
    h('div.main', [
      h('div.row', [
        h('div.item', [
          h('h1', 'Noise'),
          h('h2', 'Produces random frequencies'),
          h('h2', 'Sounds sort of like drums')
        ])
      ])
    ])
  ])
}

function noiseDemo (state) {
  return h('div#app', [
    h('div.main', [
      h('div.row', [
        h('div.item', [
          h('h1', 'Noise'),
          h('h2', 'Demo')
        ])
      ])
    ])
  ])
}

function technique (state) {
  return h('div#app', [
    h('div.main', [
      h('div.row', [
        h('div.item', [
          h('h1', 'Technique')
        ])
      ])
    ])
  ])
}

function technique2 (state) {
  return h('div#app', [
    h('div.main', [
      h('div.row', [
        h('div.item', [
          h('h1', 'Technique'),
          h('h2', 'Chords')
        ])
      ])
    ])
  ])
}

function technique3 (state) {
  return h('div#app', [
    h('div.main', [
      h('div.row', [
        h('div.item', [
          h('h1', 'Technique'),
          h('h2', [h('strike', 'Chords')]),
          h('h2', 'Monophonic')
        ])
      ])
    ])
  ])
}

function technique4 (state) {
  return h('div#app', [
    h('div.main', [
      h('div.row', [
        h('div.item', [
          h('h1', 'Technique'),
          h('h2', [h('strike', 'Chords')]),
          h('h2', 'Monophonic'),
          h('h2', 'Arpeggios')
        ])
      ])
    ])
  ])
}

function theFuture (state) {
  return h('div#app', [
    h('div.main', [
      h('div.row', [
        h('div.item', [
          h('h1', 'The Future')
        ])
      ])
    ])
  ])
}

function theFuture2 (state) {
  return h('div#app', [
    h('div.main', [
      h('div.row', [
        h('div.item', [
          h('h1', 'The Future'),
          h('h2', 'NES Assembler in JS')
        ])
      ])
    ])
  ])
}

function theFuture3 (state) {
  return h('div#app', [
    h('div.main', [
      h('div.row', [
        h('div.item', [
          h('h1', 'The Future'),
          h('h2', 'NES Assembler in JS'),
          h('h2', 'Web UI Tools')
        ])
      ])
    ])
  ])
}

function help (state) {
  return h('div#app', [
    h('div.main', [
      h('div.row', [
        h('div.item', [
          h('h1', 'mike@js.la'),
          h('h2.twitter', '@mmatuzak'),
          h('h2', 'npm i nesly-sound')
        ])
      ])
    ])
  ])
}

function Slides (state) {
  return slides[state.slide]
}

module.exports = {
  render: Slides,
  len: slides.length
}
