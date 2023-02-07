//intermediate exercise 1
function task() {
    let picture = document.getElementsByClassName("santa");

    for (let i = 0; i < picture.length; i++) {
        picture[i].addEventListener("click", function() {
            this.remove();
            console.log(this);
        })
    }
}

task();
//end of intermediate exercise 1