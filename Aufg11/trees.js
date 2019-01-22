var veritas;
(function (veritas) {
    class Tree {
        init() {
            this.x = Math.floor(Math.random() * 600) + 600;
            this.y = Math.floor(Math.random() * 200) + 450;
        }
        draw() {
            veritas.c2d.lineWidth = 3;
            veritas.c2d.beginPath();
            veritas.c2d.moveTo(this.x, this.y);
            veritas.c2d.lineTo(this.x + 25, this.y);
            veritas.c2d.lineTo(this.x + 25, this.y - 50);
            veritas.c2d.lineTo(this.x + 50, this.y - 35);
            veritas.c2d.lineTo(this.x + 30, this.y - 60);
            veritas.c2d.lineTo(this.x + 100, this.y - 45);
            veritas.c2d.lineTo(this.x + 30, this.y - 140);
            veritas.c2d.lineTo(this.x + 60, this.y - 125);
            veritas.c2d.lineTo(this.x + 20, this.y - 175);
            veritas.c2d.lineTo(this.x + 48, this.y - 166);
            veritas.c2d.lineTo(this.x, this.y - 240);
            console.log("spitze");
            veritas.c2d.lineTo(this.x - 48, this.y - 166);
            veritas.c2d.lineTo(this.x - 20, this.y - 175);
            veritas.c2d.lineTo(this.x - 60, this.y - 125);
            veritas.c2d.lineTo(this.x - 30, this.y - 140);
            veritas.c2d.lineTo(this.x - 100, this.y - 45);
            veritas.c2d.lineTo(this.x - 30, this.y - 60);
            veritas.c2d.lineTo(this.x - 50, this.y - 35);
            veritas.c2d.lineTo(this.x - 25, this.y - 50);
            veritas.c2d.lineTo(this.x - 25, this.y);
            veritas.c2d.closePath();
            veritas.c2d.fillStyle = "green";
            veritas.c2d.fill();
            veritas.c2d.strokeStyle = "green";
            veritas.c2d.stroke();
            veritas.c2d.beginPath();
            veritas.c2d.lineTo(this.x + 24, this.y);
            veritas.c2d.lineTo(this.x + 24, this.y - 50);
            veritas.c2d.lineTo(this.x - 24, this.y - 50);
            veritas.c2d.lineTo(this.x - 24, this.y);
            veritas.c2d.closePath();
            veritas.c2d.strokeStyle = "#663300";
            veritas.c2d.fillStyle = "#663300";
            veritas.c2d.fill();
            veritas.c2d.stroke();
        }
    }
    veritas.Tree = Tree;
})(veritas || (veritas = {}));
//# sourceMappingURL=trees.js.map