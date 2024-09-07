const themeToggleButton = document.getElementById('themeToggle') as HTMLButtonElement;
let isDarkTheme = false;

themeToggleButton.addEventListener('click', () => {
  const body = document.body;
  
  if (isDarkTheme) {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
  } else {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
  }
  
  isDarkTheme = !isDarkTheme;
});
