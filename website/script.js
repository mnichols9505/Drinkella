
window.onload = function() {

    var currentTime = new Date().getHours();
    if (currentTime == 20) {
        if (document.body) {
            document.h1.background = "http://img75.laughinggif.com/pic/HTTPS9tZWRpYS5naXBoeS5jb20vbWVkaWEvM282b3ptRjRaR09HM0RXWnlnL2dpcGh5LmdpZgloglog.gif";
        }
    }
    else {
        if (document.body) {
            document.h1.background = "https://s-media-cache-ak0.pinimg.com/originals/5f/c5/7b/5fc57b392c2c5c2423e527d60fa3e1d1.gif";
        }

    }

}
function growText() {

    var text= document.getElementById("text1");

    if( text.style.fontSize == "30px" ){

        text.style.fontSize = "15px";
    }
    else {
        text.style.fontSize = "30px";
    }


}
function growText2(){
    var text1= document.getElementById("text2");

    if(text1.style.fontSize == "30px"){
        text1.style.fontSize = "15px";
    }else{
        text1.style.fontSize = "30px";
    }
}

var slideIndex = 1;


function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 3000);
}
window.onload = function() { carousel(); };




