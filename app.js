// File: js/app.js

document.addEventListener("DOMContentLoaded", () => {
    // Call the function to fetch user data and display it
    fetchUserData();
});

function fetchUserData() {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data;
            displayUsers(users);
        })
        .catch(error => {
            console.error("Error fetching user data:", error);
        });
}

function displayUsers(users) {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';  // Clear any previous data
    
    // Loop through the users and display them in a card format
    users.forEach(user => {
        const userCard = `
            <div class="col-md-4">
                <div class="card mb-4">
                    <div class="card-body">
                        <h5 class="card-title">${user.name}</h5>
                        <p class="card-text"><strong>Email:</strong> ${user.email}</p>
                        <p class="card-text"><strong>Address:</strong> ${user.address.city}</p>
                        <a href="#" class="btn btn-primary">View Profile</a>
                    </div>
                </div>
            </div>
        `;
        userList.innerHTML += userCard;
    });
}
