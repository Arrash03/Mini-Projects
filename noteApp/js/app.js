let $ = document;

let noteInput = $.querySelector("#input-field");
let saveButton = $.querySelector("#btn-save");
let notesList = $.querySelector("#listed");
let colorBoxes = $.querySelectorAll(".color-box");
let deleteButton = $.querySelector("#btn-delete");

let textNotes = [];

loadEventListeners();
function loadEventListeners(){
    saveButton.addEventListener("click", saveNote);
    noteInput.addEventListener("keyup", saveNote);
    colorBoxes.forEach(function(item){
        item.addEventListener("click", changeNoteColor);
    })
    deleteButton.addEventListener("click", clearNoteInput);
}
function saveNote(e){
    if(e.type === "click" || e.key === "Enter"){
        if(noteInput.value){
            let isNoteExist = textNotes.some(function(value){
                return value === noteInput.value;
            })
            if(!isNoteExist){
                let divElem = $.createElement("div");
                divElem.className = "card shadow-sm rounded";
                divElem.title = "Double Click To Remove";
                divElem.style.backgroundColor = noteInput.style.backgroundColor;
                divElem.addEventListener("dblclick", removeNote);
                let pElem = $.createElement("p");
                pElem.className = "card-text p-3";
                pElem.innerHTML = noteInput.value;
                divElem.appendChild(pElem);
                notesList.appendChild(divElem);
                // clear noteInput
                noteInput.value = "";
                noteInput.backgroundColor = "white";
                // save in data
                textNotes.push(noteInput.value);
                // destroy focus
                saveButton.blur();
            }
            else{
                let textNotesElems = $.querySelectorAll(".card-text");
                let rpeatitionElem;
                for(let pElem of textNotesElems){
                    if(pElem.innerHTML === noteInput.value){
                        rpeatitionElem = pElem.parentElement;
                        break;
                    }
                }
                rpeatitionElem.style.border = "2px solid red";
                setTimeout(function(){
                    rpeatitionElem.style.border = "1px solid rgba(0,0,0,.125)";
                }, 800);
            }
        }
        else{
            noteInput.style.border = "2px solid red";
            setTimeout(function(){
                noteInput.style.border = "1px solid #ced4da";
            }, 1000);
        }
    }
}
function changeNoteColor(e){
    let chosenColor = e.target.style.backgroundColor;
    noteInput.style.backgroundColor = chosenColor;
    noteInput.style.backgroundColor = chosenColor;
}
function clearNoteInput(e){
    noteInput.value = "";
    noteInput.backgroundColor = "white";
}
function removeNote(e){
    textNotes.splice(textNotes.indexOf(e.target.innerHTML), 1);
    e.target.parentElement.remove();
    console.log(e.target.parentElement);
    console.log(textNotes);
}
