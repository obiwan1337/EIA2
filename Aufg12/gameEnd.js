var invino;
(function (invino) {
    class endScreen {
        init() {
            this.x = 0;
            this.y = 0;
        }
        draw() {
            invino.c2d.beginPath();
            invino.c2d.fillStyle = "#fff";
            invino.c2d.fillRect(this.x, this.y, 1900, 1000);
            invino.c2d.fill();
            invino.c2d.closePath();
            invino.c2d.font = "30px Ubuntu";
            invino.c2d.fillStyle = "blue";
            invino.c2d.textAlign = "center";
            invino.c2d.fillText("Want to save your score?", invino.c2d.canvas.width / 2, this.y + 200);
            //c2d.fillText("Hitting a kid gives you points", c2d.canvas.width / 2, this.y + 250);
            //c2d.fillText("You got 45 seconds", c2d.canvas.width / 2, this.y + 300);
            invino.c2d.fillText("HIGHSCORES:", invino.c2d.canvas.width / 2, this.y + 300);
            invino.c2d.fillStyle = "Red";
            invino.c2d.font = "60px Ubuntu";
            invino.c2d.fillText("CLICK ANYWHERE TO START THE GAME", invino.c2d.canvas.width / 2, this.y + 800);
        }
    }
    invino.endScreen = endScreen;
})(invino || (invino = {}));
//# sourceMappingURL=gameEnd.js.map