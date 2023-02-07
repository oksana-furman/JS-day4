function mouseOver() {
    document.getElementsByClassName("par").innerHTML = "you are in the circle";
}

function mouseOut() {
    document.getElementsByClassName("par").innerHTML = "you are outside of the circle";
}

function clickBG() {
    document.getElementById("circle").style.backgroundColor = "grey";
}

function dblclickBG() {
    document.getElementById("circle").style.backgroundColor = "blue";
}

document.getElementById("circle").addEventListener("onmouseover", mouseOver);
document.getElementById("circle").addEventListener("onmousout", mouseOut);
document.getElementById("circle").addEventListener("click", clickBG);
document.getElementById("circle").addEventListener("dblclick", dblclickBG);