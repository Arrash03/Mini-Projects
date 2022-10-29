let $ = document;

let mainNav = $.querySelector("#mainNav");
let sabzLearnLogo = $.querySelector("img");

document.addEventListener("scroll", scrollHandler);
function scrollHandler(e){
    console.log($.documentElement.scrollTop);
    if($.documentElement.scrollTop > 20){
        mainNav.className = "bg-black txt-white";
        sabzLearnLogo.style.height = "64px";
    }
    else{
        mainNav.className = "";
        sabzLearnLogo.style.height = "84px";
    }
}