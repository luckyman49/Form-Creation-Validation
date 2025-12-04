// 1) Define an async function to handle fetching and rendering
async function fetchUserData() {
  // 2) API endpoint we will call
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // 3) Get the container where we'll display data
  const dataContainer = document.getElementById('api-data');

  // 4) Try to fetch data; handle any errors gracefully
  try {
    // 4a) Make the network request and wait for the response
    const response = await fetch(apiUrl);

    // 4b) Optionally check for HTTP errors (non-200 status codes)
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    // 4c) Parse the response body as JSON
    const users = await response.json();

    // 5) Clear the loading message before adding new content
    dataContainer.innerHTML = '';

    // 6) Create a list element to hold all user names
    const userList = document.createElement('ul');

    // 7) Loop through users and create <li> items
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.name;
      userList.appendChild(li);
    });

    // 8) Append the filled list to the container
    dataContainer.appendChild(userList);

  } catch (error) {
    // 9) On any error, clear the container and show a friendly message
    dataContainer.innerHTML = '';
    dataContainer.textContent = 'Failed to load user data.';
    // (Optional) Log error to help debugging
    console.error('Fetch error:', error);
  }
}

// 10) Run fetchUserData after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
