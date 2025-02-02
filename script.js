function updateTime() {
    const now = new Date();
    document.getElementById('utc-time').textContent = 'UTC Time: ' + now.toUTCString();
}
updateTime();
setInterval(updateTime, 60000);


// document.addEventListener("DOMContentLoaded", () => {
//     const navToggle = document.querySelector(".nav-toggle");
//     const navMenu = document.querySelector("nav ul");

//     navToggle.addEventListener("click", () => {
//         navMenu.classList.toggle("active");
//     });
// });

// Select the toggle button
const darkModeToggle = document.getElementById('darkModeToggle');

// Check if dark mode was previously enabled
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

// Toggle dark mode
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
console.log(darkModeToggle);

    // Save user preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.removeItem('darkMode');
    }
});

//nav
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('active');
});
