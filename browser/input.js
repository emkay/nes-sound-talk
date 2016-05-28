const mercury = require('mercury')
const Keyboard = require('frp-keyboard')
const keycode = require('keycode')
const computed = require('observ/computed')

function createInput () {
  const keyboard = Keyboard()
  let changeSlide = mercury.input()

  changeSlide = computed([keyboard.keyDown], (num) => {
    return keycode(num) || 'void'
  })

  return changeSlide
}

module.exports = createInput
