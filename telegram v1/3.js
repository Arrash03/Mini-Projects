let telegram = {};

function sortObj(obj) {
    return Object.keys(obj).sort().reduce(function (result, key) {
      result[key] = obj[key];
      return result;
    }, {});
}

function Send(user, message){
    if(user in telegram){
        telegram[user].push(message);
    }
    else{
        telegram[user] = [message];
        console.log(user + " added");
    }
    
}
function Delete(user, message){
    if(message in telegram[user]){
        let index = telegram[user].indexof(message);
        telegram[user].splice(index, 1);
    }
    if(telegram[user]==[]){
        delete telegram[user];
        console.log("History was cleared!");
    }
}
function Search(word){
    telegram = sortObj(telegram);
    for(let user in telegram){
        for(let msg of telegram[user]){
            if(msg.toLowerCase().includes(word.toLowerCase())){
                let result = user + ": " + msg;
                console.log(result);
            }
        }
    }
}
function Forward(user1, user2){
    telegram[user2] = telegram[user2].concat(telegram[user1]);
}


while(true){
    let input = prompt("your command:");
    let command = input.split(" ", 2);
    let rest_command = input.replace(command[0]+" "+command[1]+" ");
    if(command[0] == "Send"){
        Send(command[1], rest_command);
    }
    else if(command[0] == "Delete"){
        Delete(command[1], rest_command);
    }
    else if(command[0] == "Search"){
        Search(command[1]);
    }
    else if(command[0] == "Forward"){
        Forward(command[1], rest_command);
    }
    else if(command[0] == "Exit"){
        break;
    }

}


