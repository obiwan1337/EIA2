namespace invino {
    window.addEventListener("load", init);
    //let serverAddress: string = "http://localhost:8100";
    let serverAddress: string = "https://dbeier2.herokuapp.com/";
    interface playerArray {
        name: string;
        score: number;
    }
    function init(_event: Event): void {
        console.log("Init");
        let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("savescore");
        let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("showscore");

        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);

    }

    function insert(_event: Event): void {
        let inputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        let query: string = "command=insert";
        query += "&player=" + inputs[0].value;
        query += "&score=" + inputs[0].getAttribute("score");

        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    function refresh(_event: Event): void {
        let query: string = "command=refresh";
        sendRequest(query, handleSearchResponse);
    }

    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }

    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }

    function handleSearchResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        console.log(xhr);
        if (xhr.readyState == XMLHttpRequest.DONE) {

            let score: playerArray[] = JSON.parse(xhr.response);

            score.sort(playerDataSort);
            let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
            let textareaInnerString: string = "";
            for (let i: number = 0; i < 5; i++) {
                let ranking: number = 1 + i;
                textareaInnerString += ranking + "_ " + "name " + score[i].name + " Score:" + score[i].score + "\r\n";
            }
            output.innerHTML = textareaInnerString;

            output.value

        }
    }

    function playerDataSort(_a: playerArray, _b: playerArray): number {
        let returnNumb: number;
        if (_a.score > _b.score) {
            returnNumb = -1;
        }
        else if (_a.score < _b.score) {
            returnNumb = 1;
        }
        else {
            returnNumb = 0;
        }
        return returnNumb;

    }

}