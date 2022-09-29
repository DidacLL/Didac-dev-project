
let resizeTimer;
window.onresize=function (){
    visualViewport.scale=0;
    clearTimeout(resizeTimer);
    resizeTimer=setTimeout(function (){resizeBody()},100);
}
window.addEventListener("load",()=>resizeBody());

function resizeBody() {
    let consolePanel= document.getElementById('dp-console'); 
    let num = calcREM(document.body.getBoundingClientRect().width/2);
    console.log(num)
    if(num  >= 30) {
        consolePanel.style.width="50%"
            // convertRemToPixels(30)+"px";
    }else {
        consolePanel.style.width=document.body.getBoundingClientRect().width+"px";
    }
}

function calcREM(px)
{
    if( !isNaN(px) )
    {
        let remInPx = parseFloat($("html").css("font-size"));
        return (parseFloat(px) / remInPx);
    }
}
function convertRemToPixels(rem) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}


let closing1= document.getElementById("dp-closing-1");
let closing2= document.getElementById("dp-closing-2");
let closing3= document.getElementById("dp-closing-3");


$('#collapseOne').on('show.bs.collapse', function () {
    console.log("dslkausghkksdsdjkgghsdk")
    closing1.style.visibility='hidden';
})
$('#collapseOne').on('hidden.bs.collapse', function () {
    closing1.style.visibility='visible';
})

$('#collapseTwo').on('show.bs.collapse', function () {
    closing2.style.visibility='hidden';
})
$('#collapseTwo').on('hidden.bs.collapse', function () {
    closing2.style.visibility='visible';
})

$('#collapseThree').on('show.bs.collapse', function () {
    closing3.style.visibility='hidden';
})
$('#collapseThree').on('hidden.bs.collapse', function () {
    closing3.style.visibility='visible';
})





