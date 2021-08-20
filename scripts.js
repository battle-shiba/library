const tableData = document.querySelector("tbody")

const bookTitle = document.querySelector('#book-title');

const bookAuthor = document.querySelector('#book-author');

const bookPages = document.querySelector('#book-pages');

const addBtn = document.querySelector('.add-btn')


let myLibrary = [];

function Book(title, author, pages, readStatus) {
    // constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibary(title, author, pages, readStatus) {

    let newBook = new Book(title, author, pages, readStatus);

    myLibrary.push(newBook);

}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function clearFormFields() {
    bookTitle.value=''
    bookAuthor.value ='';
    bookPages.value = '';
    
}

function submitForm() {

    addBookToLibary(bookTitle.value, bookAuthor.value, bookPages.value, false);
    updateTable();
    closeForm();
    clearFormFields();

}

function updateTable() {
    tableData.innerHTML = '';
    for(let i=0; i<myLibrary.length; i++) {
        
        let newRow = document.createElement('tr');

        let book = myLibrary[i];

        newRow.dataset.libIndex =`${i}`;



        for (key in book) {

            let newData = document.createElement('td');

            newData.textContent = book[key];

            newRow.appendChild(newData);

        }

        let newData = document.createElement('td');

        newData.innerHTML=`<button onclick='removeBook(${newRow.dataset.libIndex})' class="delBtn">Del</button>`;
        newRow.appendChild(newData);

        let newData2 = document.createElement('td');

        newData2.innerHTML=`<button onclick='toggleReadStatus(${newRow.dataset.libIndex})' class="toggleBtn">Toggle</button>`;
        newRow.appendChild(newData2);

        tableData.appendChild(newRow);


    }
}

function removeBook(i) {

    myLibrary.splice(i,1);
    updateTable();

}

function toggleReadStatus(i) {
    
    myLibrary[i].readStatus = !(myLibrary[i].readStatus);
    updateTable();
}