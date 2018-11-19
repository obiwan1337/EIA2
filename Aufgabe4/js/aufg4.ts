namespace cuztree {
    export interface articles {
        name: string;
        price: number;
    }
    let address: string[] = ["0", "0", "0", "0", "0",];
    let cart: string[] = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0",];
    function init(): void {
        refreshlist(trees, 'treelist', 'baumliste');
        refreshradio(stand, 'standlist', 'ständer');
        refreshlist(bulbs, 'bulblist', 'kugelliste');
        refreshlist(candles, 'candlelist', 'kerzenliste');
        refreshradio(shipment, 'shipmentlist', 'shipment');
        cartrefresh();
        setEventlistener();
    }
    function refreshlist(_array, _id, _liste): void
    {
        let node: HTMLElement = document.getElementById(_id);
        let childnode: string = "";

        childnode += "<select id ='" + _liste + "'>";
        childnode += "<option value ='-1'></option>";
        for (let i: number = 0; i < _array.length; i++) {
            childnode += "<option value = '" + i + "'>" + _array[i].name + "</option>";
        }
        if (_liste == 'kugelliste') {
            childnode += "</br><label for='bulb'></label><input id='bulb' type='number' value='0' min='0' max='20'/>";
        }else if (_liste=='kerzenliste') {
            childnode += "</br><label for='candle'></label><input id='candle' type='number' value='0' min='0' max='50'/>";
        } else { }
        node.innerHTML += childnode;
        node.addEventListener("change", refreshcart);
        console.log(cart);
    }
    
    function refreshradio(_array, _id, _liste): void 
    {
        let node: HTMLElement = document.getElementById(_id);
        let childnode: string = "";
        childnode += " <label><input type='radio' name='"+_liste+"'groupradio' value='"+ _liste + "' id='" + _liste + "-1'/></label>";
        for (let i: number = 0; i < _array.length; i++) {
            childnode += "</br><label><input type='radio' name='"+_liste+"'groupradio' value='" + _liste + i + "'  id='" + _liste + i + "' />";
            childnode += _array[i].name + "</label>";
        }
        node.innerHTML += childnode;
        node.addEventListener("change", refreshcart);
    }
    function setEventlistener(): void {
        let node: HTMLElement = document.getElementById("address");
        node.addEventListener("change", refreshcart);
        let nod: HTMLElement = document.getElementById("bebutton");
        nod.addEventListener("click", buttoncheck);
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
        console.log(namevalue + "namevalue");
        let addressvalue = (<HTMLSelectElement>document.getElementById('street')).value;
        console.log(addressvalue + "addressvalue");
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
                cartrefresh();
            } else {
                cart.splice(9, 1, "0");
                console.log(cart.join() + " value kerze");
                cartrefresh();
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
        } else if (fieldIDstring == 'lname') {
            address.splice(0, 1, namevalue)
            cartrefresh();
        } else if (fieldIDstring == 'street') {
            address.splice(1, 1, addressvalue)
            cartrefresh();
        } else {
            console.log("as if i know what happens");
        }
    }
    function cartrefresh() {
        let node: HTMLElement = document.getElementById("cart");
        document.getElementById('cart').innerHTML = "";
        let childnode: string = "";
        let gesprice: number = 0;

        childnode += "<textarea id='rechnung' readonly cols='70' rows='20'>"
        childnode += "Ausgewaehlter Baum: ";
        if (cart[0] != '0') {
            childnode += cart[0] + " ";
            let prc: number = Number(cart[1]);
            let fixedprice: string = prc.toFixed(2);
            let roundedprice: number = Number(fixedprice);
            childnode += " Preis: " + roundedprice;
            gesprice += roundedprice;
        }
        childnode += "\nAusgewaehlter Staender: "
        if (cart[2] != '0') {
            childnode += cart[2] + " ";
            let prc: number = Number(cart[3]);
            let fixedprice: string = prc.toFixed(2);
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
            childnode += cart[10] + " ";
            let prc: number = Number(cart[11]);      
            let fixedprice: string = prc.toFixed(2);
            let roundedprice: number = Number(fixedprice);
            childnode += " Preis: " + roundedprice;
            gesprice += roundedprice;
        }
        childnode += "\nEingegebener Name: "
        if (address[0] != '0') {
            childnode += address[0];
        }
        childnode += "\nEingegebene Adresse: "
        if (address[1] != '0') {
            childnode += address[1];
        }
        let fixedprice: string = gesprice.toFixed(2);
        let roundedgesprice: number = Number(fixedprice);
        childnode += "\nGesamter Preis:" + roundedgesprice;
        childnode += "</textarea>";
        node.innerHTML += childnode;
    }
    function buttoncheck(): void {
        if (address[0] == '0' || address[1] == '0' || cart[10] == '0') {
            let node: HTMLElement = document.getElementById("cart");
            document.getElementById('cart').innerHTML = "";
            let childnode: string = "";
            childnode += "fehlende Eingabe";
            node.innerHTML += childnode;
        } else {
            cartrefresh();
        }

    }

    document.addEventListener('DOMContentLoaded', init);
}