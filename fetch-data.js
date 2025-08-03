// Initialize the Async Function
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Select the Data Container Element
    const dataContainer = document.getElementById('api-data');
    
    // Fetch Data Using try-catch
    try {
        // Use await with fetch to get data from apiUrl
        const response = await fetch(apiUrl);
        
        // Convert the response to JSON
        const users = await response.json();
        
        // Clear the Loading Message
        dataContainer.innerHTML = '';
        
        // Create and Append User List
        const userList = document.createElement('ul');
        
        // Loop through the users array with forEach
        users.forEach(user => {
            // Create a li element
            const listItem = document.createElement('li');
            
            // Set the text content of the li to the user's name
            listItem.textContent = user.name;
            
            // Append the li to userList
            userList.appendChild(listItem);
        });
        
        // After the loop, append userList to dataContainer
        dataContainer.appendChild(userList);
        
    } catch (error) {
        // Error Handling
        // Clear the existing content of dataContainer
        dataContainer.innerHTML = '';
        
        // Set its text content to error message
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData); 