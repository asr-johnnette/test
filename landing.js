document.addEventListener('DOMContentLoaded', function () {
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarMenu = document.getElementById('navbarMenu');

    navbarToggle.addEventListener('click', function () {
        navbarMenu.classList.toggle('active');
    });

    window.addEventListener('scroll', function () {
        if (navbarMenu.classList.contains('active')) {
            navbarMenu.classList.remove('active');
        }
    });
});
