"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Http = require("http");
var L06_SendData;
(function (L06_SendData) {
    console.log("Starting server");
    var port = process.env.PORT;
    if (port == undefined)
        port = 8100;
    var server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url);
        _response.end();
    }
})(L06_SendData || (L06_SendData = {}));
//# sourceMappingURL=Server.js.map