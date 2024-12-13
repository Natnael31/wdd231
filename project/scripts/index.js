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

home.classList.add('active');
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

// Main code

// modal code

let displayDialog = () => {
    document.querySelectorAll(".clicked-modal").forEach(click => {
        click.addEventListener("click", (e) => {
            e.preventDefault();
            const clickedModal = e.target.getAttribute("href").substring(1);
            document.getElementById(clickedModal).showModal();
        });
    });
}

displayDialog();

let closeDialog = () => {
    document.querySelectorAll(".close-modal").forEach(modal => {
        modal.addEventListener("click", (e) => {
            e.target.closest("dialog").close();
        });
    });
}

closeDialog();

// Footer code
let currentDate = new Date();
let lastModified = new Date(document.lastModified);

let year = document.getElementById("currentyear");
year.textContent = `©${currentDate.getFullYear()} `;

let date = document.getElementById("lastModified");
date.textContent = `Last Modification: ${lastModified.getMonth() + 1} /${lastModified.getDate()}/${lastModified.getFullYear()} ${lastModified.getHours()}:${lastModified.getMinutes()}:${lastModified.getSeconds()} `