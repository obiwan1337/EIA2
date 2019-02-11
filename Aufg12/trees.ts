namespace invino {
    export class Tree {
        x: number;
        y: number;

        
        init(): void {
            this.x = Math.floor(Math.random() * 600) + 600;
            this.y = Math.floor(Math.random() * 200) + 450;
        }
        draw(): void {

            c2d.lineWidth = 3;
            c2d.beginPath();
            c2d.moveTo(this.x, this.y);
            c2d.lineTo(this.x + 25, this.y);
            c2d.lineTo(this.x + 25, this.y - 50);
            c2d.lineTo(this.x + 50, this.y - 35);
            c2d.lineTo(this.x + 30, this.y - 60);
            c2d.lineTo(this.x + 100, this.y - 45);
            c2d.lineTo(this.x + 30, this.y - 140);
            c2d.lineTo(this.x + 60, this.y - 125);
            c2d.lineTo(this.x + 20, this.y - 175);
            c2d.lineTo(this.x + 48, this.y - 166);
            c2d.lineTo(this.x, this.y - 240);
            console.log("spitze");
            c2d.lineTo(this.x - 48, this.y - 166);
            c2d.lineTo(this.x - 20, this.y - 175);
            c2d.lineTo(this.x - 60, this.y - 125);
            c2d.lineTo(this.x - 30, this.y - 140);
            c2d.lineTo(this.x - 100, this.y - 45);
            c2d.lineTo(this.x - 30, this.y - 60);
            c2d.lineTo(this.x - 50, this.y - 35);
            c2d.lineTo(this.x - 25, this.y - 50);
            c2d.lineTo(this.x - 25, this.y);
            c2d.closePath();

            c2d.fillStyle = "green";
            c2d.fill();
            c2d.strokeStyle = "green";
            c2d.stroke();
            c2d.beginPath();
            c2d.lineTo(this.x + 24, this.y);
            c2d.lineTo(this.x + 24, this.y - 50);
            c2d.lineTo(this.x - 24, this.y - 50);
            c2d.lineTo(this.x - 24, this.y);
            c2d.closePath();
            c2d.strokeStyle = "#663300";
            c2d.fillStyle = "#663300";
            c2d.fill();
            c2d.stroke();
            c2d.closePath();
        }
    }
}