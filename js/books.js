const booksContent = document.querySelector(".books-content");

//Add list of books dinamically
booksContent.innerHTML = booksList.map((book) => {
    return `
        <div class="books-item">
            <div class="books-item-img">            
                <img src="${book.img}" class="books-img" alt="${book.alt}">
                <i class="fas fa-search"></i>            
            </div>
            <p class="books-text marg-bottom">${book.text}</p>
        </div>
    `;
}).join('');

const modal = document.querySelector(".modal");

//Create modal dinamically
modal.innerHTML = `
    <div class="modal-book">
        <span class="modal-close">X</span>

        <figure class="modal-image">
            <img src="./img/books/1 - Global Challenges of Climate Change.jpg" alt="Global Challenges of Climate Change">
        </figure>

        <h3 class="modal-name">Global Challenges of Climate Change, Vol.1</h3>

        <div class="buttons">
            <span id="btn-left">
                    <i class="fa-solid fa-arrow-left"></i>
            </span>
            <span id="btn-right">
                    <i class="fa-solid fa-arrow-right"></i>
            </span>
        </div>
    </div>
`;

const books = document.querySelectorAll(".books-item-img"); 
const modalBook = document.querySelector(".modal-book");
const bookImage = document.querySelector(".modal-image img");
const bookName = document.querySelector(".modal-name");
const closeModal = document.querySelector(".modal-close");
const buttonLeft = document.getElementById("btn-left");
const buttonRight = document.getElementById("btn-right");
let counter = 0;

//Function to show selected book in a modal
const showModalBook = (index) => {
    modal.classList.add("show");
    modalBook.classList.add("show");

    setTimeout(() => modalBook.classList.remove("show"), 500);

    bookImage.src = booksList[index].img;
    // bookName.innerText = booksList[index].summary;
    bookName.innerText = `${booksList[index].id} - ${booksList[index].summary}`;

    counter = index;
}

//Loop through all book images and call showModalBook function
books.forEach((book, idx) => {
    book.addEventListener("click", () => {
        showModalBook(idx);
    });
});

//Function to check index of books array
const checkIndex = (countIndex) => {
    if(countIndex > books.length - 1) {
        counter = 0;
    }
    if(countIndex < 0) {
        counter = books.length - 1;
    }
}

//Previous and Next book
buttonLeft.addEventListener("click", () => {
    counter --;
    checkIndex(counter);
    showModalBook(counter);
});

buttonRight.addEventListener("click", () => {
    counter ++;
    checkIndex(counter);
    showModalBook(counter);
});

//Close modal
closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
});

document.addEventListener("click", (e) => {
    const target = e.target;

    if(target.classList.contains("show")) {
        modal.classList.remove("show");
    }
});