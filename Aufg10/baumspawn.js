var hillanimation;
(function (hillanimation) {
    class Tree {
        draw() {
            hillanimation.c2d.lineWidth = 3;
            hillanimation.c2d.beginPath();
            hillanimation.c2d.moveTo(this.x, this.y);
            hillanimation.c2d.lineTo(this.x + 25, this.y);
            hillanimation.c2d.lineTo(this.x + 25, this.y - 50);
            hillanimation.c2d.lineTo(this.x + 50, this.y - 35);
            hillanimation.c2d.lineTo(this.x + 30, this.y - 60);
            hillanimation.c2d.lineTo(this.x + 100, this.y - 45);
            hillanimation.c2d.lineTo(this.x + 30, this.y - 140);
            hillanimation.c2d.lineTo(this.x + 60, this.y - 125);
            hillanimation.c2d.lineTo(this.x + 20, this.y - 175);
            hillanimation.c2d.lineTo(this.x + 48, this.y - 166);
            hillanimation.c2d.lineTo(this.x, this.y - 240);
            console.log("spitze");
            hillanimation.c2d.lineTo(this.x - 48, this.y - 166);
            hillanimation.c2d.lineTo(this.x - 20, this.y - 175);
            hillanimation.c2d.lineTo(this.x - 60, this.y - 125);
            hillanimation.c2d.lineTo(this.x - 30, this.y - 140);
            hillanimation.c2d.lineTo(this.x - 100, this.y - 45);
            hillanimation.c2d.lineTo(this.x - 30, this.y - 60);
            hillanimation.c2d.lineTo(this.x - 50, this.y - 35);
            hillanimation.c2d.lineTo(this.x - 25, this.y - 50);
            hillanimation.c2d.lineTo(this.x - 25, this.y);
            hillanimation.c2d.closePath();
            hillanimation.c2d.fillStyle = "green";
            hillanimation.c2d.fill();
            hillanimation.c2d.strokeStyle = "green";
            hillanimation.c2d.stroke();
            hillanimation.c2d.beginPath();
            hillanimation.c2d.lineTo(this.x + 24, this.y);
            hillanimation.c2d.lineTo(this.x + 24, this.y - 50);
            hillanimation.c2d.lineTo(this.x - 24, this.y - 50);
            hillanimation.c2d.lineTo(this.x - 24, this.y);
            hillanimation.c2d.closePath();
            hillanimation.c2d.strokeStyle = "#663300";
            hillanimation.c2d.fillStyle = "#663300";
            hillanimation.c2d.fill();
            hillanimation.c2d.stroke();
        }
    }
    hillanimation.Tree = Tree;
})(hillanimation || (hillanimation = {}));
//# sourceMappingURL=baumspawn.js.map