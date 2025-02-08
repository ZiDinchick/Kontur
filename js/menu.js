document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu_btn"); 
    const sideMenu = document.querySelector(".side-menu"); 
    const closeBtn = document.querySelector(".close-btn"); 

    menuBtn.addEventListener("click", function () {
        sideMenu.classList.add("show");
    });

    closeBtn.addEventListener("click", function () {
        sideMenu.classList.remove("show");
    });

    document.addEventListener("click", function (event) {
        if (!sideMenu.contains(event.target) && !menuBtn.contains(event.target)) {
            sideMenu.classList.remove("show");
        }
    });
});
