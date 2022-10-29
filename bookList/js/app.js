let $ = document;

let bookForm = $.querySelector("#book-form");
let bookTitle = $.querySelector("#title");
let bookAuthor = $.querySelector("#author");
let bookYear = $.querySelector("#year");
let bookInputs = $.querySelectorAll(".form-control");
let bookList = $.querySelector("#book-list");

loadEventListeners();
function loadEventListeners(){
    window.addEventListener("load", showbooks);
    bookForm.addEventListener("submit", addBook);
}
function showbooks(){
    let allBooks = JSON.parse(localStorage.getItem("bookList"));
    if(allBooks){
        allBooks.forEach(function(book){
            bookList.innerHTML += `<tr><th>${book.title}</th><th>${book.author}</th><th>${book.year}</th></tr>`;
        });
    }
}
function addBook(e){
    e.preventDefault();
    // validation
    if(validValue()){
        // add book to localstorage
        let allBooks = JSON.parse(localStorage.getItem("bookList"));
        if(allBooks){
            const bookId = allBooks[allBooks.length-1]["id"] + 1;
            allBooks.push({id:bookId, title:bookTitle.value, author:bookAuthor.value, year:bookYear.value})
        }
        else{
            allBooks = [{id:0, title:bookTitle.value, author:bookAuthor.value, year:bookYear.value}];
        }
        localStorage.setItem("bookList", JSON.stringify(allBooks));
        // add book in html page
        bookList.innerHTML += `<tr><th>${bookTitle.value}</th><th>${bookAuthor.value}</th><th>${bookYear.value}</th></tr>`;
        // input empty
        bookInputs.forEach(function(input){
            input.value = "";
            input.blur();
        });
    }
}
function validValue(){
    let isValid = true;
    if(!bookTitle.value){
        bookTitle.style.outline = "2px solid red";
        setTimeout(function(){
            bookTitle.style.outline = "none";
        }, 1200);
        isValid = false;
    }
    if(!bookAuthor.value){
        bookAuthor.style.outline = "2px solid red";
        setTimeout(function(){
            bookAuthor.style.outline = "none";
        }, 1200);
        isValid = false;
    }
    if(!parseInt(bookYear.value)){
        bookYear.style.outline = "2px solid red";
        setTimeout(function(){
            bookYear.style.outline = "none";
        }, 1200);
        isValid = false;
    }
    // second valid test
    return isValid;
}
