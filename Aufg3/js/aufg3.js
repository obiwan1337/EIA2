var Aufg3;
(function (Aufg3) {
    var Deckarray = ["r0", "r1", "r1", "r2", "r2", "r3", "r3", "r4", "r4", "r5", "r5", "r6", "r6", "r7", "r7", "r8", "r8", "r9", "r9", "r<=>", "r<=>", "rx", "rx", "r+2", "r+2",
        "y0", "y1", "y1", "y2", "y2", "y3", "y3", "y4", "y4", "y5", "y5", "y6", "y6", "y7", "y7", "y8", "y8", "y9", "y9", "y<=>", "y<=>", "yx", "yx", "y+2", "y+2",
        "b0", "b1", "b1", "b2", "b2", "b3", "b3", "b4", "b4", "b5", "b5", "b6", "b6", "b7", "b7", "b8", "b8", "b9", "b9", "b<=>", "b<=>", "bx", "bx", "b+2", "b+2",
        "g0", "g1", "g1", "g2", "g2", "g3", "g3", "g4", "g4", "g5", "g5", "g6", "g6", "g7", "g7", "g8", "g8", "g9", "g9", "g<=>", "g<=>", "gx", "gx", "g+2", "g+2",
        "r+4", "r+4", "r+4", "r+4", "rw", "rw", "rw", "rw"];
    var o = prompt('Enter any value of cards');
    var p;
    p = Number(o);
    for (var i = 0; i < p; i++) {
        var y = Math.floor(Math.random() * 107);
        var color = Deckarray[y].substr(0, 1);
        var number = Deckarray[y].substr(1);
        startHand(color, number, i);
    }
    if (_color == "r") {
        _color == "#ff0000";
    }
    if (_color == "y") {
        _color == "#ffff00";
    }
    if (_color == "g") {
        _color == "#228B22";
    }
    if (_color == "b") {
        _color == "#0000ff";
    }
    var canvas = document.createElement("canvas");
    document.hand.appendChild(canvas);
    var s = hand.style;
    s.backgroundColor = "_color";
})(Aufg3 || (Aufg3 = {}));
