var invino;
(function (invino) {
    window.addEventListener("load", init);
    //let serverAddress: string = "http://localhost:8100";
    let serverAddress = "https://dbeier2.herokuapp.com/";
    function init(_event) {
        console.log("Init");
        let insertButton = document.getElementById("savescore");
        let refreshButton = document.getElementById("showscore");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
    }
    function insert(_event) {
        let inputs = document.getElementsByTagName("input");
        let query = "command=insert";
        query += "&player=" + inputs[0].value;
        query += "&score=" + inputs[0].getAttribute("score");
        console.log(query);
        sendRequest(query, handleInsertResponse);
        document.getElementById('savescore').setAttribute("disabled", "true");
    }
    function refresh(_event) {
        let query = "command=refresh";
        sendRequest(query, handleSearchResponse);
    }
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function handleSearchResponse(_event) {
        let xhr = _event.target;
        console.log(xhr);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let score = JSON.parse(xhr.response);
            score.sort(playerDataSort);
            let output = document.getElementsByTagName("textarea")[0];
            let textareaInnerString = "";
            for (let i = 0; i < 5; i++) {
                let ranking = 1 + i;
                textareaInnerString += ranking + "_ " + "Name: " + score[i].name + " Score:" + score[i].score + "\r\n";
            }
            output.innerHTML = textareaInnerString;
            output.value;
        }
    }
    function playerDataSort(_a, _b) {
        let returnNumb;
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
})(invino || (invino = {}));
//# sourceMappingURL=DatabaseClient.js.map