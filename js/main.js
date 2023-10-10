// Smooth Scrolling - Top Navigation and Side Menu
$('#navbar a, #navbar2 a, a.link-top').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
      const hash = this.hash;    
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 95
        },
        900
      );
    }
});

// Main Menu button
let mainMenuBtn = document.querySelector('.main-menu-btn');
let sideNav = document.querySelector('.side-nav');

mainMenuBtn.addEventListener('click', function() {
  mainMenuBtn.classList.toggle('rotate-line');
  sideNav.classList.toggle('side-nav-change');
});

// Top Link for Book, Career and Papers pages
const topLink = document.querySelector(".link-top");

window.addEventListener("scroll", () => {
  // const scrollHeight = window.pageYOffset;
  const scrollHeight = window.scrollY;

  if(scrollHeight > 800) {
    topLink.classList.add("show-topLink");
  }
  else {
    topLink.classList.remove("show-topLink");
  }
});

if(topLink) {
  const widthPage = 1800;
  const windowWidth = window.innerWidth;
  let diffSize = window.innerWidth - widthPage;
  if(windowWidth >= widthPage) topLink.style.right = (diffSize - (diffSize * .48)) + 'px';
}

// Spy Links
let sections = document.querySelectorAll('section');
let navbarLinks = document.querySelectorAll('#navbar2 a');
// console.log(sections, navbarLinks);

navbarLinks[0].classList.add("change-link");

window.addEventListener("scroll", () => {
  // console.log(window.pageYOffset);
  sections.forEach((section, i) => {
    if(window.pageYOffset >= section.offsetTop - 96) {
      navbarLinks.forEach((navLink) => {
        navLink.classList.remove("change-link");
      });

      navbarLinks[i].classList.add("change-link");
    }
  });  
});

// Date
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

let monthArray = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
// console.log(monthArray[month]);

let showDate = document.getElementById('date');
// showDate.innerHTML = `${monthArray[month]} / ${year}`;
showDate.textContent = year;