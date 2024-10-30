const apiKey = 's5TRNMS1cLfxKFzbEeMiSicwrLGozXKw'; // Replace with your actual API key

// Function to fetch GIFs based on user search
function fetchGifs(query) {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=20&rating=g`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayGifs(data.data))
        .catch(error => console.error('Error fetching data:', error));
}

// Function to display GIFs on the page
function displayGifs(gifs) {
    const gifContainer = document.getElementById('gifContainer');
    gifContainer.innerHTML = ''; // Clear any existing GIFs

    gifs.forEach(gif => {
        const img = document.createElement('img');
        img.src = gif.images.fixed_height.url;
        gifContainer.appendChild(img);
    });
}

// Set up event listener for the search form
document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting traditionally
    const query = document.getElementById('searchInput').value;
    fetchGifs(query); // Call the function to fetch GIFs based on the query
});
