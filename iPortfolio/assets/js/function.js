// functions.js

// Function to toggle between light and dark themes
function toggleTheme() {
    // Get the current theme (light or dark) from the body element
    const currentTheme = document.body.getAttribute('data-theme');
  
    // Toggle the theme
    if (currentTheme === 'dark') {
      document.body.setAttribute('data-theme', 'light');  // Switch to light mode
    } else {
      document.body.setAttribute('data-theme', 'dark');  // Switch to dark mode
    }
  }
  