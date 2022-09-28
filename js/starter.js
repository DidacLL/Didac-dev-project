
let resizeTimer;
window.onresize=function (){
    clearTimeout(resizeTimer);
    resizeTimer=setTimeout(function (){resizeBody()},100);
}
document.onload=  resizeBody();

function resizeBody() {
    let consolePanel= document.getElementById('dp-console'); 
    let num = calcREM(document.body.getBoundingClientRect().width/2);
    console.log(num)
    if(num  > 30) {
        consolePanel.style.width=convertRemToPixels(30)+"px";
    }else {
        consolePanel.style.width=document.getElementById("dp-body").getBoundingClientRect().width+"px";
    }
}

function calcREM(px)
{
    if( !isNaN(px) )
    {
        var remInPx = parseFloat($("html").css("font-size"));
        return (parseFloat(px) / remInPx);
    }
}
function convertRemToPixels(rem) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}