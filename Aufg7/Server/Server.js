"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Qs = require("querystring");
var baum7;
(function (baum7) {
    console.log("Starting server");
    let port = process.env.PORT;
    if (port == undefined)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        //console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        let query = Qs.parse(_request.url.toString());
        let counter = 1;
        for (let key in query) {
            _response.write(key + " = " + query[key] + "<br/>");
            //        let jsonString: string = JSON.stringify(url.query);
            //        _response.write(jsonString);
            _response.end();
        }
    }
})(baum7 || (baum7 = {}));
//# sourceMappingURL=Server.js.map