var Song = require('nesly-sound');
var song = Song();

var sq = song.square1;

[2,3,4,5,6,7,8].forEach(function (o) {
    var note = 'C' + o;
    sq([note]).timing(1/4);
});

song.done()
song.write();
