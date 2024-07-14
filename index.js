function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((json) => renderBooks(json));
}

function renderBooks(books) {
  // TO DO: implement rendering of book titles
  const bookList = document.getElementById("book-list");
  books.forEach((book) => {
    const bookTitle = document.createElement("li");
    bookTitle.textContent = book.name;
    bookList.appendChild(bookTitle);
  });
}

fetchBooks();

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
