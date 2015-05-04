var mercury = require('mercury');
var h = mercury.h;

var slides = [
    start
];

function start(state) {
    return h('h1.press-start', 'HELLO WORLDS');
}

function Slides(state) {
    return slides[state.slide];
}

module.exports = {
    render: Slides,
    len: slides.length
};
