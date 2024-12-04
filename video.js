function generateJSON() {
    const videoName = document.getElementById('videoName').value;
    const imageUrl = document.getElementById('imageUrl').value;
    const videoUrl = document.getElementById('videoUrl').value;
    const author = document.getElementById('author').value;

    if (!videoName || !imageUrl || !videoUrl || !author) {
        alert('Please fill out all required fields.');
        return;
    }

    const videoData = [
        {
            name: videoName,
            image: imageUrl,
            url: videoUrl,
            author: author
        }
    ];

    const jsonOutput = document.getElementById('jsonOutput');
    jsonOutput.textContent = JSON.stringify(videoData, null, 2);
}

