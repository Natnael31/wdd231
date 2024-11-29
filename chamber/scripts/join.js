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

join.classList.add('active');
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


// main code

const timeStamp = document.getElementById('time-stamp');
const formSubmit = document.getElementById('register');


formSubmit.addEventListener('submit', () => {
    const latestDate = new Date();
    const dateSubmitted = latestDate.toLocaleDateString();
    const timeSubmitted = latestDate.toLocaleTimeString();

    timeStamp.value = `${dateSubmitted}, ${timeSubmitted}`;
    // console.log(timeStamp.value);
})


// modal code
document.querySelectorAll(".clicked-modal").forEach(click => {
    click.addEventListener("click", (e) => {
        e.preventDefault();
        const clickedModal = e.target.getAttribute("href").substring(1);
        document.getElementById(clickedModal).showModal();
    });
});

document.querySelectorAll(".close-modal").forEach(modal => {
    modal.addEventListener("click", (e) => {
        e.target.closest("dialog").close();
    });
});


// Footer code
const currentDate = new Date();
let lastModified = new Date(document.lastModified);

let year = document.getElementById("currentyear");
year.textContent = `©${currentDate.getFullYear()}`;

let date = document.getElementById("lastModified");
date.textContent = `Last Modification : ${lastModified.getMonth() + 1}/${lastModified.getDate()}/${lastModified.getFullYear()} ${lastModified.getHours()}:${lastModified.getMinutes()}:${lastModified.getSeconds()}`