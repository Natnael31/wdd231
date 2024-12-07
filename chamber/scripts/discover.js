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

const display = document.getElementById('display-message');
const message = document.createElement('h3');

display.classList.add('card-container')


let pageVistCount = Number(localStorage.getItem('visit'));
localStorage.setItem('visit', ++pageVistCount);
console.log(pageVistCount)

// localStorage.removeItem('visit');


if (pageVistCount == 1) {
    // setTimeout(() => {
    //     alert('Welcome! Let us know if you have any questions.')
    // }, 500);
    message.textContent = 'Welcome! Let us know if you have any questions.';
    display.append(message);

    var firstDate = Number(localStorage.getItem('firstDate'));
    localStorage.setItem('firstDate', Math.floor(Date.now() / 3600000));
    // localStorage.removeItem('firstDate')
    // localStorage.removeItem('currentDate');
} else {
    firstDate = Number(localStorage.getItem('firstDate'));
    console.log(firstDate);

    let currentDate = Number(localStorage.getItem('currentDate'));
    localStorage.setItem('currentDate', Math.floor(Date.now() / 3600000));

    currentDate = Number(localStorage.getItem('currentDate'));
    console.log(currentDate);

    if (currentDate - firstDate < 24) {
        // setTimeout(() => {
        //     alert('Back so soon! Awesome!');
        // }, 500);
        message.textContent = 'Back so soon! Awesome!';
        display.append(message);
        localStorage.setItem('firstDate', Math.floor(Date.now() / 3600000));
    } else if (currentDate - firstDate == 24) {
        // setTimeout(() => {
        //     alert('You last visited one day ago');
        // }, 500);
        message.textContent = 'You last visited one day ago.';
        display.append(message);
        localStorage.setItem('firstDate', Math.floor(Date.now() / 3600000));
    } else {
        // setTimeout(() => {
        //     alert(`You last visited ${(currentDate - firstDate) / 24} days ago`);
        // }, 500);
        if (((currentDate - firstDate) % 24) == 0) {
            message.textContent = `You last visited ${(currentDate - firstDate) / 24} days ago`;
            display.append(message);
            localStorage.setItem('firstDate', Math.floor(Date.now() / 3600000));
        } else {
            message.textContent = `You last visited ${Math.floor((currentDate - firstDate) / 24) + 1} days ago`;
            display.append(message);
            localStorage.setItem('firstDate', Math.floor(Date.now() / 3600000));
        }


    }



}





// Footer code
const currentDate = new Date();
let lastModified = new Date(document.lastModified);

let year = document.getElementById("currentyear");
year.textContent = `©${currentDate.getFullYear()}`;

let date = document.getElementById("lastModified");
date.textContent = `Last Modification : ${lastModified.getMonth() + 1}/${lastModified.getDate()}/${lastModified.getFullYear()} ${lastModified.getHours()}:${lastModified.getMinutes()}:${lastModified.getSeconds()}`