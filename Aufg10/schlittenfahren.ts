namespace hillanimation {
    export class Sledgeslide {
        x: number;
        y: number;
        dx: number;
        dy: number;

        move(): void {
            this.x += this.dx;
            this.y += this.dy;
        }
        drawslide(): void {
            c2d.moveTo(this.x, this.y);
            c2d.lineTo(this.x - 100, this.y + 55);
            c2d.bezierCurveTo(this.x - 140, this.y + 80, this.x - 140, this.y + 30, this.x - 100, this.y + 20);
            c2d.lineTo(this.x - 115, this.y + 60);
            c2d.lineTo(this.x - 100, this.y + 25);
            c2d.lineTo(this.x, this.y - 20);
            c2d.lineTo(this.x - 10, this.y + 5);
            //c2d.lineTo();
            c2d.closePath();
            c2d.stroke();

            c2d.moveTo(this.x - 123, this.y + 35);
            c2d.bezierCurveTo(this.x - 160, this.y + 70, this.x - 165, this.y + 15, this.x - 125, this.y + 0);
            c2d.lineTo(this.x - 145, this.y + 46);
            //c2d.lineTo(this.x - 125, this.y +5);

            c2d.stroke();
            c2d.beginPath();
            c2d.moveTo(this.x - 100, this.y + 25);
            c2d.lineTo(this.x - 125, this.y + 5);
            c2d.lineTo(this.x - 25, this.y - 35);
            c2d.lineTo(this.x, this.y - 20);
            c2d.lineTo(this.x - 100, this.y + 25);
            c2d.closePath();
            c2d.stroke();
            c2d.fillStyle = "#563900";
            c2d.fill();
            c2d.strokeStyle = "#000000"
            c2d.beginPath();
            c2d.moveTo(this.x - 70, this.y + 55);
            c2d.lineTo(this.x - 50, this.y - 5);
            c2d.lineTo(this.x - 40, this.y - 25);
            c2d.lineTo(this.x - 90, this.y - 20);
            c2d.lineTo(this.x - 100, this.y - 5);

            c2d.moveTo(this.x - 40, this.y - 25);
            c2d.lineTo(this.x - 45, this.y - 60);
            c2d.lineTo(this.x - 67, this.y + 10); //arm eins
            c2d.moveTo(this.x - 45, this.y - 60);
            c2d.lineTo(this.x - 97, this.y - 5); // arm 2
            c2d.stroke();
            c2d.beginPath();
            c2d.arc(this.x - 45, this.y - 74, 10, 0, 2 * Math.PI, false);
            c2d.moveTo(this.x - 46, this.y - 74);
            c2d.lineTo(this.x - 48, this.y - 74);
            c2d.moveTo(this.x - 50, this.y - 75);
            c2d.lineTo(this.x - 52, this.y - 75);
            c2d.stroke();
        }
        drawpull():void {
            
        }
    }
}