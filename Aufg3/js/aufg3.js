var Aufg3;
(function (Aufg3) {
    var Deckarray = ["r0", "r1", "r1", "r2", "r2", "r3", "r3", "r4", "r4", "r5", "r5", "r6", "r6", "r7", "r7", "r8", "r8", "r9", "r9", "r<=>", "r<=>", "rx", "rx", "r+2", "r+2",
        "y0", "y1", "y1", "y2", "y2", "y3", "y3", "y4", "y4", "y5", "y5", "y6", "y6", "y7", "y7", "y8", "y8", "y9", "y9", "y<=>", "y<=>", "yx", "yx", "y+2", "y+2",
        "b0", "b1", "b1", "b2", "b2", "b3", "b3", "b4", "b4", "b5", "b5", "b6", "b6", "b7", "b7", "b8", "b8", "b9", "b9", "b<=>", "b<=>", "bx", "bx", "b+2", "b+2",
        "g0", "g1", "g1", "g2", "g2", "g3", "g3", "g4", "g4", "g5", "g5", "g6", "g6", "g7", "g7", "g8", "g8", "g9", "g9", "g<=>", "g<=>", "gx", "gx", "g+2", "g+2",
        "s+4", "s+4", "s+4", "s+4", "sw", "sw", "sw", "sw"];
    function startgame() {
        var o = prompt('Enter any value of cards');
        var p;
        p = Number(o);
        for (var i = 0; i < p; i++) {
            var randomnumber = Math.floor(Math.random() * Deckarray.length);
            var color = Deckarray[randomnumber].substr(0, 1);
            var number = Deckarray[randomnumber].substr(1);
            starthand(color, number, i);
            Deckarray.splice(randomnumber, 1);
        }
        function starthand(_color, _number, _i) {
            switch (_color) {
                case "r": {
                    _color == "#ff0000";
                }
                case "y": {
                    _color == "#ffff00";
                }
                case "b": {
                    _color == "#0000ff";
                }
                case "g": {
                    _color == "#228B22";
                }
            }
            var canvas = document.createElement("canvas");
            canvas.setAttribute("id", "Karte" + _i);
            document.getElementById("Karte" + _i).innerHTML += _number;
            var s = canvas.style;
            s.backgroundColor = "_color";
        }
    }
    document.addEventListener('DOMContentLoaded', startgame);
})(Aufg3 || (Aufg3 = {}));
