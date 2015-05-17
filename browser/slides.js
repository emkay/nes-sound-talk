var mercury = require('mercury');
var h = mercury.h;

var slides = [
    start,
    the80s,
    the80s2,
    the80s3,
    the80s4,
    theNes,
    goals,
    attempt,
    attempt2,
    soundFromThe80s,
    soundFromThe80s2,
    soundFromThe80s3,
    soundFromThe80s4,
    soundFromThe80s5,
    soundFromThe80s6,
    square,
    square2,
    triangle,
    noise,
    photoSources
];

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

function the80s(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [h('h1', 'The 80s')])
            ]),
            h('div.row', [
                h('img', {src: '/static/images/80s-show-movies.jpg'})
            ])
        ])
    ]);
}

function the80s2(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [h('h1', 'The 80s')])
            ]),
            h('div.row', [
                h('img', {src: '/static/images/a-team.jpg'})
            ])
        ])
    ]);
}

function the80s3(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [h('h1', 'The 80s')])
            ]),
            h('div.row', [
                h('img', {src: '/static/images/different-strokes.jpg'})
            ])
        ])
    ]);
}

function the80s4(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [h('h1', 'The 80s')])
            ]),
            h('div.row', [
                h('img', {src: '/static/images/family-ties.jpg'})
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
                    h('img', {src: '/static/images/the-1980s.jpg'})
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
                    h('img', {src: '/static/images/2A07.jpg'})
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
                    h('h2', 'Not a Terminator model.'),
                    h('h2', 'Don\'t worry. Be happy.')
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
                    h('h2', 'The APU of the NES')
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
                    h('h2', 'The 2A03'),
                    h('h2', 'The APU of the NES'),
                    h('h2', '5 Channels')
                ])
            ])
        ])
    ]);
}

function soundFromThe80s6(state) {
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
