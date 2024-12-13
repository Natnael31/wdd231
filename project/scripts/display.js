export function displayItems(element) {

    let card = document.createElement('div');
    let title = document.createElement('h4');
    let description = document.createElement('small');
    let publishedAt = document.createElement('small');
    let link = document.createElement('p');

    title.textContent = element.snippet.title;
    description.innerHTML = `${element.snippet.description} <br/>`;
    publishedAt.textContent = element.snippet.publishedAt;
    link.classList.add('thumbnails');
    link.innerHTML = `<a href=https://www.youtube.com/watch?v=${element.id.videoId} target="_blank"}><img src=${element.snippet.thumbnails.high.url} loading="lazy" alt="thumbnail image"></a>`

    card.appendChild(title);
    card.appendChild(link);
    card.appendChild(description);
    card.appendChild(publishedAt);

    return card;
}