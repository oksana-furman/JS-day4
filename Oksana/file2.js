//intermediate exercise 1
function task() {
    let picture = document.getElementsByClassName("santa");

    for (let i = 0; i < picture.length; i++) {
        picture[i].addEventListener("click", function() {
            //this.remove();
            this.src="https://freepngimg.com/download/christmas_bell/1-2-christmas-bell-png-image.png"
            console.log(this);
        })
    }
}

task();
//end of intermediate exercise 1

function getRandomRGB() {
    return Math.floor(Math.random() * 255);
  }
  
function random_rgba() {
    return 'rgb(' + getRandomRGB() + ',' + getRandomRGB() + ',' + getRandomRGB() + ')';
}

var color = random_rgba();

function setBG() {
    document.body.style.backgroundColor = color;   
}
