import * as Http from "http";
import * as Qs from "querystring";

namespace baum7 {
    console.log("Starting server");
    let port: number = process.env.PORT;
    if (port == undefined)
        port = 8100;

    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);

    function handleListen(): void {
        console.log("Listening");
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        //console.log("I hear voices!");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        let query: object = Qs.parse(_request.url.toString());
        let counter: number = 1;
        _response.write("text");
         for (let key in query) {
            console.log(key);
            console.log(query[key]);
            //_response.write("<p> " + key + " = " + query[key] + " </p> ");
            
           /*  let jsonString: string = JSON.stringify(url.query);
            _response.write(jsonString);*/
        }
        
        _response.end();

    }
}