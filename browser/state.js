const mercury = require('mercury')
const extend = require('xtend')

const Defaults = {
  slide: 0,
  title: '',
  slideLen: 0
}

function state (events, initialState) {
  const state = extend(Defaults, initialState)

  return mercury.hash({
    events: events,
    slide: mercury.value(state.slide),
    title: mercury.value(state.title),
    slideLen: mercury.value(state.slideLen)
  })
}

module.exports = state
