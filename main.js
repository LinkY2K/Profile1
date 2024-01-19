let nav = document.querySelector(".navbar")

window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled");
    }
    
}

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse");

navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        if (navCollapse.classList.contains("show")) {
            navCollapse.classList.remove("show");
        }
    });
});
