let $ = document;

let audioImages = $.querySelectorAll("img");
let audioElems = $.querySelectorAll("audio");

let playingAudio = [];

loadEventListeners();
function loadEventListeners(){
    audioImages.forEach(function(item){
        item.addEventListener("click", playAudio);
    })
}
function playAudio(e){
    let nextAudio = e.target.parentElement.children[2];
    if(playingAudio.length){
        playingAudio[0].pause();
        playingAudio.splice(0, 1);
        playingAudio.push(nextAudio);
        nextAudio.play();
    }
    else{
        playingAudio.push(nextAudio);
        nextAudio.play();
    }
}