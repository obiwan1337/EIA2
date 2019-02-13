namespace invino {
    export class Bullet extends Moving_objects {
        
        constructor() {
            super();
            
        }
        setup(): void {
        }
        move(): void {
            this.dx -= 3.5;
        }
        draw(): void {

            c2d.lineWidth = 9;

            c2d.beginPath();
            c2d.arc(this.x, this.y, this.dx, 0, 2 * Math.PI);
            c2d.strokeStyle = "#fff"
            c2d.stroke();
            c2d.closePath();
            c2d.fillStyle = "#fff";
            c2d.fill();

        }
    }
}