const addedTaskForm = document.querySelector(".addForm");
const ulTask = document.querySelector("ul");
const filterTaskForm = document.querySelector("#filterName");

loadEventListeners();

function loadEventListeners(){
    addedTaskForm.addEventListener("submit", storeInLocalStorage);
    filterTaskForm.addEventListener("keyup", filterTask);
}
function storeInLocalStorage(e){
    let taskName = e.target.children[1].value;
    if(taskName==""){
        alert("لطفا نام تسک را وارد کنید!!");
    }
    else{
        let tasks;
        if(localStorage.getItem("tasks") === null){
            tasks = [];
        }
        else{
            tasks = JSON.parse(localStorage.getItem("tasks"));
        }
        tasks.push(taskName);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    // add task in html file 
    addTask(taskName);
    e.preventDefault();
}
function addTask(taskName){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.appendChild(document.createTextNode(taskName));
    li.appendChild(span);
    const i = document.createElement("i");
    i.addEventListener("click", removeTask);
    i.className = "fa-solid fa-xmark";
    i.title = "remove";
    li.appendChild(i);
    ulTask.appendChild(li);
    // final works
    // taskName = "";        // how to empty input field??
    document.querySelector("form").reset();
    alert("با موفقیت انجام شد")
}
function filterTask(e){
    let NotFound = true;
    for(let li of ulTask.children){
        if(li.children[0].textContent.includes(filterTaskForm.value)){
            // bolding the alph
            boldWord(li);
            // show & hide
            li.style.display = "flex";
            NotFound = false;
            document.querySelector("#NotFound").style.display = "none";
        }
        else{
            li.style.display = "none";
        }
    }
    if(NotFound){
        document.querySelector("#NotFound").style.display = "block";
    }

}
function boldWord(li){
    let index = li.children[0].textContent.indexOf(filterTaskForm.value);
    let mPart = document.createElement("b");
    mPart.appendChild(document.createTextNode(filterTaskForm.value));
    let lPart = document.createTextNode(li.children[0].textContent.substr(index + filterTaskForm.value.length));
    console.log(li.children[0].textContent.substr(index + filterTaskForm.value.length));
    li.children[0].textContent = li.children[0].textContent.replace(li.children[0].textContent.substr(index + filterTaskForm.value.length), "");
    li.children[0].textContent = li.children[0].textContent.replace(filterTaskForm.value, "");
    let fPart = document.createTextNode(li.children[0].textContent);
    console.log(li.children[0].textContent);
    li.children[0].textContent = "";
    li.children[0].appendChild(fPart);
    li.children[0].appendChild(mPart);
    li.children[0].appendChild(lPart);
}
function removeTask(e){
    if(confirm("تسک حذف شود؟؟")){
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks.splice(tasks.indexOf(e.target.parentElement.children[0].textContent), 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        e.target.parentElement.remove();
    }
}
function removeAll(){
    // LS empty
    localStorage.clear();
    // ulTask empty
    ulTask.innerHTML = "";
    // for(let li of ulTask.children){
    //     ulTask.removeChild(li);      it doesn't work. why???
    // }
}