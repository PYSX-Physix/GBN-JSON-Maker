async function fetchArticles() {
    try {
        const response = await fetch('https://gbn-api.pages.dev/articles.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const articles = await response.json();
        displayTitles(articles);
    } catch (error) {
        console.error('Failed to fetch articles:', error, 'Services may be offline');
    }
}

function displayTitles(articles) {
    const titlesDiv = document.getElementById('titles');
    articles.forEach((article, index) => {
        const titleElement = document.createElement('h2');
        titleElement.textContent = article.name;
        titleElement.style.cursor = 'pointer';
        titleElement.onclick = () => openModal(article);
        titlesDiv.appendChild(titleElement);
    });
}

function openModal(article) {
    const modal = document.getElementById('articleModal');
    const articleDiv = document.getElementById('article');
    articleDiv.innerHTML = ''; // Clear previous content

    const title = document.createElement('h1');
    title.textContent = article.name;
    articleDiv.appendChild(title);

    const image = document.createElement('img');
    image.src = article.image;
    articleDiv.appendChild(image);

    const date = document.createElement('p');
    date.textContent = article.date;
    articleDiv.appendChild(date);

    const description = document.createElement('p');
    description.textContent = article.details.description;
    articleDiv.appendChild(description);

    article.details.content.forEach(item => {
        if (item.type === 'paragraph') {
            const paragraph = document.createElement('p');
            paragraph.textContent = item.text;
            articleDiv.appendChild(paragraph);
        } else if (item.type === 'header') {
            const header = document.createElement('h2');
            header.textContent = item.text;
            articleDiv.appendChild(header);
        } else if (item.type === 'subheader') {
            const subheader = document.createElement('h3');
            subheader.textContent = item.text;
            articleDiv.appendChild(subheader);
        } else if (item.type === 'image') {
            const img = document.createElement('img');
            img.src = item.url;
            articleDiv.appendChild(img);
            if (item.caption) {
                const caption = document.createElement('p');
                caption.textContent = item.caption;
                articleDiv.appendChild(caption);
            }
        }
    });

    modal.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', fetchArticles);

const modal = document.getElementById('articleModal');
const span = document.getElementsByClassName('close')[0];

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
