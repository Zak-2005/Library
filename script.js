function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

let Library = [];

function addBookToLibrary(event) {
  const book = new Book(
    document.getElementById("Title").value,
    document.getElementById("auth").value,
    document.getElementById("pg#").value,
  );
  Library.push(book);
  closeForm();
  displayBook(book);
  clearForm();
  event.preventDefault();
}

const listOfBooks = document.querySelector(".books");

function displayBook(book) {
  const bookInfo = document.createElement("div");
  bookInfo.classList.add("book");
  const title = document.createElement("li");
  title.classList.add("title");
  title.textContent = book.title;
  bookInfo.appendChild(title);

  const auth = document.createElement("li");
  auth.classList.add("author");
  auth.textContent = book.author;
  bookInfo.appendChild(auth);

  const pages = document.createElement("li");
  pages.classList.add("pages");
  pages.textContent = book.pages;
  bookInfo.appendChild(pages);

  const read = document.createElement("div");
  read.classList.add("Read");
  const label = document.createElement("label");
  label.textContent = "Read:";
  read.appendChild(label);
  const checked = document.createElement("input");
  checked.type = "checkbox";
  read.appendChild(checked);
  bookInfo.appendChild(read);

  const trash = document.createElement("button");
  trash.classList.add("trash");
  trash.textContent = "trash";
  trash.addEventListener("click", ()=>{
    trash.parentElement.remove();
  })
  bookInfo.appendChild(trash);

  listOfBooks.appendChild(bookInfo);
}

function openForm() {
  document.getElementById("add").style.display = "block";
}

function closeForm() {
  document.getElementById("add").style.display = "none";
}

function clearForm() {
  document.getElementById("Title").value = "";
  document.getElementById("auth").value = "";
  document.getElementById("pg#").value = "";
}

const addBook = document.querySelector(".btn");
addBook.addEventListener("click", addBookToLibrary, false);
