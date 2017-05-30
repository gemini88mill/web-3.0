/**
 * Created by raphael on 5/21/17.
 */

function hider(id){
    $("#jumbo-target").hide(1000);
    $("#accordion").fadeIn(1000);
}

function show() {
    var elementSelect = document.getElementById('about');
    elementSelect.classList.remove('hidden');
}

function toggle(id){
    //alert(id);
    var blockVis = document.getElementById(id);
    if(blockVis.style.visibility === "hidden"){
        blockVis.style.visibility = "visible";
        blockVis.style.display = "block"
    } else{
        blockVis.style.visibility = "hidden";
        blockVis.style.display = "none";
    }
}
