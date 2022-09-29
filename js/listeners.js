const closing1= document.getElementById("dp-closing-1");
const closing2= document.getElementById("dp-closing-2");
const closing3= document.getElementById("dp-closing-3");


$('#collapseOne').on('show.bs.collapse', function () {
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

