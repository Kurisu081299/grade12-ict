// API URL for Customer Management
const customerApiEndpoint = 'http://localhost:5001/api/v1/customer';

// Fetch and display all customers (GET)
function getAllCustomers() {
    fetch(customerApiEndpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); // Parse the JSON response
        })
        .then(data => {
            // Check if we have customers in the response
            if (Array.isArray(data.data) && data.data.length > 0) {
                const customerListDiv = document.getElementById('customerList'); // Get the container

                // Loop through each customer in the data array
                customerListDiv.innerHTML = ''; // Clear the existing list before populating
                data.data.forEach(customer => {
                    const customerDiv = document.createElement('div');
                    customerDiv.classList.add('customer-item'); // Apply styling class

                    // Insert customer data into the div
                    customerDiv.innerHTML = `
                        <h3>${customer.name}</h3>
                        <p><strong>Customer ID:</strong> ${customer.customer_id}</p>
                        <button onclick="deleteCustomer(${customer.customer_id})" class="delete-button">Delete</button>
                    `;

                    // Append the customer item to the container
                    customerListDiv.appendChild(customerDiv);
                });
            } else {
                console.error('Error: No customer data found');
                document.getElementById('customerList').innerHTML = '<p>No customers available.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('customerList').innerHTML = '<p>Error loading customers.</p>';
        });
}

// Add a new customer (POST)
function addNewCustomer() {
    const name = document.getElementById('newCustomerName').value.trim();

    if (name) {
        const data = { name };

        fetch(customerApiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            getAllCustomers();  // Refresh the customer list
            document.getElementById('newCustomerName').value = ''; // Clear input
        })
        .catch(error => {
            console.error('Error adding customer:', error);
        });
    } else {
        alert('Please fill out the customer name.');
    }
}

// Update a customer (PUT) - Using TextBox to input Customer ID
function updateCustomer() {
    const customerID = document.getElementById('updateCustomerID').value.trim();
    const name = document.getElementById('updateCustomerName').value.trim();

    if (customerID && name) {
        const data = { customer_id: customerID, name };

        fetch(`${customerApiEndpoint}/${customerID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            getAllCustomers();  // Refresh the customer list
        })
        .catch(error => {
            console.error('Error updating customer:', error);
        });
    } else {
        alert('Please fill out all fields and provide a valid Customer ID.');
    }
}

// Delete a customer (DELETE) - Using TextBox to input Customer ID
function deleteCustomer() {
    const customerID = document.getElementById('deleteCustomerID').value.trim();

    if (customerID) {
        const data = { customer_id: customerID };

        fetch(`${customerApiEndpoint}/delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            getAllCustomers();  // Refresh the customer list
        })
        .catch(error => {
            console.error('Error deleting customer:', error);
        });
    } else {
        alert('Please provide a Customer ID to delete.');
    }
}

// Initialize data when the page loads
window.onload = function() {
    getAllCustomers();
};
