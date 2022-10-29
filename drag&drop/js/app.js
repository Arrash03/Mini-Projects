let $ = document;

let addBtn = $.querySelector("#add_btn");
let todoForm = $.querySelector("#todo_form")
let closeModalBtn = $.querySelector(".close-modal");
let todoModalSubmit = $.querySelector("#todo_submit");
let noStatusCol = $.querySelector("#no_status");
let statusCols = $.querySelectorAll(".status");
let todoInput = $.querySelector("#todo_input");
// dark or light
let changeThemBtn = $.querySelector("#change_them");
setThem();

let todoNames = [];

loadEventListeners();
function loadEventListeners(){
    addBtn.addEventListener("click", showTodoForm);
    closeModalBtn.addEventListener("click", closeModal);
    todoModalSubmit.addEventListener("click", addTodo);
    statusCols.forEach(function(statusCol){
        statusCol.addEventListener("dragover", dragOverHandler);
        statusCol.addEventListener("drop", dropHandler);
    });
    changeThemBtn.addEventListener("click", changeThem);
}
function showTodoForm(e){
    todoForm.style.top = "25%";
    todoInput.focus();
}
function closeModal(){
    todoForm.style.top = "-50%";
}
function addTodo(e){
    let todoName = e.target.parentElement.firstElementChild.value;
    if(!todoName || todoNames.includes(todoName)){
        e.target.previousElementSibling.style.display = "block";
        setTimeout(function(){
            e.target.previousElementSibling.style.display = "none";
        }, 1200);
    }
    else{
        let divElem = $.createElement("div");
        divElem.className = "todo";
        divElem.setAttribute("draggable", "true");
        divElem.innerHTML = todoName;
        divElem.addEventListener("dragstart", dragStartHandler);
        let closeSpan = $.createElement("span");
        closeSpan.className = "close";
        closeSpan.innerHTML = "&times;";
        divElem.appendChild(closeSpan);
        // active close span
        closeSpan.addEventListener("click", removeTodo);
        // save in todoNames
        todoNames.push(todoName);
        // show in noStatus
        noStatusCol.appendChild(divElem);
        // close modal box
        closeModal();
    }
}
function removeTodo(e){
    e.target.parentElement.remove();
}
function dragStartHandler(e){
    e.target.id = e.target.textContent;
    e.dataTransfer.setData("elemText", e.target.textContent);
}
function dragOverHandler(e){
    e.preventDefault();
}
function dropHandler(e){
    let droppedTodoId = e.dataTransfer.getData("elemText");
    let droppedTodo = $.getElementById(droppedTodoId);
    e.target.appendChild(droppedTodo);
}
function changeThem(){
    let isDark = JSON.parse(localStorage.getItem("isDark"));
    if(!isDark){
        localStorage.setItem("isDark", "true");
        $.body.className = "dark";
        changeThemBtn.innerHTML = "light";
    }
    else{
        localStorage.setItem("isDark", "false");
        $.body.className = "light";
        changeThemBtn.innerHTML = "dark";
    }
}
function setThem(){
    let isDark = JSON.parse(localStorage.getItem("isDark"));
    if(isDark){
        $.body.className = "light";
        changeThemBtn.innerHTML = "dark";
    }
    else{
        $.body.className = "dark";
        changeThemBtn.innerHTML = "light";
    }
}