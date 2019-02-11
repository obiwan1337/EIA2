namespace invino {
    export class Cokeline extends Moving_objects {
       
        constructor() {
            super();

        }
        setup (): void {
            this.x = Math.random() * c2d.canvas.width;
            this.y = Math.random() * c2d.canvas.height;
            this.dx = -0.5;
            this.dy = Math.floor(Math.random() * 1) + 3;

        }
        move(): void {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y > c2d.canvas.height) {
                this.x = 2000 * Math.random();
                this.y = -2;
            }
        }

        draw(): void {
            c2d.strokeStyle = "#ffffff";
            c2d.lineWidth = 5;
            c2d.beginPath();
            c2d.moveTo(this.x - 2, this.y);
            c2d.lineTo(this.x + 2, this.y);
            c2d.closePath();
            c2d.stroke();

            c2d.moveTo(this.x, this.y - 2);
            c2d.lineTo(this.x, this.y + 2);
            c2d.stroke();
            c2d.closePath();
            c2d.strokeStyle= "#fff"
            c2d.fillStyle = "#fff";
        }
    }
}