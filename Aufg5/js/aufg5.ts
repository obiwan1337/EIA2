namespace baumbaum {
    document.addEventListener('DOMContentLoaded', init);
    function init() {

        disp(krachbumm);
        createadress();
        cartrefresh();
        cartprep();
    }
    let xIDvariable: string;
    let cart: string[] = [];
    let childnumber: number;
    function disp(_ding: Products): void {
        let numFS: number = -1;


        for (let key in _ding) {
            numFS++;
            xIDvariable = key;
            console.log(xIDvariable + " IDvariable");
            let value: Items[] = _ding[key];
            let form: HTMLElement = document.getElementById("form1");
            let fieldset: HTMLFieldSetElement = document.createElement("fieldset");
            form.appendChild(fieldset);
            let legend: HTMLLegendElement = document.createElement("legend");
            legend.innerText = key.toString();

            //node.addEventListener("change", refreshcart);

            let childnode: string = "";
            fieldset.appendChild(legend);
            document.getElementById("form1").appendChild(fieldset)

            if (key == 'trees' || key == 'stand') {
                childnode += "<select id=" + key + ">";
            }
            if (numFS == 0 || numFS == 1) {
                childnode += "<option value=keine_Auswahl-1 > Keine Auswahl";
            }
            fieldset.addEventListener("change", handleClick);
            fieldset.innerHTML += childnode;
            childnode = "";
            for (let i: number = 0; i < value.length; i++) {

                createinputoption(value[i], key, numFS, i);
            }
            if (key == 'trees' || key == 'stand') {
                childnode += "</select>";
            }
            fieldset.innerHTML += childnode;

        }
    }
    function createinputoption(_item: Items, _key: string, _numFS: number, _i: number): void {

        let inputtype: string;

        let childnode: string = "";
        if (_key == 'trees' || _key == 'stand') {
            inputtype = "dropdown";
            childnode += "<option value=0" + _i + ">" + _item.name + "  (" + _item.price + ")";
        } else if (_key == 'mailboys') {
            inputtype = "radio";
            childnode += " <label><input type=" + inputtype +" name="+_key+"groupradio value=" + _key +"0"+ _i + " id=" + _key + _i + " />"+_item.name+"  (" + _item.price + ")" + "</label><br></br>";
        } else {
            inputtype = "checkbox";
            childnode += "<label><input type=" + inputtype + " name="+_key+"checkbox id=" + _key + _i + " value=" + _key +"0"+ _i + " >" + _item.name + "  (" + _item.price + ")</label><input type=number id=" + _key + _i + "stepper name=" + _item.name + "stepper min= max= value=0  /><br></br>";
        }
        if (_key == 'trees' || _key == 'stand') {
            document.getElementsByTagName("select")[_numFS].innerHTML += childnode;
        } else {
            document.getElementsByTagName("fieldset")[_numFS].innerHTML += childnode;
        }

    }

    function handleClick(_event: MouseEvent): void {
        let changedfield: HTMLElement = <HTMLElement>_event.target;
        let fieldIDstring: string = (changedfield.id);
        let fieldforchecks: string;
        
         
        let fullvalue = (<HTMLSelectElement>document.getElementById(fieldIDstring)).value;
        let value: string = fullvalue.substr(fullvalue.length - 2, fullvalue.length);
        let nrvalue: number = Number(value)
        let stringval:string;
        let spliceindex = fullvalue.substr(0, fullvalue.length - 2), spinnu = Number(spliceindex);
        console.log(changedfield + " fieldlog");
        
        console.log(fullvalue + " fullvalue");
        console.log(childnumber + " childnumber");
        console.log(value + " valuelog");
        console.log(nrvalue + " nrvaluelog");
        console.log(spliceindex + " spliceindex"), console.log(spinnu + " spinnu");
        if (value == '00' || value == '01' || value == '02' || value == '03' || value == '04' || value == '05' || value == '06' || value == '07' || value == '08' || value == '09') {
            stringval = value.substr(1, 1);
            
        }
        console.log(stringval + " valueSUBSTRlog");
        if(fieldIDstring != 'trees' && fieldIDstring != 'stand'){
            fieldforchecks = fieldIDstring.substr(0,fieldIDstring.length-1);
            fieldIDstring = fieldforchecks;
        }
        console.log(fieldIDstring + " fieldIDlog") ;console.log(changedfield.id + " changedfield.id");
        if (fieldIDstring == changedfield.id) {
            if (nrvalue != -1) {
                //indexOf

                cart.splice(spinnu, 0, krachbumm[fieldIDstring][nrvalue].name);
                cart.splice(spinnu + 1, 0, krachbumm[fieldIDstring][stringval].price);
                console.log(cart.join() + " cartadd");
                cartrefresh()
            } else {
                let spliceindex: number = 0
                cart.splice(spliceindex, 2, "0", "0");
                console.log(cart);
                cartrefresh()
            }
        }
        nrvalue = -1
        console.log(cart);
    }
    function cartprep() {
        childnumber = document.getElementById('form1').children.length;
        for (let i: number = 0; i < childnumber * 30; i++) {
            cart.splice(i, 1, "0");

        }
        console.log(cart);
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
        childnode += "</textarea>";
        node.innerHTML += childnode;
    }
    function createadress() {
        let node: HTMLElement = document.getElementById("form2"); let childnode: string = "";
        childnode += "<fieldset id=address><legend>Lieferadresse</legend> Name:   <input id=lname type= text name=lname required=''><br> Straße: <input id=street type= text  name=street required=''> <br></fieldset>"; node.innerHTML += childnode; node.addEventListener("change", handleClick);
        let nod: HTMLElement = document.getElementById("bebutton"); nod.addEventListener("click", handleClick);
    }


}
