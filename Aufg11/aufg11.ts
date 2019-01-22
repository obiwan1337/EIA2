namespace veritas {
    window.addEventListener("load", init);
    export let c2d: CanvasRenderingContext2D;
    let fps: number = 25;
    let sledges: Sledge[] = [];
    let trees: Tree[] = [];
    let snowflakes: Cokeline[] = [];
    let imgData: ImageData;
    function init(_e: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        c2d = canvas.getContext("2d");
        //background
        let background: Background = new Background();
        let Canbg: Background = background;
        Canbg.init();
        Canbg.draw();
        //schlitten
        for (let i: number = 0; i < 10; i++) {
            let sl: Sledge = new Sledge();
            console.log(sl);
            sledges.push(sl);
        }
        //schnee
        for (let i: number = 0; i < 700; i++) {
            let snowflake: Cokeline = new Cokeline();
            snowflakes.push(snowflake);
        }
        //TREES
        for (let i: number = 0; i < 10; i++) {
            let tree: Tree = new Tree();

            trees.push(tree);
            console.log(tree)
        }
        for (let i: number = 0; i < 10; i++) {
            let tree: Tree = trees[i];
            tree.init();
            tree.draw();
        }
        imgData = c2d.getImageData(0, 0, c2d.canvas.width, c2d.canvas.height);
        update();

    }

    function update(): void {
        window.setTimeout(update, 1000 / fps);
        c2d.clearRect(0, 0, c2d.canvas.width, c2d.canvas.height);
        c2d.putImageData(imgData, 0, 0);
        
        //SLEDGE

        for (let i: number = 0; i < 10; i++) {
            let sledge = sledges[i];
            if (sledge.direction == true) {
               
                sledge.draw();
                sledge.move();
            }
            else {
                
                sledge.drawpull();
                sledge.movepull();
            }
        }
        //SNOW
        for (let i: number = 0; i < 700; i++) {
            let snowflake: Cokeline = snowflakes[i];
            snowflake.move();
            snowflake.draw();
            

        }
    }
}