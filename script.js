// Save data to localStorage
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

// Retrieve data from localStorage
function getFromLocalStorage(key) {
    return localStorage.getItem(key);
}

// Update click count
let clickCount = parseInt(getFromLocalStorage('clickCount')) || 0;
document.getElementById('clickCount').textContent = clickCount;

// Handle button click
document.getElementById('actionButton').addEventListener('click', function () {
    clickCount++;
    saveToLocalStorage('clickCount', clickCount);
    document.getElementById('clickCount').textContent = clickCount;

    // Trigger animation
    this.style.animation = 'bounce 1s';
    setTimeout(() => this.style.animation = '', 1000);
});

// Toggle theme
document.getElementById('themeToggle').addEventListener('click', function () {
    const body = document.body;
    const currentTheme = body.classList.contains('light-theme') ? 'light-theme' : 'dark-theme';
    const newTheme = currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';

    body.classList.remove(currentTheme);
    body.classList.add(newTheme);

    saveToLocalStorage('theme', newTheme);
});

// Apply saved theme on load
const savedTheme = getFromLocalStorage('theme');
if (savedTheme) {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(savedTheme);
}

// Show modal
document.getElementById('showModal').addEventListener('click', function () {
    document.getElementById('modal').classList.add('active');
});

// Close modal
document.getElementById('closeModal').addEventListener('click', function () {
    document.getElementById('modal').classList.remove('active');
});

// Handle form submission
document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    saveToLocalStorage('username', username);

    // Display greeting
    document.getElementById('greeting').textContent = `Hello, ${username}!`;
});

// Display saved username on load
const savedUsername = getFromLocalStorage('username');
if (savedUsername) {
    document.getElementById('greeting').textContent = `Hello, ${savedUsername}!`;
}