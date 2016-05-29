require('press-start-font')()
require('../static/css/main.css');

const mercury = require('mercury')
const Input = require('./input')
const State = require('./state')
const Slides = require('./slides')
const Update = require('./update')

function render (state) {
  const slide = Slides.render(state)
  return slide(state)
}

function createApp () {
  const events = Input()
  const state = State(events, {slideLen: Slides.len})
  events(Update.changeSlide.bind(null, state))

  return state
}

const state = window.state = createApp()
mercury.app(document.body, state, render)
