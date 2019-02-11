var invino;
(function (invino) {
    class Tree {
        init() {
            this.x = Math.floor(Math.random() * 600) + 600;
            this.y = Math.floor(Math.random() * 200) + 450;
        }
        draw() {
            invino.c2d.lineWidth = 3;
            invino.c2d.beginPath();
            invino.c2d.moveTo(this.x, this.y);
            invino.c2d.lineTo(this.x + 25, this.y);
            invino.c2d.lineTo(this.x + 25, this.y - 50);
            invino.c2d.lineTo(this.x + 50, this.y - 35);
            invino.c2d.lineTo(this.x + 30, this.y - 60);
            invino.c2d.lineTo(this.x + 100, this.y - 45);
            invino.c2d.lineTo(this.x + 30, this.y - 140);
            invino.c2d.lineTo(this.x + 60, this.y - 125);
            invino.c2d.lineTo(this.x + 20, this.y - 175);
            invino.c2d.lineTo(this.x + 48, this.y - 166);
            invino.c2d.lineTo(this.x, this.y - 240);
            console.log("spitze");
            invino.c2d.lineTo(this.x - 48, this.y - 166);
            invino.c2d.lineTo(this.x - 20, this.y - 175);
            invino.c2d.lineTo(this.x - 60, this.y - 125);
            invino.c2d.lineTo(this.x - 30, this.y - 140);
            invino.c2d.lineTo(this.x - 100, this.y - 45);
            invino.c2d.lineTo(this.x - 30, this.y - 60);
            invino.c2d.lineTo(this.x - 50, this.y - 35);
            invino.c2d.lineTo(this.x - 25, this.y - 50);
            invino.c2d.lineTo(this.x - 25, this.y);
            invino.c2d.closePath();
            invino.c2d.fillStyle = "green";
            invino.c2d.fill();
            invino.c2d.strokeStyle = "green";
            invino.c2d.stroke();
            invino.c2d.beginPath();
            invino.c2d.lineTo(this.x + 24, this.y);
            invino.c2d.lineTo(this.x + 24, this.y - 50);
            invino.c2d.lineTo(this.x - 24, this.y - 50);
            invino.c2d.lineTo(this.x - 24, this.y);
            invino.c2d.closePath();
            invino.c2d.strokeStyle = "#663300";
            invino.c2d.fillStyle = "#663300";
            invino.c2d.fill();
            invino.c2d.stroke();
            invino.c2d.closePath();
        }
    }
    invino.Tree = Tree;
})(invino || (invino = {}));
//# sourceMappingURL=trees.js.map