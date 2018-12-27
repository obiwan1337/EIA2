namespace Canvas {
    window.addEventListener("load", init);
    let c2d: CanvasRenderingContext2D;

    var ctbaum: CanvasRenderingContext2D;
    interface bezier {
        x: number;
        y: number;
    }
    let baumrotate: number = 1;
    function init(_e: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        c2d = canvas.getContext("2d");
        let cbaum: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        ctbaum = cbaum.getContext("2d");
        console.log(c2d);
        sky();
        hill();
        way();
        baumgruppe();
        snowman();
        sledge();
        snowflakes();
    }
    function sky(): void {
        console.log("sky begins");
        c2d.fillStyle = "#a6efff";

        c2d.fillRect(0, 0, 1900, 1000);
        console.log("sky done");
    }


    function hill(): void {
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
    }
    function way(): void {
        console.log("waybeginn");
        c2d.beginPath();
        c2d.moveTo(185, 607);
        c2d.lineWidth = 2;
        c2d.strokeStyle = "black";

        let cp1: bezier = { x: 100, y: 800 };
        let cp2: bezier = { x: 1000, y: 600 };
        let end: bezier = { x: 1600, y: 1000 };
        c2d.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);

        c2d.quadraticCurveTo(1400, 1200, 1200, 1000);
        c2d.bezierCurveTo(cp1.x + 900, cp1.y, cp2.x - 1000, cp2.y + 190, 100, 613);
        c2d.closePath();
        c2d.fillStyle = "#e6ffff";
        c2d.fill();
        c2d.stroke();

        console.log("waydone");
    }
    function baumgruppe(): void {

        let c: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        var ctx: CanvasRenderingContext2D = c.getContext("2d");

        /* 
                ctx.translate(1050, 500);
                ctx.rotate(Math.sin(-0.2));
                ctx.translate(-1050, -500);
                ctx.rect(600, 400, 900, 200);
        
         */

        //c2d.stroke();
        for (let i: number = 0; i < 10; i++) {
            let x: number = Math.floor(Math.random() * 600) + 600;
            let y: number = Math.floor(Math.random() * 200) + 450;

            if (x >= 600 && y >= 400) {
                ctbaum.translate(1050, 500);
                ctbaum.rotate(Math.sin(0.2));
                if (i >= 3) {
                    ctbaum.rotate(Math.sin(0.2));
                }
                ctbaum.translate(-1050, -500);
                if (i >= 2) {
                    singletree(x, y);
                }
                ctbaum.translate(1050, 500);
                ctbaum.rotate(Math.sin(-0.2));
                if (i >= 1) {
                    ctbaum.rotate(Math.sin(-0.2));
                }
                ctbaum.translate(-1050, -500);
                console.log(x, y + " tree");
            } else {
                console.log("fuckingshit");
                console.log(x, y);
            }
        }
    }
    function singletree(_x: number, _y: number): void {
        console.log("einbaum");

        ctbaum.lineWidth = 3;

        ctbaum.beginPath();
        ctbaum.moveTo(_x, _y);

        ctbaum.lineTo(_x + 25, _y);
        ctbaum.lineTo(_x + 25, _y - 50);
        ctbaum.lineTo(_x + 50, _y - 35);
        ctbaum.lineTo(_x + 30, _y - 60);
        ctbaum.lineTo(_x + 100, _y - 45);
        ctbaum.lineTo(_x + 30, _y - 140);
        ctbaum.lineTo(_x + 60, _y - 125);
        ctbaum.lineTo(_x + 20, _y - 175);
        ctbaum.lineTo(_x + 48, _y - 166);
        ctbaum.lineTo(_x, _y - 240);
        console.log("spitze");
        ctbaum.lineTo(_x - 48, _y - 166);
        ctbaum.lineTo(_x - 20, _y - 175);
        ctbaum.lineTo(_x - 60, _y - 125);
        ctbaum.lineTo(_x - 30, _y - 140);
        ctbaum.lineTo(_x - 100, _y - 45);
        ctbaum.lineTo(_x - 30, _y - 60);
        ctbaum.lineTo(_x - 50, _y - 35);
        ctbaum.lineTo(_x - 25, _y - 50);
        ctbaum.lineTo(_x - 25, _y);
        ctbaum.closePath();

        ctbaum.fillStyle = "green";
        ctbaum.fill();
        ctbaum.strokeStyle = "green";
        ctbaum.stroke();
        ctbaum.beginPath();
        ctbaum.lineTo(_x + 24, _y);
        ctbaum.lineTo(_x + 24, _y - 50);
        ctbaum.lineTo(_x - 24, _y - 50);
        ctbaum.lineTo(_x - 24, _y);
        ctbaum.closePath();
        ctbaum.strokeStyle = "#663300";
        ctbaum.fillStyle = "#663300";
        ctbaum.fill();
        ctbaum.stroke();
        ctbaum.strokeStyle = "#000000";
    }
    function snowman(): void {
        c2d.beginPath();
        let x: number = Math.floor(Math.random() * 100) + 1500;
        let y: number = Math.floor(Math.random() * 100) + 1000;

        c2d.arc(x, y, 40, 0, 2 * Math.PI, false);
        c2d.closePath();
        c2d.fillStyle = "#e9ffff";
        c2d.fill();
        c2d.strokeStyle = '#000000';
        c2d.stroke();
        c2d.beginPath();
        c2d.arc(x + 19, y - 45, 30, 0, 2 * Math.PI, false);
        c2d.closePath();
        c2d.fillStyle = "#e9ffff";
        c2d.fill();
        c2d.strokeStyle = '#000000';
        c2d.stroke();

        c2d.beginPath();
        c2d.moveTo(x, y - 45);
        c2d.lineTo(x - 50, y - 37);
        c2d.closePath();
        c2d.stroke();
        c2d.beginPath();
        c2d.moveTo(x + 47, y - 50);
        c2d.lineTo(x + 70, y - 42);
        c2d.closePath();
        c2d.stroke();
        c2d.beginPath();
        c2d.arc(x + 33, y - 80, 20, 0, 2 * Math.PI, false);
        c2d.closePath();
        c2d.fillStyle = "#e9ffff";
        c2d.fill();
        c2d.strokeStyle = '#000000';
        //augen
        c2d.stroke();
        c2d.beginPath();
        c2d.moveTo(x + 33, y - 85);
        c2d.lineTo(x + 35, y - 85);
        c2d.closePath();
        c2d.stroke();
        c2d.beginPath();
        c2d.moveTo(x + 43, y - 85);
        c2d.lineTo(x + 45, y - 85);
        c2d.closePath();
        c2d.lineWidth = 3;
        c2d.stroke();
        console.log("snowman");
    }
    function sledge(): void {
        c2d.beginPath();
        let x: number = Math.floor(Math.random() * 100) + 1300;
        let y: number = Math.floor(Math.random() * 100) + 700;
        if (x > 1350) {
            x += 55; y += 45;
        }
        c2d.moveTo(x, y);
        c2d.lineTo(x - 100, y + 55);
        c2d.bezierCurveTo(x - 140, y + 80, x - 140, y + 30, x - 100, y + 20);
        c2d.lineTo(x - 115, y + 60);
        c2d.lineTo(x - 100, y + 25);
        c2d.lineTo(x, y - 20);
        c2d.lineTo(x - 10, y + 5);
        //c2d.lineTo();
        c2d.closePath();
        c2d.stroke();

        //c2d.moveTo(x-25, y-10);
        //c2d.lineTo(x - 120, y + 35);
        c2d.moveTo(x - 123, y + 35);
        c2d.bezierCurveTo(x - 160, y + 70, x - 165, y + 15, x - 125, y + 0);
        c2d.lineTo(x - 145, y + 46);
        //c2d.lineTo(x - 125, y +5);

        c2d.stroke();
        c2d.beginPath();
        c2d.moveTo(x - 100, y + 25);
        c2d.lineTo(x - 125, y + 5);
        c2d.lineTo(x - 25, y - 35);
        c2d.lineTo(x, y - 20);
        c2d.lineTo(x - 100, y + 25);

        //c2d.lineTo(x - 10, y + 5);
        c2d.closePath();
        //c2d.bezierCurveTo(x - 180, y + 85, x - 180, y + 30, x - 120, y + 20);
        //c2d.lineTo(x - 130, y + 60);


        c2d.stroke();
        c2d.fillStyle = "#563900";
        c2d.fill();
        göre(x, y);
    }
    function göre(_x: number, _y): void {
        c2d.beginPath();
        c2d.moveTo(_x - 70, _y + 55);
        c2d.lineTo(_x - 50, _y - 5);
        c2d.lineTo(_x - 40, _y - 25);
        c2d.lineTo(_x - 90, _y - 20);
        c2d.lineTo(_x - 100, _y - 5);

        c2d.moveTo(_x - 40, _y - 25);
        c2d.lineTo(_x - 45, _y - 60);
        c2d.lineTo(_x - 67, _y +10); //arm eins
        c2d.moveTo(_x - 45, _y - 60);
        c2d.lineTo(_x - 97, _y-5); // arm 2
        c2d.stroke();
        c2d.beginPath();
       
        c2d.arc(_x - 45, _y - 74, 10, 0, 2 * Math.PI, false);
        
        c2d.moveTo(_x - 46, _y - 74);
        c2d.lineTo(_x - 48, _y - 74);
        c2d.moveTo(_x - 50, _y - 75);
        c2d.lineTo(_x - 52, _y - 75);
        c2d.stroke();
    }
    function snowflakes(): void {
        for (let i: number = 0; i < 500; i++) {
            let x: number = Math.random() * c2d.canvas.width;
            let y: number = Math.random() * c2d.canvas.height;
            singleflake(x, y);
        }
    }

    function singleflake(_x: number, _y: number): void {
        c2d.strokeStyle = "#ffffff";
        c2d.lineWidth = 5;
        c2d.beginPath();
        c2d.moveTo(_x - 2, _y);
        c2d.lineTo(_x + 2, _y);
        c2d.closePath();
        c2d.stroke();


        c2d.moveTo(_x, _y - 2);
        c2d.lineTo(_x, _y + 2);
        c2d.closePath();
        c2d.stroke();
    }
}

