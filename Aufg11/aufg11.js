var veritas;
(function (veritas) {
    window.addEventListener("load", init);
    let fps = 25;
    let sledges = [];
    let trees = [];
    let snowflakes = [];
    let imgData;
    function init(_e) {
        let canvas = document.getElementsByTagName("canvas")[0];
        veritas.c2d = canvas.getContext("2d");
        //background
        let background = new veritas.Background();
        let Canbg = background;
        Canbg.init();
        Canbg.draw();
        //schlitten
        for (let i = 0; i < 10; i++) {
            let sl = new veritas.Sledge();
            console.log(sl);
            sledges.push(sl);
        }
        //schnee
        for (let i = 0; i < 700; i++) {
            let snowflake = new veritas.Cokeline();
            snowflakes.push(snowflake);
        }
        //TREES
        for (let i = 0; i < 10; i++) {
            let tree = new veritas.Tree();
            trees.push(tree);
            console.log(tree);
        }
        for (let i = 0; i < 10; i++) {
            let tree = trees[i];
            tree.init();
            tree.draw();
        }
        imgData = veritas.c2d.getImageData(0, 0, veritas.c2d.canvas.width, veritas.c2d.canvas.height);
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        veritas.c2d.clearRect(0, 0, veritas.c2d.canvas.width, veritas.c2d.canvas.height);
        veritas.c2d.putImageData(imgData, 0, 0);
        //SLEDGE
        for (let i = 0; i < 10; i++) {
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
        for (let i = 0; i < 700; i++) {
            let snowflake = snowflakes[i];
            snowflake.move();
            snowflake.draw();
        }
    }
})(veritas || (veritas = {}));
//# sourceMappingURL=aufg11.js.map