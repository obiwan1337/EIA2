var hillanimation;
(function (hillanimation) {
    class Snowflake {
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.y > hillanimation.c2d.canvas.height) {
                this.x = 2000 * Math.random();
                this.y = -2;
            }
        }
        draw() {
            hillanimation.c2d.strokeStyle = "#ffffff";
            hillanimation.c2d.lineWidth = 5;
            hillanimation.c2d.beginPath();
            hillanimation.c2d.moveTo(this.x - 2, this.y);
            hillanimation.c2d.lineTo(this.x + 2, this.y);
            hillanimation.c2d.closePath();
            hillanimation.c2d.stroke();
            hillanimation.c2d.moveTo(this.x, this.y - 2);
            hillanimation.c2d.lineTo(this.x, this.y + 2);
            hillanimation.c2d.closePath();
            hillanimation.c2d.stroke();
        }
    }
    hillanimation.Snowflake = Snowflake;
})(hillanimation || (hillanimation = {}));
//# sourceMappingURL=snow.js.map