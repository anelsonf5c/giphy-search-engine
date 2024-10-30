document.getElementById('submit').addEventListener('click', async () => {
    const keyword = document.getElementById('search').value;
    const apiKey = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your actual Giphy API key
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        const gifContainer = document.getElementById('gif-container');
        gifContainer.innerHTML = ''; // Clear previous images

        data.data.forEach(gif => {
            const img = document.createElement('img');
            img.src = gif.images.fixed_height.url;
            gifContainer.appendChild(img);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        alert('Failed to load GIFs. Please try again.');
    }
});
