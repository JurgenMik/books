// .Seotud muutujad
const form = document.querySelector('form');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookIsbn = document.querySelector('#isbn');
const delBook = document.querySelector('#myTable');

// Mis juhtub submit ja click - i toimumisel -->

form.addEventListener('submit', addBook);
delBook.addEventListener('click', deleteBook);

// järgneb eventListenerile

function deleteBook(e) {

    if(e.target.textContent == 'X') {
      e.target.parentElement.remove();

    }

}

// järgneb eventListenerile

function addBook(e) {

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


 e.preventDefault();

}



