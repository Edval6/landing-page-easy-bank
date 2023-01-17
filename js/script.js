var menu = document.querySelector("#menu-icon");

menu.onclick = function(){
    var menuMobile = document.querySelector("#menu-mobile");
    menuMobile.style.display = "block";

    menu.style.display = "none";

    var close = document.querySelector("#close-icon");

    close.style.display = "block";


}

var close = document.querySelector("#close-icon");

close.onclick = function(){
    var closeMobile = document.querySelector("#menu-mobile");
    closeMobile.style.display = "none";

    menu.style.display = "block";
    close.style.display = "none";

}
