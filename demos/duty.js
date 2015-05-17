var Song = require('nesly-sound');
var song = Song();

var sq = song.square1;

[-25, 0, 25, 50, 0].forEach(function (d) {
    var note = 'C4';
    sq([note]).timing(1/4).duty(d);
});

song.done()
song.write();
