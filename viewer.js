async function fetchArticles() {
    try {
        const response = await fetch('https://gbn-api.pages.dev/articles.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const articles = await response.json();
        generateArticle(articles[0]); // Assuming you want to display the first article
    } catch (error) {
        console.error('Failed to fetch articles:', error);
    }
}

function generateArticle(data) {
    const article = document.getElementById('article');
    article.innerHTML = ''; // Clear previous content

    const title = document.createElement('h1');
    title.textContent = data.name;
    article.appendChild(title);

    const image = document.createElement('img');
    image.src = data.image;
    article.appendChild(image);

    const date = document.createElement('p');
    date.textContent = data.date;
    article.appendChild(date);

    const description = document.createElement('p');
    description.textContent = data.details.description;
    article.appendChild(description);

    data.details.content.forEach(item => {
        if (item.type === 'paragraph') {
            const paragraph = document.createElement('p');
            paragraph.textContent = item.text;
            article.appendChild(paragraph);
        } else if (item.type === 'header') {
            const header = document.createElement('h2');
            header.textContent = item.text;
            article.appendChild(header);
        } else if (item.type === 'subheader') {
            const subheader = document.createElement('h3');
            subheader.textContent = item.text;
            article.appendChild(subheader);
        }
    });
}

document.addEventListener('DOMContentLoaded', fetchArticles);
