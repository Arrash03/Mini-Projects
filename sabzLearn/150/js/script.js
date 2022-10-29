let $ = document;

let contextMenu = $.querySelector("#contextMenu");

loadEventListeners();
function loadEventListeners(){
    $.body.addEventListener("contextmenu", showingContextMenu);
    $.body.addEventListener("click", hideContextMenu);
    $.body.addEventListener("keydown", hideContextMenu);    
}
function showingContextMenu(e){
    e.preventDefault();
    contextMenu.style.margin = e.y + " 0 0 " + e.x;
    contextMenu.style.display = "block";
}
function hideContextMenu(e){
    console.log(e);
    if(e.key === "Escape" || e.type === "click"){
        contextMenu.style.display = "none";
    }
}