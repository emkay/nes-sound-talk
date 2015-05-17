var Song = require('nesly-sound');
var song = Song();

var tri = song.triangle;

[2,3,4,5,6,7,8].forEach(function (o) {
    var note = 'C' + o;
    tri([note]).timing(1/4);
});

song.done()
song.write();
