var veritas;
(function (veritas) {
    class Background {
        init() {
            this.x = 0;
            this.y = 0;
        }
        draw() {
            console.log("sky begins");
            veritas.c2d.fillStyle = "#a6efff";
            veritas.c2d.fillRect(this.x, this.y, 1900, 1000);
            console.log("sky done");
            veritas.c2d.beginPath();
            veritas.c2d.moveTo(1905, 210);
            veritas.c2d.lineWidth = 5;
            veritas.c2d.strokeStyle = "#e8ffff";
            console.log("hill begins");
            let cp1 = { x: 1600, y: 400 };
            let cp2 = { x: 1300, y: 200 };
            let end = { x: 1100, y: 370 };
            // Cubic Bézier curve
            veritas.c2d.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
            cp1 = { x: 900, y: 450 };
            cp2 = { x: 400, y: 400 };
            end = { x: 200, y: 600 };
            veritas.c2d.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
            cp1 = { x: 180, y: 620 };
            cp2 = { x: 90, y: 590 };
            end = { x: -5, y: 650 };
            veritas.c2d.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
            veritas.c2d.lineTo(-5, 1005);
            veritas.c2d.lineTo(1905, 1005);
            veritas.c2d.closePath();
            veritas.c2d.fillStyle = "#eeeeee";
            veritas.c2d.fill();
            veritas.c2d.stroke();
            console.log("hilldone");
            console.log("waybeginn");
            veritas.c2d.beginPath();
            veritas.c2d.moveTo(185, 607);
            veritas.c2d.lineWidth = 2;
            veritas.c2d.strokeStyle = "black";
            cp1 = { x: 100, y: 800 };
            cp2 = { x: 1000, y: 600 };
            end = { x: 1600, y: 1000 };
            veritas.c2d.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
            veritas.c2d.quadraticCurveTo(1400, 1200, 1200, 1000);
            veritas.c2d.bezierCurveTo(cp1.x + 900, cp1.y, cp2.x - 1000, cp2.y + 190, 100, 613);
            veritas.c2d.closePath();
            veritas.c2d.fillStyle = "#e6ffff";
            veritas.c2d.fill();
            veritas.c2d.stroke();
            console.log("waydone");
            veritas.c2d.beginPath();
            let x = Math.floor(Math.random() * 100) + 1700;
            let y = Math.floor(Math.random() * 100) + 850;
            veritas.c2d.arc(x, y, 40, 0, 2 * Math.PI, false);
            veritas.c2d.closePath();
            veritas.c2d.fillStyle = "#e9ffff";
            veritas.c2d.fill();
            veritas.c2d.strokeStyle = '#000000';
            veritas.c2d.stroke();
            veritas.c2d.beginPath();
            veritas.c2d.arc(x, y - 45, 30, 0, 2 * Math.PI, false);
            veritas.c2d.closePath();
            veritas.c2d.fillStyle = "#e9ffff";
            veritas.c2d.fill();
            veritas.c2d.strokeStyle = '#000000';
            veritas.c2d.stroke();
            veritas.c2d.beginPath();
            veritas.c2d.moveTo(x - 15, y - 55);
            veritas.c2d.lineTo(x - 60, y - 37);
            veritas.c2d.closePath();
            veritas.c2d.stroke();
            veritas.c2d.beginPath();
            veritas.c2d.moveTo(x + 30, y - 50);
            veritas.c2d.lineTo(x + 43, y - 42);
            veritas.c2d.closePath();
            veritas.c2d.stroke();
            veritas.c2d.beginPath();
            veritas.c2d.arc(x, y - 80, 20, 0, 2 * Math.PI, false);
            veritas.c2d.closePath();
            veritas.c2d.fillStyle = "#e9ffff";
            veritas.c2d.fill();
            veritas.c2d.strokeStyle = '#000000';
            //augen
            veritas.c2d.stroke();
            veritas.c2d.beginPath();
            veritas.c2d.moveTo(x, y - 85);
            veritas.c2d.lineTo(x + 2, y - 85);
            veritas.c2d.closePath();
            veritas.c2d.stroke();
            veritas.c2d.beginPath();
            veritas.c2d.moveTo(x + 10, y - 85);
            veritas.c2d.lineTo(x + 12, y - 85);
            veritas.c2d.closePath();
            veritas.c2d.lineWidth = 3;
            veritas.c2d.stroke();
            console.log("snowman");
        }
    }
    veritas.Background = Background;
})(veritas || (veritas = {}));
//# sourceMappingURL=background.js.map