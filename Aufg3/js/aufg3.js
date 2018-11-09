var Aufg3;
(function (Aufg3) {
    var deckarray = ["r0", "r1", "r1", "r2", "r2", "r3", "r3", "r4", "r4", "r5", "r5", "r6", "r6", "r7", "r7", "r8", "r8", "r9", "r9", "r<=>", "r<=>", "rx", "rx", "r+2", "r+2",
        "y0", "y1", "y1", "y2", "y2", "y3", "y3", "y4", "y4", "y5", "y5", "y6", "y6", "y7", "y7", "y8", "y8", "y9", "y9", "y<=>", "y<=>", "yx", "yx", "y+2", "y+2",
        "b0", "b1", "b1", "b2", "b2", "b3", "b3", "b4", "b4", "b5", "b5", "b6", "b6", "b7", "b7", "b8", "b8", "b9", "b9", "b<=>", "b<=>", "bx", "bx", "b+2", "b+2",
        "g0", "g1", "g1", "g2", "g2", "g3", "g3", "g4", "g4", "g5", "g5", "g6", "g6", "g7", "g7", "g8", "g8", "g9", "g9", "g<=>", "g<=>", "gx", "gx", "g+2", "g+2",
        "s+4", "s+4", "s+4", "s+4", "sw", "sw", "sw", "sw"];
    var handarray = [];
    var stackarray = [];
    document.addEventListener('DOMContentLoaded', startgame);
    function startgame() {
        var button = document.getElementById("sortbutton");
        button.addEventListener("click", sorthandcards);
        var deck = document.getElementById("deck");
        deck.addEventListener("click", drawcard);
        document.addEventListener("keyup", hasspacebeenclicked);
        var o = prompt('Enter any value of cards');
        var p;
        p = Number(o);
        handcardgenerate(p);
        place_cards();
    }
    function randomnumber() {
        return Math.floor(Math.random() * deckarray.length);
    }
    function handcardgenerate(kartenanzahl) {
        for (var i = 0; i < kartenanzahl; i++) {
            var randnumb = randomnumber();
            handarray.push(deckarray[randnumb]);
            console.log(handarray);
            deckarray.splice(randnumb, 1);
        }
    }
    function place_a_card(i, divID, auslesearray) {
        var cardtyp = auslesearray[i].substr(1);
        var cardcolor = auslesearray[i].substr(0, 1);
        switch (cardcolor) {
            case "r": {
                cardcolor = "#ff0000";
                break;
            }
            case "y": {
                cardcolor = "#ffff00";
                break;
            }
            case "b": {
                cardcolor = "#0000ff";
                break;
            }
            case "g": {
                cardcolor = "#228B22";
                break;
            }
            case "s": {
                cardcolor = "#000000";
                break;
            }
            default: {
                break;
            }
        }
        var div = document.createElement("div");
        div.setAttribute("id", "Karte" + i);
        document.getElementById(divID).appendChild(div);
        if (divID == "hand") {
            div.addEventListener("click", discard);
        }
        if (divID == "stack") {
            div.setAttribute("id", "Marte" + i);
            document.getElementById("Marte" + i).innerHTML += cardtyp;
        }
        else if (divID == "hand") {
            document.getElementById("Karte" + i).innerHTML += cardtyp;
        }
        var s = div.style;
        s.backgroundColor = cardcolor;
        if (cardcolor == "#000000") {
            s.color = "#ff99cc";
        }
    }
    function remove_divs(divID) {
        console.log(divID);
        document.getElementById(divID).innerHTML = "";
        console.log(document.getElementById(divID));
    }
    function place_cards() {
        remove_divs("hand");
        for (var i = 0; i < handarray.length; i++) {
            console.log(i);
            place_a_card(i, "hand", handarray);
        }
    }
    function sorthandcards() {
        handarray.sort();
        place_cards();
    }
    function discard(_event) {
        console.log(handarray);
        var clickedcard = _event.target;
        console.log(clickedcard);
        var cardIDstring = (clickedcard.id.substr(5));
        var cardIDnumber = Number(cardIDstring);
        stackarray.push(handarray[cardIDnumber]);
        handarray.splice(cardIDnumber, 1);
        console.log(handarray);
        remove_divs("stack");
        place_a_card(stackarray.length - 1, "stack", stackarray);
        place_cards();
    }
    function drawcard() {
        handcardgenerate(1);
        place_cards();
    }
    function hasspacebeenclicked(_event) {
        if (_event.keyCode == 32) {
            drawcard();
        }
    }
})(Aufg3 || (Aufg3 = {}));
//# sourceMappingURL=aufg3.js.map