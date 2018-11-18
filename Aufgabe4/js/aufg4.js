var cuztree;
(function (cuztree) {
    var adress = ["0", "0", "0", "0", "0",];
    var cart = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0",];
    function init() {
        refreshtrees(cuztree.trees, 'treelist', 'baumliste');
        refreshstand();
        bulbrefresh();
        candlerefresh();
        shipmentrefresh();
        cartrefresh();
        adressrefresh();
    }
    console.log(cart);
    function refreshtrees(_array, _id, _liste) {
        var node = document.getElementById(_id);
        var childnode = "";
        childnode += "<select id ='" + _liste + "'>";
        childnode += "<option value ='-1'></option>";
        for (var i = 0; i < _array.length; i++) {
            childnode += "<option value = '" + i + "'>" + _array[i].name + "</option>";
        }
        node.innerHTML += childnode;
        node.addEventListener("change", refreshcart);
        console.log(cart);
    }
    function refreshstand() {
        var node = document.getElementById("standlist");
        var childnode = "";
        childnode += " <label><input type='radio' name='standgroupradio' value='Ständer' id='ständer-1'/></label>";
        for (var i = 0; i < cuztree.stand.length; i++) {
            childnode += "</br><label><input type='radio' name='standgroupradio' value='Ständer" + i + "'  id='ständer" + i + "' />";
            childnode += cuztree.stand[i].name + "</label>";
        }
        node.innerHTML += childnode;
        node.addEventListener("change", refreshcart);
    }
    function bulbrefresh() {
        var node = document.getElementById("bulblist");
        var childnode = "";
        childnode += "<select id ='kugelliste'>";
        childnode += "<option value ='-1'></option>";
        for (var i = 0; i < cuztree.bulbs.length; i++) {
            childnode += "<option value = '" + i + "' id='bulb" + i + "'>" + cuztree.bulbs[i].name + "</option>";
        }
        childnode += "</br><label for='bulb'></label><input id='bulb' type='number' value='0' min='0' max='20'/>";
        node.innerHTML += childnode;
        node.addEventListener("change", refreshcart);
    }
    function candlerefresh() {
        var node = document.getElementById("candlelist");
        var childnode = "";
        childnode += "<select id ='kerzenliste'>";
        childnode += "<option value = '-1'></option>";
        for (var i = 0; i < cuztree.candles.length; i++) {
            childnode += "<option value = '" + i + "'>" + cuztree.candles[i].name + "</option>";
        }
        childnode += "</br><label for='candle'></label><input id='candle' type='number' value='0' min='0' max='50'/>";
        node.innerHTML += childnode;
        node.addEventListener("change", refreshcart);
    }
    function shipmentrefresh() {
        var node = document.getElementById("shipmentlist");
        var childnode = "";
        childnode += " <label><input type='radio' required name='shipgroupradio' value='shipment' id='shipment-1'required/></label>";
        for (var i = 0; i < cuztree.shipment.length; i++) {
            childnode += "</br><label><input type='radio'  name='shipgroupradio' value='shipment" + i + "'  id='shipment" + i + "' required/>";
            childnode += cuztree.shipment[i].name + "</label>";
        }
        node.innerHTML += childnode;
        node.addEventListener("change", refreshcart);
    }
    function adressrefresh() {
        var node = document.getElementById("adress");
        node.addEventListener("change", refreshcart);
    }
    function refreshcart(_event) {
        var changedfield = _event.target;
        var fieldIDstring = (changedfield.id);
        console.log(fieldIDstring + " fieldstring");
        var baumvalue = document.getElementById('baumliste').value;
        console.log(baumvalue);
        var bulbvalue = document.getElementById('kugelliste').value;
        console.log(bulbvalue);
        var candlevalue = document.getElementById('kerzenliste').value;
        console.log(candlevalue);
        var bulbcount = document.getElementById('bulb').value;
        console.log(bulbcount);
        var candlecount = document.getElementById('candle').value;
        console.log(candlecount);
        var namevalue = document.getElementById('lname').value;
        console.log(namevalue);
        var adressvalue = document.getElementById('lname').value;
        console.log(adressvalue);
        if (fieldIDstring == 'baumliste') {
            if (baumvalue != '-1') {
                cart.splice(0, 2);
                cart.splice(0, 0, cuztree.trees[baumvalue].name);
                cart.splice(1, 0, cuztree.trees[baumvalue].price);
                console.log(cart.join() + " baumadd");
                cartrefresh();
            }
            else {
                cart.splice(0, 2, "0", "0");
                console.log(cart.join() + " baumsplice");
                cartrefresh();
            }
        }
        else if (fieldIDstring.substr(0, 7) == 'ständer') {
            var staendernr = fieldIDstring.substr(7, 3);
            if (staendernr != '-1') {
                console.log(staendernr + " staender Nummer");
                cart.splice(2, 2);
                cart.splice(2, 0, cuztree.stand[staendernr].name);
                cart.splice(3, 0, cuztree.stand[staendernr].price);
                cartrefresh();
            }
            else {
                cart.splice(2, 2, "0", "0");
                cartrefresh();
            }
        }
        else if (fieldIDstring == 'kugelliste') {
            if (bulbvalue != '-1') {
                cart.splice(4, 2);
                cart.splice(4, 0, cuztree.bulbs[bulbvalue].name);
                cart.splice(5, 0, cuztree.bulbs[bulbvalue].price);
                console.log(cart.join() + " staender adden");
                cartrefresh();
            }
            else {
                cart.splice(4, 2, "0", "0");
                console.log(cart.join() + " staender splicen");
                cartrefresh();
            }
        }
        else if (fieldIDstring == 'bulb') {
            if (bulbcount != '-1') {
                cart.splice(6, 1, bulbcount);
                console.log(cart.join() + " value kugel");
                cartrefresh();
            }
            else {
                cart.splice(6, 1, "0");
                console.log(cart.join() + " value kugel");
                cartrefresh();
            }
        }
        else if (fieldIDstring == 'kerzenliste') {
            if (candlevalue != '-1') {
                cart.splice(7, 1);
                cart.splice(7, 0, cuztree.candles[candlevalue].name);
                cart.splice(8, 0, cuztree.candles[candlevalue].price);
                console.log(cart.join() + " candle adden");
                cartrefresh();
            }
            else {
                cart.splice(7, 2, "0", "0");
                console.log(cart.join() + " splice candle");
                cartrefresh();
            }
        }
        else if (fieldIDstring == 'candle') {
            if (candlecount != '0') {
                cart.splice(9, 1, candlecount);
                console.log(cart.join() + " value kerze");
            }
            else {
                cart.splice(9, 1, "0");
                console.log(cart.join() + " value kerze");
            }
        }
        else if (fieldIDstring.substr(0, 8) == 'shipment') {
            var shipmentnr = fieldIDstring.substr(8, 3);
            if (shipmentnr != '-1') {
                console.log(shipmentnr + " shipmentnr Nummer");
                cart.splice(10, 2);
                cart.splice(10, 0, cuztree.shipment[shipmentnr].name);
                cart.splice(11, 0, cuztree.shipment[shipmentnr].price);
                cartrefresh();
            }
            else {
                cart.splice(10, 2, "0", "0");
                cartrefresh();
            }
        }
        else if (fieldIDstring == '') {
        }
        else {
            console.log("as if i know what happens");
        }
    }
    function cartrefresh() {
        var node = document.getElementById("cart");
        document.getElementById('cart').innerHTML = "";
        var childnode = "";
        var gesprice = 0;
        childnode += "<textarea id='rechnung' readonly cols='70' rows='40'>";
        childnode += "Ausgewaehlter Baum: ";
        if (cart[0] != '0') {
            childnode += cart[0] + " ";
            var prc = Number(cart[1]);
            var price = prc;
            var fixedprice_1 = price.toFixed(2);
            var roundedprice = Number(fixedprice_1);
            childnode += " Preis: " + roundedprice;
            gesprice += roundedprice;
        }
        childnode += "\nAusgewaehlter Staender: ";
        if (cart[2] != '0') {
            childnode += cart[2] + " ";
            var prc = Number(cart[3]);
            var price = prc;
            var fixedprice_2 = price.toFixed(2);
            var roundedprice = Number(fixedprice_2);
            childnode += " Preis: " + roundedprice;
            gesprice += roundedprice;
        }
        childnode += "\nAusgewaehlte Kugel: ";
        if (cart[4] != '0') {
            childnode += cart[4];
            var prc = Number(cart[5]);
            var nbr = parseInt(cart[6]);
            childnode += " Anzahl: " + nbr;
            var price = prc * nbr;
            var fixedprice_3 = price.toFixed(2);
            var roundedprice = Number(fixedprice_3);
            childnode += " Preis: " + roundedprice;
            gesprice += roundedprice;
        }
        childnode += "\nAusgewaehlte Kerze: ";
        if (cart[7] != '0') {
            childnode += cart[7];
            var prc = Number(cart[8]);
            var nbr = parseInt(cart[9]);
            childnode += " Anzahl: " + nbr;
            var price = prc * nbr;
            var fixedprice_4 = price.toFixed(2);
            var roundedprice = Number(fixedprice_4);
            childnode += " Preis: " + roundedprice;
            gesprice += roundedprice;
        }
        childnode += "\nAusgewaehlter: Lieferant: ";
        if (cart[10] != '0') {
            childnode += cart[10] + " ";
            var prc = Number(cart[11]);
            var price = prc;
            var fixedprice_5 = price.toFixed(2);
            var roundedprice = Number(fixedprice_5);
            childnode += " Preis: " + roundedprice;
            gesprice += roundedprice;
            childnode += "</textarea>";
        }
        var fixedprice = gesprice.toFixed(2);
        var roundedgesprice = Number(fixedprice);
        childnode += "\n Gesamter Preis:" + roundedgesprice;
        node.innerHTML += childnode;
    }
    function buttoncheck() {
        if (adress[0] == '0' || adress[1] == '0' || cart[10] == '0') {
            var node = document.getElementById("cart");
            document.getElementById('cart').innerHTML = "";
            var childnode = "";
            childnode += "fehlende Eingabe";
            node.innerHTML += childnode;
        }
        else
            document.getElementsByTagName("button")[0].removeAttribute("disabled");
    }
    document.addEventListener('DOMContentLoaded', init);
})(cuztree || (cuztree = {}));
//# sourceMappingURL=aufg4.js.map