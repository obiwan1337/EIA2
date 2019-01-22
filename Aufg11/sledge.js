var veritas;
(function (veritas) {
    class Sledge extends veritas.Moving_objects {
        constructor() {
            super();
        }
        setup() {
            this.x = Math.floor(Math.random() * 300) + 1600;
            this.y = Math.floor(Math.random() * 150) + 300;
            this.dx = Math.floor(Math.random() * 2) - 4;
            this.dy = Math.floor(Math.random() * -2) + 4;
            this.direction = true;
        }
        draw() {
            veritas.c2d.strokeStyle = "#000000";
            veritas.c2d.moveTo(this.x, this.y);
            veritas.c2d.lineTo(this.x - 100, this.y + 55);
            veritas.c2d.bezierCurveTo(this.x - 140, this.y + 80, this.x - 140, this.y + 30, this.x - 100, this.y + 20);
            veritas.c2d.lineTo(this.x - 115, this.y + 60);
            veritas.c2d.lineTo(this.x - 100, this.y + 25);
            veritas.c2d.lineTo(this.x, this.y - 20);
            veritas.c2d.lineTo(this.x - 10, this.y + 5);
            //c2d.lineTo();
            veritas.c2d.closePath();
            veritas.c2d.stroke();
            veritas.c2d.moveTo(this.x - 123, this.y + 35);
            veritas.c2d.bezierCurveTo(this.x - 160, this.y + 70, this.x - 165, this.y + 15, this.x - 125, this.y + 0);
            veritas.c2d.lineTo(this.x - 145, this.y + 46);
            //c2d.lineTo(this.x - 125, this.y +5);
            veritas.c2d.stroke();
            veritas.c2d.beginPath();
            veritas.c2d.moveTo(this.x - 100, this.y + 25);
            veritas.c2d.lineTo(this.x - 125, this.y + 5);
            veritas.c2d.lineTo(this.x - 25, this.y - 35);
            veritas.c2d.lineTo(this.x, this.y - 20);
            veritas.c2d.lineTo(this.x - 100, this.y + 25);
            veritas.c2d.closePath();
            veritas.c2d.stroke();
            veritas.c2d.fillStyle = "#563900";
            veritas.c2d.fill();
            veritas.c2d.beginPath();
            veritas.c2d.moveTo(this.x - 70, this.y + 55);
            veritas.c2d.lineTo(this.x - 50, this.y - 5);
            veritas.c2d.lineTo(this.x - 40, this.y - 25);
            veritas.c2d.lineTo(this.x - 90, this.y - 20);
            veritas.c2d.lineTo(this.x - 100, this.y - 5);
            veritas.c2d.moveTo(this.x - 40, this.y - 25);
            veritas.c2d.lineTo(this.x - 45, this.y - 60);
            veritas.c2d.lineTo(this.x - 67, this.y + 10); //arm eins
            veritas.c2d.moveTo(this.x - 45, this.y - 60);
            veritas.c2d.lineTo(this.x - 97, this.y - 5); // arm 2
            veritas.c2d.stroke();
            veritas.c2d.beginPath();
            veritas.c2d.arc(this.x - 45, this.y - 74, 10, 0, 2 * Math.PI, false);
            veritas.c2d.moveTo(this.x - 46, this.y - 74);
            veritas.c2d.lineTo(this.x - 48, this.y - 74);
            veritas.c2d.moveTo(this.x - 50, this.y - 75);
            veritas.c2d.lineTo(this.x - 52, this.y - 75);
            veritas.c2d.strokeStyle = "#000000";
            veritas.c2d.stroke();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y <= 350) {
                console.log(this.direction);
                this.direction = true;
            }
            if (this.y >= 800) {
                console.log(this.direction);
                this.direction = false;
            }
        }
        drawpull() {
            veritas.c2d.beginPath();
            veritas.c2d.strokeStyle = "#000000";
            veritas.c2d.moveTo(this.x, this.y);
            veritas.c2d.lineTo(this.x + 75, this.y - 65);
            veritas.c2d.bezierCurveTo(this.x + 90, this.y - 80, this.x + 90, this.y - 100, this.x + 80, this.y - 100);
            veritas.c2d.stroke();
            veritas.c2d.moveTo(this.x - 20, this.y - 10);
            veritas.c2d.lineTo(this.x - 10, this.y - 20);
            veritas.c2d.stroke();
            veritas.c2d.beginPath();
            veritas.c2d.moveTo(this.x, this.y - 20);
            veritas.c2d.lineTo(this.x + 80, this.y - 90);
            veritas.c2d.lineTo(this.x + 60, this.y - 105);
            veritas.c2d.lineTo(this.x - 25, this.y - 35);
            veritas.c2d.closePath();
            veritas.c2d.strokeStyle = "#000000";
            veritas.c2d.stroke();
            veritas.c2d.fillStyle = "#563900";
            veritas.c2d.fill();
            veritas.c2d.beginPath();
            veritas.c2d.moveTo(this.x + 62, this.y - 110);
            veritas.c2d.bezierCurveTo(this.x + 65, this.y - 110, this.x + 65, this.y - 120, this.x + 55, this.y - 120);
            veritas.c2d.stroke();
            veritas.c2d.beginPath();
            veritas.c2d.moveTo(this.x + 80, this.y - 90);
            veritas.c2d.lineTo(this.x + 100, this.y - 125);
            veritas.c2d.lineTo(this.x + 60, this.y - 105);
            veritas.c2d.stroke(); //schlittendone
            veritas.c2d.beginPath();
            veritas.c2d.moveTo(this.x + 110, this.y - 85);
            veritas.c2d.lineTo(this.x + 130, this.y - 150);
            veritas.c2d.lineTo(this.x + 90, this.y - 85);
            veritas.c2d.stroke();
            veritas.c2d.moveTo(this.x + 130, this.y - 150);
            veritas.c2d.lineTo(this.x + 140, this.y - 170);
            veritas.c2d.lineTo(this.x + 100, this.y - 125);
            veritas.c2d.stroke();
            veritas.c2d.beginPath();
            veritas.c2d.arc(this.x + 150, this.y - 185, 10, 0, 2 * Math.PI, false);
            veritas.c2d.stroke();
        }
        movepull() {
            //this.x -= this.dx;
            this.x -= this.dx / 2;
            this.y -= this.dy / 2;
            if (this.y <= 350) {
                console.log(this.direction);
                this.direction = true;
            }
            if (this.y >= 800) {
                console.log(this.direction);
                this.direction = false;
            }
        }
    }
    veritas.Sledge = Sledge;
})(veritas || (veritas = {}));
//# sourceMappingURL=sledge.js.map