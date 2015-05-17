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
    goals2,
    attempt,
    soundFromThe80s,
    soundFromThe80s2,
    soundFromThe80s3,
    soundFromThe80s4,
    soundFromThe80s5,
    the2A03,
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

function soundFromThe80s(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Sound from the 1980s'),
                    h('h2', 'The 2A03')
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
                    h('ul', [
                        h('li', 'The APU of the NES')
                    ])
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
                    h('ul', [
                        h('li', 'The APU of the NES'),
                        h('li', '5 Channels')
                    ])
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

function the2A03(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', '2A03'),
                    h('img', {src: '/static/images/2A07.jpg'})
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
                    h('h1', 'Initial Goals')
                ])
            ])
        ])
    ]);
}

function goals2(state) {
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

function goals3(state) {
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
