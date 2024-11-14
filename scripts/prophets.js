const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.getElementById('cards');

async function getProphetData() {
    // try {
    //     var response;
    //     fetch(url).then((res) => res.json()).then((data) => {
    //         response = data;
    //         console.log(response.prophets)
    //     })
    // } catch (error) {
    //     console.log(error)
    // }
    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.table(data.prophets);
        console.log(data.prophets)
        displayProphets(data.prophets)
    } catch (error) {
        console.error();
    }

}

getProphetData();

// Display prophets

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let birthDate = document.createElement('h3');
        let placeOfBirth = document.createElement('h3');


        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthDate.textContent = prophet.birthdate;
        placeOfBirth.textContent = prophet.birthplace;
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(placeOfBirth);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}
