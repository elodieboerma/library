const library = [];

addBookToLibrary("The Hobbit","J.R.R. Tolkien",295,"not read yet");
addBookToLibrary("Emma","Jane Austen",208,"read");
addBookToLibrary("Anna Karenina","Leo Tolstoy",880,"not read yet");

// main

function Book(title,author,pages,readYet) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readYet = readYet;
}

function addBookToLibrary(title,author,pages,readYet) {
    let book = new Book(title,author,pages,readYet);
    book.id = crypto.randomUUID();
    library.push(book);
}

for(const book of library) {
    const newBook = document.createElement("div");
    const bookshelf = document.getElementById("bookshelf");
    newBook.textContent = `${book.title} (${book.author})`;
    newBook.classList.add("bookDecoration");
    bookshelf.append(newBook);
}

function addUserBook(title,author,pages,readYet) {
    const newButton = document.getElementById("new");
    newButton.addEventListener("click", /*add form popup thing here*/);
}