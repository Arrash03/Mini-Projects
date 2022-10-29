let $ = document;
let m = Math;

let searchInput = $.querySelector("#searchInput");
let findButton = $.querySelector("button");
let searchResultBox = $.querySelector(".searchResult");
let modalBox = $.querySelector(".modal");

let cities = {
    تهران: {name:"تهران", temp:"9 C", weather:"بادی", humidity:"40%", windSpeed:"40 km"},
    اصفهان: {name:"اصفهان", temp:"25 C", weather:"گرمای سگی", humidity:"10%", windSpeed:"10 km"},
    اهواز: {name:"اهواز", temp:"40 C", weather:"گرم و شرجی", humidity:"80%", windSpeed:"5 km"},
    یزد: {name:"یزد", temp:"35 C", weather:"آفتابی", humidity:"0%", windSpeed:"0 km"}
}
let backgroundUrls = ["background/370466.jpg", "background/701742.jpg", "background/840931.jpg", "background/840952.jpg"];
setBackground()
function setBackground(){
    let randomIndex = m.floor(m.random()*4);
    $.body.style.backgroundImage = "url(" + backgroundUrls[randomIndex] + ")";
}
loadEventListeners();
function loadEventListeners(){
    findButton.addEventListener("click", showWeather);
}
function showWeather(e){
    let chosenCity = searchInput.value;
    if(chosenCity in cities){
        $.body.style.backgroundImage = "url(" + "back1.jpg" + ")";
        searchResultBox.innerHTML = "";
        searchResultBox.innerHTML += "<span>" + "آب و هوا در " + cities[chosenCity]["name"] + "</span><br>";
        searchResultBox.innerHTML += "<span>" + "دمای هوا: " +  cities[chosenCity]["temp"] +  "</span><br>";
        searchResultBox.innerHTML += "<span>" + "آب و هوا: " +  cities[chosenCity]["weather"] +  "</span><br>";
        searchResultBox.innerHTML += "<span>" + "رطوبت هوا: " +  cities[chosenCity]["humidity"] +  "</span><br>";
        searchResultBox.innerHTML += "<span>" + "سرعت باد: " +  cities[chosenCity]["windSpeed"] +  "</span><br>";
    }
    else{
        modalBox.style.display = "block";
        setTimeout(function(){
            modalBox.style.display = "none";
        }, 2000)
    }
}