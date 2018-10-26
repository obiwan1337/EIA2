namespace Aufg3 {

  let Deckarray: String[] = ["r0", "r1", "r1", "r2", "r2", "r3", "r3", "r4", "r4", "r5", "r5", "r6", "r6", "r7", "r7", "r8", "r8", "r9", "r9", "r<=>", "r<=>", "rx", "rx", "r+2", "r+2",
    "y0", "y1", "y1", "y2", "y2", "y3", "y3", "y4", "y4", "y5", "y5", "y6", "y6", "y7", "y7", "y8", "y8", "y9", "y9", "y<=>", "y<=>", "yx", "yx", "y+2", "y+2",
    "b0", "b1", "b1", "b2", "b2", "b3", "b3", "b4", "b4", "b5", "b5", "b6", "b6", "b7", "b7", "b8", "b8", "b9", "b9", "b<=>", "b<=>", "bx", "bx", "b+2", "b+2",
    "g0", "g1", "g1", "g2", "g2", "g3", "g3", "g4", "g4", "g5", "g5", "g6", "g6", "g7", "g7", "g8", "g8", "g9", "g9", "g<=>", "g<=>", "gx", "gx", "g+2", "g+2",
    "s+4", "s+4", "s+4", "s+4", "sw", "sw", "sw", "sw"]

  function startgame(): void {
    let o: string = prompt('Enter any value of cards');
    let p: number;
    p = Number(o);
    for (let i: number = 0; i < p; i++) {

      let randomnumber: number = Math.floor(Math.random() * Deckarray.length);
      let color: string = Deckarray[randomnumber].substr(0, 1)
      let number: string = Deckarray[randomnumber].substr(1)
      starthand(color, number, i);
      Deckarray.splice(randomnumber, 1);
    }


  }
  function starthand(_color:string, _number: string, _i) {
    switch (_color) {
      case "r": {
        _color = "#ff0000";
        break;
      }
      case "y": {
        _color = "#ffff00";
        break;
      }
      case "b": {
        _color = "#0000ff";
        break;
      }
      case "g": {
        _color = "#228B22";
        break;
      }
      case "s": {
        _color = "#000000";
        break;
      }
    }
    /*let canvas: HTMLCanvasElement = document.createElement("canvas");
    document.getElementById("hand").appendChild(canvas);
    canvas.setAttribute("id", "Karte" + _i);
    document.getElementById("Karte" + _i).innerHTML += _number;
    //document.getElementById("hand").appendChild(canvas);
    let c = document.getElementById("canvas");
    let ctx: CanvasRenderingContext2D = canvas.getContext("2d");
    ctx.fillStyle = _color;
    ctx.fillRect(20, 20, 200, 300);*/
    let div: HTMLDivElement = document.createElement("div");
    div.setAttribute("id","Karte"+_i);
    console.log(_color, _number, _i)
    document.getElementById("hand").appendChild(div);
    document.getElementById("Karte" +_i).innerHTML+= _number;
    let s: CSSStyleDeclaration = div.style;
    s.backgroundColor = _color;
    if (_color == "#000000"){ // wenn schwarze Karte, schrift in Pink
      s.color = "#ff99cc";
    }
    
  }
  /*let canvas = document.getElementById('deck');
  let context : CanvasRenderingContext2D = canvas.getContext("2d");
  let imageObj = new Image();

  imageObj.onload = function() {
    context.drawImage(imageObj, 69, 50);
  };
  imageObj.src = 'imgs/uno_backside.png';*/


  document.addEventListener('DOMContentLoaded', startgame);
}
