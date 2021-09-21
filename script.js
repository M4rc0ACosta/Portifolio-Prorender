var hamburger = document.querySelector(".hamburguer");

hamburguer.addEventListner("click", function() {
    document.querySelector(".sidebar").classList.toogle("show-menu");
});