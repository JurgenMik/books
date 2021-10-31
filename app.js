// .Seotud muutujad
const form = document.querySelector('form');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookIsbn = document.querySelector('#isbn');
const delBook = document.querySelector('#myTable');

// Mis juhtub submit ja click - i toimumisel -->

form.addEventListener('submit', addBook);
delBook.addEventListener('click', deleteBook);
document.addEventListener('DOMContentLoaded', getBooksFromLocalStorage);

function getBooksFromLocalStorage() {
  let bookData;
  if(localStorage.getItem('bookData') === null) {
    bookData = [];
  } else {
    bookData = JSON.parse(localStorage.getItem('bookData'));
  }

  bookData.forEach(function(bookDataElement){

    const bookTable = document.getElementById('myTable');
    const row = bookTable.insertRow(1);

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    cell1.innerHTML = bookDataElement[0];
    cell2.innerHTML = bookDataElement[1];
    cell3.innerHTML = bookDataElement[2];

    const link = document.createElement('a');

    link.setAttribute('href', '#');

    link.appendChild(document.createTextNode('X'))
    row.appendChild(link);

  });
}

// järgneb eventListenerile.

function deleteBook(event) {

    if(event.target.textContent == 'X') {
       event.target.parentElement.remove();
       book = event.target.parentElement.firstChild.textContent;
       deleteBookFromLocalStorage(book);
    }

}

function deleteBookFromLocalStorage(book) {
  let bookData;
  if(localStorage.getItem('bookData') === null) {
    bookData = [];
  } else {
    bookData = JSON.parse(localStorage.getItem('bookData'));
    //console.log(bookData);
  }
  bookData.forEach(function(bookDataElement,index){
    if(bookDataElement[0] === book) {
       bookData.splice(index, 3);
    }

  });

  localStorage.setItem('bookData', JSON.stringify(bookData));

}

// järgneb eventListenerile

function addBook(event) {

  // vormi input

  const book = bookTitle.value;
  const author = bookAuthor.value;
  const isbn = bookIsbn.value;

 // create <row> element ja sisesta vormi input.value row sisse as <td>

    const bookTable = document.getElementById('myTable');
    const row = bookTable.insertRow(1);

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    cell1.innerHTML = book;
    cell2.innerHTML = author;
    cell3.innerHTML = isbn;

 // X link iga rowi peale

    const link = document.createElement('a');

    link.setAttribute('href', '#');

    link.appendChild(document.createTextNode('X'))
    row.appendChild(link);

    // Save input Book data to LocalStorage

    addBookToLocalStorage(book,author,isbn);


 event.preventDefault();

}

function  addBookToLocalStorage(book,author,isbn) {
  let bookData;
  let bookTitleAuthorIsbn = [];
  if(localStorage.getItem('bookData') === null) {
    bookData = [];
  } else {
    bookData = JSON.parse(localStorage.getItem('bookData'));
  }

  bookTitleAuthorIsbn.push(book);
  bookTitleAuthorIsbn.push(author);
  bookTitleAuthorIsbn.push(isbn);

  bookData.push(bookTitleAuthorIsbn)

  localStorage.setItem('bookData', JSON.stringify(bookData));

}


