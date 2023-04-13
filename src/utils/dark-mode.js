const darkMode = () => {
const themeToggleBtns = document.querySelectorAll('#theme-toggle');

// status

const theme = localStorage.getItem('theme');


// on mount

theme && document.body.classList.add(theme);

// Handlers

const handleThemeToggle = () => {
    document.body.classList.toggle('light-mode');
        if (document.body.classList.contains(light-mode)) {
        localStorage.setItem('theme', 'light-mode');
        } else {
            localStorage.removeItem('theme');
        }
}

themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        if (document.body.classList.contains(light-mode)) {
        localStorage.setItem('theme', 'light-mode');
        } else {
            localStorage.removeItem('theme');
        }
    });
});
};

export default darkMode;