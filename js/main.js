// Select all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.btn', '.h5');
let itemCount = 0;

// Add a click event listener to each button
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        itemCount++; // Increment the item count
        updateCartCount(itemCount); // Update the cart count display
    });
});

// Function to update the cart count in the badge
function updateCartCount(count) {
    const countElement = document.querySelector('.item-count');
    countElement.textContent = count;
}




const users = JSON.parse(localStorage.getItem('users')) || {
    "admin": "admin123"
};

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (users[username] && users[username] === password) {
            alert(`Welcome, ${username}!`);
            window.location.href = 'address.html';
        } else {
            alert('Invalid username or password.');
        }
    });
});

function registerUser(username, password) {
    if (users[username]) {
        alert('User already exists!');
    } else {
        users[username] = password;
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful!');
    }
}
