namespace hillanimation {
    export class Background {
        x:number;
        y:number;
        draw(): void {
            interface bezier {
                x: number;
                y: number;
            }
            console.log("sky begins");
            c2d.fillStyle = "#a6efff";

            c2d.fillRect(this.x, this.y, 1900, 1000);
            console.log("sky done");

            c2d.beginPath();
            c2d.moveTo(1905, 210);

            c2d.lineWidth = 5;
            c2d.strokeStyle = "#e8ffff";


            console.log("hill begins");

            let cp1: bezier = { x: 1600, y: 400 };
            let cp2: bezier = { x: 1300, y: 200 };
            let end: bezier = { x: 1100, y: 370 };

            // Cubic Bézier curve


            c2d.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);


            cp1 = { x: 900, y: 450 };
            cp2 = { x: 400, y: 400 };
            end = { x: 200, y: 600 };

            c2d.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);


            cp1 = { x: 180, y: 620 };
            cp2 = { x: 90, y: 590 };
            end = { x: -5, y: 650 };
            c2d.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
            c2d.lineTo(-5, 1005);
            c2d.lineTo(1905, 1005);
            c2d.closePath();
            c2d.fillStyle = "#eeeeee";
            c2d.fill();
            c2d.stroke();

            console.log("hilldone");
            console.log("waybeginn");
            c2d.beginPath();
            c2d.moveTo(185, 607);
            c2d.lineWidth = 2;
            c2d.strokeStyle = "black";

            cp1 = { x: 100, y: 800 };
            cp2 = { x: 1000, y: 600 };
            end = { x: 1600, y: 1000 };
            c2d.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);

            c2d.quadraticCurveTo(1400, 1200, 1200, 1000);
            c2d.bezierCurveTo(cp1.x + 900, cp1.y, cp2.x - 1000, cp2.y + 190, 100, 613);
            c2d.closePath();
            c2d.fillStyle = "#e6ffff";
            c2d.fill();
            c2d.stroke();

            console.log("waydone");
            c2d.beginPath();

            let x: number = Math.floor(Math.random() * 100) + 1700;
            let y: number = Math.floor(Math.random() * 100) + 850;

            c2d.arc(x, y, 40, 0, 2 * Math.PI, false);
            c2d.closePath();
            c2d.fillStyle = "#e9ffff";
            c2d.fill();
            c2d.strokeStyle = '#000000';
            c2d.stroke();
            c2d.beginPath();
            c2d.arc(x , y - 45, 30, 0, 2 * Math.PI, false);
            c2d.closePath();
            c2d.fillStyle = "#e9ffff";
            c2d.fill();
            c2d.strokeStyle = '#000000';
            c2d.stroke();

            c2d.beginPath();
            c2d.moveTo(x-15, y - 55);
            c2d.lineTo(x - 60, y - 37);
            c2d.closePath();
            c2d.stroke();
            c2d.beginPath();
            c2d.moveTo(x + 30, y - 50);
            c2d.lineTo(x + 43, y - 42);
            c2d.closePath();
            c2d.stroke();
            c2d.beginPath();
            c2d.arc(x , y - 80, 20, 0, 2 * Math.PI, false);
            c2d.closePath();
            c2d.fillStyle = "#e9ffff";
            c2d.fill();
            c2d.strokeStyle = '#000000';
            //augen
            c2d.stroke();
            c2d.beginPath();
            c2d.moveTo(x  , y - 85);
            c2d.lineTo(x +2, y - 85);
            c2d.closePath();
            c2d.stroke();
            c2d.beginPath();
            c2d.moveTo(x +10, y - 85);
            c2d.lineTo(x + 12, y - 85);
            c2d.closePath();
            c2d.lineWidth = 3;
            c2d.stroke();
            console.log("snowman");
        }
    }
}