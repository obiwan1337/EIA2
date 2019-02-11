var invino;
(function (invino) {
    window.addEventListener("load", init);
    let fps = 25;
    let sledges = [];
    let trees = [];
    let snowflakes = [];
    let imgData;
    let bullet = [];
    function init(_e) {
        let canvas = document.getElementsByTagName("canvas")[0];
        invino.c2d = canvas.getContext("2d");
        //background
        let background = new invino.Background();
        let Canbg = background;
        Canbg.init();
        Canbg.draw();
        //schlitten
        for (let i = 0; i < 10; i++) {
            let sl = new invino.Sledge();
            console.log(sl);
            sledges.push(sl);
        }
        //schnee
        for (let i = 0; i < 700; i++) {
            let snowflake = new invino.Cokeline();
            snowflakes.push(snowflake);
        }
        //TREES
        for (let i = 0; i < 10; i++) {
            let tree = new invino.Tree();
            trees.push(tree);
            console.log(tree);
        }
        for (let i = 0; i < 10; i++) {
            let tree = trees[i];
            tree.init();
            tree.draw();
        }
        imgData = invino.c2d.getImageData(0, 0, invino.c2d.canvas.width, invino.c2d.canvas.height);
        update();
        document.addEventListener("click", cords);
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        invino.c2d.clearRect(0, 0, invino.c2d.canvas.width, invino.c2d.canvas.height);
        invino.c2d.putImageData(imgData, 0, 0);
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
        //wurf
        if (bullet.length == 1) {
            bullet[0].move();
            bullet[0].draw();
        }
    }
    function bulletshot(_x, _y) {
        if (bullet.length < 1) {
            let ammo = new invino.Bullet();
            ammo.x = _x;
            ammo.y = _y;
            ammo.dx = 80;
            bullet.push(ammo);
            window.setTimeout(HashIt, 999);
            window.setTimeout(kugeltimeout, 1000);
        }
    }
    function HashIt() {
    }
    function kugeltimeout() {
        bullet = [];
    }
    function cords(event) {
        console.log(event.offsetX, event.offsetY);
        //bullet.
        let x = event.offsetX;
        let y = event.offsetY;
        bulletshot(x, y);
    }
})(invino || (invino = {}));
//# sourceMappingURL=aufg12.js.map