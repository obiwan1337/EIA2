var hillanimation;
(function (hillanimation) {
    window.addEventListener("load", init);
    let fps = 25;
    hillanimation.baumcount = 0;
    let sledges = [];
    let trees = [];
    let snowflakes = [];
    let imgData;
    function init(_e) {
        let canvas = document.getElementsByTagName("canvas")[0];
        hillanimation.c2d = canvas.getContext("2d");
        //BACKGROUND
        let background = new hillanimation.Background();
        background.x = 0;
        background.y = 0;
        let bg = background;
        bg.draw();
        // TREES
        for (let i = 0; i < 10; i++) {
            let x = Math.floor(Math.random() * 600) + 600;
            let y = Math.floor(Math.random() * 200) + 450;
            let tree = new hillanimation.Tree();
            tree.x = x;
            tree.y = y;
            trees.push(tree);
        }
        for (let i = 0; i < 10; i++) {
            let tree = trees[i];
            hillanimation.baumcount = i;
            tree.draw();
        }
        imgData = hillanimation.c2d.getImageData(0, 0, hillanimation.c2d.canvas.width, hillanimation.c2d.canvas.height);
        //SLEDGES
        for (let i = 0; i < 10; i++) {
            let sl = new hillanimation.Sledgeslide();
            sl.x = Math.floor(Math.random() * 300) + 1600;
            sl.y = Math.floor(Math.random() * 150) + 300;
            sl.dx = Math.floor(Math.random() * 2) - 4;
            sl.dy = Math.floor(Math.random() * -2) + 4;
            sl.direction = true;
            sledges.push(sl);
        }
        //SNOW
        for (let i = 0; i < 700; i++) {
            let snowflake = new hillanimation.Snowflake();
            snowflake.x = Math.random() * hillanimation.c2d.canvas.width;
            snowflake.y = Math.random() * hillanimation.c2d.canvas.height;
            snowflake.dx = -0.5;
            snowflake.dy = Math.floor(Math.random() * 1) + 3;
            snowflakes.push(snowflake);
        }
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        hillanimation.c2d.clearRect(0, 0, hillanimation.c2d.canvas.width, hillanimation.c2d.canvas.height);
        hillanimation.c2d.putImageData(imgData, 0, 0);
        //SLEDGE
        for (let i = 0; i < 10; i++) {
            let sledge = sledges[i];
            if (sledge.y <= 350) {
                sledge.direction = true;
            }
            else if (sledge.y >= 800) {
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
        for (let i = 0; i < 700; i++) {
            let snowflake = snowflakes[i];
            snowflake.move();
            snowflake.draw();
        }
    }
})(hillanimation || (hillanimation = {}));
//# sourceMappingURL=aufg10.js.map