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

/* Hover para icones das redes sociais*/

var img1 = document.querySelectorAll("#icon-hover")[0];

img1.onmouseover = function(){
    img1.src = this.src="img/icon-facebook-green.svg";
}

img1.onmouseout = function(){
    img1.src = this.src="img/icon-facebook.svg";
}

var img2 = document.querySelectorAll("#icon-hover")[1];

img2.onmouseover = function(){
    img2.src = this.src="img/icon-youtube-green.svg";
}

img2.onmouseout = function(){
    img2.src = this.src="img/icon-youtube.svg";
}

var img3 = document.querySelectorAll("#icon-hover")[2];

img3.onmouseover = function(){
    img3.src = this.src="img/icon-twitter-green.svg";
}

img3.onmouseout = function(){
    img3.src = this.src="img/icon-twitter.svg";
}

var img4 = document.querySelectorAll("#icon-hover")[3];

img4.onmouseover = function(){
    img4.src = this.src="img/icon-pinterest-green.svg";
}

img4.onmouseout = function(){
    img4.src = this.src="img/icon-pinterest.svg";
}

var img5 = document.querySelectorAll("#icon-hover")[4];

img5.onmouseover = function(){
    img5.src = this.src="img/icon-instagram-green.svg";
}

img5.onmouseout = function(){
    img5.src = this.src="img/icon-instagram.svg";
}