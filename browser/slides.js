var mercury = require('mercury');
var h = mercury.h;

var slides = [
    start,
    theNes,
    the80s,
    the80s2,
    goals,
    why,
    why2,
    why3,
    why4,
    whyJs,
    whyJs2,
    relevant,
    relevant2,
    relevant3,
    relevant4,
    relevant5,
    relevant6,
    attempt,
    attempt2,
    soundFromThe80s,
    soundFromThe80s2,
    soundFromThe80s3,
    soundFromThe80s4,
    soundFromThe80s5,
    thePlan,
    thePlan2,
    thePlan3,
    thePlan4,
    thePlan5,
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
    demos,
    photoSources
];

console.log('How many slides: ', slides.length);

function start(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [h('h1.press-start', '8-BIT SOUND:'), h('h2.press-start', 'NES AND JAVASCRIPT')])
            ]),

            h('div.row', [
                h('div.item', [
                    h('p.press-start', 'By Michael Matuzak'),
                    h('p.press-start', 'PRESS START')
                ])
            ])
        ])
    ]);
}

function start2(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [h('h1', 'The Latest in 1980s Tech')])
            ])
        ])
    ]);
}

function the80s(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [h('h1', 'Video Games of the 80s')])
            ]),
            h('div.row', [
                h('img', {src: '/static/images/smb.png'})
            ])
        ])
    ]);
}

function the80s2(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [h('h1', 'Video Games of the 80s')])
            ]),
            h('div.row', [
                h('img', {src: '/static/images/zelda.jpg'})
            ])
        ])
    ]);
}

function theNes(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('img', {src: '/static/images/nes.jpg'})
                ])
            ])
        ])
    ]);
}

function goals(state) {
  return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Initial Goals'),
                    h('h2', '8-bit Music'),
                    h('h2', 'JavaScript')
                ])
            ])
        ])
    ]);
}

function why(state) {
   return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Why?')
                ])
            ])
        ])
    ]);
}

function why2(state) {
   return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Why?'),
                    h('h2', 'Trackers')
                ])
            ])
        ])
    ]);
}

function why3(state) {
   return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Why?'),
                    h('h2', 'Trackers'),
                    h('h2', 'MIDI')
                ])
            ])
        ])
    ]);
}

function why4(state) {
   return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Why?'),
                    h('h2', 'Trackers'),
                    h('h2', 'MIDI'),
                    h('h2', 'Not JS')
                ])
            ])
        ])
    ]);
}

function whyJs(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Why JS?')
                ])
            ])
        ])
    ]);
}

function whyJs2(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Why JS?'),
                    h('h2', 'Node.js'),
                    h('h2', 'Browsers')
                ])
            ])
        ])
    ]);
}

function relevant(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Is 8-bit art relevant?')
                ])
            ])
        ])
    ]);
}

function relevant2(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Is 8-bit art relevant?'),
                    h('h2', 'Shovel Knight')
                ])
            ])
        ])
    ]);
}

function relevant3(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Is 8-bit art relevant?'),
                    h('h2', 'Shovel Knight'),
                    h('img', {src: '/static/images/shovel-knight.png'})
                ])
            ])
        ])
    ]);
}

function relevant4(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Is 8-bit art relevant?'),
                    h('h2', 'Shovel Knight'),
                    h('img', {src: '/static/images/shovel-knight2.png'})
                ])
            ])
        ])
    ]);
}

function relevant5(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Shovel Knight'),
                    h('h2', '8-bit Art/Music'),
                    h('h2', 'OST works on the NES')
                ])
            ])
        ])
    ]);
}

function relevant6(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Is 8-bit art relevant?'),
                    h('h2', 'Star Versus'),
                    h('img', {src: '/static/images/star-versus.jpg'})
                ])
            ])
        ])
    ]);
}

function attempt(state) {
  return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'First Attempt'),
                    h('h2', 'Sequencer'),
                    h('h2', 'NES Samples')
                ])
            ])
        ])
    ]);
}

function attempt2(state) {
  return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Second Attempt'),
                    h('h2', [h('strike', 'Sequencer')]),
                    h('h2', [h('strike', 'NES Samples')]),
                    h('h2', 'Compiler')
                ])
            ])
        ])
    ]);
}

