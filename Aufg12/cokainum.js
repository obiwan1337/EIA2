var invino;
(function (invino) {
    class Cokeline extends invino.Moving_objects {
        constructor() {
            super();
        }
        setup() {
            this.x = Math.random() * invino.c2d.canvas.width;
            this.y = Math.random() * invino.c2d.canvas.height;
            this.dx = -0.5;
            this.dy = Math.floor(Math.random() * 1) + 3;
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y > invino.c2d.canvas.height) {
                this.x = 2000 * Math.random();
                this.y = -2;
            }
        }
        draw() {
            invino.c2d.strokeStyle = "#ffffff";
            invino.c2d.lineWidth = 5;
            invino.c2d.beginPath();
            invino.c2d.moveTo(this.x - 2, this.y);
            invino.c2d.lineTo(this.x + 2, this.y);
            invino.c2d.closePath();
            invino.c2d.stroke();
            invino.c2d.moveTo(this.x, this.y - 2);
            invino.c2d.lineTo(this.x, this.y + 2);
            invino.c2d.stroke();
            invino.c2d.closePath();
            invino.c2d.strokeStyle = "#fff";
            invino.c2d.fillStyle = "#fff";
        }
    }
    invino.Cokeline = Cokeline;
})(invino || (invino = {}));
//# sourceMappingURL=cokainum.js.map