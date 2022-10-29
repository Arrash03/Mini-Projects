let $ = document;

let audioElem = $.querySelector("audio");
let playBtn = $.querySelector("#play");
let pauseBtn = $.querySelector("#pause");
let resetBtn = $.querySelector("#reset");
let currentAudioTime = $.querySelector("#currentTime");
let durationAudioTime = $.querySelector("#durationTime");    // 1. doesn't show duration time | 2.doesn't stop end of audio | 3.shuffle doesn't work 
let playSpeedSelect = $.querySelector("select");
let previousBtn = $.querySelector("#previous");
let nextBtn = $.querySelector("#next");
let shuffleBtn = $.querySelector("#shuffle");

let audioSrcs = ["سالار عقیلی/Che begooyam.mp3", "سالار عقیلی/Salar Aghili - Baradar Jan (320).mp3",
"سالار عقیلی/دانلود تمام آهنگهای سالار عقیلی با متن • آهنگ های جدید سالار عقیلی • موزیکفا.mp3",
"سالار عقیلی/دانلود تمام آهنگهای سالار عقیلی با متن • آهنگ های جدید سالار عقیلی • موزیکفا_2.mp3",
"سالار عقیلی/دانلود تمام آهنگهای سالار عقیلی با متن • آهنگ های جدید سالار عقیلی • موزیکفا_3.mp3",
"سالار عقیلی/دانلود تمام آهنگهای سالار عقیلی با متن • آهنگ های جدید سالار عقیلی • موزیکفا_4.mp3",
"سالار عقیلی/دانلود تمام آهنگهای سالار عقیلی با متن • آهنگ های جدید سالار عقیلی • موزیکفا_5.mp3",
"سالار عقیلی/دانلود تمام آهنگهای سالار عقیلی با متن • آهنگ های جدید سالار عقیلی • موزیکفا_6.mp3"];
let audioSrcIndex = 0;
let count = 0;
let isShuffle = false;

loadEventListeners();
function loadEventListeners(){
    playBtn.addEventListener("click", playAudio);
    pauseBtn.addEventListener("click", pauseAudio);
    resetBtn.addEventListener("click", resetAudio);
    previousBtn.addEventListener("click", previousAudio);
    nextBtn.addEventListener("click", nextAudio);
    audioElem.addEventListener("timeupdate", updateCurrentTime);
    playSpeedSelect.addEventListener("change", changeAudioSpeed);
    audioElem.addEventListener("ended", function(){
        if(isShuffle){
            sufflePlay();
            playAudio();
        }
        else{
            nextAudio();
        }
    });
    shuffleBtn.addEventListener("click", sufflePlay);
}
function playAudio(e){
    console.log("object");
    playSpeedSelect.value = 1;
    count = 0;
    audioElem.play();
}
function pauseAudio(e){
    audioElem.pause();
}
function resetAudio(e){
    audioElem.currentTime = 0;
    audioElem.pause();
    currentAudioTime.firstElementChild.innerHTML = "0";
    currentAudioTime.lastElementChild.innerHTML = "00";
}
function previousAudio(e){
    audioSrcIndex -= 1;
    if(audioSrcIndex < 0){
        audioSrcIndex = 7;
    }
    audioElem.setAttribute("src", audioSrcs[audioSrcIndex]);
    currentAudioTime.firstElementChild.innerHTML = "0";
    currentAudioTime.lastElementChild.innerHTML = "00";
    playAudio();
}
function nextAudio(){
    audioSrcIndex = (audioSrcIndex+1)%8;
    audioElem.setAttribute("src", audioSrcs[audioSrcIndex]);
    currentAudioTime.firstElementChild.innerHTML = "0";
    currentAudioTime.lastElementChild.innerHTML = "00";
    playAudio();
}
function updateCurrentTime(e){
    if(count < 2){
        setDurationTime();
        count+=1;
    }
    let min = Math.floor(audioElem.currentTime/60);
    let sec = Math.floor(audioElem.currentTime%60);
    currentAudioTime.firstElementChild.innerHTML = min;
    if(sec > 9){
        currentAudioTime.lastElementChild.innerHTML = sec;
    }
    else{
        currentAudioTime.lastElementChild.innerHTML = "0" + sec;
    }
}
function setDurationTime(){
    let min = Math.floor(audioElem.duration/60);
    let sec = Math.floor(audioElem.duration%60);
    if(durationAudioTime){
        durationAudioTime.firstElementChild.innerHTML = min;
        if(sec > 9){
            durationAudioTime.lastElementChild.innerHTML = sec;
        }
        else{
            durationAudioTime.lastElementChild.innerHTML = "0" + sec;
        }
    }
}
function changeAudioSpeed(e){
    audioElem.playbackRate = playSpeedSelect.value;
}
function sufflePlay(){
    if(isShuffle){
        isShuffle = false;
        let nextAudioSrcIndex = Math.floor(Math.random()*audioSrcs.length);
        while( nextAudioSrcIndex === audioSrcIndex){
            nextAudioSrcIndex = Math.floor(Math.random()*audioSrcs.length);
        }
        audioSrcIndex = nextAudioSrcIndex;
        audioElem.setAttribute("src", audioSrcs[audioSrcIndex]);
        // appearance
        shuffleBtn.style.backgroundColor = "green";
    }
    else{
        isShuffle = true;
        shuffleBtn.style.backgroundColor = "buttonface";
    }
}