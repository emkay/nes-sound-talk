var ns = require('nesly-sound');

var square = ns.square;
var square2 = ns.square2;
var triangle = ns.triangle;
var noise = ns.noise;

var CMajor = [
    'C4', 'E4', 'G4'
];

square(CMajor);

ns.done();
ns.write();
