// import ES module's display function

import { displayItems } from "./display.js";


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
const html = document.getElementById('html');
const css = document.getElementById('css');
const js = document.getElementById('js');
const register = document.getElementById('register');

html.classList.add('active');
home.addEventListener("click", () => {
    home.classList.add('active');
    html.classList.remove('active');
    css.classList.remove('active');
    js.classList.remove('active');
    register.classList.remove('active');
})

html.addEventListener("click", () => {
    html.classList.add('active');
    home.classList.remove('active');
    css.classList.remove('active');
    js.classList.remove('active');
    register.classList.remove('active');
})

css.addEventListener("click", () => {
    css.classList.add('active');
    home.classList.remove('active');
    html.classList.remove('active');
    js.classList.remove('active');
    register.classList.remove('active');
})

js.addEventListener("click", () => {
    js.classList.add('active');
    home.classList.remove('active');
    html.classList.remove('active');
    css.classList.remove('active');
    register.classList.remove('active');
})

register.addEventListener("click", () => {
    register.classList.add('active');
    home.classList.remove('active');
    html.classList.remove('active');
    css.classList.remove('active');
    js.classList.remove('active')
})

// main code
const url = "https://www.googleapis.com/youtube/v3/search?q=html+tutorial&type=video&key=AIzaSyCyqYw5QTRLbO7oEaWglWGZaOFKX2XtyTs&part=snippet,id&maxResults=9"
const cards = document.getElementById('home-cards');

let getVideos = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.items);

        data.items.forEach(element => {
            cards.append(displayItems(element));
        });


    } catch (error) {
        console.log(error);
    }

}

getVideos();

// Footer code
let currentDate = new Date();
let lastModified = new Date(document.lastModified);

let year = document.getElementById("currentyear");
year.textContent = `©${currentDate.getFullYear()} `;

let date = document.getElementById("lastModified");
date.textContent = `Last Modification: ${lastModified.getMonth() + 1} /${lastModified.getDate()}/${lastModified.getFullYear()} ${lastModified.getHours()}:${lastModified.getMinutes()}:${lastModified.getSeconds()} `