/*Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace aufg0{

    function name() {
        let input : string = prompt("Whats your name?");
        let txt : string;

        txt = "Hello there, ";
        txt += input;
        txt += ". It is nice to meet you.";

        console.log(input);
        document.getElementById("demmain").innerHTML+= txt;
    }

    document.addEventListener('DOMContentLoaded', name);

}
