
let resizeTimer;
window.onresize=function (){
    clearTimeout(resizeTimer);
    resizeTimer=setTimeout(function (){resizeBody()},100);
}
function resizeBody() {
    const console= document.getElementById('dp-console');
    if(console.getBoundingClientRect().width>=console.style.minWidth*2) {console.style.setProperty("width","30rem")}
}
