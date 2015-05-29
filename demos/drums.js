var Song = require('nesly-sound');
var song = Song();

var noise = song.noise;

function loop(n, fn) {
    for (var i = 0; i <= n; i++) {
        fn(i);
    }
}

loop(16, function (i) {
    noise(['$0F']);
    noise(['$04, $06']).timing(1/16);
});

song.done()
song.write();
