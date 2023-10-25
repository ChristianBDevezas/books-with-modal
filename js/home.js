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
const bannerBtn = document.querySelector(".banner-btn");
// console.log(window.innerHeight, window.innerWidth);

if(window.innerWidth > 768) {
    setTimeout(() => {
        countNumber(numberOfBooks);
        numberOfBooks.classList.add("show");
    }, 1250);
}
else {
    window.addEventListener("scroll", () => {
        const triggerPoint = window.innerHeight / 5 * 4;
        const buttonTop = bannerBtn.getBoundingClientRect().top;
        // console.log(triggerPoint, buttonTop);
    
        if(buttonTop < triggerPoint) {
            setTimeout(() => {
                countNumber(numberOfBooks);
                numberOfBooks.classList.add("show");
            }, 1250);
        }
        else {
            numberOfBooks.classList.remove("show");
        }
    });
}

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