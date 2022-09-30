let resizeTimer;
window.onresize = function () {
    visualViewport.scale = 0;
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
        resizeBody()
    }, 100);
}
window.addEventListener("load", () => collapseManager());


function collapseManager(){
    resizeBody();
    let footer = document.getElementById('dp-footer');
    let skillsBar = document.getElementById('dp-skills-bar');
    if (skillsBar.getBoundingClientRect().bottom < footer.getBoundingClientRect().top) {
        console.log(skillsBar.getBoundingClientRect().bottom);
        console.log(footer.getBoundingClientRect().top);
        let educationPanel = document.getElementById('dp-education');
        $('#collapseOne').collapse('show');
        if (skillsBar.getBoundingClientRect().bottom < footer.getBoundingClientRect().top) {
            $('#collapseTwo').collapse('show');
            $('#dp-paper-soft-list').collapse('show');
        }
    }else if (skillsBar.getBoundingClientRect().top > footer.getBoundingClientRect().bottom){
        $('#dp-paper-resume-list').collapse('hide');
        
    }
}

function resizeBody() {
    let consolePanel = document.getElementById('dp-console');
    let num = calcREM(document.body.getBoundingClientRect().width / 2);
    console.log(num)
    if (num >= 30) {
        consolePanel.style.width = "50%";
    } else {
        consolePanel.style.width = document.body.getBoundingClientRect().width + "px";
    }
    let area= document.getElementById('dp-me-area');
    area.style.width=document.getElementById('dp-me').getBoundingClientRect().width+'px';
    area.style.height=document.getElementById('dp-footer').getBoundingClientRect().height + 'px';
    area.getBoundingClientRect().y=document.getElementById('dp-footer').getBoundingClientRect().y;
}

function calcREM(px) {
    if (!isNaN(px)) {
        let remInPx = parseFloat($("html").css("font-size"));
        return (parseFloat(px) / remInPx);
    }
}

function convertRemToPixels(rem) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}


function toggleMe(){
    let me= document.getElementById("dp-me")
    me.style.opacity=
        me.style.opacity==='100'?'0':'100'

}













let closing1 = document.getElementById("dp-closing-1");
let closing2 = document.getElementById("dp-closing-2");
let closing3 = document.getElementById("dp-closing-3");

$('#collapseOne').on('show.bs.collapse', function () {
    console.log("dslkausghkksdsdjkgghsdk")
    closing1.style.visibility = 'hidden';
}).on('hidden.bs.collapse', function () {
    closing1.style.visibility = 'visible';
})

$('#collapseTwo').on('show.bs.collapse', function () {
    closing2.style.visibility = 'hidden';
}).on('hidden.bs.collapse', function () {
    closing2.style.visibility = 'visible';
})

$('#collapseThree').on('show.bs.collapse', function () {
    closing3.style.visibility = 'hidden';
}).on('hidden.bs.collapse', function () {
    closing3.style.visibility = 'visible';
})
$('#dp-paper-art-list').on('show.bs.collapse', function () {
    document.getElementById('dp-paper-art-title').innerHTML='<h4>'+
        document.getElementById('dp-paper-art-title').innerHTML.replace('+','-') +'</h4>';
}).on('hidden.bs.collapse', function () {
    document.getElementById('dp-paper-art-title').innerHTML='<h4>'+
    document.getElementById('dp-paper-art-title').innerText.replace('-','+')+'</h4>';

})
$('#dp-paper-resume-list').on('show.bs.collapse', function () {
    document.getElementById('dp-paper-resume-title').innerHTML='<h4>'+
        document.getElementById('dp-paper-resume-title').innerHTML.replace('+','-') +'</h4>';
}).on('hidden.bs.collapse', function () {
    document.getElementById('dp-paper-resume-title').innerHTML='<h4>'+
    document.getElementById('dp-paper-resume-title').innerText.replace('-','+')+'</h4>';

})
$('#dp-paper-soft-list').on('show.bs.collapse', function () {
    document.getElementById('dp-paper-soft-title').innerHTML='<h4>'+
        document.getElementById('dp-paper-soft-title').innerHTML.replace('+','-') +'</h4>';
}).on('hidden.bs.collapse', function () {
    document.getElementById('dp-paper-soft-title').innerHTML='<h4>'+
        document.getElementById('dp-paper-soft-title').innerText.replace('-','+')+'</h4>';

})
$('#dp-me').on('show.bs.collapse', function () {
    document.getElementById('dp-me-area').innerHTML='-';
}).on('hidden.bs.collapse', function () {
    document.getElementById('dp-me-area').innerHTML='+';

})





