let num_request = prompt("What is your number!", 10)

while(Number(num_request) > 9){
    result = 0;
    for(let char of String(num_request)){
        char = Number(char);
        result += char;
    }
    num_request = result;
}

document.getElementById("result").innerHTML = num_request

console.log(num_request);