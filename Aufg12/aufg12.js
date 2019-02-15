var invino;
(function (invino) {
    window.addEventListener("load", gameStart);
    let address = "https://testappobiwan.herokuapp.com/";
    let querystring = "";
    let fps = 25;
    let sledges = [];
    let trees = [];
    let snowflakes = [];
    let imgData;
    let bullet = [];
    let playerScore = 0;
    let gameEndbool = false;
    function gameStart() {
        document.getElementById('endscore').style.display = 'none';
        gameEndbool = false;
        let canvas = document.getElementsByTagName("canvas")[0];
        invino.c2d = canvas.getContext("2d");
        let start = new invino.startScreen();
        let showstart = start;
        showstart.init();
        showstart.draw();
        window.addEventListener("click", init);
    }
    function init(_e) {
        setupAsyncForm();
        window.removeEventListener("click", init);
        console.log("init");
        window.setTimeout(gameEnds, 45000);
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
        if (gameEndbool == false) {
            window.setTimeout(update, 1000 / fps);
            invino.c2d.clearRect(0, 0, invino.c2d.canvas.width, invino.c2d.canvas.height);
            invino.c2d.putImageData(imgData, 0, 0);
            //SCORE
            invino.c2d.font = "100px Ubuntu";
            invino.c2d.fillStyle = "red";
            invino.c2d.fillText(playerScore.toString(), 200, 100);
            //SLEDGE
            for (let i = 0; i < sledges.length; i++) {
                let sledge = sledges[i];
                if (sledge.direction == true && sledge.hashit == false) {
                    sledge.draw();
                    sledge.move();
                }
                if (sledge.direction == false && sledge.hashit == false) {
                    sledge.drawpull();
                    sledge.movepull();
                }
                if (sledges[i].hashit == true) {
                    sledge.drawSledgeAlone();
                    sledge.move();
                    sledge.drawBlood();
                }
                if (sledges[i].y >= 1005 && sledges[i].hashit == true) {
                    sledges.splice(i, 1);
                    let sl = new invino.Sledge();
                    console.log("new" + sl);
                    sledges.push(sl);
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
        else {
            gameEnds();
        }
    }
    function bulletshot(_x, _y) {
        if (bullet.length < 1) {
            let ammo = new invino.Bullet();
            ammo.x = _x;
            ammo.y = _y;
            ammo.dx = 90;
            bullet.push(ammo);
            window.setTimeout(HashIt, 999);
            window.setTimeout(kugeltimeout, 1000);
        }
    }
    function HashIt() {
        for (let i = 0; i < sledges.length; i++) {
            let sledge = sledges[i];
            if (sledge.x - 100 <= bullet[0].x && sledge.x >= bullet[0].x && sledge.y >= bullet[0].y && sledge.y - 100 <= bullet[0].y && sledge.direction == true) {
                console.log("hitdownwwards");
                playerScore += 100;
                sledges[i].hashit = true;
                sledges[i].xblood = bullet[0].x;
                sledges[i].yblood = bullet[0].y;
            }
            if (sledge.x + 100 >= bullet[0].x && sledge.x <= bullet[0].x && sledge.y >= bullet[0].y && sledge.y - 100 <= bullet[0].y && sledge.direction == false) {
                console.log("hitupwards");
                playerScore += 50;
                sledges[i].hashit = true;
                sledges[i].xblood = bullet[0].x;
                sledges[i].yblood = bullet[0].y;
            }
        }
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
    function gameEnds() {
        gameEndbool = true;
        let end = new invino.endScreen();
        let showend = end;
        showend.init();
        showend.draw();
        document.getElementById('ownscore').innerHTML = playerScore.toString();
        document.getElementById('endscore').style.display = '';
        let input = document.getElementById("playername");
        input.setAttribute("score", playerScore.toString());
    }
    function setupAsyncForm() {
        let button = document.querySelector("[type=button]");
        button.addEventListener("click", handleClickOnAsync);
    }
    function handleClickOnAsync(_event) {
        // let color: NodeListOf<HTMLInputElement> = document.querySelectorAll(":checked");
        sendRequestWithCustomData();
    }
    function sendRequestWithCustomData() {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address + "/?" + querystring, true);
        console.log(querystring);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function handleStateChange(_event) {
        var xhr = _event.target;
        console.log(xhr.readyState);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
            var responsearea = document.getElementById("scores");
            responsearea.innerHTML = "";
            responsearea.innerHTML += xhr.response;
        }
    }
})(invino || (invino = {}));
//# sourceMappingURL=aufg12.js.map