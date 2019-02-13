var invino;
(function (invino) {
    class Bullet extends invino.Moving_objects {
        constructor() {
            super();
        }
        setup() {
        }
        move() {
            this.dx -= 3.5;
        }
        draw() {
            invino.c2d.lineWidth = 9;
            invino.c2d.beginPath();
            invino.c2d.arc(this.x, this.y, this.dx, 0, 2 * Math.PI);
            invino.c2d.strokeStyle = "#fff";
            invino.c2d.stroke();
            invino.c2d.closePath();
            invino.c2d.fillStyle = "#fff";
            invino.c2d.fill();
        }
    }
    invino.Bullet = Bullet;
})(invino || (invino = {}));
//# sourceMappingURL=bullet.js.map