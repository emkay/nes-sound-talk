var mercury = require('mercury');
var h = mercury.h;

var slides = [
    start
];

function start(state) {
    return h('div#app', [
        h('div.main', [
            h('h1.press-start', '8-BIT SOUND WITH THE NES AND JAVASCRIPT'),
            h('div.press-start-container', [
                h('p.press-start', 'PRESS START')
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
