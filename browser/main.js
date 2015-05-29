require('press-start-font')();
var mercury = require('mercury');
var Input = require('./input');
var State = require('./state');
var Slides = require('./slides');
var Update = require('./update');
var h = mercury.h;

function render(state) {
    var slide = Slides.render(state);
    return slide(state);
}

function createApp() {

    var events = Input();
    var state = State(events, {slideLen: Slides.len});
    events(Update.changeSlide.bind(null, state));

    return state;
}

var state = window.state = createApp();
mercury.app(document.body, state, render);
