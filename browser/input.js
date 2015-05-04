var mercury = require('mercury');
var Keyboard = require('frp-keyboard');
var keycode = require('keycode');
var computed = require('observ/computed');

function createInput() {
    var keyboard = Keyboard();
    var changeSlide = mercury.input();

    console.log(keyboard);
    changeSlide = computed([keyboard.keyDown], function (num) {
        console.log(keycode(num));
        return keycode(num) || 'void';
    });

    return changeSlide;
}

module.exports = createInput;
