var mercury = require('mercury');
var extend = require('xtend');

var Defaults = {
    slide: 0,
    title: "Node.js on the Road",
    slideLen: 0
};

function state(events, initialState) {
    var state = extend(Defaults, initialState);

    return mercury.hash({
        events: events,
        slide: mercury.value(state.slide),
        title: mercury.value(state.title),
        slideLen: mercury.value(state.slideLen)
    });
}

module.exports = state;
