window.addEventListener("scroll",function () {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle("navbarScroll", window.scrollY >450)
})