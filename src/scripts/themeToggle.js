var themeToggleButton = document.getElementById('themeToggle');
var isDarkTheme = false;
themeToggleButton.addEventListener('click', function () {
    var body = document.body;
    if (isDarkTheme) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    }
    else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    }
    isDarkTheme = !isDarkTheme;
});