function soundFromThe80s(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Sound from the 1980s'),
                    h('h2', 'The 2A03'),
                    h('img', {src: '/static/images/2A07.jpg'})
                ])
            ])
        ])
    ]);
}

function soundFromThe80s2(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Sound from the 1980s'),
                    h('h2', 'The 2A03'),
                    h('h2', 'Not a Terminator model.'),
                    h('h2', 'Don\'t worry. Be happy.')
                ])
            ])
        ])
    ]);
}

function soundFromThe80s3(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Sound from the 1980s'),
                    h('h2', 'The 2A03'),
                    h('h2', 'The microprocessor of the NES.')
                ])
            ])
        ])
    ]);
}

function soundFromThe80s4(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Sound from the 1980s'),
                    h('h2', 'The 2A03'),
                    h('h2', '5 Channels')
                ])
            ])
        ])
    ]);
}

function soundFromThe80s5(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Sound from the 1980s'),
                    h('h2', 'The 2A03 Channels'),
                    h('ul', [
                        h('li', 'Square 1'),
                        h('li', 'Square 2'),
                        h('li', 'Triangle'),
                        h('li', 'Noise'),
                        h('li', 'Sampler')
                    ])
                ])
            ])
        ])
    ]);
}

function thePlan(state) {
  return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'The Plan'),
                    h('h2', 'Make a beep')
                ])
            ])
        ])
    ]);
}

function thePlan2(state) {
  return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'The Plan'),
                    h('h2', 'Make a beep'),
                    h('h2', 'Lots of asm')
                ])
            ])
        ])
    ]);
}

function thePlan3(state) {
  return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'The Plan'),
                    h('h2', 'Make a beep'),
                    h('h2', 'Lots of asm'),
                    h('h2', 'But it worked')
                ])
            ])
        ])
    ]);
}

function thePlan3(state) {
  return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'The Plan'),
                    h('h2', 'Make a beep'),
                    h('h2', 'Lots of asm'),
                    h('h2', 'But it worked')
                ])
            ])
        ])
    ]);
}

function thePlan4(state) {
  return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'The Plan'),
                    h('h2', 'Build a Sound Engine')
                ])
            ])
        ])
    ]);
}

function thePlan5(state) {
  return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'The Plan'),
                    h('h2', 'Build a Sound Engine'),
                    h('h2', 'ASM')
                ])
            ])
        ])
    ]);
}

function thePlan6(state) {
  return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'The Plan'),
                    h('h2', 'Build a Sound Engine'),
                    h('h2', 'ASM'),
                    h('h2', 'JS API')
                ])
            ])
        ])
    ]);
}

function square(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Square'),
                    h('h2', '54.6 Hz to 12.4 KHz'),
                    h('h2', 'Duty Cycle'),
                    h('h2', 'Frequency Sweeps')
                ])
            ])
        ])
    ]);
}

function square2(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Square'),
                    h('h2', '54.6 Hz to 12.4 KHz'),
                    h('h2', 'Duty Cycle'),
                    h('h2', [h('strike', 'Frequency Sweeps')])
                ])
            ])
        ])
    ]);
}

function squareDemo(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Square'),
                    h('h2', 'Demo')
                ])
            ])
        ])
    ]);
}


function triangle(state) {
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
    ]);
}

function triangleDemo(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Triangle'),
                    h('h2', 'Demo')
                ])
            ])
        ])
    ]);
}

function noise(state) {
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
    ]);
}

function noiseDemo(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Noise'),
                    h('h2', 'Demo')
                ])
            ])
        ])
    ]);
}

function technique(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Technique')
                ])
            ])
        ])
    ]);
}

function technique2(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Technique'),
                    h('h2', 'Chords')
                ])
            ])
        ])
    ]);
}

function technique3(state) {
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
    ]);
}

function technique4(state) {
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
    ]);
}

function demos(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Demos')
                ])
            ])
        ])
    ]);
}

function photoSources(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Photo Sources'),
                    h('ul', [
                        h('li', [
                            h('a', {href: 'http://commons.wikimedia.org/wiki/File:RP2A07.jpg'}, '2A03 by Miguel Durán')
                        ])
                    ])
                ])
            ])
        ])
    ]);
}

function Slides(state) {
    return slides[state.slide];
}

module.exports = {
    render: Slides,
    len: slides.length
};
