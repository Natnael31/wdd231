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

directory.classList.add('active');
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
const gridCards = document.getElementById('grid');
const listCards = document.getElementById('list');
const weatherIcon = document.getElementById('weather-icon');
const weather_data = document.getElementById('weather-data');
const weather_forecast = document.getElementById('weather-forecast');

const url = "../chamber/data/memeber.json"
const weather_url = 'https://api.openweathermap.org/data/2.5/weather?&units=imperial&lat=9&lon=38.74&appid=4ed520167b53b456179e69213b3fee16';
const forcast_weather_url = 'https://api.openweathermap.org/data/2.5/forecast?&units=imperial&lat=9&lon=38.74&appid=4ed520167b53b456179e69213b3fee16';


async function getMemeberData() {
    const memebers = await fetch(url);
    const data = await memebers.json();
    console.log(data);
    displayMemebers(data);
}

getMemeberData();

// fetch weather
async function apiFetch() {
    try {
        const response = await fetch(weather_url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

async function apiForecastFetch() {
    try {
        const response = await fetch(forcast_weather_url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayForecastResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiForecastFetch();

// Display Weather data

function displayResults(data) {
    let currentTemp = document.createElement('li');
    let weather_description = document.createElement('li');
    currentTemp.innerHTML = `<strong>Current tempreature</strong>: ${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('width', 50);
    weather_description.innerHTML = `<strong>Weather-description</strong>: ${desc}`;
    weather_data.appendChild(weatherIcon);
    weather_data.appendChild(currentTemp);
    weather_data.appendChild(weather_description);
}

function displayForecastResults(data) {

    let weather_array = data.list;

    weather_array.forEach((data) => {
        let dayIndex = weather_array.indexOf(data);

        if (dayIndex == 2 || dayIndex == 10 || dayIndex == 18) {
            let temp = document.createElement('p');
            const dt_txt = data.dt_txt;
            const date = new Date(dt_txt);

            const options = { weekday: 'long' };
            const formattedDate = date.toLocaleDateString('en-US', options);

            temp.innerHTML = `<strong>${formattedDate}</strong>: ${data.main.temp}&deg;F`;
            weather_forecast.appendChild(temp);
        }

    });
}

// Display memebers

const displayMemebers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let card1 = document.createElement('section');
        let card2 = document.createElement('section');
        let card3 = document.createElement('section');
        let card4 = document.createElement('section');

        let businessName = document.createElement('h3');
        let industry = document.createElement('p');
        let logo = document.createElement('img');
        let address = document.createElement('ul');
        let email = document.createElement('li');
        let phone = document.createElement('li');
        let website = document.createElement('li');


        businessName.textContent = `${member.name}`;
        industry.textContent = `${member.industry}`
        email.innerHTML = `<strong>email</strong>: ${member.email}`;
        phone.innerHTML = `<strong>Phone</strong>: ${member.phone_number}`;
        website.innerHTML = `<strong>Url</strong>: ${member.website_url}`;
        logo.setAttribute('src', member.image_file);
        logo.setAttribute('alt', `logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '100');
        logo.setAttribute('height', '100');

        card.classList.add('card-container');
        card1.classList.add('card-1');
        card2.classList.add('card-2');
        card3.classList.add('card-3');
        card4.classList.add('card-4');


        card1.appendChild(businessName);
        card1.appendChild(industry)
        card2.appendChild(logo);
        address.appendChild(email);
        address.appendChild(phone);
        address.appendChild(website);
        card3.appendChild(address);

        card4.appendChild(card2);
        card4.appendChild(card3);

        card.appendChild(card1);
        card.appendChild(card4);
        cards.appendChild(card);
    });
}
cards.classList.add('grid');
listCards.addEventListener('click', () => {
    // alert('hello');
    cards.classList.add('list')
    cards.classList.remove('grid');
})

gridCards.addEventListener('click', () => {
    // alert('hello');
    cards.classList.add('grid')
    cards.classList.remove('list');
})


// Footer code
let currentDate = new Date();
let lastModified = new Date(document.lastModified);

let year = document.getElementById("currentyear");
year.textContent = `©${currentDate.getFullYear()}`;

let date = document.getElementById("lastModified");
date.textContent = `Last Modification : ${lastModified.getMonth() + 1}/${lastModified.getDate()}/${lastModified.getFullYear()} ${lastModified.getHours()}:${lastModified.getMinutes()}:${lastModified.getSeconds()}`