const library = [];

const bookshelf = document.getElementById("bookshelf");


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



function displayBooks() {
    bookshelf.textContent = "";

    for(const book of library) {
        const newBook = document.createElement("div");
        newBook.textContent = `${book.title} (${book.author})`;
        newBook.classList.add("bookDecoration");

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.id = book.id;
        deleteBtn.style.margin = "5px";

        deleteBtn.addEventListener("click", () => {
            const index = library.indexOf(book);
            if (index > -1) {
                library.splice(index, 1);  // remove from array
            }
            newBook.remove(); // remove from page
        });

        newBook.append(deleteBtn);
        bookshelf.append(newBook);
    }
}

displayBooks();



const newButton = document.getElementById("new");
newButton.addEventListener("click", () => {
    const form = document.getElementById("form");

    // If inputs exist, clear them
    const inputs = form.querySelectorAll("input");
    if (inputs.length > 0) {
        inputs.forEach(input => input.value = "");
        return; // stop here, don’t rebuild the form
    }

    // If the form is empty, build it
    showForm();
});



// takes user input in a form to add a new book to library[]
function showForm() {
    const form = document.getElementById("form");
    const instructions = document.createElement("p");
    instructions.textContent = "Add a book to your library."
    const fieldset = document.createElement("fieldset");

    // title
    const titleBox = document.createElement("div");
    titleBox.classList.add("box");
    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for","title");
    titleLabel.textContent = "Title";
    const titleInput = document.createElement("input");
    titleInput.setAttribute("type","text");
    titleInput.id = "title";
    titleInput.setAttribute("placeholder","The Hobbit");
    titleInput.required = true;
    // children
    titleBox.append(titleLabel);
    titleBox.append(titleInput);
    fieldset.append(titleBox);

    // author
    const authorBox = document.createElement("div");
    authorBox.classList.add("box");
    const authorLabel = document.createElement("label");
    authorLabel.setAttribute("for","author");
    authorLabel.textContent = "Author";
    const authorInput = document.createElement("input");    
    authorInput.setAttribute("type","text");
    authorInput.id = "author";
    authorInput.setAttribute("placeholder","J.R.R. Tolkien");
    authorInput.required = true;
    // children
    authorBox.append(authorLabel);
    authorBox.append(authorInput);
    fieldset.append(authorBox);

    // number of pages
    const pagesBox = document.createElement("div");
    pagesBox.classList.add("box");
    const pagesLabel = document.createElement("label");
    pagesLabel.setAttribute("for","pages");
    pagesLabel.textContent = "Page number";
    const pagesInput = document.createElement("input");
    pagesInput.setAttribute("type","text");
    pagesInput.id = "pages";
    pagesInput.setAttribute("placeholder","295");
    pagesInput.required = true;
    // children
    pagesBox.append(pagesLabel);
    pagesBox.append(pagesInput);
    fieldset.append(pagesBox);

    // read yet
    const readYetBox = document.createElement("div");
    readYetBox.classList.add("box");
    const readYetLabel = document.createElement("label");
    readYetLabel.setAttribute("for","readYet");
    readYetLabel.textContent = "Read yet?";
    const readYetInput = document.createElement("input");
    readYetInput.setAttribute("type","text");
    readYetInput.id = "readYet";
    readYetInput.setAttribute("placeholder","not read yet");
    readYetInput.required = true;
    // children
    readYetBox.append(readYetLabel);
    readYetBox.append(readYetInput);
    fieldset.append(readYetBox);

    form.append(fieldset);


    // submit button
    const submitBtn = document.createElement("button");
    submitBtn.setAttribute("type","submit");
    submitBtn.textContent = "Submit";


    submitBtn.addEventListener("click", function (event) {
        event.preventDefault();

        addBookToLibrary(
            titleInput.value,
            authorInput.value,
            pagesInput.value,
            readYetInput.value
        );

        displayBooks();
    });

    form.append(submitBtn);
}