let scrollShower = document.querySelector(".scroll-percent");

window.addEventListener("scroll", function(){
    let wholeScroll = document.body.clientHeight - window.innerHeight;

    let scrolledHeight = Math.floor(window.scrollY);
    
    scrollShower.setAttribute("style", `width: ${scrolledHeight/wholeScroll*100}%`);
});