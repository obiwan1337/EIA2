var baumbaum;
(function (baumbaum) {
    document.addEventListener('DOMContentLoaded', init);
    function init() {
        disp(baumbaum.krachbumm);
        createadress();
        showdebill();
    }
    var xIDvariable;
    var childnumber;
    function disp(_ding) {
        var numFS = -1;
        for (var key in _ding) {
            numFS++;
            xIDvariable = key;
            console.log(xIDvariable + " IDvariable");
            var value = _ding[key];
            var form = document.getElementById("form1");
            var fieldset = document.createElement("fieldset");
            form.appendChild(fieldset);
            var legend = document.createElement("legend");
            legend.innerText = key.toString();
            var childnode = "";
            fieldset.appendChild(legend);
            document.getElementById("form1").appendChild(fieldset);
            fieldset.addEventListener("change", handleClick);
            fieldset.innerHTML += childnode;
            childnode = "";
            for (var i = 0; i < value.length; i++) {
                createinputoption(value[i], key, numFS, i);
            }
            fieldset.innerHTML += childnode;
        }
    }
    function createinputoption(_item, _key, _numFS, _i) {
        var inputtype, childnode = "";
        if (_key == 'trees' || _key == 'stand' || _key == 'mailboy') {
            inputtype = "radio";
            childnode += " <label><input type=" + inputtype + " name=" + _key + "groupradio product='" + _item.name + "' price='" + _item.price + "' value=" + _key + "0" + _i + " id=" + _key + " />" + _item.name + "  (" + _item.price + ")" + "</label></br>";
        }
        else {
            childnode += "<input type=number  class='stepper' id=" + _key + _i + " product='" + _item.name + "' price='" + _item.price + "' min=0 max=40 value=0 />  ";
            childnode += _item.name + " (" + _item.price + ") </br>";
        }
        document.getElementsByTagName("fieldset")[_numFS].innerHTML += childnode;
    }
    function showdebill() {
        var list = document.getElementById("form1").getElementsByTagName("input");
        var node = document.getElementById("cart");
        document.getElementById('cart').innerHTML = "";
        var childnode = "";
        var gesprice = 0;
        var roundedprice = 0;
        childnode += "<textarea id='rechnung' readonly cols='70' rows='20'> ";
        for (var i = 0; i < list.length; i++) {
            var input = list[i];
            if (input.checked == true) {
                var nameattribute_1 = input.getAttribute("product");
                var priceattribute_1 = input.getAttribute("price");
                var price = parseFloat(priceattribute_1);
                //let stepvalue = stepperinput.getAttribute("value");
                //let stepvaluenumber = Number(stepvalue);
                childnode += "\nGewaehleter Artikel: " + nameattribute_1 + " " + priceattribute_1 + " Anzahl: 1"; // + stepvaluenumber;
                roundedprice += price;
            }
            else if (input.value >= '1' && input.type == 'number') {
                var nameattribute = input.getAttribute("product");
                var priceattribute = input.getAttribute("price");
                var price = parseFloat(priceattribute);
                var count = Number(input.value);
                roundedprice;
                childnode += "\nGewaehleter Artikel: " + nameattribute + " " + priceattribute + " Anzahl: " + count;
                roundedprice += price * count;
            }
            else {
                console.log("trollgesicht");
            }
        }
        gesprice += roundedprice;
        childnode += " \nGesamtpreis: " + gesprice.toFixed(2);
        childnode += " </textarea>";
        node.innerHTML += childnode;
    }
    function handleClick(_event) {
        showdebill();
    }
    function createadress() {
        var node = document.getElementById("form2");
        var childnode = "";
        childnode += "<fieldset id=address><legend>Lieferadresse</legend> Name:   <input id='lname' type='text' name='lname' required=''><br> Straße: <input id=street type='text'  name='street' required=''> <br></fieldset>";
        node.innerHTML += childnode;
        node.addEventListener("change", handleClick);
        var nod = document.getElementById("bebutton");
        nod.addEventListener("click", checkout);
    }
    function checkout() {
        var name = document.getElementById("lname");
        var adress = document.getElementById("street");
        var mailboy = document.getElementById("mailboy");
        var mail = 0;
        if (mailboy.checked == true) {
            mail = 1;
        }
        name.value;
        adress.value;
        if (name.value == '' || name.value == '' || mail == 0) {
            var cart = document.getElementById("rechnung");
            cart.innerHTML += "\nbitte eine Adresse und einen Lieferservice auswahlen.";
        }
        else {
            var cart = document.getElementById("rechnung");
            cart.innerHTML += "\nVielen Dank fuer die Bestellung.";
        }
    }
})(baumbaum || (baumbaum = {}));
//# sourceMappingURL=aufg5.js.map