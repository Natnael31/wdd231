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
const url = window.location.href;
const results = document.getElementById('data');
// console.log(url);

const dataUrl = url.split('?');
// console.log(dataUrl);

formData = dataUrl[1];
console.log(formData);
// formData = dataUrl[1].split('&')

formDataArray = formData.split('&');
console.log(formDataArray);

formDataArray.forEach((data) => {
    dataValue = data.split('=');
    // console.log(dataValue);
    if (dataValue[0] !== 'organization-title' && dataValue[0] !== 'membership' && dataValue[0] !== 'organization-description') {
        if (dataValue[0] == 'email') {
            dataValue[1] = dataValue[1].replace("%40", "@")
        }
        if (dataValue[0] == 'phone-number') {
            dataValue[1] = dataValue[1].replace("%2B", "+")
        }
        if (dataValue[0] == 'time-stamp') {
            dataValue[0] = 'Time of Submission';
            dataValue[1] = dataValue[1].replace("%2F", "/");
            dataValue[1] = dataValue[1].replace("%2F", "/");
            dataValue[1] = dataValue[1].replace("%2C", ",");
            dataValue[1] = dataValue[1].replace("+", " ");
            dataValue[1] = dataValue[1].replace("%3A", ":");
            dataValue[1] = dataValue[1].replace("%3A", ":");
            dataValue[1] = dataValue[1].replace("+", " ");
        }
        const element = document.createElement('p');
        element.innerHTML = `<p><strong>${capitalize(dataValue[0])}:</strong> ${dataValue[1]}</p>`
        results.appendChild(element);
    }
});

// Capitalize each word
function capitalize(str) {
    return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Footer code
let currentDate = new Date();
let lastModified = new Date(document.lastModified);

let year = document.getElementById("currentyear");
year.textContent = `©${currentDate.getFullYear()}`;

let date = document.getElementById("lastModified");
date.textContent = `Last Modification : ${lastModified.getMonth() + 1}/${lastModified.getDate()}/${lastModified.getFullYear()} ${lastModified.getHours()}:${lastModified.getMinutes()}:${lastModified.getSeconds()}`