var Databaseobiwan;
(function (Databaseobiwan) {
    window.addEventListener("load", init);
    //let serverAddress: string = "http://localhost:8100";
    let serverAddress = "https://dbeier2.herokuapp.com/";
    function init(_event) {
        console.log("Init");
        let insertButton = document.getElementById("insert");
        let refreshButton = document.getElementById("refresh");
        let searchButt = document.getElementById("searchbutt");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButt.addEventListener("click", search);
    }
    function insert(_event) {
        let inputs = document.getElementsByTagName("input");
        let query = "command=insert";
        query += "&name=" + inputs[0].value;
        query += "&firstname=" + inputs[1].value;
        query += "&matrikel=" + inputs[2].value;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    function search(_event) {
        let commandSearch = "command=search";
        console.log("testeru");
        let input = document.getElementById("matserch");
        commandSearch += "&Matrikelnummer=" + input.value;
        sendRequest(commandSearch, handleSearchResponse);
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
            let output = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            console.log(output.value);
        }
    }
})(Databaseobiwan || (Databaseobiwan = {}));
//# sourceMappingURL=DatabaseClient.js.map