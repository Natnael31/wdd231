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

js.classList.add('active');
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

