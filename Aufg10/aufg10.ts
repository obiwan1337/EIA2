namespace hillanimation {
    window.addEventListener("load", init);
    export let c2d: CanvasRenderingContext2D;
    let fps: number = 25;
    export let baumcount: number = 0;
    let sledges: Sledgeslide[] = [];
    let trees: Tree[] = [];
    let snowflakes: Snowflake[] = [];
    let imgData;
    function init(_e: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        c2d = canvas.getContext("2d");
        //BACKGROUND
        let background: Background = new Background();
        background.x = 0;
        background.y = 0;

        let bg: Background = background;
        bg.draw();

        // TREES
        for (let i: number = 0; i < 10; i++) {
            let x: number = Math.floor(Math.random() * 600) + 600;
            let y: number = Math.floor(Math.random() * 200) + 450;

            let tree: Tree = new Tree();
            tree.x = x;
            tree.y = y;
            trees.push(tree);
        }
        for (let i: number = 0; i < 10; i++) {
            let tree: Tree = trees[i];
            baumcount = i;
            tree.draw();
        }
        imgData = c2d.getImageData(0, 0, c2d.canvas.width, c2d.canvas.height);
        //SLEDGES
        for (let i: number = 0; i < 10; i++) {
            let sl: Sledgeslide = new Sledgeslide();
            sl.x = Math.floor(Math.random() * 300) + 1600;
            sl.y = Math.floor(Math.random() * 150) + 300;
            sl.dx = Math.floor(Math.random() * 2) - 4;
            sl.dy = Math.floor(Math.random() * -2) + 4;
            sl.direction = true;
            sledges.push(sl);
        }
        //SNOW
        for (let i: number = 0; i < 700; i++) {
            let snowflake: Snowflake = new Snowflake();
            snowflake.x = Math.random() * c2d.canvas.width;
            snowflake.y = Math.random() * c2d.canvas.height;
            snowflake.dx = -0.5
            snowflake.dy = Math.floor(Math.random() * 1) + 3;
            snowflakes.push(snowflake);
        }
        update();
    }

    function update(): void {
        window.setTimeout(update, 1000 / fps);
        c2d.clearRect(0, 0, c2d.canvas.width, c2d.canvas.height);
        c2d.putImageData(imgData, 0, 0);

        //SLEDGE
        
        for (let i: number = 0; i < 10; i++) {
            let sledge = sledges[i];
            if (sledge.y <= 350) {
            
                sledge.direction = true;

            }
            else if (sledge.y >= 750) {
                
                sledge.direction = false;
            }
            if (sledge.direction == true) {
               
                sledge.drawslide();
                sledge.moveslide();
            }
            else {
                
                sledge.drawpull();
                sledge.movepull();
            }
        }
        //SNOW
        for (let i: number = 0; i < 700; i++) {
            let snowflake: Snowflake = snowflakes[i];
            snowflake.move();
            snowflake.draw();
        }
    }
}

