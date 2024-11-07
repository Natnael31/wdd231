// Footer code
let currentDate = new Date();
let lastModified = new Date(document.lastModified);

let year = document.getElementById("currentyear");
year.textContent = `©${currentDate.getFullYear()}`;

let date = document.getElementById("lastModified");
date.textContent = `Last Modification : ${lastModified.getMonth() + 1}/${lastModified.getDate()}/${lastModified.getFullYear()} ${lastModified.getHours()}:${lastModified.getMinutes()}:${lastModified.getSeconds()}`

// Burger code
const ham = document.querySelector('nav');
const list = document.getElementById("navigation");

ham.addEventListener('click', () => {
    list.classList.toggle('show');
    ham.classList.toggle('show');
})

// header way finding code
const home = document.getElementById("home");
const chamber = document.getElementById("chamber");
const github = document.getElementById("github");
const linkedIn = document.getElementById("linkedIn")

home.addEventListener("click", () => {
    home.classList.add('active');
    chamber.classList.remove('active');
    github.classList.remove('active');
    linkedIn.classList.remove('active');
})

chamber.addEventListener("click", () => {
    chamber.classList.add('active');
    home.classList.remove('active');
    github.classList.remove('active');
    linkedIn.classList.remove('active');
})

github.addEventListener("click", () => {
    github.classList.add('active');
    home.classList.remove('active');
    chamber.classList.remove('active');
    linkedIn.classList.remove('active');
})

linkedIn.addEventListener("click", () => {
    linkedIn.classList.add('active');
    home.classList.remove('active');
    chamber.classList.remove('active');
    github.classList.remove('active');
})