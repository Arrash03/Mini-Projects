let colorBtns = document.querySelectorAll(".btn");

colorBtns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        document.documentElement.style.setProperty("--theme-color", e.target.dataset.color);
    })
})