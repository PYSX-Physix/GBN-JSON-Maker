const articleData = {
    name: "Black Ops 6 Season 01 Patch Notes Nov 19",
    image: "https://gbn-api.pages.dev/images/BO6-SEASON-01-PATCH-NOTES.jpg",
    date: "November 19, 2024",
    details: {
        description: "First real article. This article is about everything new with the patch notes for Black Ops 6 on November 19, 2024.",
        content: []
    }
};

function addElement(type) {
    const article = document.getElementById('article');
    let element;

    if (type === 'paragraph') {
        element = document.createElement('textarea');
        element.placeholder = 'Enter paragraph text';
        element.className = 'paragraph';
    } else if (type === 'image') {
        element = document.createElement('input');
        element.type = 'text';
        element.placeholder = 'Enter image URL';
        element.className = 'image';
    } else if (type === 'header') {
        element = document.createElement('input');
        element.type = 'text';
        element.placeholder = 'Enter header text';
        element.className = 'header';
    } else if (type === 'subheader') {
        element = document.createElement('input');
        element.type = 'text';
        element.placeholder = 'Enter subheader text';
        element.className = 'subheader';
    }

    article.appendChild(element);
}

function generateJSON() {
    const article = document.getElementById('article');
    const elements = article.children;
    articleData.details.content = [];

    for (let element of elements) {
        if (element.className === 'paragraph') {
            articleData.details.content.push({ type: 'paragraph', text: element.value });
        } else if (element.className === 'image') {
            articleData.details.content.push({ type: 'image', url: element.value });
        } else if (element.className === 'header') {
            articleData.details.content.push({ type: 'header', text: element.value });
        } else if (element.className === 'subheader') {
            articleData.details.content.push({ type: 'subheader', text: element.value });
        }
    }

    const jsonOutput = document.getElementById('jsonOutput');
    jsonOutput.textContent = JSON.stringify(articleData, null, 2);
}

document.addEventListener('DOMContentLoaded', () => {
    const initialTitle = document.createElement('h1');
    initialTitle.textContent = articleData.name;
    document.getElementById('article').appendChild(initialTitle);

    const initialImage = document.createElement('img');
    initialImage.src = articleData.image;
    document.getElementById('article').appendChild(initialImage);

    const initialDate = document.createElement('p');
    initialDate.textContent = articleData.date;
    document.getElementById('article').appendChild(initialDate);

    const initialDescription = document.createElement('p');
    initialDescription.textContent = articleData.details.description;
    document.getElementById('article').appendChild(initialDescription);
});
