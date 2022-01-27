// Making sound by pressing/clicking buttons

var drums = document.querySelectorAll(".drum");

for(var i = 0; i < drums.length; i++){
    drums[i].addEventListener("click", clickToPlay);
}

function clickToPlay(){
    var buttonInnerHtml = this.innerHTML;
    playSounds(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
}


// Making Sound by pressing keys
// document.addEventListener("keydowm", function(Event){playSounds(Event.key);});
document.addEventListener("keydown", pressToPlay);

function pressToPlay(evnt) {
    // console.log(Event);
    playSounds(evnt.key);
    buttonAnimation(evnt.key);
}

function playSounds(keyy) {
    switch (keyy) {
        case "w" :
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        default:
            break;
    }
}

function buttonAnimation(key){
    var activeBtn = document.querySelector("." + key);
    // console.log(activeBtn.classList);
    activeBtn.classList.add("pressed");
    
    setTimeout(function(){activeBtn.classList.remove("pressed");}, 100);
}