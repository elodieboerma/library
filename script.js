const library = [];

addBookToLibrary("The Hobbit","J.R.R. Tolkien",295,"not read yet");
addBookToLibrary("Emma","Jane Austen",208,"read");
addBookToLibrary("Anna Karenina","Leo Tolstoy",880,"not read yet");

//constructor for books
function Book(title,author,pages,readYet) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readYet = readYet;
}

//separate function that takes arguments
function addBookToLibrary(title,author,pages,readYet) {
    //makes a book from arguments
    let book = new Book(title,author,pages,readYet);
    //each book object needs a unique id generated using crypto.randomUUID() to prevent issues when
        //books are removed or rearranged
    book.id = crypto.randomUUID();
    //stores new book object into array
    library.push(book);
}

//function that loops through array and displays each book on the page
for(const book of library) {
    const bookshelf = document.getElementById("bookshelf");
    const newBook = document.createElement("div");
    newBook.textContent = `${book.title} (${book.author})`;
    bookshelf.append(newBook);
}