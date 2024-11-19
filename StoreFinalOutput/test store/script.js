  // API endpoint URL
const apiEndpoint = 'http://localhost:5001/api/v1/products/all';

// Fetch data from the API
fetch(apiEndpoint)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); // Parse the JSON response
    })
    .then(data => {
        // Check if we have products in the response
        if (Array.isArray(data) && data.length > 0) {
            const dataDiv = document.getElementById('api-data'); // Get the container

            // Loop through each product in the data array
            data.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('product-item'); // Apply styling class

                // Insert product data into the div
                itemDiv.innerHTML = `
                    <h3>${item.name}</h3>
                    <p><strong>Price:</strong> $${item.price}</p>
                    <p><strong>Description:</strong> ${item.description}</p>
                    <p><strong>Stock:</strong> ${item.stock}</p>
                    <p><strong>Category:</strong> ${item.category}</p>
                `;

                // Append the product item to the container
                dataDiv.appendChild(itemDiv);
            });
        } else {
            console.error('Error: No product data found');
            document.getElementById('api-data').innerHTML = '<p>No products available.</p>';
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        document.getElementById('api-data').innerHTML = '<p>Error loading products.</p>';
    });

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // fetch('http://localhost:5001/api/v1/products/all') 
  //   .then(response => response.json()) 
  //   .then(data => {
  //     console.log('Fetched products:', data); 

      
  //     const apiDataContainer = document.getElementById('api-data');

    
  //     if (data && data.length > 0) {
        
  //       data.forEach(product => {
  //         const productItem = document.createElement('div'); 
  //         productItem.classList.add('product-item'); 

          
  //         productItem.innerHTML = `
  //           <h3>${product.name}</h3>
  //           <p>${product.description}</p>
  //           <p>Price: $${product.price}</p>
  //         `;

        
  //         apiDataContainer.appendChild(productItem);
  //       });
  //     } else {
  //       apiDataContainer.innerHTML = '<p>No products found</p>';
  //     }
  //   })
  //   .catch(error => {
      
  //     console.error('Error fetching data:', error);
  //   });