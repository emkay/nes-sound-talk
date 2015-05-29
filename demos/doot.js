var Song = require('nesly-sound');

var squareMusic = [
    'Ab1', 'F1', 'C1', 'G1',
    'Ab1', 'F1', 'C1', 'G1',
    'Ab1', 'F1', 'C1', 'G1',
    'Ab1', 'F1', 'C1', 'G1',

    'Ab2', 'F2', 'C2', 'G2',
    'Ab2', 'F2', 'C2', 'G2',
    'Ab2', 'F2', 'C2', 'G2',
    'Ab2', 'F2', 'C2', 'G2',

    'Ab4', 'F4', 'C4', 'G4',
    'Ab4', 'F4', 'C4', 'G4',
    'Ab4', 'F4', 'C4', 'G4',
    'Ab4', 'F4', 'C4', 'G4'
];

var square2Music = [
    'Ab2', 'F1', 'C3', 'G1',
    'Ab2', 'F1', 'C3', 'G1',
    'Ab2', 'F1', 'C3', 'G1',
    'Ab2', 'F1', 'C3', 'G1',

    'Ab3', 'F2', 'C4', 'G2',
    'Ab3', 'F2', 'C2', 'G2',
    'Ab3', 'F2', 'C4', 'G2',
    'Ab3', 'F2', 'C2', 'G2',

    'Ab4', 'F1', 'C3', 'G2',
    'Ab4', 'F1', 'C3', 'G2',
    'Ab4', 'F1', 'C3', 'G3',
    'Ab4', 'F1', 'C3', 'G3',

    'Ab2', 'F1', 'C3', 'G1',
    'Ab2', 'F1', 'C3', 'G1',
    'Ab2', 'F1', 'C3', 'G1',
    'Ab2', 'F1', 'C3', 'G1',

    'Ab3', 'F2', 'C4', 'G2',
    'Ab3', 'F2', 'C2', 'G2',
    'Ab3', 'F2', 'C4', 'G2',
    'Ab3', 'F2', 'C1', 'G2',

    'Ab4', 'F1', 'C3', 'G2',
    'Ab4', 'F1', 'C3', 'G2',
    'Ab4', 'F1', 'C3', 'G3',
    'Ab4', 'F1', 'C3', 'G3'

];

var triMusic = [
    'Ab1', 'F3', 'C1', 'G1',
    'Ab1', 'F3', 'C1', 'G1',
    'Ab1', 'F3', 'C1', 'G1',
    'Ab1', 'F3', 'C1', 'G1',

    'Ab2', 'F2', 'C2', 'G2',
    'Ab2', 'F2', 'C1', 'G2',
    'Ab2', 'F2', 'C1', 'G2',
    'Ab2', 'F2', 'C2', 'G2',

    'Ab1', 'F4', 'C4', 'G4',
    'Ab1', 'F4', 'C3', 'G2',
    'Ab1', 'F4', 'C3', 'G2',
    'Ab1', 'F4', 'C4', 'G4',

    'Ab1', 'F3', 'C1', 'G1',
    'Ab1', 'F3', 'C1', 'G1',
    'Ab1', 'F3', 'C1', 'G1',
    'Ab1', 'F3', 'C1', 'G1',

    'Ab2', 'F2', 'C2', 'G2',
    'Ab2', 'F2', 'C1', 'G2',
    'Ab2', 'F2', 'C1', 'G2',
    'Ab2', 'F2', 'C2', 'G2',

    'Ab1', 'F4', 'C4', 'G4',
    'Ab1', 'F4', 'C3', 'G2',
    'Ab1', 'F4', 'C3', 'G2',
    'Ab1', 'F4', 'C4', 'G4'
];

var song = Song({
    tempo: {
        square1: '$57',
        square2: '$57',
        triangle: '$57'
    }
});

song.square1(squareMusic);
song.square2(square2Music);
song.triangle(triMusic);

song.done();
song.write();
