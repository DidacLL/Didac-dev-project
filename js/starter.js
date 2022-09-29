
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
        var remInPx = parseFloat($("html").css("font-size"));
        return (parseFloat(px) / remInPx);
    }
}
function convertRemToPixels(rem) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

const consoleEducation= document.getElementById("headingOne");
const consoleSkills= document.getElementById("headingTwo");
const consoleWorkExp= document.getElementById("headingThree");
const consoleEducationBody= document.getElementById("collapseOne");
const consoleSkillsBody= document.getElementById("collapseTwo");
const consoleWorkExpBody= document.getElementById("collapseThree");






