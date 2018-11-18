namespace cuztree {
    export interface articles {
        name: string;
        price: number;
    }
    let adress: string[] = ["0", "0", "0", "0", "0",];
    let cart: string[] = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0",];
    function init(): void {
        refreshtrees(trees, 'treelist', 'baumliste');
        refreshstand();
        bulbrefresh();
        candlerefresh();
        shipmentrefresh();
        cartrefresh();
        adressrefresh();
    }
    console.log(cart);
    function refreshtrees(_array, _id, _liste): void {
        let node: HTMLElement = document.getElementById(_id);
        let childnode: string = "";

        childnode += "<select id ='" + _liste + "'>";
        childnode += "<option value ='-1'></option>";
        for (let i: number = 0; i < _array.length; i++) {
            childnode += "<option value = '" + i + "'>" + _array[i].name + "</option>";
        }
        node.innerHTML += childnode;
        node.addEventListener("change", refreshcart);
        console.log(cart);
    }
    function refreshstand(): void {
        let node: HTMLElement = document.getElementById("standlist");
        let childnode: string = "";
        childnode += " <label><input type='radio' name='standgroupradio' value='Ständer' id='ständer-1'/></label>";
        for (let i: number = 0; i < stand.length; i++) {
            childnode += "</br><label><input type='radio' name='standgroupradio' value='Ständer" + i + "'  id='ständer" + i + "' />";

            childnode += stand[i].name + "</label>";
        }
        node.innerHTML += childnode;
        node.addEventListener("change", refreshcart);
    }
    function bulbrefresh(): void {
        let node: HTMLElement = document.getElementById("bulblist");
        let childnode: string = "";
        childnode += "<select id ='kugelliste'>";
        childnode += "<option value ='-1'></option>";
        for (let i: number = 0; i < bulbs.length; i++) {
            childnode += "<option value = '" + i + "' id='bulb" + i + "'>" + bulbs[i].name + "</option>";
        }
        childnode += "</br><label for='bulb'></label><input id='bulb' type='number' value='0' min='0' max='20'/>";
        node.innerHTML += childnode;
        node.addEventListener("change", refreshcart);
    }
    function candlerefresh(): void {
        let node: HTMLElement = document.getElementById("candlelist");
        let childnode: string = "";
        childnode += "<select id ='kerzenliste'>";
        childnode += "<option value = '-1'></option>";
        for (let i: number = 0; i < candles.length; i++) {
            childnode += "<option value = '" + i + "'>" + candles[i].name + "</option>";
        }
        childnode += "</br><label for='candle'></label><input id='candle' type='number' value='0' min='0' max='50'/>";
        node.innerHTML += childnode;
        node.addEventListener("change", refreshcart);
    }
    function shipmentrefresh(): void {
        let node: HTMLElement = document.getElementById("shipmentlist");
        let childnode: string = "";
        childnode += " <label><input type='radio' required name='shipgroupradio' value='shipment' id='shipment-1'required/></label>";
        for (let i: number = 0; i < shipment.length; i++) {
            childnode += "</br><label><input type='radio'  name='shipgroupradio' value='shipment" + i + "'  id='shipment" + i + "' required/>";

            childnode += shipment[i].name + "</label>";
        }
        node.innerHTML += childnode;
        node.addEventListener("change", refreshcart);
    }
    function adressrefresh(): void {
        let node: HTMLElement = document.getElementById("adress");        
        node.addEventListener("change", refreshcart);
        
    }
    function refreshcart(_event: MouseEvent): void {
        let changedfield: HTMLElement = <HTMLElement>_event.target;
        let fieldIDstring: string = (changedfield.id);
        console.log(fieldIDstring + " fieldstring");

        let baumvalue = (<HTMLSelectElement>document.getElementById('baumliste')).value;
        console.log(baumvalue);
        let bulbvalue = (<HTMLSelectElement>document.getElementById('kugelliste')).value;
        console.log(bulbvalue);
        let candlevalue = (<HTMLSelectElement>document.getElementById('kerzenliste')).value;
        console.log(candlevalue);
        let bulbcount = (<HTMLSelectElement>document.getElementById('bulb')).value;
        console.log(bulbcount);
        let candlecount = (<HTMLSelectElement>document.getElementById('candle')).value;
        console.log(candlecount);
        let namevalue = (<HTMLSelectElement>document.getElementById('lname')).value;
        console.log(namevalue);
        let adressvalue = (<HTMLSelectElement>document.getElementById('lname')).value;
        console.log(adressvalue);
        if (fieldIDstring == 'baumliste') {

            if (baumvalue != '-1') {
                cart.splice(0, 2);
                cart.splice(0, 0, trees[baumvalue].name);
                cart.splice(1, 0, trees[baumvalue].price);
                console.log(cart.join() + " baumadd");
                cartrefresh()
            } else {
                cart.splice(0, 2, "0", "0");
                console.log(cart.join() + " baumsplice");
                cartrefresh()
            }

        } else if (fieldIDstring.substr(0, 7) == 'ständer') {
            var staendernr: string = fieldIDstring.substr(7, 3);
            if (staendernr != '-1') {
                console.log(staendernr + " staender Nummer");
                cart.splice(2, 2);
                cart.splice(2, 0, stand[staendernr].name);
                cart.splice(3, 0, stand[staendernr].price);
                cartrefresh();
            } else {
                cart.splice(2, 2, "0", "0");
                cartrefresh();
            }


        } else if (fieldIDstring == 'kugelliste') {

            if (bulbvalue != '-1') {
                cart.splice(4, 2);
                cart.splice(4, 0, bulbs[bulbvalue].name);
                cart.splice(5, 0, bulbs[bulbvalue].price);
                console.log(cart.join() + " staender adden");
                cartrefresh();
            } else {
                cart.splice(4, 2, "0", "0");
                console.log(cart.join() + " staender splicen");
                cartrefresh();
            }

        } else if (fieldIDstring == 'bulb') {

            if (bulbcount != '-1') {

                cart.splice(6, 1, bulbcount);
                console.log(cart.join() + " value kugel");
                cartrefresh();
            } else {
                cart.splice(6, 1, "0");
                console.log(cart.join() + " value kugel");
                cartrefresh();
            }
        } else if (fieldIDstring == 'kerzenliste') {

            if (candlevalue != '-1') {
                cart.splice(7, 1);
                cart.splice(7, 0, candles[candlevalue].name);
                cart.splice(8, 0, candles[candlevalue].price);
                console.log(cart.join() + " candle adden");
                cartrefresh();
            } else {
                cart.splice(7, 2, "0", "0");
                console.log(cart.join() + " splice candle");
                cartrefresh();
            }
        } else if (fieldIDstring == 'candle') {

            if (candlecount != '0') {

                cart.splice(9, 1, candlecount);
                console.log(cart.join() + " value kerze");
                //cartrefresh();
            } else {
                cart.splice(9, 1, "0");
                console.log(cart.join() + " value kerze");
                //cartrefresh();
            }
        } else if (fieldIDstring.substr(0, 8) == 'shipment') {

            var shipmentnr: string = fieldIDstring.substr(8, 3);
            if (shipmentnr != '-1') {
                console.log(shipmentnr + " shipmentnr Nummer");
                cart.splice(10, 2);
                cart.splice(10, 0, shipment[shipmentnr].name);
                cart.splice(11, 0, shipment[shipmentnr].price);
                cartrefresh();
            } else {
                cart.splice(10, 2, "0", "0");
                cartrefresh();
            }
        }  else if (fieldIDstring == '') {
            
        }else {
            console.log("as if i know what happens");
        }
    }
    function cartrefresh() {
        let node: HTMLElement = document.getElementById("cart");
        document.getElementById('cart').innerHTML = "";
        let childnode: string = "";
        let gesprice: number = 0;
            
        childnode += "<textarea id='rechnung' readonly cols='70' rows='40'>"
        childnode += "Ausgewaehlter Baum: ";
        if (cart[0] != '0') {
            childnode += cart[0] + " ";
            let prc: number = Number(cart[1]);
            let price: number = prc;
            let fixedprice: string = price.toFixed(2);
            let roundedprice: number = Number(fixedprice);
            childnode += " Preis: " + roundedprice;
            gesprice += roundedprice;
        }
        childnode += "\nAusgewaehlter Staender: "
        if (cart[2] != '0') {
            childnode += cart[2]+ " ";
            let prc: number = Number(cart[3]);
            let price: number = prc;
            let fixedprice: string = price.toFixed(2);
            let roundedprice: number = Number(fixedprice);
            childnode += " Preis: " + roundedprice;
            gesprice += roundedprice;
        }
        childnode += "\nAusgewaehlte Kugel: "
        if (cart[4] != '0') {
            childnode += cart[4];
            let prc: number = Number(cart[5]);
            let nbr: number = parseInt(cart[6]);
            childnode += " Anzahl: " + nbr
            let price: number = prc * nbr;
            let fixedprice: string = price.toFixed(2);
            let roundedprice: number = Number(fixedprice);
            childnode += " Preis: " + roundedprice;
            gesprice += roundedprice;
            
        }
        childnode += "\nAusgewaehlte Kerze: "
        if (cart[7] != '0') {
            childnode += cart[7];
            let prc: number = Number(cart[8]);
            let nbr: number = parseInt(cart[9]);
            childnode += " Anzahl: " + nbr;
            let price: number = prc * nbr;
            let fixedprice: string = price.toFixed(2);
            let roundedprice: number = Number(fixedprice);
            childnode += " Preis: " + roundedprice;
            gesprice += roundedprice;
            
        }
        childnode += "\nAusgewaehlter: Lieferant: "
        if (cart[10] != '0') {
            childnode += cart[10]+ " ";
            let prc: number = Number(cart[11]);

            let price: number = prc;
            let fixedprice: string = price.toFixed(2);
            let roundedprice: number = Number(fixedprice);
            childnode += " Preis: " + roundedprice;
            gesprice += roundedprice;
            childnode += "</textarea>";
           
        }
        let fixedprice: string = gesprice.toFixed(2);
        let roundedgesprice: number = Number(fixedprice);
        childnode += "\n Gesamter Preis:" + roundedgesprice;
        node.innerHTML += childnode;
        
    }
    function buttoncheck(): void {
        if (adress[0] == '0' || adress[1] == '0'||cart[10]== '0') {
            let node: HTMLElement = document.getElementById("cart");
            document.getElementById('cart').innerHTML = "";
            let childnode: string = "";
            childnode += "fehlende Eingabe";
            node.innerHTML += childnode;
        }else 
            document.getElementsByTagName("button")[0].removeAttribute("disabled");
    }
    document.addEventListener('DOMContentLoaded', init);
}
//document.querySelector("#feld2").removeAttribute("disabled");
//document.getElementsByTagName("H1")[0].removeAttribute("class");