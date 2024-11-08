// header code

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
home.classList.add('active');
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



// Main code

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

const course_headers = document.getElementById('course_headers');
const course_types = document.getElementById('courses');
const course_work = document.getElementById('course_work');
const all = document.createElement('button');
const cse = document.createElement('button');
const wdd = document.createElement('button');
var credit_hours = 0;

all.textContent = 'All';
cse.textContent = 'CSE';
wdd.textContent = 'WDD';
course_headers.append(all, cse, wdd);


all.addEventListener("click", () => {
    let tempCard = document.querySelectorAll('.temp');
    tempCard.forEach(element => {
        element.remove();
    });
    courses.forEach((course) => {
        const courseButton = document.createElement('button');
        if (course.completed != true) {
            courseButton.classList.add("required");
        }
        courseButton.textContent = `${course.subject} ${course.number}`;
        courseButton.classList.add('temp');
        course_types.append(courseButton);
    })

    credit_hours = courses.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.credits);
    }, 0);

    const credit_hour_heading = document.createElement('h3');
    credit_hour_heading.textContent = `Total credit hours for all courses are : ${credit_hours}`;
    course_work.append(credit_hour_heading);
    credit_hour_heading.classList.add('temp');
})


cse.addEventListener("click", () => {
    let tempCard = document.querySelectorAll('.temp');
    tempCard.forEach(element => {
        element.remove();
    });
    const new_courses = courses.filter(course => course.subject == "CSE");
    new_courses.forEach((course) => {
        const courseButton = document.createElement('button');
        if (course.completed != true) {
            courseButton.classList.add("required");
        }
        courseButton.textContent = `${course.subject} ${course.number}`;
        courseButton.classList.add('temp');
        course_types.append(courseButton);
    })

    credit_hours = new_courses.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.credits);
    }, 0);

    const credit_hour_heading = document.createElement('h3');
    credit_hour_heading.textContent = `Total credit hours for CSE courses are : ${credit_hours}`;
    course_work.append(credit_hour_heading);
    credit_hour_heading.classList.add('temp');
})


wdd.addEventListener("click", () => {
    let tempCard = document.querySelectorAll('.temp');
    tempCard.forEach(element => {
        element.remove();
    });
    const new_courses = courses.filter(course => course.subject == "WDD");
    new_courses.forEach((course) => {
        const courseButton = document.createElement('button');
        if (course.completed != true) {
            courseButton.classList.add("required");
        }
        courseButton.textContent = `${course.subject} ${course.number}`;
        courseButton.classList.add('temp');
        course_types.append(courseButton);
    })

    credit_hours = new_courses.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.credits);
    }, 0);

    const credit_hour_heading = document.createElement('h3');
    credit_hour_heading.textContent = `Total credit hours for WDD courses are : ${credit_hours}`;
    course_work.append(credit_hour_heading);
    credit_hour_heading.classList.add('temp');
})



// Footer code
let currentDate = new Date();
let lastModified = new Date(document.lastModified);

let year = document.getElementById("currentyear");
year.textContent = `©${currentDate.getFullYear()}`;

let date = document.getElementById("lastModified");
date.textContent = `Last Modification : ${lastModified.getMonth() + 1}/${lastModified.getDate()}/${lastModified.getFullYear()} ${lastModified.getHours()}:${lastModified.getMinutes()}:${lastModified.getSeconds()}`