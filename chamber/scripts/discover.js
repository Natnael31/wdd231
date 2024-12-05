// header code

// Burger code
const ham = document.querySelector('nav');
const list = document.getElementById('navigation');


ham.addEventListener('click', () => {
    list.classList.toggle('show');
    ham.classList.toggle('show');
})


// header way finding code
const home = document.getElementById('home');
const directory = document.getElementById('directory');
const join = document.getElementById('join');
const discover = document.getElementById('discover');
const mainHeader = document.getElementById('main-header');

discover.classList.add('active');
home.addEventListener("click", () => {
    home.classList.add('active');
    directory.classList.remove('active');
    join.classList.remove('active');
    discover.classList.remove('active');
    mainHeader.textContent = 'Home';
})

directory.addEventListener("click", () => {
    directory.classList.add('active');
    home.classList.remove('active');
    join.classList.remove('active');
    discover.classList.remove('active');
    mainHeader.textContent = 'Directory';
})

join.addEventListener("click", () => {
    join.classList.add('active');
    home.classList.remove('active');
    directory.classList.remove('active');
    discover.classList.remove('active');
    mainHeader.textContent = 'Join';
})

discover.addEventListener("click", () => {
    discover.classList.add('active');
    home.classList.remove('active');
    directory.classList.remove('active');
    join.classList.remove('active');
    mainHeader.textContent = 'Discover';
})


// Main code

let pageVistCount = Number(localStorage.getItem('visit'));
localStorage.setItem('visit', ++pageVistCount);
console.log(pageVistCount)

// localStorage.removeItem('visit');


if (pageVistCount == 1) {
    alert('Welcome! Let us know if you have any questions.')
    var firstDate = Number(localStorage.getItem('firstDate'));
    localStorage.setItem('firstDate', Date.now());

} else {
    firstDate = Number(localStorage.getItem('firstDate'));
    let pastDate = new Date(firstDate);
    let pastDate_day = pastDate.getDate();
    console.log(pastDate_day);

    let currentDate = Number(localStorage.getItem('currentDate'));
    localStorage.setItem('currentDate', Date.now());

    currentDate = Number(localStorage.getItem('currentDate'));
    let presentDate = new Date(currentDate);
    let presentDate_day = presentDate.getDate();
    console.log(presentDate_day);

    if (presentDate_day - pastDate_day == 0) {
        alert('Back so soon! Awesome!');
    } else if (presentDate_day - pastDate_day == 1) {
        alert('You last visited one day ago');
    } else {
        alert(`You last visited ${presentDate_day - pastDate_day} days ago`);
    }


    // localStorage.removeItem('firstDate')

}





// Footer code
const currentDate = new Date();
let lastModified = new Date(document.lastModified);

let year = document.getElementById("currentyear");
year.textContent = `©${currentDate.getFullYear()}`;

let date = document.getElementById("lastModified");
date.textContent = `Last Modification : ${lastModified.getMonth() + 1}/${lastModified.getDate()}/${lastModified.getFullYear()} ${lastModified.getHours()}:${lastModified.getMinutes()}:${lastModified.getSeconds()}`