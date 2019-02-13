namespace invino {
    export class startScreen {
        x: number;
        y: number;

        init(): void {
            this.x = 0;
            this.y = 0;

        }
        
        draw(): void {
            c2d.beginPath();
            c2d.fillStyle = "#fff";
            c2d.fillRect(this.x, this.y, 1900, 1000);
            c2d.fill();
            c2d.closePath();
            c2d.font = "30px Ubuntu";
            c2d.fillStyle = "blue";
            c2d.textAlign = "center";
            c2d.fillText("Try to hit the kids.", c2d.canvas.width / 2, this.y+200);
            c2d.fillText("Hitting a kid gives you points", c2d.canvas.width / 2, this.y+250);
            c2d.fillText("You got 45 seconds", c2d.canvas.width / 2, this.y+300);
            c2d.fillText("HIGHSCORES:", c2d.canvas.width / 2, this.y+350);
            
            c2d.fillStyle = "Red";
            c2d.font = "60px Ubuntu";
            c2d.fillText("CLICK ANYWHERE TO START THE GAME", c2d.canvas.width / 2, this.y+800);
            
        }

    }
}