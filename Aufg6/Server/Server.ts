import * as Http from "http"; //Die Node.d.ts Datei wird importiert und das 'http' signalisiert den Zugriff auf http Objekte aus der Node.d.ts.
import * as Url from "url";
import * as Qs from "querystring";

//direkt eine freie Zeile
namespace L06_SendData { // voll nice ein namespace

    console.log("Starting server"); // super mega awesome console.log gibt auf der Console  Starting Server aus. Comic sans power am werk !!
    let port: number = process.env.PORT;// Port wird als Variable des Typs number deklariert und bekommt den Port des Heroku Servers zugewiesen.
    if (port == undefined) // If Abfrage ob der Port gesetzt wurde. 
        port = 8100; // Port bekommt den Wert 8100.
    //super nice freie Zeile ist frei
    let server: Http.Server = Http.createServer();// Die Variable server wird definiert mit dem Typ Http.server und erstellt einen lokalen Server 
    server.addListener("request", handleRequest);// gibt dem server einen Listener mit, der bei einem Request die Function handle Request aufruft.
    server.addListener("listening", handleListen);// gibt dem server einen weiteren Listener der auf ein Signal listened und solange etwas gemacht wird handleListen aufruft.
    server.listen(port);// gibt dem Port an auf dem der Server listenen soll. iHier 8100.
    //direkt die dritte freie Zeile ist frei von Dingen und sollte so bleiben. Sauber und geordnet hier!
    function handleListen(): void { // handlseListen wird erschaffen
        console.log("Listening");// Die function gibt bei Aufruf 'Listening' in der Browser Console aus. Alles mit dem Mega Power von Comic Sans.
    }// Nippelklammer zu um die function zu schließen.
    // mindblowing  void in der Zeile. aber schoen entspannte Leere herscht.
    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {// Der Parameter _request ist ein eingehendes Nachrichtobjekt das von http.server oder http.ClientRequest erschaffen das als erstes Argument an 'request' oder 'response' weitergegeben wird. Es kann genutzt werden um auf den Status der 'response' , den Header und data zuzugreifen. _response uebergibt die Response (auf den Request?)
        //console.log(Http.request.toString());
        _response.setHeader("content-type", "text/html; charset=utf-8");// Der Variablen _response wird mit .setHeader ein Header gesetzt mit dne Eigenschaften content-type, text/html und charset=utf-8
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Der Header bekommt "Access-Control-Allow-Origin" mitgegeben. Das bewirkt, das teilen der Antwort des Servers mit dem abgerufenen Quellcodes. ein nettes sternchen wird auch mitgegeben um "Alles" miteinzubeziehen.
        let query: object = Qs.parse(_request.url.toString());
        let counter: number = 1;
        for (let key in query) {
            console.log(key);
            console.log(query[key]);
            _response.write("<p> " + key + " = " + query[key] + " </p>");
            /*if (key == '/?treesgroupradio' || key == '/?standgroupradio' || key == 'mailboygroupradio' || key == 'standgroupradio') {
                _response.write("<p>Produktname: " + query[key] + " </p>");
            } else if (key == 'lname') {
                _response.write("<p>Name: " + query[key] + " </p>");
            } else if (key == 'street') {
                _response.write("<p>Strasse: " + query[key] + " </p>");
            } else if (query[key] == 0) {
            } else {
                _response.write("<p>Produktname: " + key + " Anzahl: " + query[key] + " </p>");
            }*/
        }
        //console.log("I hear voices!");// Die Konsole hoert Stimmen... sollte evtl zum Psychiater... und den Akuten befall von Comic Sans behandeln lassen.
        //diese Zeile wollte nicht beschrieben werden.
        //Diese Leerzeile wird Ihnen praesentiert von Seitenbacher.
        //_response.write(_request.url);// Die request.url wird an den Header mitgegeben. "The first time response.write() is called, it will send the buffered header information and the first chunk of the body to the client. The second time response.write() is called, Node.js assumes data will be streamed, and sends the new data separately. That is, the response is buffered up to the first chunk of the body." 
        // Seitenbacher Leerzeilen, NUR von Seitenbacher. 
        _response.end();//reponse wird be.endet. Signaliesiert dem Server das alles gesendet wurde und die Nachricht komplett ist. 
    }

}
