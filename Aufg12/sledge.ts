namespace invino {
    export class Sledge extends Moving_objects {
        direction: boolean;
        hashit: boolean;
        xblood:number;
        yblood:number;
        constructor() {
            super();

            this.hashit = false;
            
        }
        setup(): void {
            this.x = Math.floor(Math.random() * 800) + 1200;
            this.y = Math.floor(Math.random() * 180) + 300;
            this.dx = Math.floor(Math.random() * 2) - 4;
            this.dy = Math.floor(Math.random() * -2) + 4;
            this.direction = true;
            
        }

        draw(): void {
            c2d.beginPath();
            c2d.lineWidth = 4;
            c2d.strokeStyle = "#000000"
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

            c2d.stroke();

            c2d.fillStyle = "#563900";
            c2d.fill();
            c2d.closePath();
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
            c2d.closePath();
            c2d.beginPath();
            c2d.arc(this.x - 45, this.y - 74, 10, 0, 2 * Math.PI, false);
            c2d.moveTo(this.x - 46, this.y - 74);
            c2d.lineTo(this.x - 48, this.y - 74);
            c2d.moveTo(this.x - 50, this.y - 75);
            c2d.lineTo(this.x - 52, this.y - 75);

            c2d.stroke();
            c2d.closePath();
        }
        move(): void {

            this.x += this.dx;
            this.y += this.dy;
            if (this.y <= 350) {
                this.direction = true;
            }
            if (this.y >= 800 && this.hashit==false) {
                this.direction = false;
            }
        }
        drawpull(): void {
            c2d.beginPath();
            c2d.lineWidth = 4;
            c2d.strokeStyle = "#000000"
            c2d.moveTo(this.x, this.y);
            
            c2d.lineTo(this.x + 75, this.y - 65);
            c2d.bezierCurveTo(this.x + 90, this.y - 80, this.x + 90, this.y - 100, this.x + 80, this.y - 100);
            c2d.stroke();
            c2d.moveTo(this.x - 20, this.y - 10);
            c2d.lineTo(this.x - 10, this.y - 20);
            c2d.stroke();
            c2d.beginPath();
            c2d.moveTo(this.x, this.y - 20);
            c2d.lineTo(this.x + 80, this.y - 90);
            c2d.lineTo(this.x + 60, this.y - 105);
            c2d.lineTo(this.x - 25, this.y - 35);
            c2d.closePath();

            c2d.stroke();
            c2d.fillStyle = "#563900";
            c2d.fill();
            c2d.beginPath();
            c2d.moveTo(this.x + 62, this.y - 110);
            c2d.bezierCurveTo(this.x + 65, this.y - 110, this.x + 65, this.y - 120, this.x + 55, this.y - 120);
            c2d.stroke();
            c2d.closePath();
            c2d.beginPath();
            c2d.moveTo(this.x + 80, this.y - 90);
            c2d.lineTo(this.x + 100, this.y - 125);
            c2d.lineTo(this.x + 60, this.y - 105);
            c2d.stroke();
            c2d.closePath();//schlittendone
            c2d.beginPath();
            c2d.moveTo(this.x + 110, this.y - 85);
            c2d.lineTo(this.x + 130, this.y - 150);
            c2d.lineTo(this.x + 90, this.y - 85);
            c2d.stroke();
            c2d.moveTo(this.x + 130, this.y - 150);
            c2d.lineTo(this.x + 140, this.y - 170);
            c2d.lineTo(this.x + 100, this.y - 125);
            c2d.stroke();
            c2d.closePath();
            c2d.beginPath();

            c2d.arc(this.x + 150, this.y - 185, 10, 0, 2 * Math.PI, false);

            c2d.stroke();
            c2d.closePath();


        }
        movepull(): void {
            //this.x -= this.dx;
            this.x -= this.dx / 2;
            this.y -= this.dy / 2;
            if (this.y <= 350) {
                this.direction = true;
            }
            if (this.y >= 800 && this.hashit==false) {
                this.direction = false;
            }
        }
        drawSledgeAlone(): void {
        
            c2d.lineWidth = 4;
            c2d.fillStyle = "#563900";
            c2d.strokeStyle = "#000000"
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

        }
        drawBlood(){
            c2d.fillStyle = "#ff0000";
            
            c2d.beginPath();
            c2d.arc(this.xblood-10,this.yblood-75,26,0,2*Math.PI);
            c2d.fill();
            c2d.closePath();
            c2d.beginPath();
            c2d.arc(this.xblood-40,this.yblood-70,30,0,2*Math.PI);
            c2d.fill();
            c2d.closePath();
            c2d.beginPath();
        }
    }
}