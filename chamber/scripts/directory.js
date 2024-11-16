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

home.classList.add('active');
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
const cards = document.getElementById('cards');
const url = "../chamber/data/memeber.json"

async function getMemeberData() {
    const memebers = await fetch(url);
    const data = await memebers.json();
    console.log(data);
    displayMemebers(data);
}

getMemeberData();

// Display memebers

const displayMemebers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let businessName = document.createElement('h2');
        let industry = document.createElement('p');
        let logo = document.createElement('img');
        let email = document.createElement('h3');
        let placeOfBirth = document.createElement('h3');


        businessName.textContent = `${member.name}`;
        industry.textContent = `${member.industry}`
        email.textContent = member.email;
        placeOfBirth.textContent = member.birthplace;
        logo.setAttribute('src', member.image_file);
        logo.setAttribute('alt', `logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '100');
        logo.setAttribute('height', '100');

        card.appendChild(businessName);
        card.appendChild(industry)
        card.appendChild(email);
        card.appendChild(placeOfBirth);
        card.appendChild(logo);

        cards.appendChild(card);
    });
}


// Footer code
let currentDate = new Date();
let lastModified = new Date(document.lastModified);

let year = document.getElementById("currentyear");
year.textContent = `©${currentDate.getFullYear()}`;

let date = document.getElementById("lastModified");
date.textContent = `Last Modification : ${lastModified.getMonth() + 1}/${lastModified.getDate()}/${lastModified.getFullYear()} ${lastModified.getHours()}:${lastModified.getMinutes()}:${lastModified.getSeconds()}`