// ***HOME PAGE***
// Banner
let contactBtn = document.querySelector('.card-btn');
let social = document.querySelector('.card-social');

contactBtn.addEventListener('click', () => {
    contactBtn.classList.toggle('change');
    social.classList.toggle('change');
});

// Published Books
const numberOfBooks = document.querySelector(".banner-books-number");

window.addEventListener("load", () => {
    setTimeout(() => {
        countNumber(numberOfBooks);
        numberOfBooks.classList.add("show");
    }, 1000);
});

function countNumber(element) {
    // const dataValue = element.getAttribute("data-value");
    const dataValue = element.dataset.value;
    // let textValue = element.textContent;
    let textValue = element.dataset.start;

    let count = setInterval(() => {
        numberOfBooks.textContent = textValue;
        textValue++;

        if(textValue > dataValue) {
            clearInterval(count);
        }
    }, 120);
}