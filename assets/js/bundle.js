(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"frp-keyboard":11,"keycode":27,"mercury":28,"observ/computed":113}],2:[function(require,module,exports){
var mercury = require('mercury');
var h = mercury.h;

var slides = [
    start,
    what,
    what2,
    what3,
    theNes,
    goal,
    goal2,
    goal3,
    why,
    why2,
    why3,
    why4,
    why5,
    how,
    how2,
    how3,
    channels,
    channels2,
    channels3,
    square,
    square2,
    squareDemo,
    triangle,
    triangleDemo,
    noise,
    noiseDemo,
    technique,
    technique2,
    technique3,
    technique4,
    theFuture,
    theFuture2,
    theFuture3,
    help
];

console.log('How many slides: ', slides.length);

function start(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [h('h1.press-start', '8-BIT SOUND:'), h('h2.press-start', 'NES AND JAVASCRIPT')])
            ]),

            h('div.row', [
                h('div.item', [
                    h('p.press-start', 'By Michael Matuzak')
                ])
            ])
        ])
    ]);
}

function what(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'What?')
                ])
            ])
        ])
    ]);
}

function what2(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'What?'),
                    h('h2', '1980s music tech')
                ])
            ])
        ])
    ]);
}

function what3(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'What?'),
                    h('h2', '1980s music tech'),
                    h('h2', 'JavaScript')
                ])
            ])
        ])
    ]);
}

function theNes(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
        h('img', {src: 'assets/images/nes.jpg'})
                ])
            ])
        ])
    ]);
}

function why(state) {
   return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Why?')
                ])
            ])
        ])
    ]);
}

function why2(state) {
   return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Why?'),
                    h('h2', 'Music')
                ])
            ])
        ])
    ]);
}

function why3(state) {
   return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Why?'),
                    h('h2', 'Music'),
                    h('h2', 'Nostalgia')
                ])
            ])
        ])
    ]);
}

function why4(state) {
   return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Why?'),
                    h('h2', 'Music'),
                    h('h2', 'Nostalgia'),
                    h('h2', 'Browsers')
                ])
            ])
        ])
    ]);
}

function why5(state) {
   return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Fun')
                ])
            ])
        ])
    ]);
}


function goal(state) {
   return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'The Goal')
                ])
            ])
        ])
    ]);
 
}

function goal2(state) {
   return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Make it easy to write music for a Nintendo.')
                ])
            ])
        ])
    ]);
 
}

function goal3(state) {
   return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Using JavaScript')
                ])
            ])
        ])
    ]);
 
}

function how(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'How?')
                ])
            ])
        ])
    ]);
}

function how2(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'How?'),
                    h('h2', 'Reading a lot'),
                    h('h2', 'Writing a lot')
                ])
            ])
        ])
    ]);
}

function how3(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'How?'),
                    h('h2', 'ASM Sound Engine'),
                    h('h2', 'JS API')
                ])
            ])
        ])
    ]);
}

function channels(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Channels')
                ])
            ])
        ])
    ]);
}

function channels2(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
        h('h1', 'Square'),
        h('h1', 'Square 2'),
        h('h1', 'Triangle'),
        h('h1', 'Noise'),
        h('h1', 'Sampler')
                ])
            ])
        ])
    ]);
}

function channels3(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
        h('h1', 'Square'),
        h('h1', 'Square 2'),
        h('h1', 'Triangle'),
        h('h1', 'Noise'),
        h('h1', [h('strike', 'Sampler')])
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
                    h('h2', 'Volume Envelopes'),
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
                    h('h2', 'Volume Envelopes'),
                    h('h2', [h('strike', 'Frequency Sweeps')])
                ])
            ])
        ])
    ]);
}

function squareDemo(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Square'),
                    h('h2', 'Demo')
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

function triangleDemo(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Triangle'),
                    h('h2', 'Demo')
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

function noiseDemo(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Noise'),
                    h('h2', 'Demo')
                ])
            ])
        ])
    ]);
}

function technique(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Technique')
                ])
            ])
        ])
    ]);
}

function technique2(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Technique'),
                    h('h2', 'Chords')
                ])
            ])
        ])
    ]);
}

function technique3(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Technique'),
                    h('h2', [h('strike', 'Chords')]),
                    h('h2', 'Monophonic')
                ])
            ])
        ])
    ]);
}

function technique4(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Technique'),
                    h('h2', [h('strike', 'Chords')]),
                    h('h2', 'Monophonic'),
                    h('h2', 'Arpeggios')
                ])
            ])
        ])
    ]);
}

function theFuture(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'The Future')
                ])
            ])
        ])
    ]);
}

function theFuture2(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'The Future'),
                    h('h2', 'NES Assembler in JS')
                ])
            ])
        ])
    ]);
}

function theFuture3(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'The Future'),
                    h('h2', 'NES Assembler in JS'),
                    h('h2', 'Web UI Tools')
                ])
            ])
        ])
    ]);
}

function help(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'mike@js.la'),
                    h('h2.twitter', '@mmatuzak'),
                    h('h2', 'npm i nesly-sound')
                ])
            ])
        ])
    ]);
}

