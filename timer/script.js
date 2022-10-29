window.onload =  function (){
    var seconds = 0;
    var tens = 0;
    var Seconds = document.getElementById("seconds");
    var Tens = document.getElementById("tens");
    var start = document.getElementById("start");
    var reset = document.getElementById("reset");
    var stop = document.getElementById("stop");
    var record = document.getElementById("record");
    var timer;

    start.onclick = function (){
        clearInterval(timer);
        timer = setInterval(startTimer, 10);
    }
    stop.onclick = function (){
        clearInterval(timer);
        let container = document.createElement("div");
        container.style.borderTop = "1px solid white";
        container.style.display = "block";
        container.style.paddingTop = "15px";
        let para = document.createElement("p");
        let node = document.createTextNode(Seconds.innerHTML+":"+Tens.innerHTML);
        para.appendChild(node);
        container.appendChild(para);
        record.appendChild(container);
    }
    reset.onclick = function (){
        clearInterval(timer);
        seconds = 0;
        tens = 0;
        Seconds.innerHTML = "0"+seconds;
        Tens.innerHTML = "0"+tens;
    }
    function startTimer(){
        tens++;
        if(tens>9){
            if(tens>99){
                tens = 0;
                seconds++;
                if(seconds>9){
                    Seconds.innerHTML = seconds;
                }
                else{
                Seconds.innerHTML = "0"+seconds;
                }
            }
            Tens.innerHTML = tens;
        }
        else{
            Tens.innerHTML = "0"+tens;
        }

    }
}

