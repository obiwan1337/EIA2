namespace baum7 {
    document.addEventListener('DOMContentLoaded', init);
    let address: string = "http://localhost:8100";
    let querystring: string = "";
    function init() {
        disp(baumarray);
        createadress();
        showdebill();
        setupAsyncForm();
    }
    function disp(_products: Products): void {
        let numFS: number = -1;
        for (let key in _products) {
            numFS++;
            let value: Items[] = _products[key];
            let form: HTMLElement = document.getElementById("form1");
            let fieldset: HTMLFieldSetElement = document.createElement("fieldset");
            form.appendChild(fieldset);
            let legend: HTMLLegendElement = document.createElement("legend");
            legend.innerText = key.toString();
            fieldset.appendChild(legend);
            document.getElementById("form1").appendChild(fieldset);
            fieldset.addEventListener("change", handleClick);
            for (let i: number = 0; i < value.length; i++) {
                createinputoption(value[i], key, numFS, i);
            }
        }
    }
    function createinputoption(_item: Items, _key: string, _numFS: number, _i: number): void {
        let inputtype: string, childnode: string = "";
        if (_key == 'trees' || _key == 'stand' || _key == 'mailboy') {
            inputtype = "radio";
            childnode += " <label><input type='" + inputtype + "' name='" + _key + "groupradio' product='" + _item.name + "' price='" + _item.price + "' value='" + _item.name + "' prodgrp='" + _key + "'+ id='" + _key + _i + "' />" + _item.name + "  (" + _item.price + ")" + "</label></br>";
        } else {
            childnode += "<input type='number'  class='stepper' id='" + _key + _i + "' name='" + _item.name + "'prodgrp='" + _key + "' product='" + _item.name + "' price='" + _item.price + "' min='0' max='40' value='0' />  ";
            childnode += _item.name + " (" + _item.price + ") </br>";
        }
        document.getElementsByTagName("fieldset")[_numFS].innerHTML += childnode;
    }
    function showdebill() {
        querystring = "";
        let list: HTMLCollectionOf<HTMLInputElement> = document.getElementById("form1").getElementsByTagName("input");
        let node: HTMLElement = document.getElementById("cart");
        let childnode: string = "";
        let gesprice: number = 0;
        let roundedprice: number = 0;
        document.getElementById('cart').innerHTML = "";
        childnode += "<textarea id='rechnung' readonly cols='70' rows='20'> "
        for (let i: number = 0; i < list.length; i++) {
            let input = (<HTMLInputElement>list[i]);
            let prodgrp: string;
            if (input.checked == true) {
                let nameattribute: string = input.getAttribute("product");
                let priceattribute: string = input.getAttribute("price");
                prodgrp = input.getAttribute("prodgrp");
                let price: number = parseFloat(priceattribute);
                childnode += "\nGewaehleter Artikel: " + nameattribute + " " + priceattribute + " Anzahl: 1";
                roundedprice += price;
                querystring += prodgrp + "=" + nameattribute + "&";
            } else if (input.value >= '1' && input.type == 'number') {
                var nameattribute: string = input.getAttribute("product");
                var priceattribute: string = input.getAttribute("price");
                prodgrp = input.getAttribute("prodgrp");
                let price: number = parseFloat(priceattribute);
                var count = Number(input.value);
                childnode += "\nGewaehleter Artikel: " + nameattribute + " " + priceattribute + " Anzahl: " + count;
                roundedprice += price * count;
                querystring += prodgrp + "=" + nameattribute + "=" + count +"&";
            } else {
            }
        }
        gesprice += roundedprice;
        childnode += " \nGesamtpreis: " + gesprice.toFixed(2) + querystring + "</textarea>";
        node.innerHTML += childnode;
    }

    function handleClick(_event: MouseEvent): void {
        showdebill();
    }
    function setupAsyncForm(): void {
        let button: Element = document.querySelector("[type=button]");
        button.addEventListener("click", handleClickOnAsync);
    }

    function handleClickOnAsync(_event: Event): void {
        let wert: string = (<HTMLInputElement>document.querySelector(":checked")).value;
        sendRequestWithCustomData(wert);
    }

    function sendRequestWithCustomData(_wert: string): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", address + "/?" + querystring, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
        console.log(querystring);
    }

    function handleStateChange(_event: ProgressEvent): void {
        var xhr: XMLHttpRequest = <XMLHttpRequest>_event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
        }
    }
    function createadress() {
        let node: HTMLElement = document.getElementById("form2"); let childnode: string = "";
        childnode += "<fieldset id=address><legend>Lieferadresse</legend> Name:   <input id='lname' type='text' name='lname' required=''><br> Straße: <input id=street type='text'  name='street' required=''> <br></fieldset>";
        node.innerHTML += childnode; node.addEventListener("change", handleClick);
        let nod: HTMLElement = document.getElementById("bebutton"); nod.addEventListener("click", checkout);
        let async: HTMLElement = document.getElementById("async"); async.addEventListener("click", handleClickOnAsync);
    }
    function checkout() {
        var name: HTMLInputElement = <HTMLInputElement>document.getElementById("lname");
        var address: HTMLInputElement = <HTMLInputElement>document.getElementById("street");
        var mailboy: HTMLInputElement = <HTMLInputElement>document.getElementById("mailboy");
        var mail: number = 0;
        if (mailboy.checked == true) {
            mail = 1;
        }
        if (name.value == '' || address.value == '' || mail == 0) {
            let cart: HTMLElement = document.getElementById("rechnung");
            cart.innerHTML += "\nbitte eine Adresse und einen Lieferservice auswahlen.";
        } else {
            let cart: HTMLElement = document.getElementById("rechnung");
            cart.innerHTML += "\nVielen Dank fuer die Bestellung.";
        }
    }
}
