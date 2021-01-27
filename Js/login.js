function show() {
    var p = document.getElementById('psw');
    p.setAttribute('type', 'text');

}

function hide() {
    var p = document.getElementById('psw');
    p.setAttribute("type", "password");
}

function myFunction() {
    var p = document.getElementById('psw');
    isBool = true;
    if (isBool) {
        isBool = false;
        p.setAttribute('type', 'text');
    } else {
        p.setAttribute("type", "password");
        isBool = true;
    }
}
/*<div class="inputform">
         <i class="fa fa-key icon"></i>
         <input class="input-password" type="password" placeholder="Password" id="psw">

         <button class="btn btn-outline-secondary" type="button" id="btnPassword" value="true" onclick="myFunction()">
               <span class="fas fa-eye" style="width: 15px; height: 15px;"></span>
             </button>

     </div>*/