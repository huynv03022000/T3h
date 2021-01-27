var n1 = 0;
var n2 = 0;
var op = 0;
var se = false;
var re = 0;


function pressNumber(numberIn) {

    // if (se == false) {
    var number = parseInt(numberIn);
    var value = document.getElementById('txt').textContent;
    var temp = value + numberIn + "";
    document.getElementById('txt').innerText = temp;
    // n1 = temp;

    // } else {
    //     var number = parseInt(numberIn);
    //     var value = document.getElementById('txt').textContent;
    //     var temp = value + numberIn + "";
    //     document.getElementById('txt').innerText = temp;
    //     n2 = temp;
    //     se = false;
    // }

}
function operator(base) {


    op = parseInt(base);


    n1 = parseInt(document.getElementById('txt').textContent);
    document.getElementById('memory').innerText = n1;
    // se = true;

    document.getElementById('txt').innerText = "";


}
function result() {
    // if (se == false) {
    //     se = true;
    // }
    // else {
        n2 = parseInt(document.getElementById('txt').textContent);
    // }
    switch (op) {
        case 1:
            // to add value
            re = parseInt(n1) + parseInt(n2);
            break;
        case 2:
            // to sub value
            re = parseInt(n1) - parseInt(n2);
            break;
        case 3:
            // to multi value
            re = parseInt(n1) * parseInt(n2);
            break;
        case 4:
            // to divide value
            re = parseInt(n1) / parseInt(n2);
    }
    document.getElementById('txt').innerText = re;

}
function remo() {
    document.getElementById('txt').innerText = "";
    document.getElementById('memory').innerText = "";
}
function myFunction() {
    var str = "Hello world!"; 
    var res = str.substring(0 , str.length- 1);
    document.getElementById("demo").innerHTML = res;
  }
