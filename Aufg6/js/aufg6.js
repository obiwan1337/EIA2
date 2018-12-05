var baum;
(function (baum) {
    document.addEventListener('DOMContentLoaded', init);
    function init() {
        disp(baum.baumarray);
        createadress();
        showdebill();
    }
    function disp(_products) {
        let numFS = -1;
        for (let key in _products) {
            numFS++;
            let value = _products[key];
            let form = document.getElementById("form1");
            let fieldset = document.createElement("fieldset");
            form.appendChild(fieldset);
            let legend = document.createElement("legend");
            legend.innerText = key.toString();
            fieldset.appendChild(legend);
            document.getElementById("form1").appendChild(fieldset);
            fieldset.addEventListener("change", handleClick);
            for (let i = 0; i < value.length; i++) {
                createinputoption(value[i], key, numFS, i);
            }
        }
    }
    function createinputoption(_item, _key, _numFS, _i) {
        let inputtype, childnode = "";
        if (_key == 'trees' || _key == 'stand' || _key == 'mailboy') {
            inputtype = "radio";
            childnode += " <label><input type='" + inputtype + "' name='" + _key + "groupradio' product='" + _item.name + "' price='" + _item.price + "' value='" + _item.name + "' id='" + _key + "' />" + _item.name + "  (" + _item.price + ")" + "</label></br>";
        }
        else {
            childnode += "<input type='number'  class='stepper' id='" + _key + _i + "' name='" + _item.name + "' product='" + _item.name + "' price='" + _item.price + "' min='0' max='40' value='0' />  ";
            childnode += _item.name + " (" + _item.price + ") </br>";
        }
        document.getElementsByTagName("fieldset")[_numFS].innerHTML += childnode;
    }
    function showdebill() {
        let list = document.getElementById("form1").getElementsByTagName("input");
        let node = document.getElementById("cart");
        let childnode = "";
        let gesprice = 0;
        let roundedprice = 0;
        document.getElementById('cart').innerHTML = "";
        childnode += "<textarea id='rechnung' readonly cols='70' rows='20'> ";
        for (let i = 0; i < list.length; i++) {
            let input = list[i];
            if (input.checked == true) {
                let nameattribute = input.getAttribute("product");
                let priceattribute = input.getAttribute("price");
                let price = parseFloat(priceattribute);
                childnode += "\nGewaehleter Artikel: " + nameattribute + " " + priceattribute + " Anzahl: 1";
                roundedprice += price;
            }
            else if (input.value >= '1' && input.type == 'number') {
                var nameattribute = input.getAttribute("product");
                var priceattribute = input.getAttribute("price");
                let price = parseFloat(priceattribute);
                var count = Number(input.value);
                childnode += "\nGewaehleter Artikel: " + nameattribute + " " + priceattribute + " Anzahl: " + count;
                roundedprice += price * count;
            }
            else {
            }
        }
        gesprice += roundedprice;
        childnode += " \nGesamtpreis: " + gesprice.toFixed(2) + "</textarea>";
        node.innerHTML += childnode;
    }
    function handleClick(_event) {
        showdebill();
    }
    function createadress() {
        let node = document.getElementById("form2");
        let childnode = "";
        childnode += "<fieldset id=address><legend>Lieferadresse</legend> Name:   <input id='lname' type='text' name='lname' required=''><br> Straße: <input id=street type='text'  name='street' required=''> <br></fieldset>";
        node.innerHTML += childnode;
        node.addEventListener("change", handleClick);
        let nod = document.getElementById("bebutton");
        nod.addEventListener("click", checkout);
    }
    function checkout() {
        var name = document.getElementById("lname");
        var address = document.getElementById("street");
        var mailboy = document.getElementById("mailboy");
        var mail = 0;
        if (mailboy.checked == true) {
            mail = 1;
        }
        if (name.value == '' || address.value == '' || mail == 0) {
            let cart = document.getElementById("rechnung");
            cart.innerHTML += "\nbitte eine Adresse und einen Lieferservice auswahlen.";
        }
        else {
            let cart = document.getElementById("rechnung");
            cart.innerHTML += "\nVielen Dank fuer die Bestellung.";
        }
    }
})(baum || (baum = {}));
//# sourceMappingURL=aufg6.js.map