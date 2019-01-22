var veritas;
(function (veritas) {
    class Cokeline extends veritas.Moving_objects {
        constructor() {
            super();
        }
        setup() {
            this.x = Math.random() * veritas.c2d.canvas.width;
            this.y = Math.random() * veritas.c2d.canvas.height;
            this.dx = -0.5;
            this.dy = Math.floor(Math.random() * 1) + 3;
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y > veritas.c2d.canvas.height) {
                this.x = 2000 * Math.random();
                this.y = -2;
            }
        }
        draw() {
            veritas.c2d.strokeStyle = "#ffffff";
            veritas.c2d.lineWidth = 5;
            veritas.c2d.beginPath();
            veritas.c2d.moveTo(this.x - 2, this.y);
            veritas.c2d.lineTo(this.x + 2, this.y);
            veritas.c2d.closePath();
            veritas.c2d.stroke();
            veritas.c2d.moveTo(this.x, this.y - 2);
            veritas.c2d.lineTo(this.x, this.y + 2);
            veritas.c2d.closePath();
            veritas.c2d.stroke();
        }
    }
    veritas.Cokeline = Cokeline;
})(veritas || (veritas = {}));
//# sourceMappingURL=cokainum.js.map