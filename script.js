const library = [];

const bookshelf = document.getElementById("bookshelf");


// main

function Book(title,author,pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}



function addBookToLibrary(title,author,pages) {
    let book = new Book(title,author,pages);
    book.id = crypto.randomUUID();
    library.push(book);
}



function displayBooks() {
    bookshelf.textContent = "";

    for(const book of library) {
        const newBook = document.createElement("div");
        newBook.textContent = `${book.title} (${book.author})`;
        newBook.classList.add("bookDecoration");

        const readText = document.createElement("div");
        readText.classList.add("readTextColor");
        readText.textContent = "unread";
        let isRead = false;
        newBook.append(readText);

        // delete button
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

        // read/unread toggle button
        const readBtn = document.createElement("button");
        readBtn.textContent = "Mark as read";
        readBtn.id = book.id;
        readBtn.style.margin = "5px";
        readBtn.addEventListener("click", () => {
            if (isRead === true) {
                readText.textContent = "Unread";
                readBtn.textContent = "Mark as read";
                isRead = false;
            }else {
                readText.textContent = "Read";
                readBtn.textContent = "Mark as unread";
                isRead = true;
            }
        });

        newBook.append(deleteBtn);
        newBook.append(readBtn);
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
    pagesLabel.textContent = "Number of pages";
    const pagesInput = document.createElement("input");
    pagesInput.setAttribute("type","text");
    pagesInput.id = "pages";
    pagesInput.setAttribute("placeholder","295");
    pagesInput.required = true;
    // children
    pagesBox.append(pagesLabel);
    pagesBox.append(pagesInput);
    fieldset.append(pagesBox);

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
            pagesInput.value
        );

        displayBooks();
    });

    form.append(submitBtn);
}