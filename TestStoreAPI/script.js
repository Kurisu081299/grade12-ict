// Replace with your actual API endpoint URL
const apiEndpoint = 'http://localhost:5000/api/products';

// Fetch data from the API
fetch(apiEndpoint)
    .then(response => response.json())
    .then(data => {
        // Find the div in the HTML
        const dataDiv = document.getElementById('api-data');

        // Loop through each item in the data
        data.forEach(item => {
            // Create a new HTML element for each item
            const itemDiv = document.createElement('div');
            itemDiv.innerHTML = `
                <h3>${item.name}</h3>
                <p>Price: $${item.price}</p>
            `;

            // Append the item to the main div
            dataDiv.appendChild(itemDiv);
        });
    })
    .catch(error => console.error('Error fetching data:', error));