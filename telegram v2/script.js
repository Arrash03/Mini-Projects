var telegram = {"people":[], "groups":{}}; //fname, lname, age, uname
var loginForm = document.querySelector("form");
var allUsers = document.querySelector(".users");
var allGroups = document.querySelector(".groups");
var groupButton = document.querySelector("a");

loadEventListeners();

function loadEventListeners(){
    loginForm.addEventListener("submit", getInfo);
    groupButton.addEventListener("click", createGroup);
}
function getInfo(e){
    // save in db
    let fname = loginForm.firstElementChild.children[2].value;
    let lname = loginForm.firstElementChild.children[4].value;
    let age = loginForm.firstElementChild.children[6].value;
    let uname = loginForm.firstElementChild.children[8].value;
    telegram["people"].push({"fname":fname, "lname":lname, "age":age, "uname":uname});
    // show in html page
    createAccount(uname);

    loginForm.reset();
    e.preventDefault();
}
function createAccount(uname){
    let userDiv = document.createElement("div");
    userDiv.className = "user";
    let i = document.createElement("i");
    i.className = "fa-solid fa-circle-user";
    let span = document.createElement("span");
    span.appendChild(document.createTextNode("Welcome To Telegram " + uname + "."));
    userDiv.appendChild(i);
    userDiv.appendChild(span);
    allUsers.appendChild(userDiv);
}
function createGroup(e){
    let groupName = prompt("Name:");
    let result = {"members":[], "isCallValid":true};
    let isCallValid = true;
    function isMemberValid(element){
        if(element["uname"] == groupMember){
            if(element["age"] < 18){
                isCallValid = false;
            }
            return true;
        }
    }
    let groupMember = prompt("Type UserName:");
    while(groupMember != null){
        if(telegram["people"].some(isMemberValid)){
            result["members"].push(groupMember);
            alert("Added Successfully!!");
        }
        else{
            alert("The UserName Is Not Valid!!");
        }
        groupMember = prompt();
    }
    if(result["members"].length == 0){
        alert("The Group is not created!!");
    }
    else{
        alert("The Group is created!");
        result["isCallValid"] = isCallValid;
        telegram["groups"][groupName] = result;
        // show in html page
        showInPage(groupName);
    }
}
function showInPage(groupName){
    let groupDiv = document.createElement("div");
    groupDiv.className = "group";
    let groupIcon = document.createElement("i");
    groupIcon.className = "fa-solid fa-user-group";
    let span = document.createElement("span");
    span.appendChild(document.createTextNode(groupName+" Created!!"));
    let callIcon = document.createElement("i");
    callIcon.className = "fa-solid fa-phone";
    callIcon.addEventListener("click", groupCall);
    groupDiv.appendChild(groupIcon);
    groupDiv.appendChild(span);
    groupDiv.appendChild(callIcon);
    allGroups.appendChild(groupDiv);
}
function groupCall(e){
    let groupName = e.target.parentElement.children[1].textContent.replace(" Created!!", "");
    console.log(groupName);
    if(telegram["groups"][groupName]["isCallValid"]){
        alert("Call Is Valid!!");
    }
    else{
        alert("Call Is Not Valid!!");
    }
    e.preventDefault();
}
