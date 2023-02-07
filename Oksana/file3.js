function mouseOver() {
    document.getElementsByClassName("par")[0].innerHTML = "<br>you are in the circle";
}

function mouseOut() {
    document.getElementsByClassName("par")[0].innerHTML = "<br>you are outside of the circle";
}

function clickBG() {
    document.getElementById("circle").style.backgroundColor = "grey";
}

function dblclickBG() {
    document.getElementById("circle").style.backgroundColor = "blue";
}

document.getElementById("circle").addEventListener("mouseover", mouseOver);
document.getElementById("circle").addEventListener("mouseout", mouseOut);
document.getElementById("circle").addEventListener("click", clickBG);
document.getElementById("circle").addEventListener("dblclick", dblclickBG);