function demos(state) {
    return h('div#app', [
        h('div.main', [
            h('div.row', [
                h('div.item', [
                    h('h1', 'Demos')
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

},{"mercury":28}],3:[function(require,module,exports){
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

},{"mercury":28,"xtend":118}],4:[function(require,module,exports){
function changeSlide(state, direction) {
    if (direction === "void") {
        return;
    }

    if (direction === "right") {
        if (state.slide() < state.slideLen() - 1) {
            state.slide.set(state.slide() + 1);
        }
    } else if (direction === "left") {
        if (state.slide() > 0) {
            state.slide.set(state.slide() - 1);
        }
    }
}

module.exports = {
    changeSlide: changeSlide
}

},{}],5:[function(require,module,exports){

},{}],6:[function(require,module,exports){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('is-array')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192 // not used by this implementation

var kMaxLength = 0x3fffffff
var rootParent = {}

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Note:
 *
 * - Implementation must support adding new properties to `Uint8Array` instances.
 *   Firefox 4-29 lacked support, fixed in Firefox 30+.
 *   See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *  - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *  - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *    incorrect length in some situations.
 *
 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they will
 * get the Object implementation, which is slower but will work correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = (function () {
  try {
    var buf = new ArrayBuffer(0)
    var arr = new Uint8Array(buf)
    arr.foo = function () { return 42 }
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        new Uint8Array(1).subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
})()

/**
 * Class: Buffer
 * =============
 *
 * The Buffer constructor returns instances of `Uint8Array` that are augmented
 * with function properties for all the node `Buffer` API functions. We use
 * `Uint8Array` so that square bracket notation works as expected -- it returns
 * a single octet.
 *
 * By augmenting the instances, we can avoid modifying the `Uint8Array`
 * prototype.
 */
function Buffer (arg) {
  if (!(this instanceof Buffer)) {
    // Avoid going through an ArgumentsAdaptorTrampoline in the common case.
    if (arguments.length > 1) return new Buffer(arg, arguments[1])
    return new Buffer(arg)
  }

  this.length = 0
  this.parent = undefined

  // Common case.
  if (typeof arg === 'number') {
    return fromNumber(this, arg)
  }

  // Slightly less common case.
  if (typeof arg === 'string') {
    return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8')
  }

  // Unusual.
  return fromObject(this, arg)
}

function fromNumber (that, length) {
  that = allocate(that, length < 0 ? 0 : checked(length) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < length; i++) {
      that[i] = 0
    }
  }
  return that
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8'

  // Assumption: byteLength() return value is always < kMaxLength.
  var length = byteLength(string, encoding) | 0
  that = allocate(that, length)

  that.write(string, encoding)
  return that
}

function fromObject (that, object) {
  if (Buffer.isBuffer(object)) return fromBuffer(that, object)

  if (isArray(object)) return fromArray(that, object)

  if (object == null) {
    throw new TypeError('must start with number, buffer, array or string')
  }

  if (typeof ArrayBuffer !== 'undefined' && object.buffer instanceof ArrayBuffer) {
    return fromTypedArray(that, object)
  }

  if (object.length) return fromArrayLike(that, object)

  return fromJsonObject(that, object)
}

function fromBuffer (that, buffer) {
  var length = checked(buffer.length) | 0
  that = allocate(that, length)
  buffer.copy(that, 0, 0, length)
  return that
}

function fromArray (that, array) {
  var length = checked(array.length) | 0
  that = allocate(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

// Duplicate of fromArray() to keep fromArray() monomorphic.
function fromTypedArray (that, array) {
  var length = checked(array.length) | 0
  that = allocate(that, length)
  // Truncating the elements is probably not what people expect from typed
  // arrays with BYTES_PER_ELEMENT > 1 but it's compatible with the behavior
  // of the old Buffer constructor.
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayLike (that, array) {
  var length = checked(array.length) | 0
  that = allocate(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

// Deserialize { type: 'Buffer', data: [1,2,3,...] } into a Buffer object.
// Returns a zero-length buffer for inputs that don't conform to the spec.
function fromJsonObject (that, object) {
  var array
  var length = 0

  if (object.type === 'Buffer' && isArray(object.data)) {
    array = object.data
    length = checked(array.length) | 0
  }
  that = allocate(that, length)

  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function allocate (that, length) {
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = Buffer._augment(new Uint8Array(length))
  } else {
    // Fallback: Return an object instance of the Buffer class
    that.length = length
    that._isBuffer = true
  }

  var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1
  if (fromPool) that.parent = rootParent

  return that
}

function checked (length) {
  // Note: cannot use `length < kMaxLength` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (subject, encoding) {
  if (!(this instanceof SlowBuffer)) return new SlowBuffer(subject, encoding)

  var buf = new Buffer(subject, encoding)
  delete buf.parent
  return buf
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  var i = 0
  var len = Math.min(x, y)
  while (i < len) {
    if (a[i] !== b[i]) break

    ++i
  }

  if (i !== len) {
    x = a[i]
    y = b[i]
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) throw new TypeError('list argument must be an Array of Buffers.')

  if (list.length === 0) {
    return new Buffer(0)
  } else if (list.length === 1) {
    return list[0]
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; i++) {
      length += list[i].length
    }
  }

  var buf = new Buffer(length)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

function byteLength (string, encoding) {
  if (typeof string !== 'string') string = String(string)

  if (string.length === 0) return 0

  switch (encoding || 'utf8') {
    case 'ascii':
    case 'binary':
    case 'raw':
      return string.length
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return string.length * 2
    case 'hex':
      return string.length >>> 1
    case 'utf8':
    case 'utf-8':
      return utf8ToBytes(string).length
    case 'base64':
      return base64ToBytes(string).length
    default:
      return string.length
  }
}
Buffer.byteLength = byteLength

// pre-set for values that may exist in the future
Buffer.prototype.length = undefined
Buffer.prototype.parent = undefined

// toString(encoding, start=0, end=buffer.length)
Buffer.prototype.toString = function toString (encoding, start, end) {
  var loweredCase = false

  start = start | 0
  end = end === undefined || end === Infinity ? this.length : end | 0

  if (!encoding) encoding = 'utf8'
  if (start < 0) start = 0
  if (end > this.length) end = this.length
  if (end <= start) return ''

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'binary':
        return binarySlice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return 0
  return Buffer.compare(this, b)
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset) {
  if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff
  else if (byteOffset < -0x80000000) byteOffset = -0x80000000
  byteOffset >>= 0

  if (this.length === 0) return -1
  if (byteOffset >= this.length) return -1

  // Negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0)

  if (typeof val === 'string') {
    if (val.length === 0) return -1 // special case: looking for empty string always fails
    return String.prototype.indexOf.call(this, val, byteOffset)
  }
  if (Buffer.isBuffer(val)) {
    return arrayIndexOf(this, val, byteOffset)
  }
  if (typeof val === 'number') {
    if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
      return Uint8Array.prototype.indexOf.call(this, val, byteOffset)
    }
    return arrayIndexOf(this, [ val ], byteOffset)
  }

  function arrayIndexOf (arr, val, byteOffset) {
    var foundIndex = -1
    for (var i = 0; byteOffset + i < arr.length; i++) {
      if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === val.length) return byteOffset + foundIndex
      } else {
        foundIndex = -1
      }
    }
    return -1
  }

  throw new TypeError('val must be string, number or Buffer')
}

// `get` will be removed in Node 0.13+
Buffer.prototype.get = function get (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.')
  return this.readUInt8(offset)
}

// `set` will be removed in Node 0.13+
Buffer.prototype.set = function set (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.')
  return this.writeUInt8(v, offset)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new Error('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) throw new Error('Invalid hex string')
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function binaryWrite (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    var swap = encoding
    encoding = offset
    offset = length | 0
    length = swap
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'binary':
        return binaryWrite(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  var res = ''
  var tmp = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    if (buf[i] <= 0x7F) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
      tmp = ''
    } else {
      tmp += '%' + buf[i].toString(16)
    }
  }

  return res + decodeUtf8Char(tmp)
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function binarySlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = Buffer._augment(this.subarray(start, end))
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
  }

  if (newBuf.length) newBuf.parent = this.parent || this

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('value is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = value
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = value
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = value
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = value
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = value < 0 ? 1 : 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = value < 0 ? 1 : 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = value
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = value
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = value
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (value > max || value < min) throw new RangeError('value is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('index out of range')
  if (offset < 0) throw new RangeError('index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start

  if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < len; i++) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    target._set(this.subarray(start, start + len), targetStart)
  }

  return len
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function fill (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (end < start) throw new RangeError('end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  if (start < 0 || start >= this.length) throw new RangeError('start out of bounds')
  if (end < 0 || end > this.length) throw new RangeError('end out of bounds')

  var i
  if (typeof value === 'number') {
    for (i = start; i < end; i++) {
      this[i] = value
    }
  } else {
    var bytes = utf8ToBytes(value.toString())
    var len = bytes.length
    for (i = start; i < end; i++) {
      this[i] = bytes[i % len]
    }
  }

  return this
}

/**
 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */
Buffer.prototype.toArrayBuffer = function toArrayBuffer () {
  if (typeof Uint8Array !== 'undefined') {
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      return (new Buffer(this)).buffer
    } else {
      var buf = new Uint8Array(this.length)
      for (var i = 0, len = buf.length; i < len; i += 1) {
        buf[i] = this[i]
      }
      return buf.buffer
    }
  } else {
    throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
  }
}

// HELPER FUNCTIONS
// ================

var BP = Buffer.prototype

/**
 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
 */
Buffer._augment = function _augment (arr) {
  arr.constructor = Buffer
  arr._isBuffer = true

  // save reference to original Uint8Array set method before overwriting
  arr._set = arr.set

  // deprecated, will be removed in node 0.13+
  arr.get = BP.get
  arr.set = BP.set

  arr.write = BP.write
  arr.toString = BP.toString
  arr.toLocaleString = BP.toString
  arr.toJSON = BP.toJSON
  arr.equals = BP.equals
  arr.compare = BP.compare
  arr.indexOf = BP.indexOf
  arr.copy = BP.copy
  arr.slice = BP.slice
  arr.readUIntLE = BP.readUIntLE
  arr.readUIntBE = BP.readUIntBE
  arr.readUInt8 = BP.readUInt8
  arr.readUInt16LE = BP.readUInt16LE
  arr.readUInt16BE = BP.readUInt16BE
  arr.readUInt32LE = BP.readUInt32LE
  arr.readUInt32BE = BP.readUInt32BE
  arr.readIntLE = BP.readIntLE
  arr.readIntBE = BP.readIntBE
  arr.readInt8 = BP.readInt8
  arr.readInt16LE = BP.readInt16LE
  arr.readInt16BE = BP.readInt16BE
  arr.readInt32LE = BP.readInt32LE
  arr.readInt32BE = BP.readInt32BE
  arr.readFloatLE = BP.readFloatLE
  arr.readFloatBE = BP.readFloatBE
  arr.readDoubleLE = BP.readDoubleLE
  arr.readDoubleBE = BP.readDoubleBE
  arr.writeUInt8 = BP.writeUInt8
  arr.writeUIntLE = BP.writeUIntLE
  arr.writeUIntBE = BP.writeUIntBE
  arr.writeUInt16LE = BP.writeUInt16LE
  arr.writeUInt16BE = BP.writeUInt16BE
  arr.writeUInt32LE = BP.writeUInt32LE
  arr.writeUInt32BE = BP.writeUInt32BE
  arr.writeIntLE = BP.writeIntLE
  arr.writeIntBE = BP.writeIntBE
  arr.writeInt8 = BP.writeInt8
  arr.writeInt16LE = BP.writeInt16LE
  arr.writeInt16BE = BP.writeInt16BE
  arr.writeInt32LE = BP.writeInt32LE
  arr.writeInt32BE = BP.writeInt32BE
  arr.writeFloatLE = BP.writeFloatLE
  arr.writeFloatBE = BP.writeFloatBE
  arr.writeDoubleLE = BP.writeDoubleLE
  arr.writeDoubleBE = BP.writeDoubleBE
  arr.fill = BP.fill
  arr.inspect = BP.inspect
  arr.toArrayBuffer = BP.toArrayBuffer

  return arr
}

var INVALID_BASE64_RE = /[^+\/0-9A-z\-]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []
  var i = 0

  for (; i < length; i++) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (leadSurrogate) {
        // 2 leads in a row
        if (codePoint < 0xDC00) {
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          leadSurrogate = codePoint
          continue
        } else {
          // valid surrogate pair
          codePoint = leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00 | 0x10000
          leadSurrogate = null
        }
      } else {
        // no lead yet

        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else {
          // valid lead
          leadSurrogate = codePoint
          continue
        }
      }
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
      leadSurrogate = null
    }

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x200000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function decodeUtf8Char (str) {
  try {
    return decodeURIComponent(str)
  } catch (err) {
    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
  }
}

},{"base64-js":7,"ieee754":8,"is-array":9}],7:[function(require,module,exports){
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var PLUS   = '+'.charCodeAt(0)
	var SLASH  = '/'.charCodeAt(0)
	var NUMBER = '0'.charCodeAt(0)
	var LOWER  = 'a'.charCodeAt(0)
	var UPPER  = 'A'.charCodeAt(0)
	var PLUS_URL_SAFE = '-'.charCodeAt(0)
	var SLASH_URL_SAFE = '_'.charCodeAt(0)

	function decode (elt) {
		var code = elt.charCodeAt(0)
		if (code === PLUS ||
		    code === PLUS_URL_SAFE)
			return 62 // '+'
		if (code === SLASH ||
		    code === SLASH_URL_SAFE)
			return 63 // '/'
		if (code < NUMBER)
			return -1 //no match
		if (code < NUMBER + 10)
			return code - NUMBER + 26 + 26
		if (code < UPPER + 26)
			return code - UPPER
		if (code < LOWER + 26)
			return code - LOWER + 26
	}

	function b64ToByteArray (b64) {
		var i, j, l, tmp, placeHolders, arr

		if (b64.length % 4 > 0) {
			throw new Error('Invalid string. Length must be a multiple of 4')
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		var len = b64.length
		placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

		// base64 is 4/3 + up to two characters of the original data
		arr = new Arr(b64.length * 3 / 4 - placeHolders)

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders > 0 ? b64.length - 4 : b64.length

		var L = 0

		function push (v) {
			arr[L++] = v
		}

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
			push((tmp & 0xFF0000) >> 16)
			push((tmp & 0xFF00) >> 8)
			push(tmp & 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
			push(tmp & 0xFF)
		} else if (placeHolders === 1) {
			tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
			push((tmp >> 8) & 0xFF)
			push(tmp & 0xFF)
		}

		return arr
	}

	function uint8ToBase64 (uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length

		function encode (num) {
			return lookup.charAt(num)
		}

		function tripletToBase64 (num) {
			return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
		}

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1]
				output += encode(temp >> 2)
				output += encode((temp << 4) & 0x3F)
				output += '=='
				break
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
				output += encode(temp >> 10)
				output += encode((temp >> 4) & 0x3F)
				output += encode((temp << 2) & 0x3F)
				output += '='
				break
		}

		return output
	}

	exports.toByteArray = b64ToByteArray
	exports.fromByteArray = uint8ToBase64
}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

},{}],8:[function(require,module,exports){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      nBits = -7,
      i = isLE ? (nBytes - 1) : 0,
      d = isLE ? -1 : 1,
      s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0),
      i = isLE ? 0 : (nBytes - 1),
      d = isLE ? 1 : -1,
      s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],9:[function(require,module,exports){

/**
 * isArray
 */

var isArray = Array.isArray;

/**
 * toString
 */

var str = Object.prototype.toString;

/**
 * Whether or not the given `val`
 * is an array.
 *
 * example:
 *
 *        isArray([]);
 *        // > true
 *        isArray(arguments);
 *        // > false
 *        isArray('');
 *        // > false
 *
 * @param {mixed} val
 * @return {bool}
 */

module.exports = isArray || function (val) {
  return !! val && '[object Array]' == str.call(val);
};

},{}],10:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            currentQueue[queueIndex].run();
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (!draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],11:[function(require,module,exports){
var Individual = require('individual');
var Delegator = require('dom-delegator');

var Keyboard = require('./keyboard.js');

var keyboardCache = Individual('__FRP_KEYBOARD_CACHE@1', {});

module.exports = CachedKeyboard;

function CachedKeyboard() {
    var keyboard = keyboardCache.keyboard;

    if (!keyboard) {
        var delegator = Delegator();
        keyboard = keyboardCache.keyboard = Keyboard(delegator);
    }

    return keyboard;
}

},{"./keyboard.js":12,"dom-delegator":16,"individual":25}],12:[function(require,module,exports){
var NativeKeyboard = require('./native.js');

var ARROW_UP = 38;
var ARROW_DOWN = 40;
var ARROW_LEFT = 37;
var ARROW_RIGHT = 39;
var W_KEY = 87;
var S_KEY = 83;
var A_KEY = 65;
var D_KEY = 68;
var CTRL_KEY = 17;
var SHIFT_KEY = 16;

module.exports = Keyboard;

function Keyboard(delegator) {
    var native = NativeKeyboard(delegator);

    return {
        isDown: native.isDown,
        keysDown: native.keysDown,
        lastPressed: native.lastPressed,
        keyDown: native.keyDown,
        directions: native.directions,
        arrows: native.directions(
            ARROW_UP, ARROW_DOWN, ARROW_LEFT, ARROW_RIGHT),
        wasd: native.directions(W_KEY, S_KEY, A_KEY, D_KEY),
        ctrl: native.isDown(CTRL_KEY),
        shift: native.isDown(SHIFT_KEY)
    };
}

},{"./native.js":13}],13:[function(require,module,exports){
var value = require('observ');
// var computed = require('observ/computed');

var Blurred = {};

NativeKeyboard.Position = Position

module.exports = NativeKeyboard;

function NativeKeyboard(delegator) {
    var downEvents = value(-1);
    var upEvents = value(-1);
    var blurEvents = value(null);

    delegator.addGlobalEventListener('keydown', function (ev) {
        downEvents.set(ev.keyCode);
    });
    delegator.addGlobalEventListener('keyup', function (ev) {
        upEvents.set(ev.keyCode);
    });
    delegator.addGlobalEventListener('blur', function () {
        blurEvents.set(Blurred);
    });

    var keysDown = KeysDown(downEvents, upEvents, blurEvents);
    var lastPressed = value(keysDown())

    downEvents(function (keyCode) {
        if (lastPressed() !== keyCode) {
            lastPressed.set(keyCode)
        }
    })

    return {
        isDown: isDown,
        keysDown: keysDown,
        keyDown: downEvents,
        lastPressed: lastPressed,
        directions: directions
    };

    function isDown(keyCode) {
        var isDownNow = keysDown().indexOf(keyCode) !== -1;
        var down = value(isDownNow)

        keysDown(function (keys) {
            var isDown = keys.indexOf(keyCode) !== -1
            if (isDown !== down()) {
                down.set(isDown)
            }
        })

        return down
    }

    function directions(up, down, left, right) {
        function computePosition(keys) {
            var x = 0;
            var y = 0;
            var lastPressed = 'void';

            for (var i = 0; i < keys.length; i++) {
                var keyCode = keys[i];
                if (keyCode === left) {
                    --x;
                    lastPressed = 'left';
                } else if (keyCode === right) {
                    ++x;
                    lastPressed = 'right';
                } else if (keyCode === up) {
                    ++y;
                    lastPressed = 'up';
                } else if (keyCode === down) {
                    --y;
                    lastPressed = 'down';
                }
            }

            return new Position(x, y, lastPressed);
        }

        var dir = value(computePosition(keysDown()))

        keysDown(function (keys) {
            var pos = computePosition(keys)
            var currPos = dir()

            if (pos.x !== currPos.x || pos.y !== currPos.y) {
                dir.set(pos)
            }
        })

        return dir
    }
}

function Position(x, y, lastPressed) {
    this.x = x;
    this.y = y;
    this.lastPressed = lastPressed
}

function KeysDown(down, up, blur) {
    var keysDown = value([]);

    down(function (keyCode) {
        var list = keysDown();
        if (list.indexOf(keyCode) !== -1) {
            return;
        }

        list = list.slice();
        list.push(keyCode);
        keysDown.set(list);
    });

    up(function (keyCode) {
        var list = keysDown();
        var index = list.indexOf(keyCode);
        if (index === -1) {
            return;
        }

        list = list.slice();
        list.splice(index, 1);
        keysDown.set(list);
    });

    blur(function () {
        keysDown.set([]);
    });

    return keysDown;
}

},{"observ":26}],14:[function(require,module,exports){
var DataSet = require("data-set")

module.exports = addEvent

function addEvent(target, type, handler) {
    var ds = DataSet(target)
    var events = ds[type]

    if (!events) {
        ds[type] = handler
    } else if (Array.isArray(events)) {
        if (events.indexOf(handler) === -1) {
            events.push(handler)
        }
    } else if (events !== handler) {
        ds[type] = [events, handler]
    }
}

},{"data-set":18}],15:[function(require,module,exports){
var document = require("global/document")
var DataSet = require("data-set")

var addEvent = require("./add-event.js")
var removeEvent = require("./remove-event.js")
var ProxyEvent = require("./proxy-event.js")

module.exports = DOMDelegator

function DOMDelegator() {
    this.target = document.documentElement
    this.events = {}
    this.rawEventListeners = {}
    this.globalListeners = {}
}

DOMDelegator.prototype.addEventListener = addEvent
DOMDelegator.prototype.removeEventListener = removeEvent

DOMDelegator.prototype.addGlobalEventListener =
    function addGlobalEventListener(eventName, fn) {
        var listeners = this.globalListeners[eventName]
        if (!listeners) {
            listeners = this.globalListeners[eventName] = []
        }

        if (listeners.indexOf(fn) === -1) {
            listeners.push(fn)
        }
    }

DOMDelegator.prototype.removeGlobalEventListener =
    function removeGlobalEventListener(eventName, fn) {
        var listeners = this.globalListeners[eventName]
        if (!listeners) {
            return
        }

        var index = listeners.indexOf(fn)
        if (index !== -1) {
            listeners.splice(index, 1)
        }
    }

DOMDelegator.prototype.listenTo = function listenTo(eventName) {
    if (this.events[eventName]) {
        return
    }

    this.events[eventName] = true
    listen(this, eventName)
}

DOMDelegator.prototype.unlistenTo = function unlistenTo(eventName) {
    if (!this.events[eventName]) {
        return
    }

    this.events[eventName] = false
    unlisten(this, eventName)
}

function listen(delegator, eventName) {
    var listener = delegator.rawEventListeners[eventName]

    if (!listener) {
        listener = delegator.rawEventListeners[eventName] =
            createHandler(eventName, delegator.globalListeners)
    }

    delegator.target.addEventListener(eventName, listener, true)
}

function unlisten(delegator, eventName) {
    var listener = delegator.rawEventListeners[eventName]

    if (!listener) {
        throw new Error("dom-delegator#unlistenTo: cannot " +
            "unlisten to " + eventName)
    }

    delegator.target.removeEventListener(eventName, listener, true)
}

function createHandler(eventName, globalListeners) {
    return handler

    function handler(ev) {
        var globalHandlers = globalListeners[eventName] || []
        var listener = getListener(ev.target, eventName)

        var handlers = globalHandlers
            .concat(listener ? listener.handlers : [])
        if (handlers.length === 0) {
            return
        }

        var arg = new ProxyEvent(ev, listener)

        handlers.forEach(function (handler) {
            typeof handler === "function" ?
                handler(arg) : handler.handleEvent(arg)
        })
    }
}

function getListener(target, type) {
    // terminate recursion if parent is `null`
    if (target === null) {
        return null
    }

    var ds = DataSet(target)
    // fetch list of handler fns for this event
    var handler = ds[type]
    var allHandler = ds.event

    if (!handler && !allHandler) {
        return getListener(target.parentNode, type)
    }

    var handlers = [].concat(handler || [], allHandler || [])
    return new Listener(target, handlers)
}

function Listener(target, handlers) {
    this.currentTarget = target
    this.handlers = handlers
}

},{"./add-event.js":14,"./proxy-event.js":22,"./remove-event.js":23,"data-set":18,"global/document":24}],16:[function(require,module,exports){
var Individual = require("individual")

var DOMDelegator = require("./dom-delegator.js")

var delegatorCache = Individual("__DOM_DELEGATOR_CACHE@7", {})
var commonEvents = [
    "blur", "change", "click",  "contextmenu", "dblclick",
    "error","focus", "focusin", "focusout", "input", "keydown",
    "keypress", "keyup", "load", "mousedown", "mouseup",
    "resize", "scroll", "select", "submit", "unload",
]

/*  Delegator is a thin wrapper around a singleton `DOMDelegator`
        instance.

    Only one DOMDelegator should exist because we do not want
        duplicate event listeners bound to the DOM.

    `Delegator` will also `listenTo()` all events unless 
        every caller opts out of it
*/
module.exports = Delegator

function Delegator(opts) {
    opts = opts || {}
    var delegator = delegatorCache.delegator

    if (!delegator) {
        delegator = delegatorCache.delegator =
            new DOMDelegator()
    }

    if (opts.defaultEvents !== false) {
        for (var i = 0; i < commonEvents.length; i++) {
            delegator.listenTo(commonEvents[i])
        }
    }

    return delegator
}



},{"./dom-delegator.js":15,"individual":25}],17:[function(require,module,exports){
module.exports = createHash

function createHash(elem) {
    var attributes = elem.attributes
    var hash = {}

    if (attributes === null || attributes === undefined) {
        return hash
    }

    for (var i = 0; i < attributes.length; i++) {
        var attr = attributes[i]

        if (attr.name.substr(0,5) !== "data-") {
            continue
        }

        hash[attr.name.substr(5)] = attr.value
    }

    return hash
}

},{}],18:[function(require,module,exports){
var createStore = require("weakmap-shim/create-store")
var Individual = require("individual")

var createHash = require("./create-hash.js")

var hashStore = Individual("__DATA_SET_WEAKMAP@3", createStore())

module.exports = DataSet

function DataSet(elem) {
    var store = hashStore(elem)

    if (!store.hash) {
        store.hash = createHash(elem)
    }

    return store.hash
}

},{"./create-hash.js":17,"individual":25,"weakmap-shim/create-store":19}],19:[function(require,module,exports){
var hiddenStore = require('./hidden-store.js');

module.exports = createStore;

function createStore() {
    var key = {};

    return function (obj) {
        if (typeof obj !== 'object' || obj === null) {
            throw new Error('Weakmap-shim: Key must be object')
        }

        var store = obj.valueOf(key);
        return store && store.identity === key ?
            store : hiddenStore(obj, key);
    };
}

},{"./hidden-store.js":20}],20:[function(require,module,exports){
module.exports = hiddenStore;

function hiddenStore(obj, key) {
    var store = { identity: key };
    var valueOf = obj.valueOf;

    Object.defineProperty(obj, "valueOf", {
        value: function (value) {
            return value !== key ?
                valueOf.apply(this, arguments) : store;
        },
        writable: true
    });

    return store;
}

},{}],21:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],22:[function(require,module,exports){
var inherits = require("inherits")

var ALL_PROPS = [
    "altKey", "bubbles", "cancelable", "ctrlKey",
    "eventPhase", "metaKey", "relatedTarget", "shiftKey",
    "target", "timeStamp", "type", "view", "which"
]
var KEY_PROPS = ["char", "charCode", "key", "keyCode"]
var MOUSE_PROPS = [
    "button", "buttons", "clientX", "clientY", "layerX",
    "layerY", "offsetX", "offsetY", "pageX", "pageY",
    "screenX", "screenY", "toElement"
]

var rkeyEvent = /^key|input/
var rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/

module.exports = ProxyEvent

function ProxyEvent(ev, listener) {
    if (!(this instanceof ProxyEvent)) {
        return new ProxyEvent(ev, listener)
    }

    if (rkeyEvent.test(ev.type)) {
        return new KeyEvent(ev, listener)
    } else if (rmouseEvent.test(ev.type)) {
        return new MouseEvent(ev, listener)
    }

    for (var i = 0; i < ALL_PROPS.length; i++) {
        var propKey = ALL_PROPS[i]
        this[propKey] = ev[propKey]
    }

    this._rawEvent = ev
    this.currentTarget = listener ? listener.currentTarget : null
}

ProxyEvent.prototype.preventDefault = function () {
    this._rawEvent.preventDefault()
}

function MouseEvent(ev, listener) {
    for (var i = 0; i < ALL_PROPS.length; i++) {
        var propKey = ALL_PROPS[i]
        this[propKey] = ev[propKey]
    }

    for (var j = 0; j < MOUSE_PROPS.length; j++) {
        var mousePropKey = MOUSE_PROPS[j]
        this[mousePropKey] = ev[mousePropKey]
    }

    this._rawEvent = ev
    this.currentTarget = listener ? listener.currentTarget : null
}

inherits(MouseEvent, ProxyEvent)

function KeyEvent(ev, listener) {
    for (var i = 0; i < ALL_PROPS.length; i++) {
        var propKey = ALL_PROPS[i]
        this[propKey] = ev[propKey]
    }

    for (var j = 0; j < KEY_PROPS.length; j++) {
        var keyPropKey = KEY_PROPS[j]
        this[keyPropKey] = ev[keyPropKey]
    }

    this._rawEvent = ev
    this.currentTarget = listener ? listener.currentTarget : null
}

inherits(KeyEvent, ProxyEvent)

},{"inherits":21}],23:[function(require,module,exports){
var DataSet = require("data-set")

module.exports = removeEvent

function removeEvent(target, type, handler) {
    var ds = DataSet(target)
    var events = ds[type]

    if (!events) {
        return
    } else if (Array.isArray(events)) {
        var index = events.indexOf(handler)
        if (index !== -1) {
            events.splice(index, 1)
        }
    } else if (events === handler) {
        ds[type] = null
    }
}

},{"data-set":18}],24:[function(require,module,exports){
(function (global){
var topLevel = typeof global !== 'undefined' ? global :
    typeof window !== 'undefined' ? window : {}
var minDoc = require('min-document');

if (typeof document !== 'undefined') {
    module.exports = document;
} else {
    var doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

    if (!doccy) {
        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
    }

    module.exports = doccy;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"min-document":5}],25:[function(require,module,exports){
(function (global){
var root = typeof window !== 'undefined' ?
    window : typeof global !== 'undefined' ?
    global : {};

module.exports = Individual

function Individual(key, value) {
    if (root[key]) {
        return root[key]
    }

    Object.defineProperty(root, key, {
        value: value
        , configurable: true
    })

    return value
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],26:[function(require,module,exports){
module.exports = Observable

function Observable(value) {
    var listeners = []
    value = value === undefined ? null : value

    observable.set = function (v) {
        value = v
        listeners.forEach(function (f) {
            f(v)
        })
    }

    return observable

    function observable(listener) {
        if (!listener) {
            return value
        }

        listeners.push(listener)

        return function remove() {
            listeners.splice(listeners.indexOf(listener), 1)
        }
    }
}

},{}],27:[function(require,module,exports){
// Source: http://jsfiddle.net/vWx8V/
// http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes



/**
 * Conenience method returns corresponding value for given keyName or keyCode.
 *
 * @param {Mixed} keyCode {Number} or keyName {String}
 * @return {Mixed}
 * @api public
 */

exports = module.exports = function(searchInput) {
  // Keyboard Events
  if (searchInput && 'object' === typeof searchInput) {
    var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode
    if (hasKeyCode) searchInput = hasKeyCode
  }

  // Numbers
  if ('number' === typeof searchInput) return names[searchInput]

  // Everything else (cast to string)
  var search = String(searchInput)

  // check codes
  var foundNamedKey = codes[search.toLowerCase()]
  if (foundNamedKey) return foundNamedKey

  // check aliases
  var foundNamedKey = aliases[search.toLowerCase()]
  if (foundNamedKey) return foundNamedKey

  // weird character?
  if (search.length === 1) return search.charCodeAt(0)

  return undefined
}

/**
 * Get by name
 *
 *   exports.code['enter'] // => 13
 */

var codes = exports.code = exports.codes = {
  'backspace': 8,
  'tab': 9,
  'enter': 13,
  'shift': 16,
  'ctrl': 17,
  'alt': 18,
  'pause/break': 19,
  'caps lock': 20,
  'esc': 27,
  'space': 32,
  'page up': 33,
  'page down': 34,
  'end': 35,
  'home': 36,
  'left': 37,
  'up': 38,
  'right': 39,
  'down': 40,
  'insert': 45,
  'delete': 46,
  'command': 91,
  'right click': 93,
  'numpad *': 106,
  'numpad +': 107,
  'numpad -': 109,
  'numpad .': 110,
  'numpad /': 111,
  'num lock': 144,
  'scroll lock': 145,
  'my computer': 182,
  'my calculator': 183,
  ';': 186,
  '=': 187,
  ',': 188,
  '-': 189,
  '.': 190,
  '/': 191,
  '`': 192,
  '[': 219,
  '\\': 220,
  ']': 221,
  "'": 222,
}

// Helper aliases

var aliases = exports.aliases = {
  'windows': 91,
  '⇧': 16,
  '⌥': 18,
  '⌃': 17,
  '⌘': 91,
  'ctl': 17,
  'control': 17,
  'option': 18,
  'pause': 19,
  'break': 19,
  'caps': 20,
  'return': 13,
  'escape': 27,
  'spc': 32,
  'pgup': 33,
  'pgdn': 33,
  'ins': 45,
  'del': 46,
  'cmd': 91
}


/*!
 * Programatically add the following
 */

// lower case chars
for (i = 97; i < 123; i++) codes[String.fromCharCode(i)] = i - 32

// numbers
for (var i = 48; i < 58; i++) codes[i - 48] = i

// function keys
for (i = 1; i < 13; i++) codes['f'+i] = i + 111

// numpad keys
for (i = 0; i < 10; i++) codes['numpad '+i] = i + 96

/**
 * Get by code
 *
 *   exports.name[13] // => 'Enter'
 */

var names = exports.names = exports.title = {} // title for backward compat

// Create reverse mapping
for (i in codes) names[codes[i]] = i

// Add aliases
for (var alias in aliases) {
  codes[alias] = aliases[alias]
}

},{}],28:[function(require,module,exports){
'use strict';

var SingleEvent = require('geval/single');
var MultipleEvent = require('geval/multiple');
var extend = require('xtend');

/*
    Pro tip: Don't require `mercury` itself.
      require and depend on all these modules directly!
*/
var mercury = module.exports = {
    // Entry
    main: require('main-loop'),
    app: app,

    // Base
    BaseEvent: require('value-event/base-event'),

    // Input
    Delegator: require('dom-delegator'),
    // deprecated: use hg.channels instead.
    input: input,
    // deprecated: use hg.channels instead.
    handles: channels,
    channels: channels,
    // deprecated: use hg.send instead.
    event: require('value-event/event'),
    send: require('value-event/event'),
    // deprecated: use hg.sendValue instead.
    valueEvent: require('value-event/value'),
    sendValue: require('value-event/value'),
    // deprecated: use hg.sendSubmit instead.
    submitEvent: require('value-event/submit'),
    sendSubmit: require('value-event/submit'),
    // deprecated: use hg.sendChange instead.
    changeEvent: require('value-event/change'),
    sendChange: require('value-event/change'),
    // deprecated: use hg.sendKey instead.
    keyEvent: require('value-event/key'),
    sendKey: require('value-event/key'),
    // deprecated use hg.sendClick instead.
    clickEvent: require('value-event/click'),
    sendClick: require('value-event/click'),

    // State
    // remove from core: favor hg.varhash instead.
    array: require('observ-array'),
    struct: require('observ-struct'),
    // deprecated: use hg.struct instead.
    hash: require('observ-struct'),
    varhash: require('observ-varhash'),
    value: require('observ'),
    state: state,

    // Render
    diff: require('virtual-dom/vtree/diff'),
    patch: require('virtual-dom/vdom/patch'),
    partial: require('vdom-thunk'),
    create: require('virtual-dom/vdom/create-element'),
    h: require('virtual-dom/virtual-hyperscript'),

    // Utilities
    // remove from core: require computed directly instead.
    computed: require('observ/computed'),
    // remove from core: require watch directly instead.
    watch: require('observ/watch')
};

function input(names) {
    if (!names) {
        return SingleEvent();
    }

    return MultipleEvent(names);
}

function state(obj) {
    var copy = extend(obj);
    var $channels = copy.channels;
    var $handles = copy.handles;

    if ($channels) {
        copy.channels = mercury.value(null);
    } else if ($handles) {
        copy.handles = mercury.value(null);
    }

    var observ = mercury.struct(copy);
    if ($channels) {
        observ.channels.set(mercury.channels($channels, observ));
    } else if ($handles) {
        observ.handles.set(mercury.channels($handles, observ));
    }
    return observ;
}

function channels(funcs, context) {
    return Object.keys(funcs).reduce(createHandle, {});

    function createHandle(acc, name) {
        var handle = mercury.Delegator.allocateHandle(
            funcs[name].bind(null, context));

        acc[name] = handle;
        return acc;
    }
}

function app(elem, observ, render, opts) {
    mercury.Delegator(opts);
    var loop = mercury.main(observ(), render, extend({
        diff: mercury.diff,
        create: mercury.create,
        patch: mercury.patch
    }, opts));
    if (elem) {
        elem.appendChild(loop.target);
    }
    return observ(loop.update);
}

},{"dom-delegator":31,"geval/multiple":44,"geval/single":45,"main-loop":46,"observ":114,"observ-array":57,"observ-struct":64,"observ-varhash":66,"observ/computed":113,"observ/watch":115,"value-event/base-event":68,"value-event/change":69,"value-event/click":70,"value-event/event":71,"value-event/key":72,"value-event/submit":78,"value-event/value":79,"vdom-thunk":81,"virtual-dom/vdom/create-element":92,"virtual-dom/vdom/patch":95,"virtual-dom/virtual-hyperscript":99,"virtual-dom/vtree/diff":112,"xtend":118}],29:[function(require,module,exports){
var EvStore = require("ev-store")

module.exports = addEvent

function addEvent(target, type, handler) {
    var events = EvStore(target)
    var event = events[type]

    if (!event) {
        events[type] = handler
    } else if (Array.isArray(event)) {
        if (event.indexOf(handler) === -1) {
            event.push(handler)
        }
    } else if (event !== handler) {
        events[type] = [event, handler]
    }
}

},{"ev-store":33}],30:[function(require,module,exports){
var globalDocument = require("global/document")
var EvStore = require("ev-store")
var createStore = require("weakmap-shim/create-store")

var addEvent = require("./add-event.js")
var removeEvent = require("./remove-event.js")
var ProxyEvent = require("./proxy-event.js")

var HANDLER_STORE = createStore()

module.exports = DOMDelegator

function DOMDelegator(document) {
    if (!(this instanceof DOMDelegator)) {
        return new DOMDelegator(document);
    }

    document = document || globalDocument

    this.target = document.documentElement
    this.events = {}
    this.rawEventListeners = {}
    this.globalListeners = {}
}

DOMDelegator.prototype.addEventListener = addEvent
DOMDelegator.prototype.removeEventListener = removeEvent

DOMDelegator.allocateHandle =
    function allocateHandle(func) {
        var handle = new Handle()

        HANDLER_STORE(handle).func = func;

        return handle
    }

DOMDelegator.transformHandle =
    function transformHandle(handle, broadcast) {
        var func = HANDLER_STORE(handle).func

        return this.allocateHandle(function (ev) {
            broadcast(ev, func);
        })
    }

DOMDelegator.prototype.addGlobalEventListener =
    function addGlobalEventListener(eventName, fn) {
        var listeners = this.globalListeners[eventName] || [];
        if (listeners.indexOf(fn) === -1) {
            listeners.push(fn)
        }

        this.globalListeners[eventName] = listeners;
    }

DOMDelegator.prototype.removeGlobalEventListener =
    function removeGlobalEventListener(eventName, fn) {
        var listeners = this.globalListeners[eventName] || [];

        var index = listeners.indexOf(fn)
        if (index !== -1) {
            listeners.splice(index, 1)
        }
    }

DOMDelegator.prototype.listenTo = function listenTo(eventName) {
    if (!(eventName in this.events)) {
        this.events[eventName] = 0;
    }

    this.events[eventName]++;

    if (this.events[eventName] !== 1) {
        return
    }

    var listener = this.rawEventListeners[eventName]
    if (!listener) {
        listener = this.rawEventListeners[eventName] =
            createHandler(eventName, this)
    }

    this.target.addEventListener(eventName, listener, true)
}

DOMDelegator.prototype.unlistenTo = function unlistenTo(eventName) {
    if (!(eventName in this.events)) {
        this.events[eventName] = 0;
    }

    if (this.events[eventName] === 0) {
        throw new Error("already unlistened to event.");
    }

    this.events[eventName]--;

    if (this.events[eventName] !== 0) {
        return
    }

    var listener = this.rawEventListeners[eventName]

    if (!listener) {
        throw new Error("dom-delegator#unlistenTo: cannot " +
            "unlisten to " + eventName)
    }

    this.target.removeEventListener(eventName, listener, true)
}

function createHandler(eventName, delegator) {
    var globalListeners = delegator.globalListeners;
    var delegatorTarget = delegator.target;

    return handler

    function handler(ev) {
        var globalHandlers = globalListeners[eventName] || []

        if (globalHandlers.length > 0) {
            var globalEvent = new ProxyEvent(ev);
            globalEvent.currentTarget = delegatorTarget;
            callListeners(globalHandlers, globalEvent)
        }

        findAndInvokeListeners(ev.target, ev, eventName)
    }
}

function findAndInvokeListeners(elem, ev, eventName) {
    var listener = getListener(elem, eventName)

    if (listener && listener.handlers.length > 0) {
        var listenerEvent = new ProxyEvent(ev);
        listenerEvent.currentTarget = listener.currentTarget
        callListeners(listener.handlers, listenerEvent)

        if (listenerEvent._bubbles) {
            var nextTarget = listener.currentTarget.parentNode
            findAndInvokeListeners(nextTarget, ev, eventName)
        }
    }
}

function getListener(target, type) {
    // terminate recursion if parent is `null`
    if (target === null || typeof target === "undefined") {
        return null
    }

    var events = EvStore(target)
    // fetch list of handler fns for this event
    var handler = events[type]
    var allHandler = events.event

    if (!handler && !allHandler) {
        return getListener(target.parentNode, type)
    }

    var handlers = [].concat(handler || [], allHandler || [])
    return new Listener(target, handlers)
}

function callListeners(handlers, ev) {
    handlers.forEach(function (handler) {
        if (typeof handler === "function") {
            handler(ev)
        } else if (typeof handler.handleEvent === "function") {
            handler.handleEvent(ev)
        } else if (handler.type === "dom-delegator-handle") {
            HANDLER_STORE(handler).func(ev)
        } else {
            throw new Error("dom-delegator: unknown handler " +
                "found: " + JSON.stringify(handlers));
        }
    })
}

function Listener(target, handlers) {
    this.currentTarget = target
    this.handlers = handlers
}

function Handle() {
    this.type = "dom-delegator-handle"
}

},{"./add-event.js":29,"./proxy-event.js":41,"./remove-event.js":42,"ev-store":33,"global/document":36,"weakmap-shim/create-store":39}],31:[function(require,module,exports){
var Individual = require("individual")
var cuid = require("cuid")
var globalDocument = require("global/document")

var DOMDelegator = require("./dom-delegator.js")

var versionKey = "13"
var cacheKey = "__DOM_DELEGATOR_CACHE@" + versionKey
var cacheTokenKey = "__DOM_DELEGATOR_CACHE_TOKEN@" + versionKey
var delegatorCache = Individual(cacheKey, {
    delegators: {}
})
var commonEvents = [
    "blur", "change", "click",  "contextmenu", "dblclick",
    "error","focus", "focusin", "focusout", "input", "keydown",
    "keypress", "keyup", "load", "mousedown", "mouseup",
    "resize", "select", "submit", "touchcancel",
    "touchend", "touchstart", "unload"
]

/*  Delegator is a thin wrapper around a singleton `DOMDelegator`
        instance.

    Only one DOMDelegator should exist because we do not want
        duplicate event listeners bound to the DOM.

    `Delegator` will also `listenTo()` all events unless
        every caller opts out of it
*/
module.exports = Delegator

function Delegator(opts) {
    opts = opts || {}
    var document = opts.document || globalDocument

    var cacheKey = document[cacheTokenKey]

    if (!cacheKey) {
        cacheKey =
            document[cacheTokenKey] = cuid()
    }

    var delegator = delegatorCache.delegators[cacheKey]

    if (!delegator) {
        delegator = delegatorCache.delegators[cacheKey] =
            new DOMDelegator(document)
    }

    if (opts.defaultEvents !== false) {
        for (var i = 0; i < commonEvents.length; i++) {
            delegator.listenTo(commonEvents[i])
        }
    }

    return delegator
}

Delegator.allocateHandle = DOMDelegator.allocateHandle;
Delegator.transformHandle = DOMDelegator.transformHandle;

},{"./dom-delegator.js":30,"cuid":32,"global/document":36,"individual":37}],32:[function(require,module,exports){
/**
 * cuid.js
 * Collision-resistant UID generator for browsers and node.
 * Sequential for fast db lookups and recency sorting.
 * Safe for element IDs and server-side lookups.
 *
 * Extracted from CLCTR
 * 
 * Copyright (c) Eric Elliott 2012
 * MIT License
 */

/*global window, navigator, document, require, process, module */
(function (app) {
  'use strict';
  var namespace = 'cuid',
    c = 0,
    blockSize = 4,
    base = 36,
    discreteValues = Math.pow(base, blockSize),

    pad = function pad(num, size) {
      var s = "000000000" + num;
      return s.substr(s.length-size);
    },

    randomBlock = function randomBlock() {
      return pad((Math.random() *
            discreteValues << 0)
            .toString(base), blockSize);
    },

    safeCounter = function () {
      c = (c < discreteValues) ? c : 0;
      c++; // this is not subliminal
      return c - 1;
    },

    api = function cuid() {
      // Starting with a lowercase letter makes
      // it HTML element ID friendly.
      var letter = 'c', // hard-coded allows for sequential access

        // timestamp
        // warning: this exposes the exact date and time
        // that the uid was created.
        timestamp = (new Date().getTime()).toString(base),

        // Prevent same-machine collisions.
        counter,

        // A few chars to generate distinct ids for different
        // clients (so different computers are far less
        // likely to generate the same id)
        fingerprint = api.fingerprint(),

        // Grab some more chars from Math.random()
        random = randomBlock() + randomBlock();

        counter = pad(safeCounter().toString(base), blockSize);

      return  (letter + timestamp + counter + fingerprint + random);
    };

  api.slug = function slug() {
    var date = new Date().getTime().toString(36),
      counter,
      print = api.fingerprint().slice(0,1) +
        api.fingerprint().slice(-1),
      random = randomBlock().slice(-2);

      counter = safeCounter().toString(36).slice(-4);

    return date.slice(-2) + 
      counter + print + random;
  };

  api.globalCount = function globalCount() {
    // We want to cache the results of this
    var cache = (function calc() {
        var i,
          count = 0;

        for (i in window) {
          count++;
        }

        return count;
      }());

    api.globalCount = function () { return cache; };
    return cache;
  };

  api.fingerprint = function browserPrint() {
    return pad((navigator.mimeTypes.length +
      navigator.userAgent.length).toString(36) +
      api.globalCount().toString(36), 4);
  };

  // don't change anything from here down.
  if (app.register) {
    app.register(namespace, api);
  } else if (typeof module !== 'undefined') {
    module.exports = api;
  } else {
    app[namespace] = api;
  }

}(this.applitude || this));

},{}],33:[function(require,module,exports){
'use strict';

var OneVersionConstraint = require('individual/one-version');

var MY_VERSION = '7';
OneVersionConstraint('ev-store', MY_VERSION);

var hashKey = '__EV_STORE_KEY@' + MY_VERSION;

module.exports = EvStore;

function EvStore(elem) {
    var hash = elem[hashKey];

    if (!hash) {
        hash = elem[hashKey] = {};
    }

    return hash;
}

},{"individual/one-version":35}],34:[function(require,module,exports){
(function (global){
'use strict';

/*global window, global*/

var root = typeof window !== 'undefined' ?
    window : typeof global !== 'undefined' ?
    global : {};

module.exports = Individual;

function Individual(key, value) {
    if (key in root) {
        return root[key];
    }

    root[key] = value;

    return value;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],35:[function(require,module,exports){
'use strict';

var Individual = require('./index.js');

module.exports = OneVersion;

function OneVersion(moduleName, version, defaultValue) {
    var key = '__INDIVIDUAL_ONE_VERSION_' + moduleName;
    var enforceKey = key + '_ENFORCE_SINGLETON';

    var versionValue = Individual(enforceKey, version);

    if (versionValue !== version) {
        throw new Error('Can only have one copy of ' +
            moduleName + '.\n' +
            'You already have version ' + versionValue +
            ' installed.\n' +
            'This means you cannot install version ' + version);
    }

    return Individual(key, defaultValue);
}

},{"./index.js":34}],36:[function(require,module,exports){
arguments[4][24][0].apply(exports,arguments)
},{"dup":24,"min-document":5}],37:[function(require,module,exports){
arguments[4][25][0].apply(exports,arguments)
},{"dup":25}],38:[function(require,module,exports){
arguments[4][21][0].apply(exports,arguments)
},{"dup":21}],39:[function(require,module,exports){
var hiddenStore = require('./hidden-store.js');

module.exports = createStore;

function createStore() {
    var key = {};

    return function (obj) {
        if ((typeof obj !== 'object' || obj === null) &&
            typeof obj !== 'function'
        ) {
            throw new Error('Weakmap-shim: Key must be object')
        }

        var store = obj.valueOf(key);
        return store && store.identity === key ?
            store : hiddenStore(obj, key);
    };
}

},{"./hidden-store.js":40}],40:[function(require,module,exports){
arguments[4][20][0].apply(exports,arguments)
},{"dup":20}],41:[function(require,module,exports){
var inherits = require("inherits")

var ALL_PROPS = [
    "altKey", "bubbles", "cancelable", "ctrlKey",
    "eventPhase", "metaKey", "relatedTarget", "shiftKey",
    "target", "timeStamp", "type", "view", "which"
]
var KEY_PROPS = ["char", "charCode", "key", "keyCode"]
var MOUSE_PROPS = [
    "button", "buttons", "clientX", "clientY", "layerX",
    "layerY", "offsetX", "offsetY", "pageX", "pageY",
    "screenX", "screenY", "toElement"
]

var rkeyEvent = /^key|input/
var rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/

module.exports = ProxyEvent

function ProxyEvent(ev) {
    if (!(this instanceof ProxyEvent)) {
        return new ProxyEvent(ev)
    }

    if (rkeyEvent.test(ev.type)) {
        return new KeyEvent(ev)
    } else if (rmouseEvent.test(ev.type)) {
        return new MouseEvent(ev)
    }

    for (var i = 0; i < ALL_PROPS.length; i++) {
        var propKey = ALL_PROPS[i]
        this[propKey] = ev[propKey]
    }

    this._rawEvent = ev
    this._bubbles = false;
}

ProxyEvent.prototype.preventDefault = function () {
    this._rawEvent.preventDefault()
}

ProxyEvent.prototype.startPropagation = function () {
    this._bubbles = true;
}

function MouseEvent(ev) {
    for (var i = 0; i < ALL_PROPS.length; i++) {
        var propKey = ALL_PROPS[i]
        this[propKey] = ev[propKey]
    }

    for (var j = 0; j < MOUSE_PROPS.length; j++) {
        var mousePropKey = MOUSE_PROPS[j]
        this[mousePropKey] = ev[mousePropKey]
    }

    this._rawEvent = ev
}

inherits(MouseEvent, ProxyEvent)

function KeyEvent(ev) {
    for (var i = 0; i < ALL_PROPS.length; i++) {
        var propKey = ALL_PROPS[i]
        this[propKey] = ev[propKey]
    }

    for (var j = 0; j < KEY_PROPS.length; j++) {
        var keyPropKey = KEY_PROPS[j]
        this[keyPropKey] = ev[keyPropKey]
    }

    this._rawEvent = ev
}

inherits(KeyEvent, ProxyEvent)

},{"inherits":38}],42:[function(require,module,exports){
var EvStore = require("ev-store")

module.exports = removeEvent

function removeEvent(target, type, handler) {
    var events = EvStore(target)
    var event = events[type]

    if (!event) {
        return
    } else if (Array.isArray(event)) {
        var index = event.indexOf(handler)
        if (index !== -1) {
            event.splice(index, 1)
        }
    } else if (event === handler) {
        events[type] = null
    }
}

},{"ev-store":33}],43:[function(require,module,exports){
module.exports = Event

function Event() {
    var listeners = []

    return { broadcast: broadcast, listen: event }

    function broadcast(value) {
        for (var i = 0; i < listeners.length; i++) {
            listeners[i](value)
        }
    }

    function event(listener) {
        listeners.push(listener)

        return removeListener

        function removeListener() {
            var index = listeners.indexOf(listener)
            if (index !== -1) {
                listeners.splice(index, 1)
            }
        }
    }
}

},{}],44:[function(require,module,exports){
var event = require("./single.js")

module.exports = multiple

function multiple(names) {
    return names.reduce(function (acc, name) {
        acc[name] = event()
        return acc
    }, {})
}

},{"./single.js":45}],45:[function(require,module,exports){
var Event = require('./event.js')

module.exports = Single

function Single() {
    var tuple = Event()

    return function event(value) {
        if (typeof value === "function") {
            return tuple.listen(value)
        } else {
            return tuple.broadcast(value)
        }
    }
}

},{"./event.js":43}],46:[function(require,module,exports){
var raf = require("raf")
var TypedError = require("error/typed")

var InvalidUpdateInRender = TypedError({
    type: "main-loop.invalid.update.in-render",
    message: "main-loop: Unexpected update occurred in loop.\n" +
        "We are currently rendering a view, " +
            "you can't change state right now.\n" +
        "The diff is: {stringDiff}.\n" +
        "SUGGESTED FIX: find the state mutation in your view " +
            "or rendering function and remove it.\n" +
        "The view should not have any side effects.\n",
    diff: null,
    stringDiff: null
})

module.exports = main

function main(initialState, view, opts) {
    opts = opts || {}

    var currentState = initialState
    var create = opts.create
    var diff = opts.diff
    var patch = opts.patch
    var redrawScheduled = false

    var tree = opts.initialTree || view(currentState)
    var target = opts.target || create(tree, opts)
    var inRenderingTransaction = false

    currentState = null

    return {
        target: target,
        update: update
    }

    function update(state) {
        if (inRenderingTransaction) {
            throw InvalidUpdateInRender({
                diff: state._diff,
                stringDiff: JSON.stringify(state._diff)
            })
        }

        if (currentState === null && !redrawScheduled) {
            redrawScheduled = true
            raf(redraw)
        }

        currentState = state
    }

    function redraw() {
        redrawScheduled = false;
        if (currentState === null) {
            return
        }

        inRenderingTransaction = true
        var newTree = view(currentState)

        if (opts.createOnly) {
            inRenderingTransaction = false
            create(newTree, opts)
        } else {
            var patches = diff(tree, newTree, opts)
            inRenderingTransaction = false
            target = patch(target, patches, opts)
        }

        tree = newTree
        currentState = null
    }
}

},{"error/typed":49,"raf":50}],47:[function(require,module,exports){
module.exports = function(obj) {
    if (typeof obj === 'string') return camelCase(obj);
    return walk(obj);
};

function walk (obj) {
    if (!obj || typeof obj !== 'object') return obj;
    if (isDate(obj) || isRegex(obj)) return obj;
    if (isArray(obj)) return map(obj, walk);
    return reduce(objectKeys(obj), function (acc, key) {
        var camel = camelCase(key);
        acc[camel] = walk(obj[key]);
        return acc;
    }, {});
}

function camelCase(str) {
    return str.replace(/[_.-](\w|$)/g, function (_,x) {
        return x.toUpperCase();
    });
}

var isArray = Array.isArray || function (obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
};

var isDate = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Date]';
};

var isRegex = function (obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var has = Object.prototype.hasOwnProperty;
var objectKeys = Object.keys || function (obj) {
    var keys = [];
    for (var key in obj) {
        if (has.call(obj, key)) keys.push(key);
    }
    return keys;
};

function map (xs, f) {
    if (xs.map) return xs.map(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        res.push(f(xs[i], i));
    }
    return res;
}

function reduce (xs, f, acc) {
    if (xs.reduce) return xs.reduce(f, acc);
    for (var i = 0; i < xs.length; i++) {
        acc = f(acc, xs[i], i);
    }
    return acc;
}

},{}],48:[function(require,module,exports){
var nargs = /\{([0-9a-zA-Z]+)\}/g
var slice = Array.prototype.slice

module.exports = template

function template(string) {
    var args

    if (arguments.length === 2 && typeof arguments[1] === "object") {
        args = arguments[1]
    } else {
        args = slice.call(arguments, 1)
    }

    if (!args || !args.hasOwnProperty) {
        args = {}
    }

    return string.replace(nargs, function replaceArg(match, i, index) {
        var result

        if (string[index - 1] === "{" &&
            string[index + match.length] === "}") {
            return i
        } else {
            result = args.hasOwnProperty(i) ? args[i] : null
            if (result === null || result === undefined) {
                return ""
            }

            return result
        }
    })
}

},{}],49:[function(require,module,exports){
var camelize = require("camelize")
var template = require("string-template")
var extend = require("xtend/mutable")

module.exports = TypedError

function TypedError(args) {
    if (!args) {
        throw new Error("args is required");
    }
    if (!args.type) {
        throw new Error("args.type is required");
    }
    if (!args.message) {
        throw new Error("args.message is required");
    }

    var message = args.message

    if (args.type && !args.name) {
        var errorName = camelize(args.type) + "Error"
        args.name = errorName[0].toUpperCase() + errorName.substr(1)
    }

    extend(createError, args);
    createError._name = args.name;

    return createError;

    function createError(opts) {
        var result = new Error()

        Object.defineProperty(result, "type", {
            value: result.type,
            enumerable: true,
            writable: true,
            configurable: true
        })

        var options = extend({}, args, opts)

        extend(result, options)
        result.message = template(message, options)

        return result
    }
}


},{"camelize":47,"string-template":48,"xtend/mutable":119}],50:[function(require,module,exports){
var now = require('performance-now')
  , global = typeof window === 'undefined' ? {} : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = global['request' + suffix]
  , caf = global['cancel' + suffix] || global['cancelRequest' + suffix]
  , isNative = true

for(var i = 0; i < vendors.length && !raf; i++) {
  raf = global[vendors[i] + 'Request' + suffix]
  caf = global[vendors[i] + 'Cancel' + suffix]
      || global[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  isNative = false

  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  if(!isNative) {
    return raf.call(global, fn)
  }
  return raf.call(global, function() {
    try{
      fn.apply(this, arguments)
    } catch(e) {
      setTimeout(function() { throw e }, 0)
    }
  })
}
module.exports.cancel = function() {
  caf.apply(global, arguments)
}

},{"performance-now":51}],51:[function(require,module,exports){
(function (process){
// Generated by CoffeeScript 1.6.3
(function() {
  var getNanoSeconds, hrtime, loadTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - loadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    loadTime = getNanoSeconds();
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

/*

*/

}).call(this,require('_process'))
},{"_process":10}],52:[function(require,module,exports){
var setNonEnumerable = require("./lib/set-non-enumerable.js");

module.exports = addListener

function addListener(observArray, observ) {
    var list = observArray._list

    return observ(function (value) {
        var valueList =  observArray().slice()
        var index = list.indexOf(observ)

        // This code path should never hit. If this happens
        // there's a bug in the cleanup code
        if (index === -1) {
            var message = "observ-array: Unremoved observ listener"
            var err = new Error(message)
            err.list = list
            err.index = index
            err.observ = observ
            throw err
        }

        valueList.splice(index, 1, value)
        setNonEnumerable(valueList, "_diff", [ [index, 1, value] ])

        observArray._observSet(valueList)
    })
}

},{"./lib/set-non-enumerable.js":58}],53:[function(require,module,exports){
var addListener = require('./add-listener.js')

module.exports = applyPatch

function applyPatch (valueList, args) {
    var obs = this
    var valueArgs = args.map(unpack)

    valueList.splice.apply(valueList, valueArgs)
    obs._list.splice.apply(obs._list, args)

    var extraRemoveListeners = args.slice(2).map(function (observ) {
        return typeof observ === "function" ?
            addListener(obs, observ) :
            null
    })

    extraRemoveListeners.unshift(args[0], args[1])
    var removedListeners = obs._removeListeners.splice
        .apply(obs._removeListeners, extraRemoveListeners)

    removedListeners.forEach(function (removeObservListener) {
        if (removeObservListener) {
            removeObservListener()
        }
    })

    return valueArgs
}

function unpack(value, index){
    if (index === 0 || index === 1) {
        return value
    }
    return typeof value === "function" ? value() : value
}

},{"./add-listener.js":52}],54:[function(require,module,exports){
var ObservArray = require("./index.js")

var slice = Array.prototype.slice

var ARRAY_METHODS = [
    "concat", "slice", "every", "filter", "forEach", "indexOf",
    "join", "lastIndexOf", "map", "reduce", "reduceRight",
    "some", "toString", "toLocaleString"
]

var methods = ARRAY_METHODS.map(function (name) {
    return [name, function () {
        var res = this._list[name].apply(this._list, arguments)

        if (res && Array.isArray(res)) {
            res = ObservArray(res)
        }

        return res
    }]
})

module.exports = ArrayMethods

function ArrayMethods(obs) {
    obs.push = observArrayPush
    obs.pop = observArrayPop
    obs.shift = observArrayShift
    obs.unshift = observArrayUnshift
    obs.reverse = require("./array-reverse.js")
    obs.sort = require("./array-sort.js")

    methods.forEach(function (tuple) {
        obs[tuple[0]] = tuple[1]
    })
    return obs
}



function observArrayPush() {
    var args = slice.call(arguments)
    args.unshift(this._list.length, 0)
    this.splice.apply(this, args)

    return this._list.length
}
function observArrayPop() {
    return this.splice(this._list.length - 1, 1)[0]
}
function observArrayShift() {
    return this.splice(0, 1)[0]
}
function observArrayUnshift() {
    var args = slice.call(arguments)
    args.unshift(0, 0)
    this.splice.apply(this, args)

    return this._list.length
}


function notImplemented() {
    throw new Error("Pull request welcome")
}

},{"./array-reverse.js":55,"./array-sort.js":56,"./index.js":57}],55:[function(require,module,exports){
var applyPatch = require("./apply-patch.js")
var setNonEnumerable = require('./lib/set-non-enumerable.js')

module.exports = reverse

function reverse() {
    var obs = this
    var changes = fakeDiff(obs._list.slice().reverse())
    var valueList = obs().slice().reverse()

    var valueChanges = changes.map(applyPatch.bind(obs, valueList))

    setNonEnumerable(valueList, "_diff", valueChanges)

    obs._observSet(valueList)
    return changes
}

function fakeDiff(arr) {
    var _diff
    var len = arr.length

    if(len % 2) {
        var midPoint = (len -1) / 2
        var a = [0, midPoint].concat(arr.slice(0, midPoint))
        var b = [midPoint +1, midPoint].concat(arr.slice(midPoint +1, len))
        var _diff = [a, b]
    } else {
        _diff = [ [0, len].concat(arr) ]
    }

    return _diff
}

},{"./apply-patch.js":53,"./lib/set-non-enumerable.js":58}],56:[function(require,module,exports){
var applyPatch = require("./apply-patch.js")
var setNonEnumerable = require("./lib/set-non-enumerable.js")

module.exports = sort

function sort(compare) {
    var obs = this
    var list = obs._list.slice()

    var unpacked = unpack(list)

    var sorted = unpacked
            .map(function(it) { return it.val })
            .sort(compare)

    var packed = repack(sorted, unpacked)

    //fake diff - for perf
    //adiff on 10k items === ~3200ms
    //fake on 10k items === ~110ms
    var changes = [ [ 0, packed.length ].concat(packed) ]

    var valueChanges = changes.map(applyPatch.bind(obs, sorted))

    setNonEnumerable(sorted, "_diff", valueChanges)

    obs._observSet(sorted)
    return changes
}

function unpack(list) {
    var unpacked = []
    for(var i = 0; i < list.length; i++) {
        unpacked.push({
            val: ("function" == typeof list[i]) ? list[i]() : list[i],
            obj: list[i]
        })
    }
    return unpacked
}

function repack(sorted, unpacked) {
    var packed = []

    while(sorted.length) {
        var s = sorted.shift()
        var indx = indexOf(s, unpacked)
        if(~indx) packed.push(unpacked.splice(indx, 1)[0].obj)
    }

    return packed
}

function indexOf(n, h) {
    for(var i = 0; i < h.length; i++) {
        if(n === h[i].val) return i
    }
    return -1
}

},{"./apply-patch.js":53,"./lib/set-non-enumerable.js":58}],57:[function(require,module,exports){
var Observ = require("observ")

// circular dep between ArrayMethods & this file
module.exports = ObservArray

var splice = require("./splice.js")
var put = require("./put.js")
var set = require("./set.js")
var transaction = require("./transaction.js")
var ArrayMethods = require("./array-methods.js")
var addListener = require("./add-listener.js")


/*  ObservArray := (Array<T>) => Observ<
        Array<T> & { _diff: Array }
    > & {
        splice: (index: Number, amount: Number, rest...: T) =>
            Array<T>,
        push: (values...: T) => Number,
        filter: (lambda: Function, thisValue: Any) => Array<T>,
        indexOf: (item: T, fromIndex: Number) => Number
    }

    Fix to make it more like ObservHash.

    I.e. you write observables into it.
        reading methods take plain JS objects to read
        and the value of the array is always an array of plain
        objsect.

        The observ array instance itself would have indexed
        properties that are the observables
*/
function ObservArray(initialList) {
    // list is the internal mutable list observ instances that
    // all methods on `obs` dispatch to.
    var list = initialList
    var initialState = []

    // copy state out of initialList into initialState
    list.forEach(function (observ, index) {
        initialState[index] = typeof observ === "function" ?
            observ() : observ
    })

    var obs = Observ(initialState)
    obs.splice = splice

    // override set and store original for later use
    obs._observSet = obs.set
    obs.set = set

    obs.get = get
    obs.getLength = getLength
    obs.put = put
    obs.transaction = transaction

    // you better not mutate this list directly
    // this is the list of observs instances
    obs._list = list

    var removeListeners = list.map(function (observ) {
        return typeof observ === "function" ?
            addListener(obs, observ) :
            null
    });
    // this is a list of removal functions that must be called
    // when observ instances are removed from `obs.list`
    // not calling this means we do not GC our observ change
    // listeners. Which causes rage bugs
    obs._removeListeners = removeListeners

    obs._type = "observ-array"
    obs._version = "3"

    return ArrayMethods(obs, list)
}

function get(index) {
    return this._list[index]
}

function getLength() {
    return this._list.length
}

},{"./add-listener.js":52,"./array-methods.js":54,"./put.js":60,"./set.js":61,"./splice.js":62,"./transaction.js":63,"observ":114}],58:[function(require,module,exports){
module.exports = setNonEnumerable;

function setNonEnumerable(object, key, value) {
    Object.defineProperty(object, key, {
        value: value,
        writable: true,
        configurable: true,
        enumerable: false
    });
}

},{}],59:[function(require,module,exports){
function head (a) {
  return a[0]
}

function last (a) {
  return a[a.length - 1]
}

function tail(a) {
  return a.slice(1)
}

function retreat (e) {
  return e.pop()
}

function hasLength (e) {
  return e.length
}

function any(ary, test) {
  for(var i=0;i<ary.length;i++)
    if(test(ary[i]))
      return true
  return false
}

function score (a) {
  return a.reduce(function (s, a) {
      return s + a.length + a[1] + 1
  }, 0)
}

function best (a, b) {
  return score(a) <= score(b) ? a : b
}


var _rules // set at the bottom  

// note, naive implementation. will break on circular objects.

function _equal(a, b) {
  if(a && !b) return false
  if(Array.isArray(a))
    if(a.length != b.length) return false
  if(a && 'object' == typeof a) {
    for(var i in a)
      if(!_equal(a[i], b[i])) return false
    for(var i in b)
      if(!_equal(a[i], b[i])) return false
    return true
  }
  return a == b
}

function getArgs(args) {
  return args.length == 1 ? args[0] : [].slice.call(args)
}

// return the index of the element not like the others, or -1
function oddElement(ary, cmp) {
  var c
  function guess(a) {
    var odd = -1
    c = 0
    for (var i = a; i < ary.length; i ++) {
      if(!cmp(ary[a], ary[i])) {
        odd = i, c++
      }
    }
    return c > 1 ? -1 : odd
  }
  //assume that it is the first element.
  var g = guess(0)
  if(-1 != g) return g
  //0 was the odd one, then all the other elements are equal
  //else there more than one different element
  guess(1)
  return c == 0 ? 0 : -1
}
var exports = module.exports = function (deps, exports) {
  var equal = (deps && deps.equal) || _equal
  exports = exports || {} 
  exports.lcs = 
  function lcs() {
    var cache = {}
    var args = getArgs(arguments)
    var a = args[0], b = args[1]

    function key (a,b){
      return a.length + ':' + b.length
    }

    //find length that matches at the head

    if(args.length > 2) {
      //if called with multiple sequences
      //recurse, since lcs(a, b, c, d) == lcs(lcs(a,b), lcs(c,d))
      args.push(lcs(args.shift(), args.shift()))
      return lcs(args)
    }
    
    //this would be improved by truncating input first
    //and not returning an lcs as an intermediate step.
    //untill that is a performance problem.

    var start = 0, end = 0
    for(var i = 0; i < a.length && i < b.length 
      && equal(a[i], b[i])
      ; i ++
    )
      start = i + 1

    if(a.length === start)
      return a.slice()

    for(var i = 0;  i < a.length - start && i < b.length - start
      && equal(a[a.length - 1 - i], b[b.length - 1 - i])
      ; i ++
    )
      end = i

    function recurse (a, b) {
      if(!a.length || !b.length) return []
      //avoid exponential time by caching the results
      if(cache[key(a, b)]) return cache[key(a, b)]

      if(equal(a[0], b[0]))
        return [head(a)].concat(recurse(tail(a), tail(b)))
      else { 
        var _a = recurse(tail(a), b)
        var _b = recurse(a, tail(b))
        return cache[key(a,b)] = _a.length > _b.length ? _a : _b  
      }
    }
    
    var middleA = a.slice(start, a.length - end)
    var middleB = b.slice(start, b.length - end)

    return (
      a.slice(0, start).concat(
        recurse(middleA, middleB)
      ).concat(a.slice(a.length - end))
    )
  }

  // given n sequences, calc the lcs, and then chunk strings into stable and unstable sections.
  // unstable chunks are passed to build
  exports.chunk =
  function (q, build) {
    var q = q.map(function (e) { return e.slice() })
    var lcs = exports.lcs.apply(null, q)
    var all = [lcs].concat(q)

    function matchLcs (e) {
      if(e.length && !lcs.length || !e.length && lcs.length)
        return false //incase the last item is null
      return equal(last(e), last(lcs)) || ((e.length + lcs.length) === 0)
    }

    while(any(q, hasLength)) {
      //if each element is at the lcs then this chunk is stable.
      while(q.every(matchLcs) && q.every(hasLength))
        all.forEach(retreat)
      //collect the changes in each array upto the next match with the lcs
      var c = false
      var unstable = q.map(function (e) {
        var change = []
        while(!matchLcs(e)) {
          change.unshift(retreat(e))
          c = true
        }
        return change
      })
      if(c) build(q[0].length, unstable)
    }
  }

  //calculate a diff this is only updates
  exports.optimisticDiff =
  function (a, b) {
    var M = Math.max(a.length, b.length)
    var m = Math.min(a.length, b.length)
    var patch = []
    for(var i = 0; i < M; i++)
      if(a[i] !== b[i]) {
        var cur = [i,0], deletes = 0
        while(a[i] !== b[i] && i < m) {
          cur[1] = ++deletes
          cur.push(b[i++])
        }
        //the rest are deletes or inserts
        if(i >= m) {
          //the rest are deletes
          if(a.length > b.length)
            cur[1] += a.length - b.length
          //the rest are inserts
          else if(a.length < b.length)
            cur = cur.concat(b.slice(a.length))
        }
        patch.push(cur)
      }

    return patch
  }

  exports.diff =
  function (a, b) {
    var optimistic = exports.optimisticDiff(a, b)
    var changes = []
    exports.chunk([a, b], function (index, unstable) {
      var del = unstable.shift().length
      var insert = unstable.shift()
      changes.push([index, del].concat(insert))
    })
    return best(optimistic, changes)
  }

  exports.patch = function (a, changes, mutate) {
    if(mutate !== true) a = a.slice(a)//copy a
    changes.forEach(function (change) {
      [].splice.apply(a, change)
    })
    return a
  }

  // http://en.wikipedia.org/wiki/Concestor
  // me, concestor, you...
  exports.merge = function () {
    var args = getArgs(arguments)
    var patch = exports.diff3(args)
    return exports.patch(args[0], patch)
  }

  exports.diff3 = function () {
    var args = getArgs(arguments)
    var r = []
    exports.chunk(args, function (index, unstable) {
      var mine = unstable[0]
      var insert = resolve(unstable)
      if(equal(mine, insert)) return 
      r.push([index, mine.length].concat(insert)) 
    })
    return r
  }
  exports.oddOneOut =
    function oddOneOut (changes) {
      changes = changes.slice()
      //put the concestor first
      changes.unshift(changes.splice(1,1)[0])
      var i = oddElement(changes, equal)
      if(i == 0) // concestor was different, 'false conflict'
        return changes[1]
      if (~i)
        return changes[i] 
    }
  exports.insertMergeOverDelete = 
    //i've implemented this as a seperate rule,
    //because I had second thoughts about this.
    function insertMergeOverDelete (changes) {
      changes = changes.slice()
      changes.splice(1,1)// remove concestor
      
      //if there is only one non empty change thats okay.
      //else full confilct
      for (var i = 0, nonempty; i < changes.length; i++)
        if(changes[i].length) 
          if(!nonempty) nonempty = changes[i]
          else return // full conflict
      return nonempty
    }

  var rules = (deps && deps.rules) || [exports.oddOneOut, exports.insertMergeOverDelete]

  function resolve (changes) {
    var l = rules.length
    for (var i in rules) { // first
      
      var c = rules[i] && rules[i](changes)
      if(c) return c
    }
    changes.splice(1,1) // remove concestor
    //returning the conflicts as an object is a really bad idea,
    // because == will not detect they are the same. and conflicts build.
    // better to use
    // '<<<<<<<<<<<<<'
    // of course, i wrote this before i started on snob, so i didn't know that then.
    /*var conflict = ['>>>>>>>>>>>>>>>>']
    while(changes.length)
      conflict = conflict.concat(changes.shift()).concat('============')
    conflict.pop()
    conflict.push          ('<<<<<<<<<<<<<<<')
    changes.unshift       ('>>>>>>>>>>>>>>>')
    return conflict*/
    //nah, better is just to use an equal can handle objects
    return {'?': changes}
  }
  return exports
}
exports(null, exports)

},{}],60:[function(require,module,exports){
var addListener = require("./add-listener.js")
var setNonEnumerable = require("./lib/set-non-enumerable.js");

module.exports = put

// `obs.put` is a mutable implementation of `array[index] = value`
// that mutates both `list` and the internal `valueList` that
// is the current value of `obs` itself
function put(index, value) {
    var obs = this
    var valueList = obs().slice()

    var originalLength = valueList.length
    valueList[index] = typeof value === "function" ? value() : value

    obs._list[index] = value

    // remove past value listener if was observ
    var removeListener = obs._removeListeners[index]
    if (removeListener){
        removeListener()
    }

    // add listener to value if observ
    obs._removeListeners[index] = typeof value === "function" ?
        addListener(obs, value) :
        null

    // fake splice diff
    var valueArgs = index < originalLength ? 
        [index, 1, valueList[index]] :
        [index, 0, valueList[index]]

    setNonEnumerable(valueList, "_diff", [valueArgs])

    obs._observSet(valueList)
    return value
}
},{"./add-listener.js":52,"./lib/set-non-enumerable.js":58}],61:[function(require,module,exports){
var applyPatch = require("./apply-patch.js")
var setNonEnumerable = require("./lib/set-non-enumerable.js")
var adiff = require("adiff")

module.exports = set

function set(rawList) {
    if (!Array.isArray(rawList)) rawList = []

    var obs = this
    var changes = adiff.diff(obs._list, rawList)
    var valueList = obs().slice()

    var valueChanges = changes.map(applyPatch.bind(obs, valueList))

    setNonEnumerable(valueList, "_diff", valueChanges)

    obs._observSet(valueList)
    return changes
}

},{"./apply-patch.js":53,"./lib/set-non-enumerable.js":58,"adiff":59}],62:[function(require,module,exports){
var slice = Array.prototype.slice

var addListener = require("./add-listener.js")
var setNonEnumerable = require("./lib/set-non-enumerable.js");

module.exports = splice

// `obs.splice` is a mutable implementation of `splice()`
// that mutates both `list` and the internal `valueList` that
// is the current value of `obs` itself
function splice(index, amount) {
    var obs = this
    var args = slice.call(arguments, 0)
    var valueList = obs().slice()

    // generate a list of args to mutate the internal
    // list of only obs
    var valueArgs = args.map(function (value, index) {
        if (index === 0 || index === 1) {
            return value
        }

        // must unpack observables that we are adding
        return typeof value === "function" ? value() : value
    })

    valueList.splice.apply(valueList, valueArgs)
    // we remove the observs that we remove
    var removed = obs._list.splice.apply(obs._list, args)

    var extraRemoveListeners = args.slice(2).map(function (observ) {
        return typeof observ === "function" ?
            addListener(obs, observ) :
            null
    })
    extraRemoveListeners.unshift(args[0], args[1])
    var removedListeners = obs._removeListeners.splice
        .apply(obs._removeListeners, extraRemoveListeners)

    removedListeners.forEach(function (removeObservListener) {
        if (removeObservListener) {
            removeObservListener()
        }
    })

    setNonEnumerable(valueList, "_diff", [valueArgs])

    obs._observSet(valueList)
    return removed
}

},{"./add-listener.js":52,"./lib/set-non-enumerable.js":58}],63:[function(require,module,exports){
module.exports = transaction

function transaction (func) {
    var obs = this
    var rawList = obs._list.slice()

    if (func(rawList) !== false){ // allow cancel
        return obs.set(rawList)
    }

}
},{}],64:[function(require,module,exports){
var Observ = require("observ")
var extend = require("xtend")

var blackList = ["name", "_diff", "_type", "_version"]
var blackListReasons = {
    "name": "Clashes with `Function.prototype.name`.\n",
    "_diff": "_diff is reserved key of observ-struct.\n",
    "_type": "_type is reserved key of observ-struct.\n",
    "_version": "_version is reserved key of observ-struct.\n"
}
var NO_TRANSACTION = {}

function setNonEnumerable(object, key, value) {
    Object.defineProperty(object, key, {
        value: value,
        writable: true,
        configurable: true,
        enumerable: false
    })
}

/* ObservStruct := (Object<String, Observ<T>>) => 
    Object<String, Observ<T>> &
        Observ<Object<String, T> & {
            _diff: Object<String, Any>
        }>

*/
module.exports = ObservStruct

function ObservStruct(struct) {
    var keys = Object.keys(struct)

    var initialState = {}
    var currentTransaction = NO_TRANSACTION
    var nestedTransaction = NO_TRANSACTION

    keys.forEach(function (key) {
        if (blackList.indexOf(key) !== -1) {
            throw new Error("cannot create an observ-struct " +
                "with a key named '" + key + "'.\n" +
                blackListReasons[key]);
        }

        var observ = struct[key]
        initialState[key] = typeof observ === "function" ?
            observ() : observ
    })

    var obs = Observ(initialState)
    keys.forEach(function (key) {
        var observ = struct[key]
        obs[key] = observ

        if (typeof observ === "function") {
            observ(function (value) {
                if (nestedTransaction === value) {
                    return
                }

                var state = extend(obs())
                state[key] = value
                var diff = {}
                diff[key] = value && value._diff ?
                    value._diff : value

                setNonEnumerable(state, "_diff", diff)
                currentTransaction = state
                obs.set(state)
                currentTransaction = NO_TRANSACTION
            })
        }
    })
    var _set = obs.set
    obs.set = function trackDiff(value) {
        if (currentTransaction === value) {
            return _set(value)
        }

        var newState = extend(value)
        setNonEnumerable(newState, "_diff", value)
        _set(newState)
    }

    obs(function (newState) {
        if (currentTransaction === newState) {
            return
        }

        keys.forEach(function (key) {
            var observ = struct[key]
            var newObservValue = newState[key]

            if (typeof observ === "function" &&
                observ() !== newObservValue
            ) {
                nestedTransaction = newObservValue
                observ.set(newState[key])
                nestedTransaction = NO_TRANSACTION
            }
        })
    })

    obs._type = "observ-struct"
    obs._version = "5"

    return obs
}

},{"observ":114,"xtend":65}],65:[function(require,module,exports){
module.exports = extend

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (source.hasOwnProperty(key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}

},{}],66:[function(require,module,exports){
var Observ = require('observ')
var extend = require('xtend')

var NO_TRANSACTION = {}

module.exports = ObservVarhash

function ObservVarhash (hash, createValue) {
  createValue = createValue || function (obj) { return obj }

  var initialState = {}
  var currentTransaction = NO_TRANSACTION

  var obs = Observ(initialState)
  setNonEnumerable(obs, '_removeListeners', {})

  setNonEnumerable(obs, 'set', obs.set)
  setNonEnumerable(obs, 'get', get.bind(obs))
  setNonEnumerable(obs, 'put', put.bind(obs, createValue))
  setNonEnumerable(obs, 'delete', del.bind(obs))

  for (var key in hash) {
    obs[key] = typeof hash[key] === 'function' ?
      hash[key] : createValue(hash[key], key)

    if (isFn(obs[key])) {
      obs._removeListeners[key] = obs[key](watch(obs, key, currentTransaction))
    }
  }

  var newState = {}
  for (key in hash) {
    var observ = obs[key]
    checkKey(key)
    newState[key] = isFn(observ) ? observ() : observ
  }
  obs.set(newState)

  obs(function (newState) {
    if (currentTransaction === newState) {
      return
    }

    for (var key in hash) {
      var observ = hash[key]

      if (isFn(observ) && observ() !== newState[key]) {
        observ.set(newState[key])
      }
    }
  })

  return obs
}

// access and mutate
function get (key) {
  return this[key]
}

function put (createValue, key, val) {
  checkKey(key)

  if (val === undefined) {
    throw new Error('cannot varhash.put(key, undefined).')
  }

  var observ = typeof val === 'function' ?
    val : createValue(val, key)
  var state = extend(this())

  state[key] = isFn(observ) ? observ() : observ

  if (isFn(this._removeListeners[key])) {
    this._removeListeners[key]()
  }

  this._removeListeners[key] = isFn(observ) ?
    observ(watch(this, key)) : null

  setNonEnumerable(state, '_diff', diff(key, state[key]))

  this[key] = observ
  this.set(state)

  return this
}

function del (key) {
  var state = extend(this())
  if (isFn(this._removeListeners[key])) {
    this._removeListeners[key]()
  }

  delete this._removeListeners[key]
  delete state[key]
  delete this[key]

  setNonEnumerable(state, '_diff', diff(key, undefined))
  this.set(state)

  return this
}

// processing
function watch (obs, key, currentTransaction) {
  return function (value) {
    var state = extend(obs())
    state[key] = value

    setNonEnumerable(state, '_diff', diff(key, value))
    currentTransaction = state
    obs.set(state)
    currentTransaction = NO_TRANSACTION
  }
}

function diff (key, value) {
  var obj = {}
  obj[key] = value && value._diff ? value._diff : value
  return obj
}

function isFn (obj) {
  return typeof obj === 'function'
}

function setNonEnumerable(object, key, value) {
  Object.defineProperty(object, key, {
    value: value,
    writable: true,
    configurable: true,
    enumerable: false
  })
}

// errors
var blacklist = {
  name: 'Clashes with `Function.prototype.name`.',
  get: 'get is a reserved key of observ-varhash method',
  put: 'put is a reserved key of observ-varhash method',
  'delete': 'delete is a reserved key of observ-varhash method',
  _diff: '_diff is a reserved key of observ-varhash method',
  _removeListeners: '_removeListeners is a reserved key of observ-varhash'
}

function checkKey (key) {
  if (!blacklist[key]) return
  throw new Error(
    'cannot create an observ-varhash with key `' + key + '`. ' + blacklist[key]
  )
}

},{"observ":114,"xtend":67}],67:[function(require,module,exports){
arguments[4][65][0].apply(exports,arguments)
},{"dup":65}],68:[function(require,module,exports){
var Delegator = require('dom-delegator')

module.exports = BaseEvent

function BaseEvent(lambda) {
    return EventHandler;

    function EventHandler(fn, data, opts) {
        var handler = {
            fn: fn,
            data: data !== undefined ? data : {},
            opts: opts || {},
            handleEvent: handleEvent
        }

        if (fn && fn.type === 'dom-delegator-handle') {
            return Delegator.transformHandle(fn,
                handleLambda.bind(handler))
        }

        return handler;
    }

    function handleLambda(ev, broadcast) {
        if (this.opts.startPropagation && ev.startPropagation) {
            ev.startPropagation();
        }

        return lambda.call(this, ev, broadcast)
    }

    function handleEvent(ev) {
        var self = this

        if (self.opts.startPropagation && ev.startPropagation) {
            ev.startPropagation()
        }

        lambda.call(self, ev, broadcast)

        function broadcast(value) {
            if (typeof self.fn === 'function') {
                self.fn(value)
            } else {
                self.fn.write(value)
            }
        }
    }
}

},{"dom-delegator":31}],69:[function(require,module,exports){
var extend = require('xtend')
var getFormData = require('form-data-set/element')

var BaseEvent = require('./base-event.js')

var VALID_CHANGE = ['checkbox', 'file', 'select-multiple', 'select-one'];
var VALID_INPUT = ['color', 'date', 'datetime', 'datetime-local', 'email',
    'month', 'number', 'password', 'range', 'search', 'tel', 'text', 'time',
    'url', 'week'];

module.exports = BaseEvent(changeLambda);

function changeLambda(ev, broadcast) {
    var target = ev.target

    var isValid =
        (ev.type === 'input' && VALID_INPUT.indexOf(target.type) !== -1) ||
        (ev.type === 'change' && VALID_CHANGE.indexOf(target.type) !== -1);

    if (!isValid) {
        if (ev.startPropagation) {
            ev.startPropagation()
        }
        return
    }

    var value = getFormData(ev.currentTarget)
    var data = extend(value, this.data)

    broadcast(data)
}

},{"./base-event.js":68,"form-data-set/element":74,"xtend":77}],70:[function(require,module,exports){
var BaseEvent = require('./base-event.js');

module.exports = BaseEvent(clickLambda);

function clickLambda(ev, broadcast) {
    var opts = this.opts;

    if (!opts.ctrl && ev.ctrlKey) {
        return;
    }

    if (!opts.meta && ev.metaKey) {
        return;
    }

    if (!opts.rightClick && ev.which === 2) {
        return;
    }

    if (this.opts.preventDefault && ev.preventDefault) {
        ev.preventDefault();
    }

    broadcast(this.data);
}

},{"./base-event.js":68}],71:[function(require,module,exports){
var BaseEvent = require('./base-event.js');

module.exports = BaseEvent(eventLambda);

function eventLambda(ev, broadcast) {
    broadcast(this.data);
}

},{"./base-event.js":68}],72:[function(require,module,exports){
var BaseEvent = require('./base-event.js');

module.exports = BaseEvent(keyLambda);

function keyLambda(ev, broadcast) {
    var key = this.opts.key;

    if (ev.keyCode === key) {
        broadcast(this.data);
    }
}

},{"./base-event.js":68}],73:[function(require,module,exports){
var slice = Array.prototype.slice

module.exports = iterativelyWalk

function iterativelyWalk(nodes, cb) {
    if (!('length' in nodes)) {
        nodes = [nodes]
    }
    
    nodes = slice.call(nodes)

    while(nodes.length) {
        var node = nodes.shift(),
            ret = cb(node)

        if (ret) {
            return ret
        }

        if (node.childNodes && node.childNodes.length) {
            nodes = slice.call(node.childNodes).concat(nodes)
        }
    }
}

},{}],74:[function(require,module,exports){
var walk = require('dom-walk')

var FormData = require('./index.js')

module.exports = getFormData

function buildElems(rootElem) {
    var hash = {}
    if (rootElem.name) {
    	hash[rootElem.name] = rootElem
    }

    walk(rootElem, function (child) {
        if (child.name) {
            hash[child.name] = child
        }
    })


    return hash
}

function getFormData(rootElem) {
    var elements = buildElems(rootElem)

    return FormData(elements)
}

},{"./index.js":75,"dom-walk":73}],75:[function(require,module,exports){
/*jshint maxcomplexity: 10*/

module.exports = FormData

//TODO: Massive spec: http://www.whatwg.org/specs/web-apps/current-work/multipage/association-of-controls-and-forms.html#constructing-form-data-set
function FormData(elements) {
    return Object.keys(elements).reduce(function (acc, key) {
        var elem = elements[key]

        acc[key] = valueOfElement(elem)

        return acc
    }, {})
}

function valueOfElement(elem) {
    if (typeof elem === "function") {
        return elem()
    } else if (containsRadio(elem)) {
        var elems = toList(elem)
        var checked = elems.filter(function (elem) {
            return elem.checked
        })[0] || null

        return checked ? checked.value : null
    } else if (Array.isArray(elem)) {
        return elem.map(valueOfElement).filter(filterNull)
    } else if (elem.tagName === undefined && elem.nodeType === undefined) {
        return FormData(elem)
    } else if (elem.tagName === "INPUT" && isChecked(elem)) {
        if (elem.hasAttribute("value")) {
            return elem.checked ? elem.value : null
        } else {
            return elem.checked
        }
    } else if (elem.tagName === "INPUT") {
        return elem.value
    } else if (elem.tagName === "TEXTAREA") {
        return elem.value
    } else if (elem.tagName === "SELECT") {
        return elem.value
    }
}

function isChecked(elem) {
    return elem.type === "checkbox" || elem.type === "radio"
}

function containsRadio(value) {
    if (value.tagName || value.nodeType) {
        return false
    }

    var elems = toList(value)

    return elems.some(function (elem) {
        return elem.tagName === "INPUT" && elem.type === "radio"
    })
}

function toList(value) {
    if (Array.isArray(value)) {
        return value
    }

    return Object.keys(value).map(prop, value)
}

function prop(x) {
    return this[x]
}

function filterNull(val) {
    return val !== null
}

},{}],76:[function(require,module,exports){
module.exports = hasKeys

function hasKeys(source) {
    return source !== null &&
        (typeof source === "object" ||
        typeof source === "function")
}

},{}],77:[function(require,module,exports){
var hasKeys = require("./has-keys")

module.exports = extend

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        if (!hasKeys(source)) {
            continue
        }

        for (var key in source) {
            if (source.hasOwnProperty(key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}

},{"./has-keys":76}],78:[function(require,module,exports){
var extend = require('xtend')
var getFormData = require('form-data-set/element')

var BaseEvent = require('./base-event.js');

var ENTER = 13

module.exports = BaseEvent(submitLambda);

function submitLambda(ev, broadcast) {
    var target = ev.target

    var isValid =
        (ev.type === 'submit' && target.tagName === 'FORM') ||
        (ev.type === 'click' && target.tagName === 'BUTTON') ||
        (ev.type === 'click' && target.type === 'submit') ||
        (
            (target.type === 'text') &&
            (ev.keyCode === ENTER && ev.type === 'keydown')
        )

    if (!isValid) {
        if (ev.startPropagation) {
            ev.startPropagation()
        }
        return
    }

    var value = getFormData(ev.currentTarget)
    var data = extend(value, this.data)

    if (ev.preventDefault) {
        ev.preventDefault();
    }

    broadcast(data);
}

},{"./base-event.js":68,"form-data-set/element":74,"xtend":77}],79:[function(require,module,exports){
var extend = require('xtend')
var getFormData = require('form-data-set/element')

var BaseEvent = require('./base-event.js');

module.exports = BaseEvent(valueLambda);

function valueLambda(ev, broadcast) {
    var value = getFormData(ev.currentTarget)
    var data = extend(value, this.data)

    broadcast(data);
}

},{"./base-event.js":68,"form-data-set/element":74,"xtend":77}],80:[function(require,module,exports){
function Thunk(fn, args, key, eqArgs) {
    this.fn = fn;
    this.args = args;
    this.key = key;
    this.eqArgs = eqArgs;
}

Thunk.prototype.type = 'Thunk';
Thunk.prototype.render = render;
module.exports = Thunk;

function shouldUpdate(current, previous) {
    if (!current || !previous || current.fn !== previous.fn) {
        return true;
    }

    var cargs = current.args;
    var pargs = previous.args;

    return !current.eqArgs(cargs, pargs);
}

function render(previous) {
    if (shouldUpdate(this, previous)) {
        return this.fn.apply(null, this.args);
    } else {
        return previous.vnode;
    }
}

},{}],81:[function(require,module,exports){
var Partial = require('./partial');

module.exports = Partial();

},{"./partial":82}],82:[function(require,module,exports){
var shallowEq = require('./shallow-eq');
var Thunk = require('./immutable-thunk');

module.exports = createPartial;

function createPartial(eq) {
    return function partial(fn) {
        var args = copyOver(arguments, 1);
        var firstArg = args[0];
        var key;

        var eqArgs = eq || shallowEq;

        if (typeof firstArg === 'object' && firstArg !== null) {
            if ('key' in firstArg) {
                key = firstArg.key;
            } else if ('id' in firstArg) {
                key = firstArg.id;
            }
        }

        return new Thunk(fn, args, key, eqArgs);
    };
}

function copyOver(list, offset) {
    var newList = [];
    for (var i = list.length - 1; i >= offset; i--) {
        newList[i - offset] = list[i];
    }
    return newList;
}

},{"./immutable-thunk":80,"./shallow-eq":83}],83:[function(require,module,exports){
module.exports = shallowEq;

function shallowEq(currentArgs, previousArgs) {
    if (currentArgs.length === 0 && previousArgs.length === 0) {
        return true;
    }

    if (currentArgs.length !== previousArgs.length) {
        return false;
    }

    var len = currentArgs.length;

    for (var i = 0; i < len; i++) {
        if (currentArgs[i] !== previousArgs[i]) {
            return false;
        }
    }

    return true;
}

},{}],84:[function(require,module,exports){
/*!
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 * ECMAScript compliant, uniform cross-browser split method
 */

/**
 * Splits a string into an array of strings using a regex or string separator. Matches of the
 * separator are not included in the result array. However, if `separator` is a regex that contains
 * capturing groups, backreferences are spliced into the result each time `separator` is matched.
 * Fixes browser bugs compared to the native `String.prototype.split` and can be used reliably
 * cross-browser.
 * @param {String} str String to split.
 * @param {RegExp|String} separator Regex or string to use for separating the string.
 * @param {Number} [limit] Maximum number of items to include in the result array.
 * @returns {Array} Array of substrings.
 * @example
 *
 * // Basic use
 * split('a b c d', ' ');
 * // -> ['a', 'b', 'c', 'd']
 *
 * // With limit
 * split('a b c d', ' ', 2);
 * // -> ['a', 'b']
 *
 * // Backreferences in result array
 * split('..word1 word2..', /([a-z]+)(\d+)/i);
 * // -> ['..', 'word', '1', ' ', 'word', '2', '..']
 */
module.exports = (function split(undef) {

  var nativeSplit = String.prototype.split,
    compliantExecNpcg = /()??/.exec("")[1] === undef,
    // NPCG: nonparticipating capturing group
    self;

  self = function(str, separator, limit) {
    // If `separator` is not a regex, use `nativeSplit`
    if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
      return nativeSplit.call(str, separator, limit);
    }
    var output = [],
      flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.extended ? "x" : "") + // Proposed for ES6
      (separator.sticky ? "y" : ""),
      // Firefox 3+
      lastLastIndex = 0,
      // Make `global` and avoid `lastIndex` issues by working with a copy
      separator = new RegExp(separator.source, flags + "g"),
      separator2, match, lastIndex, lastLength;
    str += ""; // Type-convert
    if (!compliantExecNpcg) {
      // Doesn't need flags gy, but they don't hurt
      separator2 = new RegExp("^" + separator.source + "$(?!\\s)", flags);
    }
    /* Values for `limit`, per the spec:
     * If undefined: 4294967295 // Math.pow(2, 32) - 1
     * If 0, Infinity, or NaN: 0
     * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
     * If negative number: 4294967296 - Math.floor(Math.abs(limit))
     * If other: Type-convert, then use the above rules
     */
    limit = limit === undef ? -1 >>> 0 : // Math.pow(2, 32) - 1
    limit >>> 0; // ToUint32(limit)
    while (match = separator.exec(str)) {
      // `separator.lastIndex` is not reliable cross-browser
      lastIndex = match.index + match[0].length;
      if (lastIndex > lastLastIndex) {
        output.push(str.slice(lastLastIndex, match.index));
        // Fix browsers whose `exec` methods don't consistently return `undefined` for
        // nonparticipating capturing groups
        if (!compliantExecNpcg && match.length > 1) {
          match[0].replace(separator2, function() {
            for (var i = 1; i < arguments.length - 2; i++) {
              if (arguments[i] === undef) {
                match[i] = undef;
              }
            }
          });
        }
        if (match.length > 1 && match.index < str.length) {
          Array.prototype.push.apply(output, match.slice(1));
        }
        lastLength = match[0].length;
        lastLastIndex = lastIndex;
        if (output.length >= limit) {
          break;
        }
      }
      if (separator.lastIndex === match.index) {
        separator.lastIndex++; // Avoid an infinite loop
      }
    }
    if (lastLastIndex === str.length) {
      if (lastLength || !separator.test("")) {
        output.push("");
      }
    } else {
      output.push(str.slice(lastLastIndex));
    }
    return output.length > limit ? output.slice(0, limit) : output;
  };

  return self;
})();

},{}],85:[function(require,module,exports){
arguments[4][33][0].apply(exports,arguments)
},{"dup":33,"individual/one-version":87}],86:[function(require,module,exports){
arguments[4][34][0].apply(exports,arguments)
},{"dup":34}],87:[function(require,module,exports){
arguments[4][35][0].apply(exports,arguments)
},{"./index.js":86,"dup":35}],88:[function(require,module,exports){
arguments[4][24][0].apply(exports,arguments)
},{"dup":24,"min-document":5}],89:[function(require,module,exports){
"use strict";

module.exports = function isObject(x) {
	return typeof x === "object" && x !== null;
};

},{}],90:[function(require,module,exports){
var nativeIsArray = Array.isArray
var toString = Object.prototype.toString

module.exports = nativeIsArray || isArray

function isArray(obj) {
    return toString.call(obj) === "[object Array]"
}

},{}],91:[function(require,module,exports){
var isObject = require("is-object")
var isHook = require("../vnode/is-vhook.js")

module.exports = applyProperties

function applyProperties(node, props, previous) {
    for (var propName in props) {
        var propValue = props[propName]

        if (propValue === undefined) {
            removeProperty(node, propName, propValue, previous);
        } else if (isHook(propValue)) {
            removeProperty(node, propName, propValue, previous)
            if (propValue.hook) {
                propValue.hook(node,
                    propName,
                    previous ? previous[propName] : undefined)
            }
        } else {
            if (isObject(propValue)) {
                patchObject(node, props, previous, propName, propValue);
            } else {
                node[propName] = propValue
            }
        }
    }
}

function removeProperty(node, propName, propValue, previous) {
    if (previous) {
        var previousValue = previous[propName]

        if (!isHook(previousValue)) {
            if (propName === "attributes") {
                for (var attrName in previousValue) {
                    node.removeAttribute(attrName)
                }
            } else if (propName === "style") {
                for (var i in previousValue) {
                    node.style[i] = ""
                }
            } else if (typeof previousValue === "string") {
                node[propName] = ""
            } else {
                node[propName] = null
            }
        } else if (previousValue.unhook) {
            previousValue.unhook(node, propName, propValue)
        }
    }
}

function patchObject(node, props, previous, propName, propValue) {
    var previousValue = previous ? previous[propName] : undefined

    // Set attributes
    if (propName === "attributes") {
        for (var attrName in propValue) {
            var attrValue = propValue[attrName]

            if (attrValue === undefined) {
                node.removeAttribute(attrName)
            } else {
                node.setAttribute(attrName, attrValue)
            }
        }

        return
    }

    if(previousValue && isObject(previousValue) &&
        getPrototype(previousValue) !== getPrototype(propValue)) {
        node[propName] = propValue
        return
    }

    if (!isObject(node[propName])) {
        node[propName] = {}
    }

    var replacer = propName === "style" ? "" : undefined

    for (var k in propValue) {
        var value = propValue[k]
        node[propName][k] = (value === undefined) ? replacer : value
    }
}

function getPrototype(value) {
    if (Object.getPrototypeOf) {
        return Object.getPrototypeOf(value)
    } else if (value.__proto__) {
        return value.__proto__
    } else if (value.constructor) {
        return value.constructor.prototype
    }
}

},{"../vnode/is-vhook.js":103,"is-object":89}],92:[function(require,module,exports){
var document = require("global/document")

var applyProperties = require("./apply-properties")

var isVNode = require("../vnode/is-vnode.js")
var isVText = require("../vnode/is-vtext.js")
var isWidget = require("../vnode/is-widget.js")
var handleThunk = require("../vnode/handle-thunk.js")

module.exports = createElement

function createElement(vnode, opts) {
    var doc = opts ? opts.document || document : document
    var warn = opts ? opts.warn : null

    vnode = handleThunk(vnode).a

    if (isWidget(vnode)) {
        return vnode.init()
    } else if (isVText(vnode)) {
        return doc.createTextNode(vnode.text)
    } else if (!isVNode(vnode)) {
        if (warn) {
            warn("Item is not a valid virtual dom node", vnode)
        }
        return null
    }

    var node = (vnode.namespace === null) ?
        doc.createElement(vnode.tagName) :
        doc.createElementNS(vnode.namespace, vnode.tagName)

    var props = vnode.properties
    applyProperties(node, props)

    var children = vnode.children

    for (var i = 0; i < children.length; i++) {
        var childNode = createElement(children[i], opts)
        if (childNode) {
            node.appendChild(childNode)
        }
    }

    return node
}

},{"../vnode/handle-thunk.js":101,"../vnode/is-vnode.js":104,"../vnode/is-vtext.js":105,"../vnode/is-widget.js":106,"./apply-properties":91,"global/document":88}],93:[function(require,module,exports){
// Maps a virtual DOM tree onto a real DOM tree in an efficient manner.
// We don't want to read all of the DOM nodes in the tree so we use
// the in-order tree indexing to eliminate recursion down certain branches.
// We only recurse into a DOM node if we know that it contains a child of
// interest.

var noChild = {}

module.exports = domIndex

function domIndex(rootNode, tree, indices, nodes) {
    if (!indices || indices.length === 0) {
        return {}
    } else {
        indices.sort(ascending)
        return recurse(rootNode, tree, indices, nodes, 0)
    }
}

function recurse(rootNode, tree, indices, nodes, rootIndex) {
    nodes = nodes || {}


    if (rootNode) {
        if (indexInRange(indices, rootIndex, rootIndex)) {
            nodes[rootIndex] = rootNode
        }

        var vChildren = tree.children

        if (vChildren) {

            var childNodes = rootNode.childNodes

            for (var i = 0; i < tree.children.length; i++) {
                rootIndex += 1

                var vChild = vChildren[i] || noChild
                var nextIndex = rootIndex + (vChild.count || 0)

                // skip recursion down the tree if there are no nodes down here
                if (indexInRange(indices, rootIndex, nextIndex)) {
                    recurse(childNodes[i], vChild, indices, nodes, rootIndex)
                }

                rootIndex = nextIndex
            }
        }
    }

    return nodes
}

// Binary search for an index in the interval [left, right]
function indexInRange(indices, left, right) {
    if (indices.length === 0) {
        return false
    }

    var minIndex = 0
    var maxIndex = indices.length - 1
    var currentIndex
    var currentItem

    while (minIndex <= maxIndex) {
        currentIndex = ((maxIndex + minIndex) / 2) >> 0
        currentItem = indices[currentIndex]

        if (minIndex === maxIndex) {
            return currentItem >= left && currentItem <= right
        } else if (currentItem < left) {
            minIndex = currentIndex + 1
        } else  if (currentItem > right) {
            maxIndex = currentIndex - 1
        } else {
            return true
        }
    }

    return false;
}

function ascending(a, b) {
    return a > b ? 1 : -1
}

},{}],94:[function(require,module,exports){
var applyProperties = require("./apply-properties")

var isWidget = require("../vnode/is-widget.js")
var VPatch = require("../vnode/vpatch.js")

var render = require("./create-element")
var updateWidget = require("./update-widget")

module.exports = applyPatch

function applyPatch(vpatch, domNode, renderOptions) {
    var type = vpatch.type
    var vNode = vpatch.vNode
    var patch = vpatch.patch

    switch (type) {
        case VPatch.REMOVE:
            return removeNode(domNode, vNode)
        case VPatch.INSERT:
            return insertNode(domNode, patch, renderOptions)
        case VPatch.VTEXT:
            return stringPatch(domNode, vNode, patch, renderOptions)
        case VPatch.WIDGET:
            return widgetPatch(domNode, vNode, patch, renderOptions)
        case VPatch.VNODE:
            return vNodePatch(domNode, vNode, patch, renderOptions)
        case VPatch.ORDER:
            reorderChildren(domNode, patch)
            return domNode
        case VPatch.PROPS:
            applyProperties(domNode, patch, vNode.properties)
            return domNode
        case VPatch.THUNK:
            return replaceRoot(domNode,
                renderOptions.patch(domNode, patch, renderOptions))
        default:
            return domNode
    }
}

function removeNode(domNode, vNode) {
    var parentNode = domNode.parentNode

    if (parentNode) {
        parentNode.removeChild(domNode)
    }

    destroyWidget(domNode, vNode);

    return null
}

function insertNode(parentNode, vNode, renderOptions) {
    var newNode = render(vNode, renderOptions)

    if (parentNode) {
        parentNode.appendChild(newNode)
    }

    return parentNode
}

function stringPatch(domNode, leftVNode, vText, renderOptions) {
    var newNode

    if (domNode.nodeType === 3) {
        domNode.replaceData(0, domNode.length, vText.text)
        newNode = domNode
    } else {
        var parentNode = domNode.parentNode
        newNode = render(vText, renderOptions)

        if (parentNode) {
            parentNode.replaceChild(newNode, domNode)
        }
    }

    return newNode
}

function widgetPatch(domNode, leftVNode, widget, renderOptions) {
    var updating = updateWidget(leftVNode, widget)
    var newNode

    if (updating) {
        newNode = widget.update(leftVNode, domNode) || domNode
    } else {
        newNode = render(widget, renderOptions)
    }

    var parentNode = domNode.parentNode

    if (parentNode && newNode !== domNode) {
        parentNode.replaceChild(newNode, domNode)
    }

    if (!updating) {
        destroyWidget(domNode, leftVNode)
    }

    return newNode
}

function vNodePatch(domNode, leftVNode, vNode, renderOptions) {
    var parentNode = domNode.parentNode
    var newNode = render(vNode, renderOptions)

    if (parentNode) {
        parentNode.replaceChild(newNode, domNode)
    }

    return newNode
}

function destroyWidget(domNode, w) {
    if (typeof w.destroy === "function" && isWidget(w)) {
        w.destroy(domNode)
    }
}

function reorderChildren(domNode, bIndex) {
    var children = []
    var childNodes = domNode.childNodes
    var len = childNodes.length
    var i
    var reverseIndex = bIndex.reverse

    for (i = 0; i < len; i++) {
        children.push(domNode.childNodes[i])
    }

    var insertOffset = 0
    var move
    var node
    var insertNode
    var chainLength
    var insertedLength
    var nextSibling
    for (i = 0; i < len;) {
        move = bIndex[i]
        chainLength = 1
        if (move !== undefined && move !== i) {
            // try to bring forward as long of a chain as possible
            while (bIndex[i + chainLength] === move + chainLength) {
                chainLength++;
            }

            // the element currently at this index will be moved later so increase the insert offset
            if (reverseIndex[i] > i + chainLength) {
                insertOffset++
            }

            node = children[move]
            insertNode = childNodes[i + insertOffset] || null
            insertedLength = 0
            while (node !== insertNode && insertedLength++ < chainLength) {
                domNode.insertBefore(node, insertNode);
                node = children[move + insertedLength];
            }

            // the moved element came from the front of the array so reduce the insert offset
            if (move + chainLength < i) {
                insertOffset--
            }
        }

        // element at this index is scheduled to be removed so increase insert offset
        if (i in bIndex.removes) {
            insertOffset++
        }

        i += chainLength
    }
}

function replaceRoot(oldRoot, newRoot) {
    if (oldRoot && newRoot && oldRoot !== newRoot && oldRoot.parentNode) {
        console.log(oldRoot)
        oldRoot.parentNode.replaceChild(newRoot, oldRoot)
    }

    return newRoot;
}

},{"../vnode/is-widget.js":106,"../vnode/vpatch.js":109,"./apply-properties":91,"./create-element":92,"./update-widget":96}],95:[function(require,module,exports){
var document = require("global/document")
var isArray = require("x-is-array")

var domIndex = require("./dom-index")
var patchOp = require("./patch-op")
module.exports = patch

function patch(rootNode, patches) {
    return patchRecursive(rootNode, patches)
}

function patchRecursive(rootNode, patches, renderOptions) {
    var indices = patchIndices(patches)

    if (indices.length === 0) {
        return rootNode
    }

    var index = domIndex(rootNode, patches.a, indices)
    var ownerDocument = rootNode.ownerDocument

    if (!renderOptions) {
        renderOptions = { patch: patchRecursive }
        if (ownerDocument !== document) {
            renderOptions.document = ownerDocument
        }
    }

    for (var i = 0; i < indices.length; i++) {
        var nodeIndex = indices[i]
        rootNode = applyPatch(rootNode,
            index[nodeIndex],
            patches[nodeIndex],
            renderOptions)
    }

    return rootNode
}

function applyPatch(rootNode, domNode, patchList, renderOptions) {
    if (!domNode) {
        return rootNode
    }

    var newNode

    if (isArray(patchList)) {
        for (var i = 0; i < patchList.length; i++) {
            newNode = patchOp(patchList[i], domNode, renderOptions)

            if (domNode === rootNode) {
                rootNode = newNode
            }
        }
    } else {
        newNode = patchOp(patchList, domNode, renderOptions)

        if (domNode === rootNode) {
            rootNode = newNode
        }
    }

    return rootNode
}

function patchIndices(patches) {
    var indices = []

    for (var key in patches) {
        if (key !== "a") {
            indices.push(Number(key))
        }
    }

    return indices
}

},{"./dom-index":93,"./patch-op":94,"global/document":88,"x-is-array":90}],96:[function(require,module,exports){
var isWidget = require("../vnode/is-widget.js")

module.exports = updateWidget

function updateWidget(a, b) {
    if (isWidget(a) && isWidget(b)) {
        if ("name" in a && "name" in b) {
            return a.id === b.id
        } else {
            return a.init === b.init
        }
    }

    return false
}

},{"../vnode/is-widget.js":106}],97:[function(require,module,exports){
'use strict';

var EvStore = require('ev-store');

module.exports = EvHook;

function EvHook(value) {
    if (!(this instanceof EvHook)) {
        return new EvHook(value);
    }

    this.value = value;
}

EvHook.prototype.hook = function (node, propertyName) {
    var es = EvStore(node);
    var propName = propertyName.substr(3);

    es[propName] = this.value;
};

EvHook.prototype.unhook = function(node, propertyName) {
    var es = EvStore(node);
    var propName = propertyName.substr(3);

    es[propName] = undefined;
};

},{"ev-store":85}],98:[function(require,module,exports){
'use strict';

module.exports = SoftSetHook;

function SoftSetHook(value) {
    if (!(this instanceof SoftSetHook)) {
        return new SoftSetHook(value);
    }

    this.value = value;
}

SoftSetHook.prototype.hook = function (node, propertyName) {
    if (node[propertyName] !== this.value) {
        node[propertyName] = this.value;
    }
};

},{}],99:[function(require,module,exports){
'use strict';

var isArray = require('x-is-array');

var VNode = require('../vnode/vnode.js');
var VText = require('../vnode/vtext.js');
var isVNode = require('../vnode/is-vnode');
var isVText = require('../vnode/is-vtext');
var isWidget = require('../vnode/is-widget');
var isHook = require('../vnode/is-vhook');
var isVThunk = require('../vnode/is-thunk');

var parseTag = require('./parse-tag.js');
var softSetHook = require('./hooks/soft-set-hook.js');
var evHook = require('./hooks/ev-hook.js');

module.exports = h;

function h(tagName, properties, children) {
    var childNodes = [];
    var tag, props, key, namespace;

    if (!children && isChildren(properties)) {
        children = properties;
        props = {};
    }

    props = props || properties || {};
    tag = parseTag(tagName, props);

    // support keys
    if (props.hasOwnProperty('key')) {
        key = props.key;
        props.key = undefined;
    }

    // support namespace
    if (props.hasOwnProperty('namespace')) {
        namespace = props.namespace;
        props.namespace = undefined;
    }

    // fix cursor bug
    if (tag === 'INPUT' &&
        !namespace &&
        props.hasOwnProperty('value') &&
        props.value !== undefined &&
        !isHook(props.value)
    ) {
        props.value = softSetHook(props.value);
    }

    transformProperties(props);

    if (children !== undefined && children !== null) {
        addChild(children, childNodes, tag, props);
    }


    return new VNode(tag, props, childNodes, key, namespace);
}

function addChild(c, childNodes, tag, props) {
    if (typeof c === 'string') {
        childNodes.push(new VText(c));
    } else if (isChild(c)) {
        childNodes.push(c);
    } else if (isArray(c)) {
        for (var i = 0; i < c.length; i++) {
            addChild(c[i], childNodes, tag, props);
        }
    } else if (c === null || c === undefined) {
        return;
    } else {
        throw UnexpectedVirtualElement({
            foreignObject: c,
            parentVnode: {
                tagName: tag,
                properties: props
            }
        });
    }
}

function transformProperties(props) {
    for (var propName in props) {
        if (props.hasOwnProperty(propName)) {
            var value = props[propName];

            if (isHook(value)) {
                continue;
            }

            if (propName.substr(0, 3) === 'ev-') {
                // add ev-foo support
                props[propName] = evHook(value);
            }
        }
    }
}

function isChild(x) {
    return isVNode(x) || isVText(x) || isWidget(x) || isVThunk(x);
}

function isChildren(x) {
    return typeof x === 'string' || isArray(x) || isChild(x);
}

function UnexpectedVirtualElement(data) {
    var err = new Error();

    err.type = 'virtual-hyperscript.unexpected.virtual-element';
    err.message = 'Unexpected virtual child passed to h().\n' +
        'Expected a VNode / Vthunk / VWidget / string but:\n' +
        'got:\n' +
        errorString(data.foreignObject) +
        '.\n' +
        'The parent vnode is:\n' +
        errorString(data.parentVnode)
        '\n' +
        'Suggested fix: change your `h(..., [ ... ])` callsite.';
    err.foreignObject = data.foreignObject;
    err.parentVnode = data.parentVnode;

    return err;
}

function errorString(obj) {
    try {
        return JSON.stringify(obj, null, '    ');
    } catch (e) {
        return String(obj);
    }
}

},{"../vnode/is-thunk":102,"../vnode/is-vhook":103,"../vnode/is-vnode":104,"../vnode/is-vtext":105,"../vnode/is-widget":106,"../vnode/vnode.js":108,"../vnode/vtext.js":110,"./hooks/ev-hook.js":97,"./hooks/soft-set-hook.js":98,"./parse-tag.js":100,"x-is-array":90}],100:[function(require,module,exports){
'use strict';

var split = require('browser-split');

var classIdSplit = /([\.#]?[a-zA-Z0-9_:-]+)/;
var notClassId = /^\.|#/;

module.exports = parseTag;

function parseTag(tag, props) {
    if (!tag) {
        return 'DIV';
    }

    var noId = !(props.hasOwnProperty('id'));

    var tagParts = split(tag, classIdSplit);
    var tagName = null;

    if (notClassId.test(tagParts[1])) {
        tagName = 'DIV';
    }

    var classes, part, type, i;

    for (i = 0; i < tagParts.length; i++) {
        part = tagParts[i];

        if (!part) {
            continue;
        }

        type = part.charAt(0);

        if (!tagName) {
            tagName = part;
        } else if (type === '.') {
            classes = classes || [];
            classes.push(part.substring(1, part.length));
        } else if (type === '#' && noId) {
            props.id = part.substring(1, part.length);
        }
    }

    if (classes) {
        if (props.className) {
            classes.push(props.className);
        }

        props.className = classes.join(' ');
    }

    return props.namespace ? tagName : tagName.toUpperCase();
}

},{"browser-split":84}],101:[function(require,module,exports){
var isVNode = require("./is-vnode")
var isVText = require("./is-vtext")
var isWidget = require("./is-widget")
var isThunk = require("./is-thunk")

module.exports = handleThunk

function handleThunk(a, b) {
    var renderedA = a
    var renderedB = b

    if (isThunk(b)) {
        renderedB = renderThunk(b, a)
    }

    if (isThunk(a)) {
        renderedA = renderThunk(a, null)
    }

    return {
        a: renderedA,
        b: renderedB
    }
}

function renderThunk(thunk, previous) {
    var renderedThunk = thunk.vnode

    if (!renderedThunk) {
        renderedThunk = thunk.vnode = thunk.render(previous)
    }

    if (!(isVNode(renderedThunk) ||
            isVText(renderedThunk) ||
            isWidget(renderedThunk))) {
        throw new Error("thunk did not return a valid node");
    }

    return renderedThunk
}

},{"./is-thunk":102,"./is-vnode":104,"./is-vtext":105,"./is-widget":106}],102:[function(require,module,exports){
module.exports = isThunk

function isThunk(t) {
    return t && t.type === "Thunk"
}

},{}],103:[function(require,module,exports){
module.exports = isHook

function isHook(hook) {
    return hook &&
      (typeof hook.hook === "function" && !hook.hasOwnProperty("hook") ||
       typeof hook.unhook === "function" && !hook.hasOwnProperty("unhook"))
}

},{}],104:[function(require,module,exports){
var version = require("./version")

module.exports = isVirtualNode

function isVirtualNode(x) {
    return x && x.type === "VirtualNode" && x.version === version
}

},{"./version":107}],105:[function(require,module,exports){
var version = require("./version")

module.exports = isVirtualText

function isVirtualText(x) {
    return x && x.type === "VirtualText" && x.version === version
}

},{"./version":107}],106:[function(require,module,exports){
module.exports = isWidget

function isWidget(w) {
    return w && w.type === "Widget"
}

},{}],107:[function(require,module,exports){
module.exports = "1"

},{}],108:[function(require,module,exports){
var version = require("./version")
var isVNode = require("./is-vnode")
var isWidget = require("./is-widget")
var isThunk = require("./is-thunk")
var isVHook = require("./is-vhook")

module.exports = VirtualNode

var noProperties = {}
var noChildren = []

function VirtualNode(tagName, properties, children, key, namespace) {
    this.tagName = tagName
    this.properties = properties || noProperties
    this.children = children || noChildren
    this.key = key != null ? String(key) : undefined
    this.namespace = (typeof namespace === "string") ? namespace : null

    var count = (children && children.length) || 0
    var descendants = 0
    var hasWidgets = false
    var hasThunks = false
    var descendantHooks = false
    var hooks

    for (var propName in properties) {
        if (properties.hasOwnProperty(propName)) {
            var property = properties[propName]
            if (isVHook(property) && property.unhook) {
                if (!hooks) {
                    hooks = {}
                }

                hooks[propName] = property
            }
        }
    }

    for (var i = 0; i < count; i++) {
        var child = children[i]
        if (isVNode(child)) {
            descendants += child.count || 0

            if (!hasWidgets && child.hasWidgets) {
                hasWidgets = true
            }

            if (!hasThunks && child.hasThunks) {
                hasThunks = true
            }

            if (!descendantHooks && (child.hooks || child.descendantHooks)) {
                descendantHooks = true
            }
        } else if (!hasWidgets && isWidget(child)) {
            if (typeof child.destroy === "function") {
                hasWidgets = true
            }
        } else if (!hasThunks && isThunk(child)) {
            hasThunks = true;
        }
    }

    this.count = count + descendants
    this.hasWidgets = hasWidgets
    this.hasThunks = hasThunks
    this.hooks = hooks
    this.descendantHooks = descendantHooks
}

VirtualNode.prototype.version = version
VirtualNode.prototype.type = "VirtualNode"

},{"./is-thunk":102,"./is-vhook":103,"./is-vnode":104,"./is-widget":106,"./version":107}],109:[function(require,module,exports){
var version = require("./version")

VirtualPatch.NONE = 0
VirtualPatch.VTEXT = 1
VirtualPatch.VNODE = 2
VirtualPatch.WIDGET = 3
VirtualPatch.PROPS = 4
VirtualPatch.ORDER = 5
VirtualPatch.INSERT = 6
VirtualPatch.REMOVE = 7
VirtualPatch.THUNK = 8

module.exports = VirtualPatch

function VirtualPatch(type, vNode, patch) {
    this.type = Number(type)
    this.vNode = vNode
    this.patch = patch
}

VirtualPatch.prototype.version = version
VirtualPatch.prototype.type = "VirtualPatch"

},{"./version":107}],110:[function(require,module,exports){
var version = require("./version")

module.exports = VirtualText

function VirtualText(text) {
    this.text = String(text)
}

VirtualText.prototype.version = version
VirtualText.prototype.type = "VirtualText"

},{"./version":107}],111:[function(require,module,exports){
var isObject = require("is-object")
var isHook = require("../vnode/is-vhook")

module.exports = diffProps

function diffProps(a, b) {
    var diff

    for (var aKey in a) {
        if (!(aKey in b)) {
            diff = diff || {}
            diff[aKey] = undefined
        }

        var aValue = a[aKey]
        var bValue = b[aKey]

        if (aValue === bValue) {
            continue
        } else if (isObject(aValue) && isObject(bValue)) {
            if (getPrototype(bValue) !== getPrototype(aValue)) {
                diff = diff || {}
                diff[aKey] = bValue
            } else if (isHook(bValue)) {
                 diff = diff || {}
                 diff[aKey] = bValue
            } else {
                var objectDiff = diffProps(aValue, bValue)
                if (objectDiff) {
                    diff = diff || {}
                    diff[aKey] = objectDiff
                }
            }
        } else {
            diff = diff || {}
            diff[aKey] = bValue
        }
    }

    for (var bKey in b) {
        if (!(bKey in a)) {
            diff = diff || {}
            diff[bKey] = b[bKey]
        }
    }

    return diff
}

function getPrototype(value) {
  if (Object.getPrototypeOf) {
    return Object.getPrototypeOf(value)
  } else if (value.__proto__) {
    return value.__proto__
  } else if (value.constructor) {
    return value.constructor.prototype
  }
}

},{"../vnode/is-vhook":103,"is-object":89}],112:[function(require,module,exports){
var isArray = require("x-is-array")

var VPatch = require("../vnode/vpatch")
var isVNode = require("../vnode/is-vnode")
var isVText = require("../vnode/is-vtext")
var isWidget = require("../vnode/is-widget")
var isThunk = require("../vnode/is-thunk")
var handleThunk = require("../vnode/handle-thunk")

var diffProps = require("./diff-props")

module.exports = diff

function diff(a, b) {
    var patch = { a: a }
    walk(a, b, patch, 0)
    return patch
}

function walk(a, b, patch, index) {
    if (a === b) {
        return
    }

    var apply = patch[index]
    var applyClear = false

    if (isThunk(a) || isThunk(b)) {
        thunks(a, b, patch, index)
    } else if (b == null) {

        // If a is a widget we will add a remove patch for it
        // Otherwise any child widgets/hooks must be destroyed.
        // This prevents adding two remove patches for a widget.
        if (!isWidget(a)) {
            clearState(a, patch, index)
            apply = patch[index]
        }

        apply = appendPatch(apply, new VPatch(VPatch.REMOVE, a, b))
    } else if (isVNode(b)) {
        if (isVNode(a)) {
            if (a.tagName === b.tagName &&
                a.namespace === b.namespace &&
                a.key === b.key) {
                var propsPatch = diffProps(a.properties, b.properties)
                if (propsPatch) {
                    apply = appendPatch(apply,
                        new VPatch(VPatch.PROPS, a, propsPatch))
                }
                apply = diffChildren(a, b, patch, apply, index)
            } else {
                apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b))
                applyClear = true
            }
        } else {
            apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b))
            applyClear = true
        }
    } else if (isVText(b)) {
        if (!isVText(a)) {
            apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b))
            applyClear = true
        } else if (a.text !== b.text) {
            apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b))
        }
    } else if (isWidget(b)) {
        if (!isWidget(a)) {
            applyClear = true;
        }

        apply = appendPatch(apply, new VPatch(VPatch.WIDGET, a, b))
    }

    if (apply) {
        patch[index] = apply
    }

    if (applyClear) {
        clearState(a, patch, index)
    }
}

function diffChildren(a, b, patch, apply, index) {
    var aChildren = a.children
    var bChildren = reorder(aChildren, b.children)

    var aLen = aChildren.length
    var bLen = bChildren.length
    var len = aLen > bLen ? aLen : bLen

    for (var i = 0; i < len; i++) {
        var leftNode = aChildren[i]
        var rightNode = bChildren[i]
        index += 1

        if (!leftNode) {
            if (rightNode) {
                // Excess nodes in b need to be added
                apply = appendPatch(apply,
                    new VPatch(VPatch.INSERT, null, rightNode))
            }
        } else {
            walk(leftNode, rightNode, patch, index)
        }

        if (isVNode(leftNode) && leftNode.count) {
            index += leftNode.count
        }
    }

    if (bChildren.moves) {
        // Reorder nodes last
        apply = appendPatch(apply, new VPatch(VPatch.ORDER, a, bChildren.moves))
    }

    return apply
}

function clearState(vNode, patch, index) {
    // TODO: Make this a single walk, not two
    unhook(vNode, patch, index)
    destroyWidgets(vNode, patch, index)
}

// Patch records for all destroyed widgets must be added because we need
// a DOM node reference for the destroy function
function destroyWidgets(vNode, patch, index) {
    if (isWidget(vNode)) {
        if (typeof vNode.destroy === "function") {
            patch[index] = appendPatch(
                patch[index],
                new VPatch(VPatch.REMOVE, vNode, null)
            )
        }
    } else if (isVNode(vNode) && (vNode.hasWidgets || vNode.hasThunks)) {
        var children = vNode.children
        var len = children.length
        for (var i = 0; i < len; i++) {
            var child = children[i]
            index += 1

            destroyWidgets(child, patch, index)

            if (isVNode(child) && child.count) {
                index += child.count
            }
        }
    } else if (isThunk(vNode)) {
        thunks(vNode, null, patch, index)
    }
}

// Create a sub-patch for thunks
function thunks(a, b, patch, index) {
    var nodes = handleThunk(a, b);
    var thunkPatch = diff(nodes.a, nodes.b)
    if (hasPatches(thunkPatch)) {
        patch[index] = new VPatch(VPatch.THUNK, null, thunkPatch)
    }
}

function hasPatches(patch) {
    for (var index in patch) {
        if (index !== "a") {
            return true;
        }
    }

    return false;
}

// Execute hooks when two nodes are identical
function unhook(vNode, patch, index) {
    if (isVNode(vNode)) {
        if (vNode.hooks) {
            patch[index] = appendPatch(
                patch[index],
                new VPatch(
                    VPatch.PROPS,
                    vNode,
                    undefinedKeys(vNode.hooks)
                )
            )
        }

        if (vNode.descendantHooks || vNode.hasThunks) {
            var children = vNode.children
            var len = children.length
            for (var i = 0; i < len; i++) {
                var child = children[i]
                index += 1

                unhook(child, patch, index)

                if (isVNode(child) && child.count) {
                    index += child.count
                }
            }
        }
    } else if (isThunk(vNode)) {
        thunks(vNode, null, patch, index)
    }
}

function undefinedKeys(obj) {
    var result = {}

    for (var key in obj) {
        result[key] = undefined
    }

    return result
}

// List diff, naive left to right reordering
function reorder(aChildren, bChildren) {

    var bKeys = keyIndex(bChildren)

    if (!bKeys) {
        return bChildren
    }

    var aKeys = keyIndex(aChildren)

    if (!aKeys) {
        return bChildren
    }

    var bMatch = {}, aMatch = {}

    for (var aKey in bKeys) {
        bMatch[bKeys[aKey]] = aKeys[aKey]
    }

    for (var bKey in aKeys) {
        aMatch[aKeys[bKey]] = bKeys[bKey]
    }

    var aLen = aChildren.length
    var bLen = bChildren.length
    var len = aLen > bLen ? aLen : bLen
    var shuffle = []
    var freeIndex = 0
    var i = 0
    var moveIndex = 0
    var moves = {}
    var removes = moves.removes = {}
    var reverse = moves.reverse = {}
    var hasMoves = false

    while (freeIndex < len) {
        var move = aMatch[i]
        if (move !== undefined) {
            shuffle[i] = bChildren[move]
            if (move !== moveIndex) {
                moves[move] = moveIndex
                reverse[moveIndex] = move
                hasMoves = true
            }
            moveIndex++
        } else if (i in aMatch) {
            shuffle[i] = undefined
            removes[i] = moveIndex++
            hasMoves = true
        } else {
            while (bMatch[freeIndex] !== undefined) {
                freeIndex++
            }

            if (freeIndex < len) {
                var freeChild = bChildren[freeIndex]
                if (freeChild) {
                    shuffle[i] = freeChild
                    if (freeIndex !== moveIndex) {
                        hasMoves = true
                        moves[freeIndex] = moveIndex
                        reverse[moveIndex] = freeIndex
                    }
                    moveIndex++
                }
                freeIndex++
            }
        }
        i++
    }

    if (hasMoves) {
        shuffle.moves = moves
    }

    return shuffle
}

function keyIndex(children) {
    var i, keys

    for (i = 0; i < children.length; i++) {
        var child = children[i]

        if (child.key !== undefined) {
            keys = keys || {}
            keys[child.key] = i
        }
    }

    return keys
}

function appendPatch(apply, patch) {
    if (apply) {
        if (isArray(apply)) {
            apply.push(patch)
        } else {
            apply = [apply, patch]
        }

        return apply
    } else {
        return patch
    }
}

},{"../vnode/handle-thunk":101,"../vnode/is-thunk":102,"../vnode/is-vnode":104,"../vnode/is-vtext":105,"../vnode/is-widget":106,"../vnode/vpatch":109,"./diff-props":111,"x-is-array":90}],113:[function(require,module,exports){
var Observable = require("./index.js")

module.exports = computed

function computed(observables, lambda) {
    var values = observables.map(function (o) {
        return o()
    })
    var result = Observable(lambda.apply(null, values))

    observables.forEach(function (o, index) {
        o(function (newValue) {
            values[index] = newValue
            result.set(lambda.apply(null, values))
        })
    })

    return result
}

},{"./index.js":114}],114:[function(require,module,exports){
arguments[4][26][0].apply(exports,arguments)
},{"dup":26}],115:[function(require,module,exports){
module.exports = watch

function watch(observable, listener) {
    var remove = observable(listener)
    listener(observable())
    return remove
}

},{}],116:[function(require,module,exports){
(function (Buffer){

var insertCss = require('insert-css');
var css = Buffer("QGZvbnQtZmFjZSB7CiAgICBmb250LWZhbWlseTogJ3ByZXNzLXN0YXJ0JzsKICAgIHNyYzogdXJsKGRhdGE6YXBwbGljYXRpb24veC1mb250LXdvZmY7Y2hhcnNldD11dGYtODtiYXNlNjQsZDA5R1JnQUJBQUFBQUVwSUFCRUFBQUFBNlp3QUFRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJHUmxSTkFBQUJnQUFBQUJ3QUFBQWNhK01BTzBkRVJVWUFBQUdjQUFBQUlnQUFBQ1lBSndFUFQxTXZNZ0FBQWNBQUFBQlJBQUFBWU0rRm9hOWpiV0Z3QUFBQ0ZBQUFBWVlBQUFIYTZNUnh3bU4yZENBQUFBT2NBQUFBRWdBQUFCSU9FUVpFWm5CbmJRQUFBN0FBQUFHeEFBQUNaVk8wTDZkbllYTndBQUFGWkFBQUFBZ0FBQUFJQUFBQUVHZHNlV1lBQUFWc0FBQTFZUUFBdFBTY2MvTFdhR1ZoWkFBQU90QUFBQUFyQUFBQU5na3UrUWRvYUdWaEFBQTYvQUFBQUJrQUFBQWtFQUlJd1dodGRIZ0FBRHNZQUFBQWpnQUFBNkx1NTJ0RWJHOWpZUUFBTzZnQUFBSExBQUFCMU53ZENnQnRZWGh3QUFBOWRBQUFBQ0FBQUFBZ0FnWUJVMjVoYldVQUFEMlVBQUFLVlFBQUpUelNMM0NtY0c5emRBQUFSK3dBQUFIb0FBQUMwOExjOFNOd2NtVndBQUJKMUFBQUFHc0FBQUI1R3RoVTZuZGxZbVlBQUVwQUFBQUFCZ0FBQUFZbGgxVFlBQUFBQVFBQUFBRFF5ZzFYQUFBQUFNb2JITjRBQUFBQTBQM1dCWGphWTJCa1lHRGdBV0l4QmprR0pnWkdJSHdCeEN4QUVTWWdab1JnQUJtQ0FUY0FBSGphWTJCaDM4TDRoWUdWZ1lYVmlIVUdBd09qSElSbXZzYVF4aVRFd01ERXdNck1BQVlOREV6ckF4Z1N2QmlnSUNETk5ZWGhBQVB2YnlZT01COUlhaVF3TU13SHNka1l3R0lLREl3QWVid0xuQUFBQUhqYVkyQmdZR2FBWUJrR1JnWVF1QUxrTVlMNUxBdzdnTFFXZ3dLUXhjWEF5MURQOEo4eG1MR0M2UmpUSFFVdUJSRUZLUVU1QlNVRk5RVjlCU3VGZUlVMWlrcXFmMzR6L2Y4UDFNTUwxTE9BTVFpcWxrRkJRRUZDUVFhcTFoS3VsdkgvLy85Zi96LytmL2gvNFgvZmZ3eC9Yejg0OGVEd2d3TVA5ai9ZODJEbmc0MFBWanhvZVdCeC8vQ3RWNnpQb0c0akVqQ3lNY0ExTURJQkNTWjBCVUF2czdDeXNYTndjbkh6OFBMeEN3Z0tDWXVJaW9sTFNFcEp5OGpLeVNzb0tpbXJxS3FwYTJocWFldm82dWtiR0JvWm01aWFtVnRZV2xuYjJOclpPemc2T2J1NHVybDdlSHA1Ky9qNitRY0VCZ1dIaElhRlIwUkdSY2ZFeHNVbkpDYTFkM1QxVEprNWY4bmlwY3VYclZpMVp2WGFkUnZXYjl5MFpkdlc3VHQzN04yemJ6OURjV3BhMXIzS1JZVTVUOHV6R1Rwbk01UXdNR1JVZ0YyWFc4dXdjbmRUU2o2SW5WZDNQN201YmNiaEk5ZXUzNzV6NCtZdWhrTkhHWjQ4ZlBUOEJVUFZyYnNNcmIwdGZkMFRKazdxbnphZFllcmNlWE1ZamgwdkFtcXFCbUlBUzVXS2VRQUFBQUFCQUFJQUF3QUZBQUlBQWdBQVJBVVJBQUI0MmwxUnUwNWJRUkRkRFE4RGdjVFlJRG5hRkxPWmtNWjdvUVVKeE5XTlltUTdoZVVJYVRkeWtZdHhBUjlBZ1VRTjJxOFpvS0drU0pzR0lSZElmRUkrSVJJemE0aWlORHM3czNQT21UTkx5cEdxZCtscnoxUG5KSkRDM1FiTk52MU9TTFd6QVBlazYrdU5qTFNEQjFwc1p2VEtkZnYrQ3dhYjBaUTdhZ0RsUFc4cER4bE5PNEZhdEtmKzBmd0todnY4SC9NN0dMUTAwL1RVT2ducElRVG1tM0ZMZys4WnpickxEL3FDMWVGaU1EQ2ttS2JpTGorbVV2NjNOT2RxeTdDMWtkRzhnek1SK2NrMFFGTnJiUVNhL3RRaDFmTnhGRXVReTZheE5waVlzdjRrRThHRnlYUlZVN1hNK05yQlhiS3o2R0NES3MyQkI5akRWbmtNSGc0UEpoVFN0eVRLTEEwUjltS3J4QWdSa3h3S09lWGN5ZjZrUVBsSUVzYThTVW83NDRhMUJzYVIxOENnTmsrei96eWJUVzF2SGNMNFdSekJkNzhaU3pyNHlJYmFHQkZpTzJJcGdBbEVRa1pWK1lZYXo3MHNCdVJTKzg5QWxJRGw4WTkvblFpMDd0aEVQSmUxZFE0eFZnaDZmdHZjOHN1S3UxYTV6b3RDZDIrcWFxalNLYzM3WHM2K3h3T2VIZ3ZEUVdQQm04Lzcva3FCK2p3c3JqUm9EZ1JEZWpkNi82SzE2b2lydkJjK3NpZlR2N0ZhQUFBQUFBRUFBZi8vQUE5NDJ1MTkyM05iOTUzZjd4eUFJQVJDRUFCQkVBaUJFRWhDRUVqUUJIVkEwN3pLaktPVnRZN2pKTjdFY1oyczEwbWNiSnJOVHJ2cHp2UXl6WlRiN2t5N21XNm5uVTQ3N2JicFpWLzdjZzVFK2JWdmZldjBUZFBPOUtFemZmSkQvNEJ1TGJuZnkrOStEa0RLVHJiYm1VakRDMENRK1AyK3YrLzk4dm1KVUR3UUl2eHc0UnNpSnhiRmRoS0k4ZkYwTWIvNHY2S2tzUERmajZlNUVMNFZTUTZmWHNDbnA0dUY0aWZIMHdDZm45UldhM2RXYTZzUHd0N3pmdkF2bnY5dzRSdC85aDhlNVAremdEOFppa0FzaUtLQXYzcGRISXRZakpNdytEZ3VqWU80TVk3RjA3Z1luVmZnQmZsUlhGYmZ3VnQrSEZlajVFWXdFa2twck5YajRzSE92ZUFrMkFoV2d0VmdHYjR1QnlQNFdNVy9Ib2hQNFg5d0ZweWRuY0ZYQVYvT1FoR2VoV2ZQNFQvK0ROZUJxeWp3T3E2Sk1hNGpMazZTTUFkTGlmQkxFRmR4T2ZUV2hXcFNERVpKWmVIanBBWkxnTGZtdDFRZnE0RjhXL1gyQy9UMitIYnFLNzJuZ0I4dTRudStJbDRWZjF2RXUrTjRjNElVR0d4UEpraUdaRzAvaXVMaU9Pa2V3eE1sZUtMZWhpY3E0N2c1Q2VMVGNiejdOTW1Yb3lpSllDbFZlTzEwTnlxTkhwL3VpaXNqSUZ3Y1ZaTXRXR2pqRUY2eUNTOXA5ZUFsbTF2NGtzMEJ2S1FUSlYrZ0RkUk9naU9pR1g1bE9wcXZLMFJML3JvQ3o1M29yK3Z5dDJwbjlDOGc2Z2FTeG1kRTcwK0YvQnllTWVIUHp2Z296RCtraC9rWFNGb0o0RFNiUHErTG54S0Y0R0MyaVRqeGFSUnZBYTNndThWeC9HQ1M3TU4zYTFGY0hpY1YrTzcrT081T2t1dndYVHVLbThCT2o1QmMwendTSXpxUEZzUmlmalJ0OVU3aDBUVGFSWkpFMjFkR1NhZnZVckVjSmIrdVNMUVJuTWp0S3pLZEVGazJyQTlEcGhWNjNlcjFJL3FORzRINkNydGpzdGdFSXhhVmhPT2ZTcHFFd255ZTlTK0hQMzJHM3dHbkdacTlMcjRpZmt2OHR2aWZ4TTFmWmFKOUVDRVIzNXNrQlhqd2RoVHZqT01QaWJYaWQ0aWNTTHJYeC9GZ2tqeUM3K3BSM0IvSHIwMlNKanc0ak9LM2lLajNpYWhCL0VNUzBQM29mSStvR1QrSzRyMXFrbDhheGNlS3d2RUQ0c0lpUFBkR2RMN056OEhCYlZlVDh0TG9mSk9mMkt3bVg0TlhWS1B6RC9pSmZoUi9VRTBhOE56WG8vTTFmdTdiVWJ4V1RiNEx6N1dpOC9mNE9XRGd2MndZZU5ZSG4wald4M3B1V1o3a01qMWVyYWxUbXZIODJkeC9mSUo4dGpuaFBnN21IbUZlcU5kK0t1UnIvK3dzOVpRdEV4T1NpWDh2NEFTVFhUaVF6U2dlanVQOVNiSUdhaUpFTlhGL25KekNENHFvTFVCTjBtaytIQ2ZYZ285SkdFaTNKcnNMSkVpNzFlUXdHTVd2UlVrWG5taEVjYmVhOUlMUitZRHB2RVZTa095S1d2MDhYNzVhMmVuZlBFaTZoN1g2dE5yYU96ZzRpSHUxNlhCakU3NFR5WEFYWHRTOTNSTVJ2R2puM25MSXBGdTJOQW9UOVVocUdYVkFSMHFyYklRc1kveEx0b0x4TkFkd3ZYZ204R2xMNTRUQzFVTksyTngvUmptTElBU3h5YlB1YjRzNEJGMVJWTHFlUHE3WVNuNDFyZFFGL1kyQTdjZGQ4VTBSM3g0bmJTQjlkWndzSWJXSDlPZWFRTmwrNzJrdHprK1NObG13dUFsVVhrSlZUV1FIWGJPQkpxMTlHd2k3dHQ1SHdsWnIwOEppRWI2akJSeFpDbnBrS2VZanJaaUJmS0dsVzJ3MURDeHBFOUJXdXlJSWxCMitLNzZsclRDc3Y2N1hqeFozd013eElJbW1OZWR4UTJYZ092aStKZGNmQXB2RWE3VDJKdStpWGs5dXRnN1lTUE1lbHVVSkd5T2oySUxremF6ZDNRZC9uN1VORkF3NDAwWDREN3J2NXlnWHFNVWlOZ3FDRkZmSTFrQktCT20zSU40Znh6c2tDdHQwQk5PZGJWVCtPNmo4UVVzTmc1SForSFF3eEo4TnVtQW9Ea0FldG5kcTljZjUzWmYzVUJ3R1EzalFXbTczNElGSUl2aFJ2SGtRaTFveTJqbzRTSXJncGt3cjE2cDBralZqUjJ4VE8vTHNpRzFxOFRXck5tTzd0c014dGZBNVAxZmJDRHh2U2F1YjRtMnlEeFVtVHltYWloQTNLUnBYUnROUTRMZGg0Y29vaUZ2anVQRTB6a2RKSFdoUmpLYjFCdjZzWG9HWE5lcjRiUU5JbGl5enJKeFlEdEdLN3hpcC81L3EvL25VVnZDUm9IVUsrQ21vdld2aVpUR0ZCeVA2aEdzbGx5ei9OQ214SDVhVThrQmlVRTZraFlnSFMwRHJWZVkycmNrRFJ5K2JONlgzeWdORkZsQVAzRlF5d0c4RUx0Z1Zzekg2S3puNC8welNXY28vclhOUnJQSHZoaC9qeCtWMGlhR0hJRDdXTnZ4ZmFWbmNIWlBKQm0yUGpDc3Q5WkFFRkd3MEdlZ2VhUjNpYVBGVUdXVzJ5TW9jc3kxV2hqaGxoYXRMV3VVUHlQNHE0d3VXdHdXUHV2UUllZjl6Mk55NUJuUSsyMW8rODEyZ3pzOUkwMjdCMXZlSUxITHJ5UkE0ZEZnOXovUGE4K080UDRISHlSaVlCSlR3ZVp1ZkI3RkdJUjRDMnp3dVhpbWgzTWJqMmhQZ29NN3FHajVvMTVPVkxqTFRGaWpreDIzUXlQanNYdTBKYU9US3JRNCtLTlVUbEdsbDVvNW02RE90bTFlUHBEaXc3TmRtYUxQQWNpWStGYlAxTmtVeTZDeEtXWkcwdVNrZWFyNnBVd0NCUEZNWmt4RG5uNktoQVNHZTF2TWt3VTJRNER4SmNCNGtHRDRYZlRrMkR1K3lZbitsbHBVc1A2UEh2QnBwbHM4OFhvNUUvTXFZRkhLTHpTUG81UWJFTm54dXhGUkpLd0xuSVFROU9iQ2NCK05ybjBoMWNwSnlKbXpkdVdyc2hncnhZR2t5QW1HUzRrSS9PVFBiY0YwRDR6RDQ4dmlPVUlKbzRoQVpjQXdpcEM1WUdTV0R4YWRrVWpyUnRFZ21wZGdDazdMTFRMZGRCSTdxNzl4REgwa0ZGMHBQbmdUMnBqY3MwYkhaaXVNdkVXZ3ZSUEVHS2liTFFjTEFJTzBSK0h0MTQ5SGJZaVRlRkhGbkRPS0ZwckxIZklRTXREV09PMC9oNUtRSE0yMTNjR3R0NUtGT0c3L3RvQlY0Q2MreTBxdlZrN0R2U29kaUl4VldraHFzYmVoVHZPRjZlcmkrNS9xVWN0WjVQWWZuamFuUUorbWNGL2t5ZlgxZTBnTllZbTNaa0s0d096ZmxpRUo3c1BFRnNubUZObXlqQ3ZHeWl2YkIyVUh2SmltZ1llbW5EbTNaaXdJekRnbVBBZzhIVjY0RnhUb2UrZDkzYXh5ZE54Wi9RRHNhd2dhMmVSL0t5ZHpScWc4Mk1hUk5ESEVUWmR3RWFMOU51WWw3cVBNRTZ6eFNhSnUxdUlwK2V4K09xeXZBVzl1dVBXN2Y3cUVFeHMxNmNxdERidWhqVUhwaFNpaFhITWZGMmZaR3VLdzBITzZXTitUc085RHBrRkFUeEdkTTVhTmJOUGl5d05RUUVDRUh1ODlWRXdHaFRTR2lnMnc4WmNYR3Jza0M3QjZQck42bzFaOTBWcnI5T3dQeXpRUThua0tFY3NDc3VXR3BFTVdTTHJ1Q1NzbWQ1VkxxZ1pWTFFSZ240a3duZVN3RmtyUFdqbEhibjlnbnVBK0xGK2hESTNPR3RudktBZHQ5eWFXbktoazJaT00xNUlCdE16cHY4aE85YU5vOHhHMDNWMkRiWDVDSFRORWFuZkpoN1hScG9WQ3QxY0ZGdlRQWUpVS0VjT1R4emtHOFgwdnVSUWR6ZzdVTisyZ25HMW81MVlJakxRTTNiSk9rOUEyZE5EMm5uRDNsZ2ZIQlp3VnJ0Z2IrVk9oSU9pVUxmMGNvVTdLdUNWcHdaV0ZJY1N6UUNkTjEwMTRGS2RUckE0WHlyU2dpV2VpaDMzNmoyU0I3WHFuRlJTQk11d1dFcVIvRTY3VnA1WG9ESTVoaFBSWW9HUitGdVh4cHFXeWJwNDBNWTc5aGFYQWpDY1lHb1E1Z05pRTlaaVJoUWFzNFZuQnVjb0Z6bFVoTTlGUXBWemxTM2lhWitWQWxLakdnS1hCTVdmRHpsS3UrKy9tcGw2OGtsME03cEdFZzJET0dkN3NwM2xLZWhSVWNVS0NJYjgzdUJUaFdKVkpENkVWa3V1V2dUNUtsc2c0SUxmZWN4ZEh4MHBXTGJIdnJlV3Q5NVBjVTJENy9YUkdQT0NjbzNSK2w1ZmN4KzRmUkN3ZXE2TkJ1TFZGNmI1TkQ4UjBVd3VKRVJucGtwSGQyWWVVZGRBRmg1WU1SUE5nZTd5QXpDQkRYZ3ppc1Q5dWtST0pHN1J4NGdqeENLOFQxUTNYYmhyc2grNGpOUkRyZ2RmVE5SVEZkS0NnNVgyQythR3NQc0NoOVl6aWtta2xsb2hkbjZiWlA0RDkvelZrWlI0ZTJQOU4vVWFaZFczYThnZEgvSHJrN0dISVVLWjFIL2s4LzRpUkJZNEpwYXRCVFJOdG9EeGloakJLVklHdEl6b2dPNGkyaTVRUVZWRHhRSVhQY0lvcURRNDRFVDlGNFpIMXNlRFMyYWI4YWlIUzZ6cWIwQzhVZlkvRkFZQVMyYVR4YTlEV1VRcSt3UWk5RnFJNVEweGkxSW1ybjF4dGdnQzZ0Ukt6RGNyUUlHaHZMejFYTzRJS1lsZno2UkdoZXNmYnh6OGtpZGRtWlFEM2FqRkNWWXZLOFkydFVHZjloY2hBNHlUSkY0RnNvTzlTRVNCRWVYZVZJRVJWc3JRdm1kNkdRWi9PYnRKcnc4RXFwMktNZ1N5UlYrSEVpQmdjSFNlYzYvSVRVYTVoQm1RMXRtbTEvaTRzUU1qZkxsRUdMdzdvVnY4UG4yTXM2TTVVZld3V3I2aEFiS3NuNXZqODhSczBDdEFCUGVOcnBLVCtYNlFUUkpWbnJFdEpCRzU4dThUcVNDc2lCRG5OVCtsNWRZUFFwK0Y3TTFsb3pidmRvOC9YcmpaQ2RNblM0S3BlSU1VMXlaVU5uMVZaVXp0VHhveTBlVVFKZ2VFblN6ZEgvL0p2QzhXRnVBalh1aXI4aDRwdGoyTm5IY1plSUVnL0lIVk9wemhadnZsVUZxYUROYzg2SXZiRTJ1U1dORzAwNi90Wk5sb211TnJXOStyVEVVaitvVFF0b0pnN2lYRDNCTENpN2EzWUtXV1YxTnB3YVhNME9ncDdKQTdicmI0RmdoODcyTi95cW5SLzcvV01SajhlWVhzY2dLSm9rZDNIM1VYeDlITGNuRkFFV01BSmtaM3hmODhDdXpQaEt1d1A4MEFlU05KVGRJV1hZM1dWM0hOUHE4Um83WThrbU9HZVB5MXN2YlJPWjdxN1Z5QU81WG5zTUhzaGVoaU4rcExXR3lRdHZPSmxGYVdpTWo2WThNanVRMTQ2SG0zVklaeDQ4ZlhnVHVPSkR6UlZwZGdCZTZITFJORzRqU2RZbU5sTjAyNlFqZ0NueURsY2dCekJYcERqQXl4am5OcXk4TW5DQXk5bU9nNmtPMyt3bzBHWEpaMmZXbWQ4RWJ4MTNWR2ZOV0dKalNodHIwY1pVS2xTb1JBcDRHSndUbFFrVVhxeWJCNVVXbDVRVEJrWVlEc0ppUDhsa1NvY0hyNHRUSVJjeXJaYndQYXRVNlpWcmFtU3NxWUlablRyNGFGUXR6MXBRYWpHR1FLb1MrZHpMZzR6Rkg1SGxhM1BTY1UyVFJ5ay9MSFZzcFVvZEhUam9PNXhrNzl3aEhkcTd3aWFpdWNVQ01LUzBXeTNCVWhLWVMvRE1wNXVZUHNjQ1U5S0UyRFNwZ2h4OGhLRW9LTXFaMGVoeTRLYlpsajNteDlxLzlLNWwrR0gwZjFheXpaRUxqeFkzeGVzWWo2S1ZuRFlLS2c4ZVY2SnBnYUxRUWdpUDBBbG9hY3JraVJyVmdBby8yRVZnZUdVNTJNaHNKcEExTGx1TjR4RXBsWWJlbTY1RzJYbkFMN3A1UUhSS1NvRnkxTDBrSUo2THlRUGkycnhrL29uTHhJRVZMZVIwRkNFVGdWTDZtS2d1dlNhS1huYlpnWE9UeGFlS0hrbWxpTlhGV2gyTll5clhrc3F0V0xGbUtGTkZtSjUvcGc3TXZQOFJlbTFqT0l1SmN0elF6UW5oZ0k3cGdBN3BnSklUOU5jMng3Q0dhTExMcHZvajhFVUxlNi9zUzdiTFNoTmM3T2d2cXlwT2xnT3ExSkY5dkxQK1diRVA3V3RKN0FoTWJTRWZGcFlVNXdWeFdaVWZWR0tyQkRKMzFXMWIwWWVKS3VDWmZQT01ITzVkOFVnb25UNWdSaDV3bmRnNGhpMHVtRFZsdXF3M01ONU9WM3M3cmhhM2s4dEtvMmZTeW5penRoSW52MVlLZ0tLaThOYmR6MWkzdTFKdlRiWnZaUWNZbDE2VEVzc3paMDJoNDBmOWdDUkJlbEhrWnZkc2U5bVdUVWFyOExXRkdiczhXRWgwb1N0dFZKY2dIR3dyRytCQVZ3UVJtTklUMTZyb1dzV0Z1b3l4MHhGR2Rsb2luWlJ6cFBoTSt0THVQcTZMVytJN1pKVWFhSlVhMmlxMXBWWHFhS3ZVaU9KNk5XbGlUZ0IydFlKZm03Z3JURkhoUmhwVlRnNjBMM0w3akx0cnVYcktkUGt1SGd1UnFhTThkLzJXZGRCSC8xYklSSGVmRmVVbTZTV3NLMFh5WEhacEUzME1aNnZKTnF6OEt1ZFp0Ni9pZnJjM1liOVhxK2N0bGdMUUtTL0RTL3J5eUtpd3RGMTd2Tkx0VUU2MWhlRVBiTFZJbSs3Znh2Q25mWUF1Ly9SV1p3MjJuVVJiOHdLaGtZNXNUK3pEUExHTW5aTnJPck95VEY3eXpZNkZ2RW9jV1VTSFRtUHN3THBKbXJQT2hyL1BLYmVjTWZ4ckhQQ3ZjYnI1Q3VkUzBNSnZndDErZkxWU2JpRUZyb0JqQUZ1dmc1TTNiV04rR2UxN1hEbUkrOXIxMzU3SEF4c3pWZXVHemlkSnZyRHpza3BJVGNqczhvaXRXbk9hVGs0TThMT00rczhTWjBOa3p3ZTFUQ1UzVFY2a3lvbTR2cTRrYkFQekg4aEt3am5HUVpUcktOWlU4MEM4WGYrb3M5SWR5dXBRc2hRYU53ajhZYWVKWU1WU1Vjc1pvY0R5N0hLRU9uTTNGTWdxVE14cjYxUCtrTFpEMThSOTZpY29FSEZVTTBFWlRWRjFISmVwWEQ4dGxmSFpFcmlsMHpMNXNXV3NHdFhzRXJ2bC95ajNndjh2NmdvalB1LzVZbC9UdnBqMHZuS085K1YxYnk2cmVrN2p3UEUza2dLcVZGRXg5WUhMT1I3SzZYQ2REOXR2ZmxlUXBBUjZLUkFNV2pWMjhBbVRHekpQVUFoZ1lVT1FpZG81Mk0rTlRZb05WU1kxcnRiaXprRjhRMWFvalQreW92dHIzTExHaXBNa1c1L3RnNXpsaFNuWHNCN3d0WU5uVzkvTXNLMUFZV3pXeFcxVlVqNUJFWHlDdUlmSjltbG5kWTJjcTlRK1RtYllZSjNJbTIrRDdlVWJLK3o3N3ErTEh4T3Y3bkdxTG9xUVJRY1R6R1hIYTVIcWtvT1ZQMlRyOWJDYTdBZFlhcUZNWjUrYjRoNEtha0NPOTJ2blYwb3FYS2RzNW4wOHBuTlFjSytlZXFHS1VsaFpQcEJmN0UzdFBaMit6T2oxY2xUZHZOZDR0ZTdBNUx3T3Nib1NoK080TkZHT2lXVGExaEkxVW1BVWczMWcwa2VCWFdOK3MzQ1Fhb2kySzJ1YS9aeXlyVnBJdWxQYUxxbTVzdFNuZk13bUovbWJiSU00ejlyWXhNcHpPMTE1TmtYMTVWUmZ5b1pOVzJSNTI3L003aGR3czZ2QzZRT2tMdkpyYnRLQVc4aEpBWkl2WHFwUXhzQ3V6bGp4RlJkRlZWejFYSHVYNlppSytvUjZPZ1hkTkoxQnNrOUlkZzFwMDhWZFRkd25WR0F4aFdQZFhScWRsL2hScVpyc0xOa2l2QVdQNnZ3SWZMamhrcDN2N2NNajJWUFRwb2JHakQ2aGxaa2ZJeStCUDdKRDlSbi9GaS9LMDV0K1J0bk43MVZDTVByRmdtQytZc2U3dFhTOHUyekh1WndoTWZFdGFoWjZyd0tmK1UzUmMzdnBrRE1YT2Q0MndiUnZwVTFibXB4UllPTmF5TkM1V05vSjhGT0RlK0ZrczZyc0tydm4xSE80ZnBPRHZ5UHBFQWxzVmJFWm9Pb3hRRmt6Z0NHRmZVenJPcW02S0p5NlU4QjFwMXZnSmI1RE5kbU9xY0N0RVFsa2wweUEvZVJkcWs2Q25adDJieUQ1dXkyc3grSWN3eDIwZjExUUl0aVFVRjRFaTF5bjdKOXVOdHV3dW1LVWNpVGZsNnJQZGpyTjlBYnJjTVp6aDlOOUx4aVQvZGlMeWFhRnJnbW1UWGlXajdJaU5ISWtaZ1puanpNaXMwd1hUVVptS2lMUGpNMlVVM1RtMkxyblJpOFVjRDlmb04xVW1QNEZrN2pVV1JZcnJCUkpwY0ZKNWpJbG1adGU3T0VVWFdTR1JSVllrTlNoc0NOd3Y4NkVjZUo3S2s3RTRCQ1lZcnBJTFVPTEphUXR4NGtOdExRVUpLcmtHTWFKRGJuTXFva1RCY2FKdU15NnMwempMMWp4clV6cHB4Z2kwSTEyN0NQbzhORGo2UStJcDJVV3VNTThYWkRNTEdQYmpwMXhKVDZ1eXpXM2FNMzFGcThaL0xiMlFiTFdtVi9wV3JHcVc4enVUbldMMGpRK1E5aWxuak83a21YYjlPOVFWNWVnWUZkbUJWWC9VSTg2dS9JWm5WMlVzRFhOWGNqczdZNU82NGlraWdHSzdsTDNlL1ZXc2xxQWVlbW04MEQ5WDNEelliSlRpczVEbVBQNFcySmF4VTVnL0VUSGNqUHJXRHA0TEZWZ3QxSGNwWTZFYVlOaWpRYXBtNnBVTjZXRzFaNVFseG1JbTl5ZUVIZm96TmFJejlvZW45bFZXcGZmT1BLMFUrcldRYW5LbXNxcE9LMGRUaXp6alF2enlwbEpaU1BiVlhKTU9acVpsaWlhOWxXT2N5d21FclJ6ekZMSnlLUEFyNm9uUk12MWw3V0ZyZWh1VStXVGRhZ2xwRUd5SExlaWFZWHl6WlU2TnAxV3ZLYlRGYi9wMUtRblQ5ekdVeFY2UFJOT2Y0anBxRGtybUw1R05Kd0Z0ZFp2ZTEza0Y2MVhMbEl1TDZua3JUQ1J2UHdLeHU2eVFydnFMbjNrTFozVmpWeWtjaXRVQk00TXNTajdMalFmak1TWEtEc2xKdFpJeVhTcGlxdGFJaDdZSWg3WTVMejFTK2tCa2llTHhjTGc3dEJLVzJmM2xXYWtxUU9uWEh5NUJEVWxwb1BBcVZuNTNFRzFLdW1DeldPSUc3TVpJc1VJeGkyVG1ldkEwdUh2MHhwS2RaeXJ6SCtjNVBMVU9kaWlOVW5UWTdtd0RWVGZRRS93ZE10MnRySU14NDJKS3pMMWhZTTRyR1drcHBhdFVHY1pYYWFjTjUyaHkrNjJURm15WmRaOUhXdExWUW9lcHRXY3pxeGlQc1BVK3F4RjNyQVhtYXRhV3RsZElKZjk5TUtVdEtkWFpkbkIveC95MWI3LzRkaHpvV2g2UzN4TGVzL0dHZm5GWmFydkxRY3ZuS3IyZVNTbk94RGNkWDlkVE11NDdtdDYzUVd6YnVrNUFTL0V6VWl2Mi9PY3JyMlk1NlNjekZrMmpNVE9kT1pwdVNkK2liTHNseXlqaDE1QlZFVkh5ODVBbEtybU90S3U4dmx1ODRxYXc5UDhldGVLKzJSejB5Skh5TEpmdjZXSDIyVDVKM1BDTnozWnUycVhqOVgzWnZBaHU0WE1uOC80Q3pCenRlQTBWQnBYeTlFL1h5VDlRMkZRMWNtbk5yTHlxVGRVUGhYRHR3Sjc2ZW02dHBjOWxiR0RyUWhWaHNQbXA5dmkxOGtMTDRRZmU5bW9vcVYyNk4xYmFKR25qZVUyQ21hbG50eG9VazYzcFhPNm1la3BxME5tWm5vcWw1R2U4bk9pWkc5K1FHdk5nNmtwTjhEUkxNRTNZUjIrS1RnV3gwVGVjZytZYWFueWxCSkpyOWxPZ3J2aFRhQUE1ekdNWU5rMUhYRjJ0blRkemR4bkVEbEZiRnQydmlQVXdBVDNwT1BjYWxMSnVkUEVhbmFpeVBPUlpWVU54b3dwanhGVHVuY2d5Q0xGdmRvNVJFUExiUjU1UWE0NGNXSktsM010aDA4UGVWaGRFSDQzeEx3MmNwTTdJVDc2aVpnMjBBUEVUNVFydThWWmtjeE1wNDVEcHkxeVRscWRLOVM5aGN4V2FWbStZTFBCdnVBdDlnWEJtdUU1aGRpM09xdUlvQ09IZERGQkJ3NHV4OWxCZzNOZVBhM3IxaWlKM1p5a2xkdlJuTWtpTHdGS1N0NHJaYzlVYlBiczgrL3AyV2N6UXF4R29QdFdkQm4zWkx1MW1YdE9lbjBnWndPRjljQjFZVVV0YmxLN2RSMkhpQ21wRG42TjdQK1IxWTRqcS9OTmRRWWFsM1o1emxSMGZpYmZxQm5Vbk1Fb1dTRzV1R2hFUEtkakV0VmFMWnljNUYzeE4vVjU5ZlNvdUJxMTVnRTkyUzlJcmNSVjNaWk84cFRuZ3NOYUxjRUEzTXhiOTRndVBLWFlWaEVmWmh5YS9nVDJjcURtUEVhV3AzVmswVy91QlBac1laUDJJNmY0OGpjRlNsZUYrYUhabGJBbUpWQ0ZjaTVMNmhCcjZyU3FlNG0xOXBpQ0F5TzMwcUtaSkZLR1ZsSXdEU1pnVjAzV3N5ZkdaelRVYzJ4YjRGbGVHd3NtWkN5WThQTmh3UVRDVjJIQ3djRlpVaEZUWEJqcnBDbFpXMHpORm1sdUZkUHplZlNiNEJVVGVIQXUrQ2RBNHh0cUVVZWFHVTlVT1VGVnRNLzBTcFFKQnJWU3lKZ0RSTnlWbjlFay9RU2hhUWhocFVzNEV4Q05yblBlcFU3ZUhNS3R0Q2VVNklVZ0Q3dTVhR0FwMllkVjdsZVRIYXo2SFVZS0FTUXBkeUxDQUVGajBWTFQ5VFMwdEMvOTFWMGFxZS9CZytxUWFwL0NlS29HZGNXV2NIK0tmcVMwNjZyR2tMRDUxc1Znc1hnNE9EdTdWUGVyRGk3c210UlB0Rnh2VXIvZGdIRUdRQ25mNHJvTVVLZEhMV2RVQjJaUjM2UnU2ZWttQmNLYjIxZVFKaEtocHhGTjg1dDJpWUo2S2ZKZWE1ekI3cG5kQTZBalozZHlXQTlsV1pONHJPdm5sLzA1cjZMeEZsNlZrK3J6a1l1c01UWTVuVjVXa0RIbisvekVQaFdlMU94SWc3amswSmxESHpJQ3pFQWp3SHhCWVU0a205RUIra3FucFFxRWxEZGJveTBhSTlFNmI2VExHUVozd1lVM09uRWdqdFpWM0phdEN5MGJZdnlTRndBNE12SEFLempKNW1BYitkeFRKV2VzSGpMd3p2NDRyajVOUkRHS1ZCbDJkNGtLaVRoZ015VEVuUmJqY3lUOXJZaDd6SnRWR3JoSnVoRVYzMFZTTFFFWE5jbWk2cXp0aHE1UHB6MWtIK2xvUXlGU0JLa2VjcmZaMmc0NlF1SG1QRDhWYnYxZTE1UXNtM3ROdkVUNkVMWEtyTm0ycElUbkh4WXQ3MzdWdDhZbVU2aVlQVzlEdUloOFlPU1lFYWRpbWliYjRXNmZBWi9NM2xnQlRkMUhmNUVnZG94c1A1U3kvVWdORmUvQUF2ZFBRUloycXVkRlpsbVFpdXJXWkFMUEpCRWN6T0ZyRVd2QWxvSTZTaHJEaUhzTGRvcnNPa2ZvT3VNRUt3YngreWJkSHQrbnVhaFRheTdLenVHNXVpQmpmbHhXem1xeXhxQysyblZ1b3laU25XVDI4ZG44bnhZVTY0QUQvVW5tWmhjTjd0cUt0clVCMjFwbmJNMmEvbmY2ajVWbHRXdVMxQmhVWkYvclZmRk44ZC9FdEljK1AzNml4cjQrMlN1Y2RkcUo0cStQRTlFRVBmVVdQSHh6bkR3TU9GckRFOTZkeUpndFBwU1p5M2ZKRnB2WnB6NkozdmtXUDNFWXhWdlY1QlNrcjlnRGUvY1dQL3RXTmZuNkVvSmhKVy9EUVQrSzRyZXBpekRlaXd3WUJTWWVJMTFYVC80U2RvcTlYYXMvdVZxQmd5L1R5YjgxQkhZNFBZamZyRDErN1lzUDNwa3hCSklKUEhFVXJnVHVoQVROQ0ZsTTRwWDN6Qnl2MnlDb251Vm5mUHd5aG5vVDJiL3EvNEZQVTJOcXlBOTVWVXUvTFY0VzhYWE9OM29GZkRDaHB1R2tnenIvSEZRK3lZY3VzWS84TXZHcXd2WVNObkRHYzJYeFRlbEo2MnZ5aGJTTis0cVlLbFFobk5ydVJzbXhCaGM2Wlo1OUVNVnZVUEMxeExXMXBXcnlsdFRaWDNWaGh2UmMwREU4ZkNOS1FRM0Y5L0huRHpXdzB0ZHdvQnVSdFlBWjlsOGpiamhHOUtITmlFY2w5eVhPMEJ1Z0hBaWY1RnFWaUZGekc5U1A1bWIrZmFDU0l5c1Zac0V6WE5BUUdIanRaR2VYKzRmMlVNWU4xTXN1cDR4bFpxd29lOW1MM010ZXBJeGlVWmhlOXBPc2pzSG5sT1ZTWTVMaTgySDg1QjJkOGkzeFBmRS9MdEFxVTlFOG5VaTk4dTQ0K2JaV0wvRjN4OGtYNTJxWkQxOUV5N3luRWZMZUEwVURiUFIrZFA0Mkl4eVdPNCtpaVBYTjBseDk4MzFnc0srL0I4enphdy9mL1BKYkQyeVArM01vRnp0eGVxU2RjbkN0cnV1eTltVVZqZTFWbVlFOTFaWnpHWDN6UElVeW9XYzlBOHNPWGN3WDNBZS9xR1pwRVQ5dVFlbXMzOUExRXFjUnlDbVk2RVp4eGppRWM1V3RWVVdxTzdSMTV4VnBPV3ZjMlI1cEpycVRRa3VqUXhaRVJ2N1oxR3dYWVozZnRMcWlEQnphdEVnbDhpSm11UkR1aFpzQ3luNVRRSUZERTlNVWdJcHQxYVhTekhTMDZvN05Ua3V6VXBrRkNCYUV5ajdjTmpvQ0U1U3lQME1Gek1wQXRMeldCRC8vWmZQbWFtaWNWb1BEa2dHbE5uTWRIZllEUVUzVkorNDZtaGt0RXZiRStzZ3BNR2k3YVBqMStWbjJPdHorTHJrTzFldkQvVjJtaVMrZjJkOWxraWFtdjZ0ZytWSjI3bFJWempxMFJhbXpuTVJwbDNzUnVtNWV2dGpsUkhaRjVlVkZVdWpBVTAwcW9uSm02cDRiYzdobWFjVXRaTmdtaCtmUDdMUzI1UWRxbnI4bFJtS0M2RGtOWEMzT01WUVkyR2dyaWdkZ215ZjJvRWR2QWZHY3pqc1NXb1diU05hMG1HNUZzdW9hYjBlS29EangwZXZRRkd0cnVjMVRyTDJibkswZldBMGtEcktvK1NBUDVicXJZVzhvOU1zZ2hWL2xnYi9LU0ViT1FUbDRzcVl2UWxjdG1IOXp3TUVMbnhHdkx1ZmcxV0hWYUFGZHBXdmdKWG5kRlJZcjVwOWF6T2ZBZ3NqR2laTXNFZkQ2azBQakgzN3hNMk9jT2JPTlIwNjliOWxXQldieU0rODVoMUtmV3I3cWIxaStxc0YrUUwyLytCa0w1UmF2ZUdIYnFzVVhUczFiZWJLK1gyMndZeHgvOWo4aElodW1IQkMwNHBqaXJYaWZVSDRsL2k5bkhoN3d3RStidVQ1RXdGanlaNW5LbU9KN2FCTFZlK3krN210QVdjNXVNYjVLYXlJaDBjaWZQY1NZdmZnR1QvdmMvOUtiR05CdTFwTlhUeW1wL1lwSzZCUnFqMlVtSjZrK0F2bzBiN2JRMFkvck5SbjExdEpJSUQ2QzlaRlQ1MUE5dCs1dnFWZmRjSk05V1g1dWhoZHhPVXhETjcvNk91alQvMEl4N3pzeWZoakhqMWl0UWtod3lwV0J0eUtjVEMxTnFJVDlkb1JRZVR4d2pSZ0VkUWFlMitFKytDYWN5N2Zsek1MNVE5WlZEMG50VXhueS9EWHBka1R4YTR3RGVaK2Z1RjlOT3ZEb1VEcVhERXI3S0xJZ0pOSDlmRE95VUNUZmhiODUvQ3I4elhjMFF2QnYrb1dta1FVZGVPUk55MTZJRXVtOGp2L082aVdpaUZ3R21zc3NSS1gwR2ZFcm5KenU5OFIvcFJONmpmT2E5eCtDTi8zQldKMFJVUHVRRzdQQXZ5KzlOZUZUMnFPVXdyeFQrbENkMG5lWmZOKzFUdWw5ZlVydjh5bEo5LzQ5UGlWSjhIZjRsQjdZcC9RSS9rUWZEMFdlS3dRaGNMUnZ3c3VHa1R6ZFpPczBpdERaLyt4SDVTWUVUMUpTZEVtd1QzMHE2UjZ5aXc4dUc5U1o1Y3RnbFh3RnZOemZrZmpuUDJBSmUzTWN2OHNTOWw0VVB4b25YNFh2M2tmUWVEeGdjTm1Td1hmaGdOOFp4L2NKU1JzVHNjZms2Mnh6eTBoM2I4TG5qZG5zSDVOU0w3ZWNSQS9pbnplaTh6ZVkzRDA0anZnTkJZZ2toWkpRNWxFeTM0YnpsRUw1R21lMjM0MHNvVVNFcW05SGxseitFQTU0NXdONHV4L3dVN3RSOHJ2K1VXN01jUzh2TDMwcVZ6SkRDbTI4K2pRcXQxTWxjVFhrUlJoTDJiajJ0bWltTVpodzVDVU5vOGVWWnduUVpHYURxRmhhOTRySXN5QU5UN3lodnhNTFgxVGorSHRqZ0twTktoU3prTHdXWks3THFodTlLdjZKNENRemp1enM4UDBGdTl4b3dYdXBheFJBTXFFN2xES3FFbmk0R3NVNXBCYmdzak9OZzBrbHppOVRlYTNkaE4zdkhjVERHaWFTQ011QWMrZnhmcXBTN0k1T2pZS3NNUjY3VThNZFZMdVJEVm1RQlVLVXhVQktLMmpPRVI2OS91azhlclZtMEF0Y2RvczJWYzZJTkZVbENhbUhNbWpSYTlzQ2F5clg0a1BDSURzNlByQ28xaklqdWVsaHM2TVVHTVNmSjhWc1hUaW1pc1lmZUZRNzVEc0N5aHJEcU9uVU1OakRPK1k3QWxDK0ZDMlBiYzZLOTFEeVh0TzVTcXhjSE9lTko1dXM3WUV2MStnY3VDbWxrWmRhR2wyR1JvRjNFWU9mRmNxaTFndlFMRXhoZGs0Z3p2aVM1TGJOaWJwdFFmWVFOaW5mMjFYK2NZRG1CUmdPcjJQWmZSQmhJZTY4TEF1ZFFNeUp1cENsdGNjWHNpallqSDZVZkJreDhjcUdadkZXN2NtVlVtOTE3U0dKYUhtM1ZqKzlFcTRON2c2UEgvemF3NHh4MGxsRnpiblU5SysxU0ZkdDB2U2NSVTEzR01tamFON0NVcnRMMWJXZkN4NUR3YVRKa09wcThaYkdVWXVvTVViZVpnRjZqU1FabUxISEYxYjBKVE4ydWR5NXkzMWFtMXdOM1VabTNHZDBxV051S3RqTmF5bE82dHRVQnhYSjN0QUdYRXQ2RVJDL29OTG1zNkRXSkIwVmdtTE41MDdQUUtTbzZPU1dRcWNnNmZNa3AyQStFWTVqS3p3OFdhVGtIOGxlUFlVcUczR0Y4cjVNaFozcTBld2hOZWhkTWNYMmlPSzBzalBhZWJoRVdZMGIvTVFOOWpJM3FhR1BLKzNVb1FHbWszcTI3OWVlTEpXQmhDV0hhdTRBOXd2TDlPV2wyYjh5SjVQM1hIL2hKL1kwaGFTWUdlNnlrSlFOeFZhWnVWUUtkSlZTb0RqbTFlaElETm1Cc01laDZoS2lpb2ZCMDk3RmN1b3JOemxiZDUxZ3RzY3ZyeXJFYTBVQ1B5UGtKc1ZORDduTTMxRzgrUi9GZEIvek0vZ0pBdlNQNDFjcC9wZWdkcS9OQjdVRGcvREF4bERWTXJoV1RZNERkY2ZBOUpodVR6bytCUUlWOTBrSlV2aG9JTy9JUHFEMTNNWEtkdkx5SHNYOUpKU3ZIbXJFSlEveTd1Rm5nTHp6d1RRdkRZSG5OeTlZTi9SY0xnYXg4UkYrVjhSM09ScVV2WDR0aHE2dW0ybVlvUVpQWVdqYW9qTjduZGNDcXRKWjNCb0UzM1FaNGxva3hSeTFuNnErV3R0YjI4ajRXTFVrU3ZhVitsaDBMb0RNRE95SDM1dTl0K3FNdmVVRFc5MlluVTRyUlJvRVVudXI2TDFWYzk0a3k0blg2dmVMM1orckwzNDdZNGREVmJyYmRqUUc3M0c2UmczOGEyb2ZhOTByVk5kRlBiRm02NG50SVN2U3lreUxrN0d2bktVcjFSN1R1OHRBOXpUL0ZvVHY0ekNtNTdleXNRNHhuOXFieUFzYjFISE9CajVFWjJaRGpyOU9XNXpyTjdDRC9pbDVMUjNadUlnS2x0VFlTM2RqVnJIQzlGVGRGYjl2OTBRWHlVMHJCVTQ0TmNRK0tpeS9jUWd3clRZTnBxSWZTL1ZBOHhOcVRWdmVuTWVzV2VJaVJyMW0ybXROLzNxV0hLYkE4eHkvM29QUnkrNGtjMlpKN29xL09uT2Zac1FsTHRNKzI3SW8zRmFZTzdoUGpvUnNISGthOVdqYSsyeVZyT3VMdkQybVpURzlSNU9MczhaK1gyQ1A3OWg3WEtROVZzS1BhZEJKWnFiSHFuZTZ5dmFwQVlLWTE0TFlpYWI1TlR2OXYrRkRQV1JMWDJvbloyYytsdWlGKzhnRnJweDlMeE9UTVMxbUtZREdwSXlYRTVveVJsSkVESHNTdGp6ZmNDQXhsZWRnTnM3b29mSXhISjk1aFo1VXBjR3BFTHBZeWErSWYwTmQzejJ1aGV4eTRtMkh0T1dpeEIxWklUOEN5MnpiMGJTM1Fxajh1MWRHMHhYQ1ZsN0JRK3BWazRHY3cxeERsMzV6UXU1OW1kc1pCMnVFSWcwS2htSFVlcmRZRUVYdFNmMW1TMEpOYjRlMStqazJneEt1NktMQ25LK2RlQ2hpeTA1dWM5Mjdva3cxaDlZeU9oWENWSzlMNWd4aUN0ekRwZGtJdlBpL3I3ejRnN0h5dSs0Nzk1U2Q2akhmclNqZXRHODMycXdtZTl3N3RBSXhwZXpuK0lKcUZKYlppNzJhdVp6c0FIUXpUbDYyQjF1N2ZPdkI0MXVkVEdmVmxlMWxiMEw0S0FWVGRDTU5UR1RQREx2ZEc3NTVVdE10QmdoQVgrcmkybVRuQm8xRmpzTlY1ZCs1K3NFTmJZb09hazNxUHBUOFFxRlA5eHB1NGtWdUNwN2N2aGFGYUNadlJsbVVONk9VYTVoTnJOUVRCQ3F4ZTlSOTFaODl5NW9HYUpvNTFlb0hpS3FZbTRYbDd0S21rVVdib29QWjdsSnFjMmtXYmVvdlFwdEd6WUlkT0pwaExuNXBkTWs1T1lleCtIc0t3VDIrb3dsa2VXK29qRURuck1ueE83b2FSRjZUMDJGYzd2UHkxY3B3azYvRlVhNE4xZndKbWppK1F6U295K3Jra0RrQ0tQT0V1dkVLV3JyY29tNG04RXVHazVjaWdPb1FDYXo3TDFYTWJNZ1Fubm4zaG1JWHhKSDRVOEp2bGdpWHUyeENEeDExdzJpNFc0aGdqczFtNXd2TUhBdmplRGpCNXJOdDFqaHJSdU5nVVFOeGMrR1hqTnJaSnJXelIreXlCUTR2dU1BSEdQVWhxYnJyZmFMbUxyY3Z4NGR6U1hXU1NoSjZaRnQyeU9ZRmF4N3gwcVRMNWlLVkQ4eDd2dkpZL0NIMWVVbm8rd0xiN3lIYjc4MG9nNmNxRms5OWhQVitub1FFdG5xeTB1M3dqQXVva1k4dy82ZFE1SHA2VW43d1FwUHkxMDE2aXZrcGRYY0VxMXFUa0RKMzhaQ2I3ZGt3VnNiL1I3NHlaOThoV2NCZUFycUhWdUxvVVdrTUM5bUhYR2JiMW9Yc01zMFFOVG5CSUlIMkFoZG9UeFd0R1dzdlR4ZTBwS3ZXNXZiQzR5VjA3VlJabWljZjlwZlFpVlZWMGI2NnZ6bmp1cENqVkZVczNSZzc4Z3FiNjVjcVg0V1hxbkY1TVJoT0hmeXA3aDdjWmgyMXd6Zm1kVzFXVTljTHRLaExhZHFpSUt5MWRZVWFDbmRBclp1S3NMeCtBZWRYMnpTLzJsWjNsODRCYU5odWdkdUVJelJDRFdITkI2UFZNamhLWGZCMlE1SjFQUk8xd1lmZ3o0QWM5bDRXcEdwQmVPL0FUeldpT0xXaXFYbC9kVC9OME1NdXROQ3ErODVva2VwWTI3Z1FGelFPYTFNZzBNRThoRkFQT3kwRE1UU3dlMVREVkF1YjZVaS9ZTC9tOXBsdWVyK0JmYVZueDkzdlVzWisxejdQZnExZXdpeUUxUG43eldmdlYrbmFGS29ycXR5QkNwbXdvblhiV0hOdk52T2V3dHR0dEhpTUppN1dQZ0kzWnNpcUZoVHZFK1IrZVVHYzJYYnJ3bTFmbndub2w5cittUjhGaEpsd0FubHZGc3JQMC95MTFPbW44elBlOXRVQlAxWldwMWd6NGVMTXpZZVgyWHc2blBRMjdlWnVMdVIwTys0Zml4OEoycEFOUlNEM25yNXdvc2tXWXhobHBoZXhhRlF4YzNIVUN5Q0c5Z2pjY3NvOUhWMk1ZV3BYenJ5dU96ZGo3S2FUVFZMRXh4OGtwQ0lYWm9mbXpYdHFuM1J6SFc3VzdpSk1JK3dnRmtHM3B1QzBIY1JCMys4MjkrYzRrSU96QU5YUFBBK0tZcERBNElTL0l2NllVZVo0RXFLbmtkVzN1ZWE4WjlJQVBtSjRMQ2NheTFIY3daaC9tNjRQU1lwVk9jUzRaZzJEZDJyVHdkMGhxYW1kRHU5M3I0YUdLcVFhSGdZaDhvcTVyS3ZubDFPdGdDdk9HSzJjK3JRRGZuVnkvcGtxVkIvLzdzTFFHYUo5bm9yNUorSWZhUzljSm9RaUd5c1QzU1NGU3JhTFFEQXFmZGVnOUYxaktGRXpWUUxQV0xWdFJxMjRBNlREdHVRMlN2UVczaWwwWjFzT2Z4SzJKc01ySkkwS1BObk93dGpNRG1Lek1UZjlnRzBPK21ZR0NxZExsMzl3SVYwNmhpNVZkUzNadEVwSW5WVk5seTVmWVcwYVByYVhITHJjYVdkUW8xT1poenFhSGI3K01paGk2LzExb3NxUGhjTGNWeVBtVEpVbEhjaGRseVFaMEtEWkNqaDlBMHF0RFhvS1lCVzN2VElnU3krU3BVV052ODlYRHREVWRNV2VHOXZRM3B3YnNkbzd0dTVmMHlwZGx5YmNQUWZDOW82ZHFGWHRuRFNNMDdlQ05lNS9LVlRIaXR6N251RUl6Z09ib1Z5ckhlTjBIRjk5bXVTM29raVZ2SGVpNmRWOXBNbFZ6REh1OHdndTUxR2RmZ3pDSXJpcVhTR0lXQitEdFR6a1pneWtHK3VlT1lRNnlXeHEwU08zV1VSelFsR1BkRm1FUzdGTlR2R09pVmR2U2U3NUVTRVNwYmxIeWxTSDJpKzZGTEJaUElRZ3ZRTUM2UjIwc0lVZWdSdVlpMjRNRUp0QjNWRndhYXplNjNibnhJYmRNWkVCM2pzelFQVzNyZ0pVdExvWjhzTTVqMzgyUTZzc2plVmdQZlYvZG5jam1zSWo5WEpNNm1WWHFwZGRWNzNzK3VwbHoxWENSdGxnVW1TM0twV3dsRHRXTnlsaUhYbXpYbG04a3lWd00vbkdGYmw1WEpQVGVFTE1NYit2OVUwN01reUR4bnlSeDJiS05EWlRzWldPb3NaV05HMFBGSDRzUjUzWU96RWd5elhJeTJ1cGtaRXV5enNXSks0ZTVOVjAwSk9BakdBbzV6MnRHQ3RNVWNHcDNnZFczVjRvN0pvL0Z0TU85a3JnSjVLTWRUWFhwYWRhaGdwTUdWM0xuazZvVHB0VXhtaldkYTJKZ0pZeDdZUFJCM29uUFFmS0p1bktZYWgxcmlPQ1MyNXdtQWN6Y1pqVDNRMGVMclByYkpJYXljMjhHelR0bi95TUpFYld2cmVNeEZqcDlsM3R4RzJSRXpjcjR6NXRVblcvaWVtSGw2VW5oK21ISVNlNjFqRG0yRFJYMzRCVm9xNHM1STI0Zm1GZWZRWmljc29DWDRTZG5HYU9VR1Q0SjM4eW15Nk5HWFNabFcyZjFxbW9YTStpUzFKdjZqdUg1OUNvc2VqQSt4N05kVlIreVhUeWZaYWZDS3R0QWxYSmhpYllraUZUbTJLQWFWc29qY0Z1cTh5K2M4MnExY2J0cjhIMk4vcE80eDVSNDhJVWUrYk9nem5ORkpmTXRuc1VDRkw1NGx2R2V6TnRabjIydjRVc3d5dTdLL29Pb1BqTHNxTUNWVWhMQVlGZ294bGRIVVYzaFY0U1QzeU9BVTdqaTErWUlUYmJYNUQ0bDZydDdzekJpRjVIUk1RVVJyUmtEUlhrOUFudDBoaVJOZ2YwdmNpL3FpRmZWUzUvbDRyajNUcGpyczhHajA1bjRoenNZRzFCemNCWHVzcnQ3dWY3TXpHdjViYlVmdklLMW1XNlJzbXJOYlFLYTA0aXNoeE5XeFM3dEFqNnVGVzhlRHQrb3MzRHhKNnhIU2ZQWXU5bmhQNWh4bjd3bXRhbVF2MUtidUd1dGhSeU16WlZaSUkzVTlzVDRqZGpNL2hMRWpUN2NWL2plTTNaVkhZYXpkbmNzMVF4ZmZZdU9aWndzTXJYeFc5bDc3U2pka29ITncrY1d1K1BBT1J4YzA5YXkyMHBsWFB4eXpkbTQ1Zy9TK0hFWmVHWlovWDFZM3owN3lnKzJqZElSYUdNaHBKN2ZIcHluM3NxWGtLSHBhUGJnOUZMMllmNFowZURjQjN5SmNVRGVMSXRKNWtRbEFqRG9oMUJGemhmcld3eDhNampoUUluVVEvckgxV0JDb3hJSXBKT3lmTHJXQ09aN01xS05lKzduSzdvS1hnSWM1OWR1a0hUcjJQWnVTb3pmQk40YlFkS1kxSE9SZzFMcC9NeUFsbGZ4Z3RKMk1ZMlZxYzh1anV2RzZQdjEwYXhqK3BscnlHalQ1VlJMdlJoalIyQm5MWjRwRFdPSEF5WDJTMFo2VHZBWjVaQTdYYnFXZDJCZGxxV3V3Ui8xWGZ4cTc2TFgvVmQvS3J2NGxkOUYzOXgraTV5R25jVE1mTnVpbTJockx2QlhLN0xxNTZLMUE5YllYelY1VFJBajNNL0NRUHorSmgrZVZrTU1xVkpZZWVLYnRLcC9KelFMenA2M2xaM0t2QmxseEwzWWhqWXpSdGQ2M1JhZ2VsR2lJYzFkU3ZzdGs3TFY3cDJnYXR6WFIzUXNQWVlEb2R1bGQyc255KzNaVWx6VUx0RXk0SjNTM3h0WnErQ2pSSXIreFN5MmhkY1lGbm43cXQxOFRzS1NWOVdiZE94anluYk5tWmNxR2VqNnR6SndOcEh1UEg2RE1UOU9kMElNbU9ZV1p0bmhuWGpocm43U3NkQTFyNmN5MDdkVGd6VmkvQlo5aldqNjRCQjcrZnRLejlyWHlQeDEzRmY1N2tjQVN1WEdMbC9WanprRnR5dndpNWVVdjBHVlZOeHgwdDlaUkFVWDYxUGUzVDFxZGxqYnVZZUw5TmlvSzZibmR0Z1FJR0UzMTVnMlNpT2ozNlVPbEV2TmtyM0Y2aERlMXh0M0dqSy9nSWRFb0YyVFcwMm5MZlptUzBGZGxFZ3U2RWdnMTNWSFNya2o0ekZQNXlIL285c3k3TndlS1d6MTB2U2M3UVhkZzV0OHFOTjR1WHNld0pRdVZVMnJaYWFXNWpUdTFhdHpHbXJNUGNDWE5oU293c0FvUUZObUhWaFFNNjlzMUVZdS9xQlJQWDZwWFVkM0Z2T3VJdDYrWEp0QjNtd1FIYm81Z3czNXF5elJUdjBCeGVjTHJvS2E0NnJNTytpaDZUUmt3T2VyUUlFK2YwN0ErVXYxSjVZN3NLTEhPbkZIVE51UGRBdyt1eUR6ZXlia3AxQzB2UFd3UWhpblpVbWR2WEM5Yjh4RjlXa1NabG1HeWRNcW5MQ3BDZWprUTQ3U0IwVzR3YkNEeWNETEpubjh1SEJ3WXc2eGJKVHU1RkRydmJBaVQxNG9pczJ5Z2k3Y1R0akx3ckhCK0VjNjAvMXphTThmZGluR3dIeHhBdEdUOHRMQWJ0bUNCRVRyVjA5eGxhVVkyeWt3VHZPRlk0ZDl3ckh5NmRjMVo3dm1McmRSWFdxZEg2VkQxL25md0kzeG5xZjdtcDJrTWN5bUIxVHFlWXVldmNXNTNqSWZ1SldKSHVqV2paaTRRWDNPZWN5MDFzWlBWRm43bGhSWHFSaHdFMXJWTTZaNi92enVXTlh2ODl0OGE2d0xzb3NSUTdtb1FMeU5QNUxXWE1VcWNhdTFhbFVyc1VOd2xXaGk0aTg5ZmxYVnNnV1l6OXRsWWIwUFBQeGJNVU00TnBmMkd2RXhkaTVOZWNLWWgwdThPOFdML2U3cVBBL0VkYnZhbnpWYStLQTdqREdxMlBMaXpURGVBMXhnYXY2VHR1YUxMVkswb3RrRWEvREM5MHVzQkZER1JxSDNRWE15M2hQR1ZnVnh1cnU2Sko4THh2RmtLR0ZTZ2hZcHpyUFRxdzdBVmY4OTdRUlR2WGQ0UXNZOGxydjZWd0hkdkY3ejMvUElQMmUrSTZMUHIrSEZyOHYydnhPMC81ZHNwYmtGUGljM3FwTnI1UUltTDVwZ1R0NjZZUU5SM3NzUzdsTVhjMWhINHZmUU9tcys1dVpjcm9ZNm5VenpSQlhwTXdEaGJSdUpOOWoxUTFjNWd1MlFFalZEVVFPSlk4OGMyN1VTZWF5WjkxdUlHZm5DM2pHdjd4MTF5NVlkL2FxZ3ptckp0NE1TVE9DOUw0aEhFTmozVjFIQXZKQ2Q5Yk5BTGdNL2V1RjBsMEwydjduVkI3a2RaS1pZblZDSzZOTGhoalJ0SlcrYk0xQ1Y3RHVHK0pGY1FKc2ZaWEpwNytxd21ab0toRlpGeUJvV2kxZWRCOVdqOG91ZkFFV1hiQ0djUEFNTXZKNTc4TTZ1UURvL2VTQys3Q3ljUi9RUjEvZ2ZmMC92cjhxQyt6VEJmbWNlWDlWZUFuY1FMNzk0MStMZU13MXRTMUNjYnpMMWJYalNYclcvalRLdmdOa1Z5T2tua2JUWGVvNzNKVlQ5eTVBcWtUTjJ0K3QxVCtDeUFMQzVSMnFxR0dTRXNLT0R1ZTNIamRreUtIN3BFYmVkZHRabUJFMlZMc3VFTlZTT1Z2akdlbjc5cXlhNnFmQ2VHTzV1ZE5OZkZHaTRabTg2b1A0UHQvZldKbE16a05LcThndmNWaE5oTXgrZ3c1c1BWVXRRNjJtcW9uTHE2MHRxVVVaWm9tbVc2UEpYVlgyejhkV1ZoL3JwbGRiL2x1VVYwRFlXQXdxd3VKZXNFSytrSWZmZVprajVQTWdUeXV6dmcrdzVnZnFKVWVMa1YrU0JkSWs5MnFyTmZ3RC8vc1RGeE5tWGZ3VndYM3h5RkR0MUZYc2ZWSU9lVllPMVdqYW8vaWtoNFN3akM4bVhibzlrL0p2MWVJeXRaU2gzZlZ1WmZldWdiQVIyZFhIdWczUGdDcnNVK3UvVTFOM0VEbzRsUkE2L1M0ZlVqUlNvZDNWZVhlZENHOW5MOG5kdFdoM1RlNGhTQjB6WHEyaHNrck5sb1dZc2paelM5NVdBdnQyQWRrSHA3Y1NhanVuTm9XbzJmYUdTRi84WCs3a2MvQUFBQUI0Mm1OZ1pHQmdZR0pnY0NyeGNZam50L25LSU0vQkFBSVgvbDVqUmFZNUdEZ2dGQk9JQWdBRStRaDJBSGphWTJCa1lPQmcrSDhEUklJQWtHUmtRQVV2QURvS0F0b0FBQUI0MnExU2lRMkFJQXhzRDJJY3pCVWN4SEZjd2RrY3doS2ZuQTJnR0VtT2xpdjBTZ0dyREdLanZ3Q0QwcHA1amlrQnRDOTNOcGRMWFM1NUNXM1EwZ29IZDQva2g1ZWFUM1Zyd2ZvZWhNd2VaTFJDUWRkeklBdTZEM05vN1BkVGY5WFYwZklXOHZFUC9LbGZ6eHNQN3JSWURHWjFQSkQ4MmFaSkNyWDR2dC9mT1owOVl5RDlMdTYreUFZVGhBdUNBQUI0Mm1OZ1lOQ0J3Z0tHVll4V2pGZVlqakRuTVU5Zy9zQVN4UEtDMVlhMWlIVUM2elkyRjdaTDdETHNkZXlmT01JNDluRTZjTTdqY3VFNnh2V1AyNC83RXZjZm5oYWVGN3hWZkF4OE5mdzgvR1g4K3dTWUJEb0VyZ2txQ0NZSW5oSDhKeFFsdEVTWVF6aEQrSTlJbmFpQXFKL29QREVPc1RTeEwrSXU0bFBFVDBsRVNQUkpISks0SThrbm1TZDVUVXBHcWtMcW5yU0Q5QllaRHBrNG1SMnlFckpSc3R0ay84Z2x5TzJSRjVFUGtWOGsvMDNCUm1HU3dpZkZCTVZUU254S2RVcUxsTVdVeTVRM0FPRTNsVDVWTHRWVmFoWnFSZW82NmhFYUpobzFta2FhS1pwTldnVmFmVnFQdEYyME83VFBhUC9UaWRGNW9jdW42NkxicGZ0RWI1bCtoVUdZb1p2aEtpTW5venZHRlNZS0pzZE00MHp2bWMwd1p6TXZNMzlsRVdKeHd0TEtjcDZWZ05VcWF3ZnJjelpSTmc5c0creTQ3TmJZZTlnZmNMQncyT2RvNXJqT1NjQnBpYk9COHk0WEM1Y2JybEd1bjl4SzNMNjROM2lJZU16d2xQSnM4bnpsRmVkMXdydkErNDlQbDYrWTd4dy9HNzlqL2h6K3N3TFlBb29DM2dYR0JiNEk4Z202RXV3VmZDTEVJYVFrNUF3T2VDL2tReWhUcUVLb1hXaEY2S2JRTjJFZVlVdkNHY0s5d3FlRlQ0dGdpaWlLS0lxVWlheUtYQlFsRUZVRkFPdEluM2tBQUFFQUFBRHBBR3dBQlFBQUFBQUFBZ0FCQUFJQUZnQUFBUUFBNHdBQUFBQjQyc1ZhMjI0YnlSRnR4WnNBYVNCK1hBUkdIZ2FLRUt3QmlyYTgzZ3Y4RkVhaWJHRXBVaXRLNnl5UWgvQXFqazNPTUp5aHRNeTM1QnZ5bkM4SWN2bUN2T1pMVW4ycXVxZDdPTHlzazJBaFVHcjI5S1hxMUtsTDkwZ3A5Vmo5V1QxU0J4LzlWQ24xSi9wdyswRDlncjV4KzBjMDVpL1NmcVJ1MUYrbC9aR3FIVHlSOW8vVms0TnphZjlFL2Z6Zzk5TCsyZUc3Zysray9WaTkvT1cvcGYwMzlmSFJ4OUwrdTNwK1ZKUDJQOVRqbzk5Sis1OUtINzNqOXI4ZXFTZEh1ZnBFRGRSVEZha1g2cms2b1o5SW5hcFVEZFdLV29mU0hxbEwxVk9KK2xSOVNYMlIrZzMxeGlxam1WUHFqOVZDMWFuM21zWk42ZE9qSnlPYUZha2x6VEd6RjlUTzFZUmFrZXFxQzlXaXZ4MDFwKzhKdGM1cHRZU2VSOVFmMDVxbTE2eFFWMWMwYzBUdERQTnlXbm1CY1Mvb2lkbnRqbmFZb3RldVlmNHVxSCtFVVhYU0tWS3Y2TE50SlI1eFF1MWo5VGw5TEJMYjU0VDdmd010TTVJL2hVNW03eFAxTXRpNVdNT3NZSkNkRThvTG1uTkgySmlWeTdhb2ZhQTFlQ1dlOTJ2MVI4ZzB3dmc2V2pudFVsTmFQZEJvWXhmV0pvTU85Mks3d2lwdFduVUdSS3NScWROS21qZzhnUlQrekM2MXh0UjZ3RWl6QW8rWUJuYis3NWxpY0NwYjRBUVdxQWVTaGZ0YWFRYXdSQ3lTOU1IaWxHUTJxL1lnbHgzWm95Y1pQVE90ZTJCdEVPK0Q5WkdIWmcreU50VFhhT2ZFTHcwTDU3VFBLL1dNZm95MWpPWG4xSmVSbEJuV3FndDduNUhPNTZTanhzL3hEL0tqUGZ5dlZKTllZSFRxME44YjRIOUJiRFM5WGZxOUNmMkkxakZzL2h4elI0VFVnaXh0dUxBU2xqOVhYL3lBR21yRWtTWlo2cEs4cUVVdFpvdXg1aDFwd3ZhT3dPS0NsN3Y1YVB5UExmZ1VER0R1NTJCT1JuOWo4aWVPSExrd3g5aDlTa3d6SERKK29QSDdYcmc0aC8veFRpeUw0ZXhVMkdmbTlyRHFQVlliTzZubTlDUlY3NmgzQUo3VlBDbVc5SFNPdWJtbld6RjNBS2w1WGRPbjZkc1l6eGRZeTByU281RTlTRHNEQm9YUEdHOUxFQ05qMFhvZ2tzK2dmd0ovaVJGUmZGOWpDVm4yZThHRGZXb01tVVp1ckFZMmJJc3hVREE0TVpydjRiVUowSjFnNzRtbm41Ri9SdU5YNHZFR2tZbFlhaGo0L2N4Sk1wS2VCTkp4N0V1RTl4UDRzaDlSVThGMEFmL1dIck9ZR1J4Tk9OSmtuZ1hXWTZNdk0yUERFaTlsUkUxWXRhUjI3SHBtaVA4eHpZNERuYlRveURZeE1haFBNM08zRnlNOEJUSTlpWm9wN0dpL3M2UXJqOWtKdEkwUUc2Y1NSVmR1NUF4eVRvRmdoa3FCa2RDZVpqVkIxdVF3MXNQdW1HQWx6ZzB4b203QmRHdHBuai9BYUl0T1gzTEsxQ0ZpSk9uajI5RDFiVWVERVh1R1hYenQvRWpQOG1Wcm1TN2s3MURRNkFFbk8ydFJ5cnFhK3BuRFdRVzZTOGVJL2w2WUZFaUhITExjcnBxZm9TNllnSlVjZnhZZXRsWVNSbml4dGQ2ek9oWitZQkJZd1Y5dDdKaVc2cjJDR1didFB5QnlMR0EzRy8zR1lvdDFuK0J4UGZIUGNqMVJuZitITkpPeHRwcjFFQlVOKzdXc1d6QXdwYmxMVDVZaVFscnRNOGZidkFMMzFLdHV1RXFydGdCSGl6UEtSdWVVWmR2MHVhRlBCN2xXVThXM3ViNDZGQnpHRW5jc05sYWFETFdmUlgrTW1vUDFYN2VsNzhGUlJiV3ExUnZ4QjdQWEp6VHY2ZDY0V3dZT1pNK0Z4SnNaMnUrZDkyV1NxVXpzdHV5SXZkaXRnNWd4RWo5YzBob0RRZDlxV0pPSUVJc0hoL1dYN3hPaGxZdjh4MVk1M0t0UzNtUUh5eVhmeXpONHhLQVVxWDNOemZjeFdGYndSMHZWR3A0Zk1wRzQ4QmkyaTVXOUk2TmpTREJkcTl0MjhjZFdIVnhQMkZxUDJiU3Q2dWVjUDVkelNCR0hNdFE1MWJGM0YvK2lDdjVaUFMvWGN0OStlbTdQTmpPcGM2eHNQV1NTd3VOVHNHd29ucFRMa3hxcWxJWFlzeStWVUE1TjdkeGoxTWxoWldIalJWSERwSExPNE5GRmZCMlhMTFNPdEQ5RzcyUkJ6V2s0UU1aS1pPeWRpNzh6NEZMRU5CNXRxOGx5RE56R0RJdTdocndQeU5JSnN1WUNzeXlQcldVYndHMkNuZmF4WWdaTkU1ZkhSazZia2V2alRIMG45ZVBNOWVmZytRUjE2Z0JJbWZwdUFldXhMNmJ5dThod2M1RWw5YXpHVmtrcU9CNTYxMmFjNm5KV2FWTDB1YVJjME1YWnJJTXoyYS9nSGFaOVZzb1VWNUJsQnY4cVRtWWNQMW5la1ZpT2RVOUVybHBRYWR2ekJsZkhkM0xhRHBFT3RVNXAxVnd5TVhOQm8zcTNFYXZNMmMxNkZ6c3QzVG5mVnJvcnFVdDRUYTU0UjU2RVJiVVhWc01yZU9TbXFzOC9oM0RWT3QxU1MzTytXMzlhM0Noa0c3WFZsZHB5akxBbnRqSkR4aEovVTFTZzdHWE1yYUdjcFZMazJGZmd5d2t5Y2h2VmhsK0Q3ZmJLUkpnZHhwaFlmRDZXL2JpMlhVb01xWW84TmNuUVVVWE00UjEyUmVwTXJCZWUxTUpUQnN0bGJEVVdUM2tCelQ5OHovMFpXcGF0Zk9yNGY1MHZhanRPR0NPY3l5ZWVoMmdYaGRnei9UTW4zeUxjdXd4U3pyUmNIY2RTVlJYbjlPcjZycWpqTTFteE9KZVZLN1loWlBYNWFXdWZYUFk1aHUyWVZSeVR2NU9UZ0YvYlRWQ3ptUm5IVXBVUHZadTVpZlRZUEdId3Rzd3NNSmdMb25Qb2J1OW1ab0lrNTR5cTFXZkk5dHlYeXoxRkRENE9zWnUxcHQzUGFzQlM5SVdmZkNmbTErU2JUOStwSUJ2dUU1NS91WmFQcGJLK3g4aUh5dHBxS2ZVcys4Nm5FalhTUFR6bFEveGtLYkxiT1p2cmFlM3FhZjkwTVhVMzBBYkh1WEF2eHE0Mk8rZHlKelRma2dIRG5GZkdaQURyOFBsODdpSXM1N0pkdFdoNFV1RTEyUGZEcWpseHR5eHowV05VVVhNekcyY2VReXpHaWJ1WDUwcDY3dTRUa2cwVmhyVzBQV08rQktyMmppQXBvUjNhZHI4S1BEemxSa0c5VnIzdTVueG83K1E0QjRkM0Q4VmRpSDliT01PWWthdjBodGcza3pwbUlUVTczMnJrc00vSXhWaTlrKzAxNFp5SmRITXZPNXY0OEI3eVBVamN2d3NZdmw3OThYcFZlT2k5Y2ZhajhHYWtGMEUyOGU4ZWRubVBydlFlNXMxbkFXKzIxMi9yMVJGTFZWVTUxZlkrQlpuTU9nTUxDazVzeXJMc0Q3SGNjYXoydktYd0s4RmlKNStGbTgrdXUrN0JOdVhMNkh2ZmUrbi8rYjFYOUQzdnZYVGx2ZGV1czh5Tk84dTBpYm4yMUxMdFhWMGZOWEhxN2swU3ZFR1plbGE2eDN0UXZxTWZiendobDJ1ZGN1MXM3MTIxdzRienU3MlZNNmV2VTlVaXFTOUlmcU9Ga2ZvTjNvSVY3OGU2dU9XL1VXOXAzRFdlbVhrUjNqZDFLSzVjNEg3dkRHOTFHM2hpbmgrQ2RXOXhqbnRENDI2eEZxOXhUYi9OMnQvS0c0UUkzODIzcjREaUdYeWlxWDRyNzdTNldMVkQ3UWlTWHVHZFhSUGpJc3d3V3R4Q283WjZqZmZJdkYrYlp0bDNmSmVRaFNXOW9mNWkxMUNxQyt6SWttbkI1WlIwNEtjTld2c0M2eG41YTBES3ROdE96bk9SdEFHTXpNbzNlTU40QzZTdjBYdExmNjlvSEw5eGJFQm5scllOSGM3cE9ldlNoQVJtWnkxWW5lSXQ1cmNZOFpya3VvRVVWK0FlajZ4QlE2UFBHZWFiWGI5Q0wwdldFU3RmbzJheHE5UUZTNVlqb3VmZnlIcUdBMGIvRnQ3MThGeGRJVWNFUzdldzZ6V3MwQlRzRy9KTzBrZUhzUy80WitRN3cvdkxCdlR1VnNwclYvTnRvQ3M1WUhkNERTMmF3S09GWGJxNGZ6akZTaTNISVRQekd2MDNIcStZM1d6NWxvZmhxZHhOTk5YWHRHdFRtTlBBbSs1UUMvWURJMytoQmVQY2tOK25MbXBFbm8zYllzTlRaOUVPdUxTT3lsdDRYQk9qR3JCSFYxRFFZRkpIMExWZXlIdFlUNzhWRm5hY1pDRysxbHZzdUgwaUJLOWw5OWFCQmMvd2xyb2xFbllkR3J2WHJYL1FmeDY4eGQxUVVXdWU0SDlwdXNndjlsMStSRDlmNGozK0MxcjdCTCtmVTIxZy8zL2xNMlNpTWNWVEU2bHo3TUJSMXM4T050c2hPLzhIcS9nM093QUFBSGphYmRCSFRGUnhFTWZ4NzhDeUMwdnYzZDdydnJjc0MvWmQ0Tmw3NzZLd1JSRndjVlZzYU93MUdoTTlhV3dYTmZZYWpYcFFZeS9FRXZYZzJSNFA2bFVYM3QrYnY4c25NOGxNSmtNVXJmblRqSS8vNVJOSWxFUVRqWVVZck5pSUpRNDc4U1NRU0JMSnBKQktHdWxra0VrVzJlU1FTeDc1RkZCSUc5clNqdlowb0NPZDZFd1h1dEtON3ZTZ0o3M29UUi82NGtCRHgwa1JMb3B4VTBJcC9lalBBQVl5aU1FTXdZT1hNc3Fwd0dBb3d4ak9DRVl5aXRHTVlTempHTThFSmpLSnlVeGhLdE9Zemd4bU1vdlp6R0V1ODZnVWk4UndqSTFzNGliNytjaG1kck9EZzV6Z3VGalp6bnMyc0U5c0Vzc3VEckNWTzN5UU9BNXhrbC84NURkSE9jMUQ3bk9HK1N4Z0QxVThwcG9IUE9JNVQzaktzOGlmZkx6a0JjMmN4YzhQOXZLR1Y3d213QmUrc1kyRkJGbkVZbXFvNVRCMUxLR2VFQTJFV2NveWx2T1pGYXlra1ZXc1lUWFhPRUlUYTFuSGVyN3luZXVjNHp3M2VNczdzVXU4SkVpaUpFbXlwRWlxcEVtNlpFaW1aRWsyRjdqSUZhNXlsMHRjNWg1Yk9DVTUzT0syNUVvZU95VmZDcVRRNnE5cHJBOW90bkJ0ME9Gd2xKdTZEVk9QUTZuNlhsM3BWSmEycUVjR2xacFNWenFWUlVxWHNsanBWcFlvLyszem1HcHFyNmJaZlVGL09GUmRWZGtRTUZ1Nlllb3lMQlhoVUYxcjRUTEtXalM4NWgwUjliL3kxcHN0ZU5vdHlyRU9RREFVUnVIZWxqSWFySkthNzJ1b3hTS21OdkVjVmhZanovTFhKRjZPUnJxZEx6azN2VHZvRUFQSzBRV2kwNGRlczJ0UitRSDFGR1B6RFRUUFRvQ01oZUlPMHRpTFNzay9WSVFzRXJJSWxVREkwNitOZlVTK3ZrSnlVUDNDblVmTkgrRGFJeGdBQUFGVTJDV0dBQUE9KSBmb3JtYXQoJ3dvZmYnKTsKICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7CiAgICBmb250LXN0eWxlOiBub3JtYWw7Cn0K","base64");

module.exports = function () {
    insertCss(css);
};

}).call(this,require("buffer").Buffer)
},{"buffer":6,"insert-css":117}],117:[function(require,module,exports){
var inserted = {};

module.exports = function (css, options) {
    if (inserted[css]) return;
    inserted[css] = true;
    
    var elem = document.createElement('style');
    elem.setAttribute('type', 'text/css');

    if ('textContent' in elem) {
      elem.textContent = css;
    } else {
      elem.styleSheet.cssText = css;
    }
    
    var head = document.getElementsByTagName('head')[0];
    if (options && options.prepend) {
        head.insertBefore(elem, head.childNodes[0]);
    } else {
        head.appendChild(elem);
    }
};

},{}],118:[function(require,module,exports){
arguments[4][65][0].apply(exports,arguments)
},{"dup":65}],119:[function(require,module,exports){
module.exports = extend

function extend(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (source.hasOwnProperty(key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}

},{}],120:[function(require,module,exports){
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

},{"./input":1,"./slides":2,"./state":3,"./update":4,"mercury":28,"press-start-font":116}]},{},[120]);
