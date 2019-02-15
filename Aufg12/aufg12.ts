namespace invino {
    window.addEventListener("load", gameStart);
    export let c2d: CanvasRenderingContext2D;
    let address: string = "https://testappobiwan.herokuapp.com/";
    let querystring: string = "";
    let fps: number = 25;
    let sledges: Sledge[] = [];
    let trees: Tree[] = [];
    let snowflakes: Cokeline[] = [];
    let imgData: ImageData;
    let bullet: Bullet[] = [];
    let playerScore: number = 0;
    let gameEndbool: boolean = false;

    function gameStart(): void {
        document.getElementById('endscore').style.display = 'none';
        gameEndbool = false;
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        c2d = canvas.getContext("2d");
        let start: startScreen = new startScreen();
        let showstart: startScreen = start;
        showstart.init();
        showstart.draw();
        window.addEventListener("click", init);

    }
    function init(_e: Event): void {
        setupAsyncForm();
        window.removeEventListener("click", init);
        console.log("init");
        window.setTimeout(gameEnds, 45000);
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
        document.addEventListener("click", cords);
    }

    function update(): void {
        if (gameEndbool == false) {
            window.setTimeout(update, 1000 / fps);
            c2d.clearRect(0, 0, c2d.canvas.width, c2d.canvas.height);
            c2d.putImageData(imgData, 0, 0);

            //SCORE
            c2d.font = "100px Ubuntu";
            c2d.fillStyle = "red";
            c2d.fillText(playerScore.toString(), 200, 100);

            //SLEDGE

            for (let i: number = 0; i < sledges.length; i++) {
                let sledge = sledges[i];
                if (sledge.direction == true && sledge.hashit == false) {

                    sledge.draw();
                    sledge.move();

                } if (sledge.direction == false && sledge.hashit == false) {
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
                    let sl: Sledge = new Sledge();
                    console.log("new" + sl);
                    sledges.push(sl);
                }
            }
            //SNOW
            for (let i: number = 0; i < 700; i++) {
                let snowflake: Cokeline = snowflakes[i];
                snowflake.move();
                snowflake.draw();
            }
            //wurf
            if (bullet.length == 1) {
                bullet[0].move();
                bullet[0].draw();
            }
        } else {
            gameEnds();

        }
    }

    function bulletshot(_x: number, _y: number): void {
        if (bullet.length < 1) {
            let ammo: Bullet = new Bullet();
            ammo.x = _x;
            ammo.y = _y;
            ammo.dx = 90;
            bullet.push(ammo);
            window.setTimeout(HashIt, 999);
            window.setTimeout(kugeltimeout, 1000);
        }
    }
    function HashIt(): void {

        for (let i: number = 0; i < sledges.length; i++) {
            let sledge = sledges[i];
            if (sledge.x - 100 <= bullet[0].x && sledge.x >= bullet[0].x && sledge.y >= bullet[0].y && sledge.y - 100 <= bullet[0].y && sledge.direction == true) {
                console.log("hitdownwwards");
                playerScore += 100;
                sledges[i].hashit = true;
                sledges[i].xblood = bullet[0].x;
                sledges[i].yblood = bullet[0].y;

            } if (sledge.x + 100 >= bullet[0].x && sledge.x <= bullet[0].x && sledge.y >= bullet[0].y && sledge.y - 100 <= bullet[0].y && sledge.direction == false) {
                console.log("hitupwards");
                playerScore += 50;
                sledges[i].hashit = true;
                sledges[i].xblood = bullet[0].x;
                sledges[i].yblood = bullet[0].y;
            }
        }
    }
    function kugeltimeout(): void {
        bullet = [];
    }
    function cords(event): void {
        console.log(event.offsetX, event.offsetY);
        //bullet.
        let x = event.offsetX;
        let y = event.offsetY;
        bulletshot(x, y);
    }
    function gameEnds(): void {
        gameEndbool = true;
        document.getElementById('ownscore').innerHTML = playerScore.toString();
        document.getElementById('endscore').style.display = '';
        document.getElementById('gameframe').style.display = 'none';
        let input: HTMLElement = document.getElementById("playername");
        input.setAttribute("score", playerScore.toString());
        document.getElementById("playagain").addEventListener("click", reload);

    }
    function reload(): void {
        window.location.reload();
    }
    function setupAsyncForm(): void {
        let button: Element = document.querySelector("[type=button]");
        button.addEventListener("click", handleClickOnAsync);
    }

    function handleClickOnAsync(_event: Event): void {
        // let color: NodeListOf<HTMLInputElement> = document.querySelectorAll(":checked");
        sendRequestWithCustomData();
    }

    function sendRequestWithCustomData(): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", address + "/?" + querystring, true);
        console.log(querystring);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
   

    function handleStateChange(_event: ProgressEvent): void {
        var xhr: XMLHttpRequest = <XMLHttpRequest>_event.target;
        console.log(xhr.readyState);

        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);

            var responsearea = document.getElementById("scores");
            responsearea.innerHTML = "";
            responsearea.innerHTML += xhr.response;
        }
    }
}