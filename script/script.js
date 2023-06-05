/*MENÜ*/ 
var opened = false /*RÖGZÍTÍ A MENU ÁLLAPOTÁT*/ 
function open_menu() {
    
    if(!opened){
        document.getElementById("side_nav").style.width = "300px";
        document.getElementById("main").style.marginLeft = "300px";
        opened = true
    }else{
        document.getElementById("side_nav").style.width = "0px";
        document.getElementById("main").style.marginLeft = "0px";
        opened = false
    }
}

function close_menu() {
    document.getElementById("side_nav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
/*KERESÉS*/
function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("menu");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
/*LOGIN MODAL*/
function login(){
    const elem = document.getElementById("login")
    elem.classList.remove("hide")
    
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
}
function login_close(){
    const elem = document.getElementById("login")
    elem.classList.add("hide")
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
}
/*CREATE MODAL*/ 
function create_open(){
    const elem = document.getElementById("card-create")
    elem.classList.remove("hide")
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    

}
function create_close(){
    const elem = document.getElementById("card-create")
    elem.classList.add("hide")
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    

}


