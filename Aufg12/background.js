var invino;
(function (invino) {
    class Background {
        init() {
            this.x = 0;
            this.y = 0;
        }
        draw() {
            console.log("sky begins");
            invino.c2d.fillStyle = "#a6efff";
            invino.c2d.fillRect(this.x, this.y, 1900, 1000);
            console.log("sky done");
            invino.c2d.beginPath();
            invino.c2d.moveTo(1905, 210);
            invino.c2d.lineWidth = 5;
            invino.c2d.strokeStyle = "#e8ffff";
            console.log("hill begins");
            let cp1 = { x: 1600, y: 400 };
            let cp2 = { x: 1300, y: 200 };
            let end = { x: 1100, y: 370 };
            // Cubic Bézier curve
            invino.c2d.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
            cp1 = { x: 900, y: 450 };
            cp2 = { x: 400, y: 400 };
            end = { x: 200, y: 600 };
            invino.c2d.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
            cp1 = { x: 180, y: 620 };
            cp2 = { x: 90, y: 590 };
            end = { x: -5, y: 650 };
            invino.c2d.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
            invino.c2d.lineTo(-5, 1005);
            invino.c2d.lineTo(1905, 1005);
            invino.c2d.closePath();
            invino.c2d.fillStyle = "#eeeeee";
            invino.c2d.fill();
            invino.c2d.stroke();
            invino.c2d.closePath();
            console.log("hilldone");
            console.log("waybeginn");
            invino.c2d.beginPath();
            invino.c2d.moveTo(185, 607);
            invino.c2d.lineWidth = 2;
            invino.c2d.strokeStyle = "black";
            cp1 = { x: 100, y: 800 };
            cp2 = { x: 1000, y: 600 };
            end = { x: 1600, y: 1000 };
            invino.c2d.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
            invino.c2d.quadraticCurveTo(1400, 1200, 1200, 1000);
            invino.c2d.bezierCurveTo(cp1.x + 900, cp1.y, cp2.x - 1000, cp2.y + 190, 100, 613);
            invino.c2d.closePath();
            invino.c2d.fillStyle = "#e6ffff";
            invino.c2d.fill();
            invino.c2d.stroke();
            invino.c2d.closePath();
            console.log("waydone");
            invino.c2d.beginPath();
            let x = Math.floor(Math.random() * 100) + 1700;
            let y = Math.floor(Math.random() * 100) + 850;
            invino.c2d.arc(x, y, 40, 0, 2 * Math.PI, false);
            invino.c2d.closePath();
            invino.c2d.fillStyle = "#e9ffff";
            invino.c2d.fill();
            invino.c2d.strokeStyle = '#000000';
            invino.c2d.stroke();
            invino.c2d.beginPath();
            invino.c2d.arc(x, y - 45, 30, 0, 2 * Math.PI, false);
            invino.c2d.closePath();
            invino.c2d.fillStyle = "#e9ffff";
            invino.c2d.fill();
            invino.c2d.stroke();
            invino.c2d.beginPath();
            invino.c2d.moveTo(x - 15, y - 55);
            invino.c2d.lineTo(x - 60, y - 37);
            invino.c2d.closePath();
            invino.c2d.stroke();
            invino.c2d.beginPath();
            invino.c2d.moveTo(x + 30, y - 50);
            invino.c2d.lineTo(x + 43, y - 42);
            invino.c2d.closePath();
            invino.c2d.stroke();
            invino.c2d.beginPath();
            invino.c2d.arc(x, y - 80, 20, 0, 2 * Math.PI, false);
            invino.c2d.closePath();
            invino.c2d.fillStyle = "#e9ffff";
            invino.c2d.fill();
            //augen
            invino.c2d.stroke();
            invino.c2d.beginPath();
            invino.c2d.moveTo(x, y - 85);
            invino.c2d.lineTo(x + 2, y - 85);
            invino.c2d.closePath();
            invino.c2d.stroke();
            invino.c2d.beginPath();
            invino.c2d.moveTo(x + 10, y - 85);
            invino.c2d.lineTo(x + 12, y - 85);
            invino.c2d.closePath();
            invino.c2d.lineWidth = 3;
            invino.c2d.stroke();
            console.log("snowman");
        }
    }
    invino.Background = Background;
})(invino || (invino = {}));
//# sourceMappingURL=background.js.map