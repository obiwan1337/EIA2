/*Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var aufg0;
(function (aufg0) {
    function name() {
        var input = prompt("Whats your name?");
        var txt;
        txt = "Hello there, ";
        txt += input;
        txt += ". It is nice to meet you.";
        document.getElementById("main").innerHTML += txt;
        console.log(input);
    }
    document.addEventListener('DOMContentLoaded', name);
})(aufg0 || (aufg0 = {}));
