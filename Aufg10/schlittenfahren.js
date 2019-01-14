var hillanimation;
(function (hillanimation) {
    class Sledgeslide {
        moveslide() {
            this.x += this.dx;
            this.y += this.dy;
        }
        drawslide() {
            hillanimation.c2d.strokeStyle = "#000000";
            hillanimation.c2d.moveTo(this.x, this.y);
            hillanimation.c2d.lineTo(this.x - 100, this.y + 55);
            hillanimation.c2d.bezierCurveTo(this.x - 140, this.y + 80, this.x - 140, this.y + 30, this.x - 100, this.y + 20);
            hillanimation.c2d.lineTo(this.x - 115, this.y + 60);
            hillanimation.c2d.lineTo(this.x - 100, this.y + 25);
            hillanimation.c2d.lineTo(this.x, this.y - 20);
            hillanimation.c2d.lineTo(this.x - 10, this.y + 5);
            //c2d.lineTo();
            hillanimation.c2d.closePath();
            hillanimation.c2d.stroke();
            hillanimation.c2d.moveTo(this.x - 123, this.y + 35);
            hillanimation.c2d.bezierCurveTo(this.x - 160, this.y + 70, this.x - 165, this.y + 15, this.x - 125, this.y + 0);
            hillanimation.c2d.lineTo(this.x - 145, this.y + 46);
            //c2d.lineTo(this.x - 125, this.y +5);
            hillanimation.c2d.stroke();
            hillanimation.c2d.beginPath();
            hillanimation.c2d.moveTo(this.x - 100, this.y + 25);
            hillanimation.c2d.lineTo(this.x - 125, this.y + 5);
            hillanimation.c2d.lineTo(this.x - 25, this.y - 35);
            hillanimation.c2d.lineTo(this.x, this.y - 20);
            hillanimation.c2d.lineTo(this.x - 100, this.y + 25);
            hillanimation.c2d.closePath();
            hillanimation.c2d.stroke();
            hillanimation.c2d.fillStyle = "#563900";
            hillanimation.c2d.fill();
            hillanimation.c2d.beginPath();
            hillanimation.c2d.moveTo(this.x - 70, this.y + 55);
            hillanimation.c2d.lineTo(this.x - 50, this.y - 5);
            hillanimation.c2d.lineTo(this.x - 40, this.y - 25);
            hillanimation.c2d.lineTo(this.x - 90, this.y - 20);
            hillanimation.c2d.lineTo(this.x - 100, this.y - 5);
            hillanimation.c2d.moveTo(this.x - 40, this.y - 25);
            hillanimation.c2d.lineTo(this.x - 45, this.y - 60);
            hillanimation.c2d.lineTo(this.x - 67, this.y + 10); //arm eins
            hillanimation.c2d.moveTo(this.x - 45, this.y - 60);
            hillanimation.c2d.lineTo(this.x - 97, this.y - 5); // arm 2
            hillanimation.c2d.stroke();
            hillanimation.c2d.beginPath();
            hillanimation.c2d.arc(this.x - 45, this.y - 74, 10, 0, 2 * Math.PI, false);
            hillanimation.c2d.moveTo(this.x - 46, this.y - 74);
            hillanimation.c2d.lineTo(this.x - 48, this.y - 74);
            hillanimation.c2d.moveTo(this.x - 50, this.y - 75);
            hillanimation.c2d.lineTo(this.x - 52, this.y - 75);
            hillanimation.c2d.strokeStyle = "#000000";
            hillanimation.c2d.stroke();
        }
        drawpull() {
            hillanimation.c2d.beginPath();
            hillanimation.c2d.strokeStyle = "#000000";
            hillanimation.c2d.moveTo(this.x, this.y);
            hillanimation.c2d.lineTo(this.x + 75, this.y - 65);
            hillanimation.c2d.bezierCurveTo(this.x + 90, this.y - 80, this.x + 90, this.y - 100, this.x + 80, this.y - 100);
            hillanimation.c2d.stroke();
            hillanimation.c2d.moveTo(this.x - 20, this.y - 10);
            hillanimation.c2d.lineTo(this.x - 10, this.y - 20);
            hillanimation.c2d.stroke();
            hillanimation.c2d.beginPath();
            hillanimation.c2d.moveTo(this.x, this.y - 20);
            hillanimation.c2d.lineTo(this.x + 80, this.y - 90);
            hillanimation.c2d.lineTo(this.x + 60, this.y - 105);
            hillanimation.c2d.lineTo(this.x - 25, this.y - 35);
            hillanimation.c2d.closePath();
            hillanimation.c2d.strokeStyle = "#000000";
            hillanimation.c2d.stroke();
            hillanimation.c2d.fillStyle = "#563900";
            hillanimation.c2d.fill();
            hillanimation.c2d.beginPath();
            hillanimation.c2d.moveTo(this.x + 62, this.y - 110);
            hillanimation.c2d.bezierCurveTo(this.x + 65, this.y - 110, this.x + 65, this.y - 120, this.x + 55, this.y - 120);
            hillanimation.c2d.stroke();
            hillanimation.c2d.beginPath();
            hillanimation.c2d.moveTo(this.x + 80, this.y - 90);
            hillanimation.c2d.lineTo(this.x + 100, this.y - 125);
            hillanimation.c2d.lineTo(this.x + 60, this.y - 105);
            hillanimation.c2d.stroke(); //schlittendone
            hillanimation.c2d.beginPath();
            hillanimation.c2d.moveTo(this.x + 110, this.y - 85);
            hillanimation.c2d.lineTo(this.x + 130, this.y - 150);
            hillanimation.c2d.lineTo(this.x + 90, this.y - 85);
            hillanimation.c2d.stroke();
            hillanimation.c2d.moveTo(this.x + 130, this.y - 150);
            hillanimation.c2d.lineTo(this.x + 140, this.y - 170);
            hillanimation.c2d.lineTo(this.x + 100, this.y - 125);
            hillanimation.c2d.stroke();
            hillanimation.c2d.beginPath();
            hillanimation.c2d.arc(this.x + 150, this.y - 185, 10, 0, 2 * Math.PI, false);
            hillanimation.c2d.stroke();
        }
        movepull() {
            //this.x -= this.dx;
            this.x -= this.dx / 2;
            this.y -= this.dy / 2;
        }
    }
    hillanimation.Sledgeslide = Sledgeslide;
})(hillanimation || (hillanimation = {}));
//# sourceMappingURL=schlittenfahren.js.map