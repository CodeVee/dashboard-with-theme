/* jshint esversion: 6 */
document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('switch');

    checkbox.addEventListener('click', () => {
        const theme = document.querySelector('#theme');
        if (checkbox.checked) {
            theme.classList.replace('theme-dark', 'theme-light'); 
        } else {
            theme.classList.replace('theme-light', 'theme-dark');
        }
    });
});