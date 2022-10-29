let contact = {};

function showInPage(text){
    let para = document.createElement("p");
    let node = document.createTextNode(text);
    para.appendChild(node);
    let element = document.getElementById("result");
    element.appendChild(para);
}

function add(name, phone_number){
    contact[name.toLowerCase()] = {"name":name, "phone_number":phone_number};
    showInPage("entry added "+name+" "+phone_number);
}
function lookup(name){
    if(name.toLowerCase() in contact){
        showInPage(contact[name.toLowerCase()]["phone_number"]);
    }
    else{
        showInPage("Nothing Found!!");
    }
}
function printall(word){
    if(word == undefined){
        for(let user in contact){
            showInPage(contact[user]["name"]+" : "+contact[user]["phone_number"]);
        }
    }
    else{
        let len = word.length;
        for(let user in contact){
            if(user.slice(0, len) == word.toLowerCase()){
                showInPage(contact[user]["name"]+" : "+contact[user]["phone_number"]);
            }
        }
    }
}
function update(name, phone_number){
    contact[name.toLowerCase()]["phone_number"] = phone_number;
    showInPage(contact[name.toLowerCase()]["name"]+" number was updated to "+phone_number);
}
function del(name){
    if(name.toLowerCase() in contact){
        showInPage(contact[name.toLowerCase()]["name"]+" number was updated to "+phone_number);
        delete contact[name.toLowerCase()];
    }
}

while(true){
    let input = prompt("your command:");
    let command = input.split(" ", 2);
    let rest_command = input.replace(command[0]+" "+command[1]+" ", "");
    if(command[0] == "add"){
        add(command[1], rest_command);
    }
    else if(command[0] == "lookup"){
        lookup(command[1]);
    }
    else if(command[0] == "printall"){
        printall(command[1]);
    }
    else if(command[0] == "update"){
        update(command[1], rest_command);
    }
    else if(command[0] == "delete"){
        del(command[1]);
    }
    else if(command[0] == "q"){
        break;
    }
}
